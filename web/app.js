/**
 * Mushikui Studio - Web Application Controller
 * Handles filtering, card toggling, and interactive problem solving.
 */

let currentOpFilter = 'all';
let currentHintFilter = 'all';
let currentDiffFilter = 'all';
let currentBaseFilter = 'all';
let activePlayerPuzzle = null;

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  if (typeof PUZZLES_DATA !== 'undefined' && PUZZLES_DATA.length > 0) {
    renderCatalog();
    initPlayerList();
    loadPlayerPuzzle(PUZZLES_DATA[0].id);
  } else {
    console.error("PUZZLES_DATA not loaded!");
  }
});

// Tab Navigation
function switchTab(tabName) {
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));

  const btn = document.getElementById('tab-' + tabName);
  const view = document.getElementById('view-' + tabName);
  if (btn) btn.classList.add('active');
  if (view) view.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Filter setters
function setOpFilter(op, el) {
  document.querySelectorAll('#filter-op .f-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  currentOpFilter = op;
  renderCatalog();
}

function setHintFilter(hints, el) {
  document.querySelectorAll('#filter-hints .f-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  currentHintFilter = hints;
  renderCatalog();
}

function setDiffFilter(diff, el) {
  document.querySelectorAll('#filter-diff .f-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  currentDiffFilter = diff;
  renderCatalog();
}

function setBaseFilter(base, el) {
  document.querySelectorAll('#filter-base .f-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  currentBaseFilter = base;
  renderCatalog();
}

// Render Catalog Cards
function renderCatalog() {
  const container = document.getElementById('catalog-container');
  if (!container) return;

  const filtered = PUZZLES_DATA.filter(p => {
    // Op filter
    if (currentOpFilter !== 'all' && p.operation !== currentOpFilter) return false;
    // Base filter
    const radixStr = (p.radix || 10).toString();
    if (currentBaseFilter !== 'all' && radixStr !== currentBaseFilter) return false;
    // Hint filter
    if (currentHintFilter === '0' && p.hint_count !== 0) return false;
    if (currentHintFilter === '1' && p.hint_count !== 1) return false;
    if (currentHintFilter === '2' && p.hint_count !== 2) return false;
    // Diff filter
    if (currentDiffFilter !== 'all') {
      const stars = (p.difficulty.match(/★/g) || []).length;
      if (stars.toString() !== currentDiffFilter) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
        条件に一致する問題が見つかりませんでした。絞り込み条件を変更してください。
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(p => createPuzzleCardHTML(p)).join('');
}

function createPuzzleCardHTML(p) {
  const probText = p.problem_rows.map(r => r.content).join('\n');
  const solText = p.solution_rows.map(r => r.content).join('\n');

  const opClass = 'op-' + p.operation;
  const opName = {
    division: '割算',
    multiplication: '掛算',
    addition: '足算',
    subtraction: '引算'
  }[p.operation] || p.operation;

  const baseBadge = (p.radix && p.radix !== 10) 
    ? `<span class="base-tag base-tag-${p.radix}">${p.radix}進法</span>`
    : '';

  const stepsHTML = p.deduction_steps.map(s => `
    <div class="step-card">
      <span class="step-num">Step ${s.step_num}</span>
      <strong>${s.title}</strong> (${s.target_part}): ${s.deduction}
      <div class="step-res">➜ 確定: <code>${s.revealed_value}</code></div>
      ${s.explanation ? `<div class="step-expl">${s.explanation}</div>` : ''}
    </div>
  `).join('');

  return `
    <div class="p-card" id="card-${p.id}">
      <div>
        <div class="p-card-header">
          <div class="p-card-id-block">
            <span class="badge-id">${p.id}</span>
            <span class="op-tag ${opClass}">${opName}</span>
            ${baseBadge}
            <span class="diff-tag">${p.difficulty}</span>
          </div>
          <span class="hint-tag">初期ヒント: ${p.hint_count}個</span>
        </div>

        <h3 class="p-title">${p.title}</h3>
        <p class="p-summary">${p.summary || ''}</p>

        <div class="boards-row">
          <div class="board-wrapper">
            <div class="b-label">【問題の筆算盤面】</div>
            <pre class="board-box">${probText}</pre>
          </div>
          <div class="board-wrapper solution-board-col" id="sol-col-${p.id}" style="display: none;">
            <div class="b-label sol">【正解の筆算】</div>
            <pre class="board-box sol">${solText}</pre>
          </div>
        </div>

        <div class="deduction-drawer" id="hints-${p.id}" style="display: none;">
          <h4>《論理的解法ステップ》</h4>
          ${stepsHTML}
          <div class="verified-stamp">✅ Z3 SMT 数学的一意性証明済み</div>
        </div>
      </div>

      <div class="card-btns">
        <button class="btn btn-primary" id="btn-sol-${p.id}" onclick="toggleCatalogSol('${p.id}')">
          💡 解答を表示
        </button>
        <button class="btn btn-secondary" id="btn-hint-${p.id}" onclick="toggleCatalogHints('${p.id}')">
          🔍 ヒントを展開
        </button>
        <button class="btn btn-play" onclick="openInPlayer('${p.id}')">
          ✏️ この問題に挑戦
        </button>
      </div>
    </div>
  `;
}

function toggleCatalogSol(id) {
  const col = document.getElementById('sol-col-' + id);
  const btn = document.getElementById('btn-sol-' + id);
  if (!col || !btn) return;

  if (col.style.display === 'none') {
    col.style.display = 'block';
    btn.innerText = '🙈 解答を隠す';
    btn.style.background = '#059669';
  } else {
    col.style.display = 'none';
    btn.innerText = '💡 解答を表示';
    btn.style.background = '';
  }
}

function toggleCatalogHints(id) {
  const drawer = document.getElementById('hints-' + id);
  const btn = document.getElementById('btn-hint-' + id);
  if (!drawer || !btn) return;

  if (drawer.style.display === 'none') {
    drawer.style.display = 'block';
    btn.innerText = '🔼 ヒントを閉じる';
  } else {
    drawer.style.display = 'none';
    btn.innerText = '🔍 ヒントを展開';
  }
}

function openInPlayer(id) {
  switchTab('player');
  loadPlayerPuzzle(id);
}

// ==========================================================================
// Interactive Player Logic
// ==========================================================================
function initPlayerList() {
  const listContainer = document.getElementById('player-puzzle-list');
  if (!listContainer) return;

  listContainer.innerHTML = PUZZLES_DATA.map(p => {
    const baseStr = (p.radix && p.radix !== 10) ? ` • ${p.radix}進法` : '';
    return `
      <div class="p-select-item" id="item-${p.id}" onclick="loadPlayerPuzzle('${p.id}')">
        <div class="s-id">${p.id}</div>
        <div class="s-title">${p.title}</div>
        <div class="s-meta">${p.difficulty} • ヒント${p.hint_count}個${baseStr}</div>
      </div>
    `;
  }).join('');
}

function loadPlayerPuzzle(id) {
  const p = PUZZLES_DATA.find(x => x.id === id);
  if (!p) return;

  activePlayerPuzzle = p;

  // Highlight active in sidebar
  document.querySelectorAll('.p-select-item').forEach(el => el.classList.remove('selected'));
  const activeEl = document.getElementById('item-' + id);
  if (activeEl) activeEl.classList.add('selected');

  // Update header info
  document.getElementById('player-p-id').innerText = p.id;
  document.getElementById('player-p-title').innerText = p.title;
  document.getElementById('player-p-desc').innerText = p.summary || '';
  document.getElementById('player-p-diff').innerText = p.difficulty;
  document.getElementById('player-p-hints').innerText = `初期ヒント: ${p.hint_count}個`;

  const opTag = document.getElementById('player-p-op');
  opTag.innerText = {
    division: '割算',
    multiplication: '掛算',
    addition: '足算',
    subtraction: '引算'
  }[p.operation] || p.operation;
  opTag.className = 'op-tag op-' + p.operation;

  const baseTag = document.getElementById('player-p-base');
  if (baseTag) {
    if (p.radix && p.radix !== 10) {
      baseTag.style.display = 'inline-block';
      baseTag.innerText = `${p.radix}進法`;
      baseTag.className = 'base-tag base-tag-' + p.radix;
    } else {
      baseTag.style.display = 'none';
    }
  }

  // Reset feedback & hints
  hidePlayerFeedback();
  document.getElementById('player-hint-box').style.display = 'none';

  // Build interactive grid
  buildInteractiveGrid(p);
}

function buildInteractiveGrid(p) {
  const gridContainer = document.getElementById('interactive-grid');
  if (!gridContainer) return;

  gridContainer.innerHTML = '';

  const probRows = p.problem_rows;
  const solRows = p.solution_rows;

  let inputIndex = 0;

  for (let r = 0; r < probRows.length; r++) {
    const rowEl = document.createElement('div');
    rowEl.className = 'grid-row';

    const pLine = probRows[r].content;
    const sLine = (r < solRows.length) ? solRows[r].content : '';

    const maxLen = Math.max(pLine.length, sLine.length);

    for (let c = 0; c < maxLen; c++) {
      const pChar = c < pLine.length ? pLine[c] : ' ';
      const sChar = c < sLine.length ? sLine[c] : ' ';

      const cell = document.createElement('div');
      cell.className = 'cell';

      if (pChar === '□') {
        // Editable Input Box!
        const input = document.createElement('input');
        input.type = 'text';
        input.maxLength = 1;
        input.className = 'mushikui-input';
        input.dataset.answer = sChar.trim().toUpperCase();
        input.dataset.index = inputIndex++;

        const radix = p.radix || 10;
        const validChars = "0123456789ABCDEF".slice(0, radix);

        input.addEventListener('input', (e) => {
          let val = e.target.value.toUpperCase();
          if (val && !validChars.includes(val)) {
            e.target.value = '';
            return;
          }
          e.target.value = val;
          e.target.classList.remove('correct', 'incorrect');
          if (val.length === 1) {
            // Auto focus next input
            focusNextInput(parseInt(input.dataset.index) + 1);
          }
        });

        input.addEventListener('keydown', (e) => {
          if (e.key === 'Backspace' && !input.value) {
            focusNextInput(parseInt(input.dataset.index) - 1);
          } else if (e.key === 'ArrowRight') {
            focusNextInput(parseInt(input.dataset.index) + 1);
          } else if (e.key === 'ArrowLeft') {
            focusNextInput(parseInt(input.dataset.index) - 1);
          }
        });

        cell.appendChild(input);
      } else if (pChar === ' ') {
        cell.classList.add('space');
      } else if (['─', '―', '—'].includes(pChar)) {
        cell.classList.add('line-char');
        cell.textContent = '─';
      } else if (['┌', '│', ')'].includes(pChar)) {
        cell.classList.add('static-char');
        cell.textContent = pChar;
      } else if (/[0-9A-Fa-f]/.test(pChar)) {
        // Clue digit!
        cell.classList.add('clue-digit');
        cell.textContent = pChar;
      } else {
        cell.classList.add('static-char');
        cell.textContent = pChar;
      }

      rowEl.appendChild(cell);
    }

    gridContainer.appendChild(rowEl);
  }
}

function focusNextInput(idx) {
  const next = document.querySelector(`.mushikui-input[data-index="${idx}"]`);
  if (next) {
    next.focus();
    next.select();
  }
}

function checkPlayerSolution() {
  const inputs = document.querySelectorAll('.mushikui-input');
  if (inputs.length === 0) return;

  let allFilled = true;
  let correctCount = 0;
  let wrongCount = 0;

  inputs.forEach(input => {
    const val = input.value.trim().toUpperCase();
    const ans = (input.dataset.answer || '').toUpperCase();

    if (!val) {
      allFilled = false;
      input.classList.remove('correct', 'incorrect');
    } else if (val === ans) {
      input.classList.add('correct');
      input.classList.remove('incorrect');
      correctCount++;
    } else {
      input.classList.add('incorrect');
      input.classList.remove('correct');
      wrongCount++;
    }
  });

  const fb = document.getElementById('player-feedback');
  fb.style.display = 'block';

  if (!allFilled) {
    fb.className = 'feedback-box error';
    fb.innerHTML = `⚠️ まだ空欄のマスがあります。（正解: ${correctCount}マス / 不正解: ${wrongCount}マス）`;
  } else if (wrongCount === 0) {
    fb.className = 'feedback-box success';
    fb.innerHTML = `🎉 <strong>大正解！完全制覇です！</strong> すべての空欄が数学的に正確に入力されました！`;
  } else {
    fb.className = 'feedback-box error';
    fb.innerHTML = `❌ <strong>惜しい！</strong> ${wrongCount} 箇所のマスに誤りがあります。赤いマスを見直してみてください。`;
  }
}

function revealPlayerHint() {
  if (!activePlayerPuzzle) return;

  const hintBox = document.getElementById('player-hint-box');
  if (!hintBox) return;

  if (hintBox.style.display === 'block') {
    hintBox.style.display = 'none';
    return;
  }

  const steps = activePlayerPuzzle.deduction_steps || [];
  if (steps.length === 0) {
    hintBox.innerHTML = '<p>この問題のヒントは筆算の段の桁数に注目することです。</p>';
  } else {
    hintBox.innerHTML = `
      <h4>💡 解法の糸口・論理的ヒント</h4>
      <div style="margin-top: 8px;">
        ${steps.map(s => `
          <div style="margin-bottom: 8px;">
            <strong>Step ${s.step_num}: ${s.title}</strong> (${s.target_part})<br>
            ➜ ${s.deduction}
          </div>
        `).join('')}
      </div>
    `;
  }
  hintBox.style.display = 'block';
}

function revealPlayerSolution() {
  const inputs = document.querySelectorAll('.mushikui-input');
  inputs.forEach(input => {
    input.value = input.dataset.answer;
    input.classList.add('correct');
    input.classList.remove('incorrect');
  });

  const fb = document.getElementById('player-feedback');
  fb.className = 'feedback-box success';
  fb.style.display = 'block';
  fb.innerHTML = `💡 正解の数字をすべて盤面に反映しました！`;
}

function clearPlayerInputs() {
  const inputs = document.querySelectorAll('.mushikui-input');
  inputs.forEach(input => {
    input.value = '';
    input.classList.remove('correct', 'incorrect');
  });
  hidePlayerFeedback();
}

function hidePlayerFeedback() {
  const fb = document.getElementById('player-feedback');
  if (fb) fb.style.display = 'none';
}
