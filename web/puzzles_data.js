const PUZZLES_DATA = [
  {
    "id": "DIV-001",
    "title": "E・F・オドリングの不朽の名作『孤独の7』",
    "operation": "division",
    "difficulty": "★★★★★ 伝説級",
    "hint_count": 1,
    "summary": "1922年に発表された数学パズル史上の最高傑作。提示された数字は商の「7」ただ1つのみで、全32個の空欄が純粋な論理で一意に確定します。",
    "radix": 10,
    "problem_rows": [
      {
        "label": "quotient",
        "content": "               □ 7 □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_top",
        "content": "      ┌─────────────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "dividend",
        "content": "□ □ □ │ □ □ □ □ □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_0",
        "content": "         □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_0",
        "content": "        ─────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_1",
        "content": "             □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "             □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_1",
        "content": "            ───────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_2",
        "content": "             □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_2",
        "content": "               □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_2",
        "content": "              ───────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_3",
        "content": "                 □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_3",
        "content": "                 □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_3",
        "content": "                ─────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "remainder",
        "content": "                       0",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "solution_rows": [
      {
        "label": "quotient",
        "content": "               9 7 8 0 9",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_top",
        "content": "      ┌─────────────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "dividend",
        "content": "1 2 4 │ 1 2 1 2 8 3 1 6",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_0",
        "content": "         1 1 1 6",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_0",
        "content": "        ─────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_1",
        "content": "             9 6 8",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "             8 6 8",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_1",
        "content": "            ───────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_2",
        "content": "             1 0 0 3",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_2",
        "content": "               9 9 2",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_2",
        "content": "              ───────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_3",
        "content": "                 1 1 1 6",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_3",
        "content": "                 1 1 1 6",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_3",
        "content": "                ─────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "remainder",
        "content": "                       0",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "deduction_steps": [
      {
        "step_num": 1,
        "title": "二重桁下げによる商の0の確定",
        "target_part": "商の十の位",
        "deduction": "第4回目の引き算において、上から一度に2桁下りてきている（11では割れず1116で割っている）。",
        "revealed_value": "商の十位 = 0",
        "explanation": "通常の筆算では1桁ずつ下ろしますが、割れない場合は商に0を立てて次の桁を下ろすため、十位は0しかあり得ません。"
      },
      {
        "step_num": 2,
        "title": "商の7と部分積の桁数による除数の絞り込み",
        "target_part": "除数の百の位・商の万位と一位",
        "deduction": "除数(3桁)×7が3桁である一方、商の万位と一位による積は4桁になっている。",
        "revealed_value": "除数の百位 = 1、商の万位・一位 ∈ {8, 9}",
        "explanation": "もし除数の百位が2以上なら 200×7=1400 (4桁) となり矛盾。よって除数は1□□。また7倍で3桁なのに万位・一位で4桁になるため、万位・一位は8または9です。"
      },
      {
        "step_num": 3,
        "title": "引き算の残り桁数からの除数・商の確定",
        "target_part": "除数全体および商全体",
        "deduction": "4桁から3桁を引いた残りが2桁下がり、商の百位の積(3桁)との整合性を検証する。",
        "revealed_value": "除数 = 124, 商 = 97809, 被除数 = 12,128,316",
        "explanation": "124×8=992 (3桁), 124×9=1116 (4桁), 124×7=868 (3桁) となり、すべての段の桁数・引き算条件が完全に合致します。"
      }
    ],
    "operands": {
      "d": 124,
      "q": 97809,
      "D": 12128316,
      "d_str": "124",
      "q_str": "97809",
      "D_str": "12128316"
    },
    "uniqueness_verified": true,
    "metadata": {
      "d_len": 3,
      "q_len": 5,
      "D_len": 8,
      "steps_info": [
        {
          "q_idx": 0,
          "bring_down_count": 4,
          "sub_dividend_len": 4,
          "product_len": 4,
          "is_last": false
        },
        {
          "q_idx": 1,
          "bring_down_count": 1,
          "sub_dividend_len": 3,
          "product_len": 3,
          "is_last": false
        },
        {
          "q_idx": 2,
          "bring_down_count": 1,
          "sub_dividend_len": 4,
          "product_len": 3,
          "is_last": false
        },
        {
          "q_idx": 4,
          "bring_down_count": 2,
          "sub_dividend_len": 4,
          "product_len": 4,
          "is_last": true
        }
      ],
      "clues": {
        "q": {
          "1": 7
        }
      },
      "source": "E. F. Odling (Strand Magazine, 1922); 佐野昌一『虫喰ひ算大會』例題七",
      "radix": 10
    }
  },
  {
    "id": "DIV-002",
    "title": "孤独の7・第二章「千位の孤独」",
    "operation": "division",
    "difficulty": "★★★★☆ 上級",
    "hint_count": 1,
    "summary": "商の先頭（千の位）に「7」だけが残された割り算。4桁商（7□0□）の構造から除数124が一意に特定されます。",
    "radix": 10,
    "problem_rows": [
      {
        "label": "quotient",
        "content": "             7 □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_top",
        "content": "      ┌─────────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "dividend",
        "content": "□ □ □ │ □ □ □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_0",
        "content": "         □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_0",
        "content": "        ───────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_1",
        "content": "         □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "           □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_1",
        "content": "          ───────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_2",
        "content": "             □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_2",
        "content": "             □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_2",
        "content": "            ─────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "remainder",
        "content": "                   0",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "solution_rows": [
      {
        "label": "quotient",
        "content": "             7 8 0 9",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_top",
        "content": "      ┌─────────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "dividend",
        "content": "1 2 4 │ 9 6 8 3 1 6",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_0",
        "content": "         8 6 8",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_0",
        "content": "        ───────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_1",
        "content": "         1 0 0 3",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "           9 9 2",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_1",
        "content": "          ───────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_2",
        "content": "             1 1 1 6",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_2",
        "content": "             1 1 1 6",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_2",
        "content": "            ─────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "remainder",
        "content": "                   0",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "deduction_steps": [
      {
        "step_num": 1,
        "title": "先頭積の桁数",
        "target_part": "除数の範囲",
        "deduction": "除数(3桁)×7が3桁(□□□)であるため、除数は 100〜142 に限定される。",
        "revealed_value": "除数 ∈ [100, 142]",
        "explanation": "143×7 = 1001 (4桁) となるため、3桁に収まる上限は142です。"
      },
      {
        "step_num": 2,
        "title": "二段目の4桁積と二重桁下げ",
        "target_part": "商の百の位・十の位",
        "deduction": "商の百位×除数は3桁だが、末尾の一の位×除数は4桁。途中に二重桁下げがあるため十位は0。",
        "revealed_value": "商 = 7809, 除数 = 124",
        "explanation": "商の十位が0で一の位が9となり、968,316 ÷ 124 = 7809 が唯一の解となります。"
      }
    ],
    "operands": {
      "d": 124,
      "q": 7809,
      "D": 968316,
      "d_str": "124",
      "q_str": "7809",
      "D_str": "968316"
    },
    "uniqueness_verified": true,
    "metadata": {
      "d_len": 3,
      "q_len": 4,
      "D_len": 6,
      "steps_info": [
        {
          "q_idx": 0,
          "bring_down_count": 3,
          "sub_dividend_len": 3,
          "product_len": 3,
          "is_last": false
        },
        {
          "q_idx": 1,
          "bring_down_count": 1,
          "sub_dividend_len": 4,
          "product_len": 3,
          "is_last": false
        },
        {
          "q_idx": 3,
          "bring_down_count": 2,
          "sub_dividend_len": 4,
          "product_len": 4,
          "is_last": true
        }
      ],
      "clues": {
        "q": {
          "0": 7
        }
      },
      "source": "オリジナル生成 (MUSHIKUI ENGINE)",
      "radix": 10
    }
  },
  {
    "id": "DIV-003",
    "title": "孤独の7・第三章「十位の孤独」",
    "operation": "division",
    "difficulty": "★★★★☆ 上級",
    "hint_count": 1,
    "summary": "商が4桁（□07□）で、十の位にのみ「7」が置かれた割り算。7倍した積の桁数と末尾の4桁積の連携が鍵です。",
    "radix": 10,
    "problem_rows": [
      {
        "label": "quotient",
        "content": "               □ □ 7 □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_top",
        "content": "      ┌───────────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "dividend",
        "content": "□ □ □ │ □ □ □ □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_0",
        "content": "           □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_0",
        "content": "          ───────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_1",
        "content": "               □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "               □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_1",
        "content": "              ───────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_2",
        "content": "               □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_2",
        "content": "               □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_2",
        "content": "              ─────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "remainder",
        "content": "                     0",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "solution_rows": [
      {
        "label": "quotient",
        "content": "               8 0 7 9",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_top",
        "content": "      ┌───────────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "dividend",
        "content": "1 2 4 │ 1 0 0 1 7 9 6",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_0",
        "content": "           9 9 2",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_0",
        "content": "          ───────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_1",
        "content": "               9 7 9",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "               8 6 8",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_1",
        "content": "              ───────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_2",
        "content": "               1 1 1 6",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_2",
        "content": "               1 1 1 6",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_2",
        "content": "              ─────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "remainder",
        "content": "                     0",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "deduction_steps": [
      {
        "step_num": 1,
        "title": "商の十位の7と二重桁下げ",
        "target_part": "百の位の0と除数",
        "deduction": "最初の引き算後に2桁下りているため百位は0。十位の7による積は3桁(□□□)。",
        "revealed_value": "商 = 8079, 除数 = 124",
        "explanation": "1001796 ÷ 124 = 8079。7倍で868、末尾の9倍で1116となり、すべての段の桁数が合致。"
      }
    ],
    "operands": {
      "d": 124,
      "q": 8079,
      "D": 1001796,
      "d_str": "124",
      "q_str": "8079",
      "D_str": "1001796"
    },
    "uniqueness_verified": true,
    "metadata": {
      "d_len": 3,
      "q_len": 4,
      "D_len": 7,
      "steps_info": [
        {
          "q_idx": 0,
          "bring_down_count": 4,
          "sub_dividend_len": 4,
          "product_len": 3,
          "is_last": false
        },
        {
          "q_idx": 2,
          "bring_down_count": 2,
          "sub_dividend_len": 3,
          "product_len": 3,
          "is_last": false
        },
        {
          "q_idx": 3,
          "bring_down_count": 1,
          "sub_dividend_len": 4,
          "product_len": 4,
          "is_last": true
        }
      ],
      "clues": {
        "q": {
          "2": 7
        }
      },
      "source": "オリジナル生成 (MUSHIKUI ENGINE)",
      "radix": 10
    }
  },
  {
    "id": "DIV-004",
    "title": "孤独の8・割り算篇「千位の8」",
    "operation": "division",
    "difficulty": "★★★★☆ 上級",
    "hint_count": 1,
    "summary": "商の千の位に「8」が1つだけ書かれた割り算。8倍で3桁、末尾の9倍で4桁という極小マージンを突きます。",
    "radix": 10,
    "problem_rows": [
      {
        "label": "quotient",
        "content": "               8 □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_top",
        "content": "      ┌───────────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "dividend",
        "content": "□ □ □ │ □ □ □ □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_0",
        "content": "           □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_0",
        "content": "          ───────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_1",
        "content": "           □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "             □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_1",
        "content": "            ───────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_2",
        "content": "               □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_2",
        "content": "               □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_2",
        "content": "              ─────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "remainder",
        "content": "                     0",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "solution_rows": [
      {
        "label": "quotient",
        "content": "               8 8 0 9",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_top",
        "content": "      ┌───────────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "dividend",
        "content": "1 2 4 │ 1 0 9 2 3 1 6",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_0",
        "content": "           9 9 2",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_0",
        "content": "          ───────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_1",
        "content": "           1 0 0 3",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "             9 9 2",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_1",
        "content": "            ───────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_2",
        "content": "               1 1 1 6",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_2",
        "content": "               1 1 1 6",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_2",
        "content": "              ─────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "remainder",
        "content": "                     0",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "deduction_steps": [
      {
        "step_num": 1,
        "title": "8倍して3桁になる除数の範囲",
        "target_part": "除数の上限",
        "deduction": "除数(3桁)×8が3桁(□□□)なので、除数は最大でも 124。",
        "revealed_value": "除数 ≤ 124 (125×8=1000)",
        "explanation": "125×8=1000で4桁になるため、除数は124以下でなければなりません。"
      },
      {
        "step_num": 2,
        "title": "末尾の一の位による4桁積",
        "target_part": "除数の下限と一意確定",
        "deduction": "末尾の商×除数は4桁(1000以上)。124×9=1116のみが成立可能。",
        "revealed_value": "除数 = 124, 商 = 8809",
        "explanation": "被除数は 1,092,316 と一意に決まります。"
      }
    ],
    "operands": {
      "d": 124,
      "q": 8809,
      "D": 1092316,
      "d_str": "124",
      "q_str": "8809",
      "D_str": "1092316"
    },
    "uniqueness_verified": true,
    "metadata": {
      "d_len": 3,
      "q_len": 4,
      "D_len": 7,
      "steps_info": [
        {
          "q_idx": 0,
          "bring_down_count": 4,
          "sub_dividend_len": 4,
          "product_len": 3,
          "is_last": false
        },
        {
          "q_idx": 1,
          "bring_down_count": 1,
          "sub_dividend_len": 4,
          "product_len": 3,
          "is_last": false
        },
        {
          "q_idx": 3,
          "bring_down_count": 2,
          "sub_dividend_len": 4,
          "product_len": 4,
          "is_last": true
        }
      ],
      "clues": {
        "q": {
          "0": 8
        }
      },
      "source": "オリジナル生成 (MUSHIKUI ENGINE)",
      "radix": 10
    }
  },
  {
    "id": "DIV-005",
    "title": "孤独の8・割り算篇「百位の8」",
    "operation": "division",
    "difficulty": "★★★★☆ 上級",
    "hint_count": 1,
    "summary": "商の百の位に「8」がただ1つ。先頭積が4桁、二段目が3桁、末尾が4桁という非対称性が解を1つに縛ります。",
    "radix": 10,
    "problem_rows": [
      {
        "label": "quotient",
        "content": "               □ 8 □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_top",
        "content": "      ┌───────────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "dividend",
        "content": "□ □ □ │ □ □ □ □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_0",
        "content": "         □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_0",
        "content": "        ─────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_1",
        "content": "           □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "             □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_1",
        "content": "            ───────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_2",
        "content": "               □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_2",
        "content": "               □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_2",
        "content": "              ─────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "remainder",
        "content": "                     0",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "solution_rows": [
      {
        "label": "quotient",
        "content": "               9 8 0 9",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_top",
        "content": "      ┌───────────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "dividend",
        "content": "1 2 4 │ 1 2 1 6 3 1 6",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_0",
        "content": "         1 1 1 6",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_0",
        "content": "        ─────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_1",
        "content": "           1 0 0 3",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "             9 9 2",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_1",
        "content": "            ───────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_2",
        "content": "               1 1 1 6",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_2",
        "content": "               1 1 1 6",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_2",
        "content": "              ─────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "remainder",
        "content": "                     0",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "deduction_steps": [
      {
        "step_num": 1,
        "title": "先頭の4桁積と百位の3桁積",
        "target_part": "商の千位と百位",
        "deduction": "百位の8による積は3桁、千位による積は4桁。千位は9しかあり得ない。",
        "revealed_value": "商の千位 = 9, 除数 = 124",
        "explanation": "1216316 ÷ 124 = 9809 が唯一適合します。"
      }
    ],
    "operands": {
      "d": 124,
      "q": 9809,
      "D": 1216316,
      "d_str": "124",
      "q_str": "9809",
      "D_str": "1216316"
    },
    "uniqueness_verified": true,
    "metadata": {
      "d_len": 3,
      "q_len": 4,
      "D_len": 7,
      "steps_info": [
        {
          "q_idx": 0,
          "bring_down_count": 4,
          "sub_dividend_len": 4,
          "product_len": 4,
          "is_last": false
        },
        {
          "q_idx": 1,
          "bring_down_count": 1,
          "sub_dividend_len": 4,
          "product_len": 3,
          "is_last": false
        },
        {
          "q_idx": 3,
          "bring_down_count": 2,
          "sub_dividend_len": 4,
          "product_len": 4,
          "is_last": true
        }
      ],
      "clues": {
        "q": {
          "1": 8
        }
      },
      "source": "オリジナル生成 (MUSHIKUI ENGINE)",
      "radix": 10
    }
  },
  {
    "id": "DIV-006",
    "title": "孤独の8・割り算篇「一位の8」",
    "operation": "division",
    "difficulty": "★★★★☆ 上級",
    "hint_count": 1,
    "summary": "商の末尾（一の位）に「8」だけが与えられた問題。商は9808、除数は124に確定。",
    "radix": 10,
    "problem_rows": [
      {
        "label": "quotient",
        "content": "               □ □ □ 8",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_top",
        "content": "      ┌───────────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "dividend",
        "content": "□ □ □ │ □ □ □ □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_0",
        "content": "         □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_0",
        "content": "        ─────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_1",
        "content": "           □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "             □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_1",
        "content": "            ───────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_2",
        "content": "                 □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_2",
        "content": "                 □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_2",
        "content": "                ───────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "remainder",
        "content": "                     0",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "solution_rows": [
      {
        "label": "quotient",
        "content": "               9 8 0 8",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_top",
        "content": "      ┌───────────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "dividend",
        "content": "1 2 4 │ 1 2 1 6 1 9 2",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_0",
        "content": "         1 1 1 6",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_0",
        "content": "        ─────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_1",
        "content": "           1 0 0 1",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "             9 9 2",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_1",
        "content": "            ───────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_2",
        "content": "                 9 9 2",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_2",
        "content": "                 9 9 2",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_2",
        "content": "                ───────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "remainder",
        "content": "                     0",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "deduction_steps": [
      {
        "step_num": 1,
        "title": "末尾8による割り切れと除数",
        "target_part": "最後の引き算",
        "deduction": "最後は除数×8でちょうど割り切れて余り0になる。積の桁数は3桁(□□□)。",
        "revealed_value": "除数 = 124, 商 = 9808",
        "explanation": "1,216,192 ÷ 124 = 9808。"
      }
    ],
    "operands": {
      "d": 124,
      "q": 9808,
      "D": 1216192,
      "d_str": "124",
      "q_str": "9808",
      "D_str": "1216192"
    },
    "uniqueness_verified": true,
    "metadata": {
      "d_len": 3,
      "q_len": 4,
      "D_len": 7,
      "steps_info": [
        {
          "q_idx": 0,
          "bring_down_count": 4,
          "sub_dividend_len": 4,
          "product_len": 4,
          "is_last": false
        },
        {
          "q_idx": 1,
          "bring_down_count": 1,
          "sub_dividend_len": 4,
          "product_len": 3,
          "is_last": false
        },
        {
          "q_idx": 3,
          "bring_down_count": 2,
          "sub_dividend_len": 3,
          "product_len": 3,
          "is_last": true
        }
      ],
      "clues": {
        "q": {
          "3": 8
        }
      },
      "source": "オリジナル生成 (MUSHIKUI ENGINE)",
      "radix": 10
    }
  },
  {
    "id": "DIV-007",
    "title": "孤独の8・手軽な2桁商「112の妙技」",
    "operation": "division",
    "difficulty": "★★★☆☆ 中級",
    "hint_count": 1,
    "summary": "4桁÷3桁＝2桁（8□）のコンパクトな割り算。商の十位「8」だけで全体が美しく解けます。",
    "radix": 10,
    "problem_rows": [
      {
        "label": "quotient",
        "content": "             8 □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_top",
        "content": "      ┌─────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "dividend",
        "content": "□ □ □ │ □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_0",
        "content": "         □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_0",
        "content": "        ───────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_1",
        "content": "         □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "         □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_1",
        "content": "        ─────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "remainder",
        "content": "               0",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "solution_rows": [
      {
        "label": "quotient",
        "content": "             8 9",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_top",
        "content": "      ┌─────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "dividend",
        "content": "1 1 2 │ 9 9 6 8",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_0",
        "content": "         8 9 6",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_0",
        "content": "        ───────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_1",
        "content": "         1 0 0 8",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "         1 0 0 8",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_1",
        "content": "        ─────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "remainder",
        "content": "               0",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "deduction_steps": [
      {
        "step_num": 1,
        "title": "8倍して3桁、次の商で4桁",
        "target_part": "除数の範囲",
        "deduction": "除数×8が3桁(□□□)なので除数≤124。一方、一の位を掛けると4桁(□□□□)になるため一の位は9、かつ除数×9≥1000。",
        "revealed_value": "除数 ∈ [112, 124]",
        "explanation": "1000 ÷ 9 = 111.1... より除数は112以上。"
      },
      {
        "step_num": 2,
        "title": "被除数の4桁制約からの確定",
        "target_part": "除数と被除数",
        "deduction": "被除数 D = 除数 × 89 が4桁(≤ 9999)。112 × 89 = 9968 のみが適合！",
        "revealed_value": "112 × 89 = 9968",
        "explanation": "113 × 89 = 10057 で5桁になってしまうため、112しか許されません。"
      }
    ],
    "operands": {
      "d": 112,
      "q": 89,
      "D": 9968,
      "d_str": "112",
      "q_str": "89",
      "D_str": "9968"
    },
    "uniqueness_verified": true,
    "metadata": {
      "d_len": 3,
      "q_len": 2,
      "D_len": 4,
      "steps_info": [
        {
          "q_idx": 0,
          "bring_down_count": 3,
          "sub_dividend_len": 3,
          "product_len": 3,
          "is_last": false
        },
        {
          "q_idx": 1,
          "bring_down_count": 1,
          "sub_dividend_len": 4,
          "product_len": 4,
          "is_last": true
        }
      ],
      "clues": {
        "q": {
          "0": 8
        }
      },
      "source": "オリジナル生成 (MUSHIKUI ENGINE)",
      "radix": 10
    }
  },
  {
    "id": "DIV-008",
    "title": "孤独の9「ゾロ目の小宇宙」",
    "operation": "division",
    "difficulty": "★★☆☆☆ 初中級",
    "hint_count": 1,
    "summary": "商の一の位に「9」だけが提示された、初学者にも解きやすい2桁÷2桁の割り算覆面算。",
    "radix": 10,
    "problem_rows": [
      {
        "label": "quotient",
        "content": "           □ 9",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_top",
        "content": "    ┌─────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "dividend",
        "content": "□ □ │ □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_0",
        "content": "         □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_0",
        "content": "        ─────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_1",
        "content": "           □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "           □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_1",
        "content": "          ─────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "remainder",
        "content": "             0",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "solution_rows": [
      {
        "label": "quotient",
        "content": "           9 9",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_top",
        "content": "    ┌─────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "dividend",
        "content": "1 1 │ 1 0 8 9",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_0",
        "content": "         9 9",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_0",
        "content": "        ─────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_1",
        "content": "           9 9",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "           9 9",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_1",
        "content": "          ─────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "remainder",
        "content": "             0",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "deduction_steps": [
      {
        "step_num": 1,
        "title": "2桁の除数と2桁の積",
        "target_part": "除数の特定",
        "deduction": "除数(2桁)×9が2桁(□□)なので、除数は最大でも 11 (11×9=99)。2桁なので除数は10か11。",
        "revealed_value": "除数 ∈ {10, 11}",
        "explanation": "10×99=990 (3桁) に対し、被除数は4桁(□□□□)なので除数は11しかありません。"
      },
      {
        "step_num": 2,
        "title": "全体の完成",
        "target_part": "商と被除数",
        "deduction": "11 × 99 = 1089。筆算の各段がすべて合致します。",
        "revealed_value": "1089 ÷ 11 = 99",
        "explanation": "一段目99、二段目99で余り0。"
      }
    ],
    "operands": {
      "d": 11,
      "q": 99,
      "D": 1089,
      "d_str": "11",
      "q_str": "99",
      "D_str": "1089"
    },
    "uniqueness_verified": true,
    "metadata": {
      "d_len": 2,
      "q_len": 2,
      "D_len": 4,
      "steps_info": [
        {
          "q_idx": 0,
          "bring_down_count": 3,
          "sub_dividend_len": 3,
          "product_len": 2,
          "is_last": false
        },
        {
          "q_idx": 1,
          "bring_down_count": 1,
          "sub_dividend_len": 2,
          "product_len": 2,
          "is_last": true
        }
      ],
      "clues": {
        "q": {
          "1": 9
        }
      },
      "source": "オリジナル生成 (MUSHIKUI ENGINE)",
      "radix": 10
    }
  },
  {
    "id": "DIV-009",
    "title": "孤独の7・除数篇「末尾の七」",
    "operation": "division",
    "difficulty": "★★★☆☆ 中級",
    "hint_count": 1,
    "summary": "除数の末尾（一の位）に「7」だけが示された割り算。除数□□7と商の0が織りなす整然たる論理。",
    "radix": 10,
    "problem_rows": [
      {
        "label": "quotient",
        "content": "             □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_top",
        "content": "      ┌─────────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "dividend",
        "content": "□ □ 7 │ □ □ □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_0",
        "content": "         □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_0",
        "content": "        ───────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_1",
        "content": "         □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "           □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_1",
        "content": "          ───────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_2",
        "content": "               □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_2",
        "content": "               □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_2",
        "content": "              ───────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "remainder",
        "content": "                   0",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "solution_rows": [
      {
        "label": "quotient",
        "content": "             1 2 0 2",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_top",
        "content": "      ┌─────────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "dividend",
        "content": "4 9 7 │ 5 9 7 3 9 4",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_0",
        "content": "         4 9 7",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_0",
        "content": "        ───────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_1",
        "content": "         1 0 0 3",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "           9 9 4",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_1",
        "content": "          ───────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_2",
        "content": "               9 9 4",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_2",
        "content": "               9 9 4",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_2",
        "content": "              ───────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "remainder",
        "content": "                   0",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "deduction_steps": [
      {
        "step_num": 1,
        "title": "商の二重桁下げと各段の桁数",
        "target_part": "除数497の確定",
        "deduction": "商の百位が2、十位が0。除数末尾の7と各段の引き算から497が一意に定まる。",
        "revealed_value": "除数 = 497, 商 = 1202",
        "explanation": "597,394 ÷ 497 = 1202。"
      }
    ],
    "operands": {
      "d": 497,
      "q": 1202,
      "D": 597394,
      "d_str": "497",
      "q_str": "1202",
      "D_str": "597394"
    },
    "uniqueness_verified": true,
    "metadata": {
      "d_len": 3,
      "q_len": 4,
      "D_len": 6,
      "steps_info": [
        {
          "q_idx": 0,
          "bring_down_count": 3,
          "sub_dividend_len": 3,
          "product_len": 3,
          "is_last": false
        },
        {
          "q_idx": 1,
          "bring_down_count": 1,
          "sub_dividend_len": 4,
          "product_len": 3,
          "is_last": false
        },
        {
          "q_idx": 3,
          "bring_down_count": 2,
          "sub_dividend_len": 3,
          "product_len": 3,
          "is_last": true
        }
      ],
      "clues": {
        "d": {
          "2": 7
        }
      },
      "source": "オリジナル生成 (MUSHIKUI ENGINE)",
      "radix": 10
    }
  },
  {
    "id": "DIV-010",
    "title": "奇跡の二文字「2と9のシンメトリー」",
    "operation": "division",
    "difficulty": "★★★☆☆ 中級",
    "hint_count": 2,
    "summary": "6桁÷3桁＝3桁。ヒントは除数末尾の「2」と商先頭の「9」の2文字のみ。驚くほど美しい対称解。",
    "radix": 10,
    "problem_rows": [
      {
        "label": "quotient",
        "content": "               9 □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_top",
        "content": "      ┌─────────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "dividend",
        "content": "□ □ 2 │ □ □ □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_0",
        "content": "           □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_0",
        "content": "          ───────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_1",
        "content": "           □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "             □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_1",
        "content": "            ───────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_2",
        "content": "               □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_2",
        "content": "               □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_2",
        "content": "              ───────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "remainder",
        "content": "                   0",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "solution_rows": [
      {
        "label": "quotient",
        "content": "               9 9 9",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_top",
        "content": "      ┌─────────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "dividend",
        "content": "1 0 2 │ 1 0 1 8 9 8",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_0",
        "content": "           9 1 8",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_0",
        "content": "          ───────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_1",
        "content": "           1 0 0 9",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "             9 1 8",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_1",
        "content": "            ───────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_2",
        "content": "               9 1 8",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_2",
        "content": "               9 1 8",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_2",
        "content": "              ───────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "remainder",
        "content": "                   0",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "deduction_steps": [
      {
        "step_num": 1,
        "title": "9倍して3桁になる除数",
        "target_part": "除数の確定",
        "deduction": "除数(□□2) × 9 が3桁(≤999)なので、除数は ≤ 111。末尾が2なので 102 に即時確定！",
        "revealed_value": "除数 = 102",
        "explanation": "末尾2で111以下の3桁の整数は 102 しか存在しません！"
      },
      {
        "step_num": 2,
        "title": "商の全桁の特定",
        "target_part": "商の残り桁",
        "deduction": "除数が102と決まれば、各段の4桁引き算を満たす商は 999 のみ。",
        "revealed_value": "商 = 999, 被除数 = 101,898",
        "explanation": "101898 ÷ 102 = 999。"
      }
    ],
    "operands": {
      "d": 102,
      "q": 999,
      "D": 101898,
      "d_str": "102",
      "q_str": "999",
      "D_str": "101898"
    },
    "uniqueness_verified": true,
    "metadata": {
      "d_len": 3,
      "q_len": 3,
      "D_len": 6,
      "steps_info": [
        {
          "q_idx": 0,
          "bring_down_count": 4,
          "sub_dividend_len": 4,
          "product_len": 3,
          "is_last": false
        },
        {
          "q_idx": 1,
          "bring_down_count": 1,
          "sub_dividend_len": 4,
          "product_len": 3,
          "is_last": false
        },
        {
          "q_idx": 2,
          "bring_down_count": 1,
          "sub_dividend_len": 3,
          "product_len": 3,
          "is_last": true
        }
      ],
      "clues": {
        "d": {
          "2": 2
        },
        "q": {
          "0": 9
        }
      },
      "source": "オリジナル生成 (MUSHIKUI ENGINE)",
      "radix": 10
    }
  },
  {
    "id": "MUL-001",
    "title": "名作「孤独の8」掛け算",
    "operation": "multiplication",
    "difficulty": "★★★★☆ 上級",
    "hint_count": 1,
    "summary": "下平和夫『新数学事典』等にも取り上げられた乗算覆面算の金字塔。与えられた数字は乗数の十位「8」ただ1つ！",
    "radix": 10,
    "problem_rows": [
      {
        "label": "multiplicand",
        "content": "     □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "multiplier",
        "content": "     × 8 □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_mul",
        "content": "  ────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "prod_0",
        "content": "   □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "   □ □ □  ",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_tot",
        "content": "  ────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "total",
        "content": "   □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "solution_rows": [
      {
        "label": "multiplicand",
        "content": "     1 1 2",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "multiplier",
        "content": "     × 8 9",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_mul",
        "content": "  ────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "prod_0",
        "content": "   1 0 0 8",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "   8 9 6  ",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_tot",
        "content": "  ────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "total",
        "content": "   9 9 6 8",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "deduction_steps": [
      {
        "step_num": 1,
        "title": "部分積の桁数の違い",
        "target_part": "乗数の一の位",
        "deduction": "被乗数(3桁)×8 は3桁なのに、被乗数×(一の位) は4桁になっている。",
        "revealed_value": "乗数の一の位 = 9",
        "explanation": "8倍で3桁なのに、それより大きい4桁になる数字は 9 しかありません。"
      },
      {
        "step_num": 2,
        "title": "被乗数の範囲の限定",
        "target_part": "被乗数の上限と下限",
        "deduction": "被乗数×8 ≤ 999 より 被乗数 ≤ 124。一方、被乗数×9 ≥ 1000 より 被乗数 ≥ 112。",
        "revealed_value": "被乗数 ∈ [112, 124]",
        "explanation": "1000 ÷ 9 = 111.1... より、112以上です。"
      },
      {
        "step_num": 3,
        "title": "合計積が4桁であることからの確定",
        "target_part": "被乗数の一意確定",
        "deduction": "全体の積 (被乗数 × 89) が4桁(≤ 9999)である。",
        "revealed_value": "被乗数 = 112 (112 × 89 = 9968)",
        "explanation": "113 × 89 = 10057 (5桁) となりオーバー！ したがって112しかあり得ません。"
      }
    ],
    "operands": {
      "A": 112,
      "B": 89,
      "tot": 9968,
      "A_str": "112",
      "B_str": "89",
      "tot_str": "9968"
    },
    "uniqueness_verified": true,
    "metadata": {
      "A_len": 3,
      "B_len": 2,
      "product_lens": [
        4,
        3
      ],
      "tot_len": 4,
      "clues": {
        "B": {
          "0": 8
        }
      },
      "source": "下平和夫『新数学事典』",
      "radix": 10
    }
  },
  {
    "id": "MUL-002",
    "title": "二つのヒント「九十九の壁」",
    "operation": "multiplication",
    "difficulty": "★★★☆☆ 中級",
    "hint_count": 2,
    "summary": "被乗数末尾の「2」と乗数の先頭「9」の2ヒント。積が10000を超えて5桁になる境界条件を利用した鮮やかな名作。",
    "radix": 10,
    "problem_rows": [
      {
        "label": "multiplicand",
        "content": "       □ □ 2",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "multiplier",
        "content": "       × 9 □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_mul",
        "content": "  ──────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "prod_0",
        "content": "       □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "     □ □ □  ",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_tot",
        "content": "  ──────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "total",
        "content": "   □ □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "solution_rows": [
      {
        "label": "multiplicand",
        "content": "       1 0 2",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "multiplier",
        "content": "       × 9 9",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_mul",
        "content": "  ──────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "prod_0",
        "content": "       9 1 8",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "     9 1 8  ",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_tot",
        "content": "  ──────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "total",
        "content": "   1 0 0 9 8",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "deduction_steps": [
      {
        "step_num": 1,
        "title": "部分積の桁数と被乗数",
        "target_part": "被乗数の確定",
        "deduction": "被乗数は末尾2(□□2)。被乗数×9が3桁なので被乗数≤111。よって被乗数は102に即確定！",
        "revealed_value": "被乗数 = 102",
        "explanation": "111以下の末尾2の3桁数は102しかありません。"
      },
      {
        "step_num": 2,
        "title": "積が5桁になる条件",
        "target_part": "乗数の確定",
        "deduction": "102 × B ≥ 10000 (5桁) より B ≥ 98.03。Bは9□なので 99 しかない！",
        "revealed_value": "乗数 = 99, 総積 = 10,098",
        "explanation": "102 × 99 = 10,098。"
      }
    ],
    "operands": {
      "A": 102,
      "B": 99,
      "tot": 10098,
      "A_str": "102",
      "B_str": "99",
      "tot_str": "10098"
    },
    "uniqueness_verified": true,
    "metadata": {
      "A_len": 3,
      "B_len": 2,
      "product_lens": [
        3,
        3
      ],
      "tot_len": 5,
      "clues": {
        "A": {
          "2": 2
        },
        "B": {
          "0": 9
        }
      },
      "source": "オリジナル生成 (MUSHIKUI ENGINE)",
      "radix": 10
    }
  },
  {
    "id": "MUL-003",
    "title": "2桁乗算の孤独な乗数「91」",
    "operation": "multiplication",
    "difficulty": "★★☆☆☆ 初中級",
    "hint_count": 2,
    "summary": "乗数が「91」と明かされているだけの2桁×2桁虫食い算。部分積と総積の桁数だけで被乗数11が確定します。",
    "radix": 10,
    "problem_rows": [
      {
        "label": "multiplicand",
        "content": "       □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "multiplier",
        "content": "     × 9 1",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_mul",
        "content": "  ────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "prod_0",
        "content": "       □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "     □ □  ",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_tot",
        "content": "  ────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "total",
        "content": "   □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "solution_rows": [
      {
        "label": "multiplicand",
        "content": "       1 1",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "multiplier",
        "content": "     × 9 1",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_mul",
        "content": "  ────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "prod_0",
        "content": "       1 1",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "     9 9  ",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_tot",
        "content": "  ────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "total",
        "content": "   1 0 0 1",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "deduction_steps": [
      {
        "step_num": 1,
        "title": "部分積の桁数から被乗数の上限",
        "target_part": "被乗数の上限",
        "deduction": "被乗数 × 9 が2桁(≤ 99)なので、被乗数は 11 以下。",
        "revealed_value": "被乗数 ≤ 11",
        "explanation": "12×9 = 108 で3桁になってしまいます。"
      },
      {
        "step_num": 2,
        "title": "総積の4桁から確定",
        "target_part": "被乗数の下限と確定",
        "deduction": "被乗数 × 91 が4桁(≥ 1000)なので、被乗数 ≥ 11。したがって被乗数は11！",
        "revealed_value": "11 × 91 = 1001",
        "explanation": "10 × 91 = 910 で3桁なので、11しかあり得ません。"
      }
    ],
    "operands": {
      "A": 11,
      "B": 91,
      "tot": 1001,
      "A_str": "11",
      "B_str": "91",
      "tot_str": "1001"
    },
    "uniqueness_verified": true,
    "metadata": {
      "A_len": 2,
      "B_len": 2,
      "product_lens": [
        2,
        2
      ],
      "tot_len": 4,
      "clues": {
        "B": {
          "0": 9,
          "1": 1
        }
      },
      "source": "オリジナル生成 (MUSHIKUI ENGINE)",
      "radix": 10
    }
  },
  {
    "id": "MUL-004",
    "title": "末尾2と80台の乗算",
    "operation": "multiplication",
    "difficulty": "★★☆☆☆ 初中級",
    "hint_count": 2,
    "summary": "被乗数が「□2」、乗数が「8□」。部分積の1段目が3桁、2段目が2桁という反転から解が一意に決まります。",
    "radix": 10,
    "problem_rows": [
      {
        "label": "multiplicand",
        "content": "       □ 2",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "multiplier",
        "content": "     × 8 □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_mul",
        "content": "  ────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "prod_0",
        "content": "     □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "     □ □  ",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_tot",
        "content": "  ────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "total",
        "content": "   □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "solution_rows": [
      {
        "label": "multiplicand",
        "content": "       1 2",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "multiplier",
        "content": "     × 8 9",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_mul",
        "content": "  ────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "prod_0",
        "content": "     1 0 8",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "     9 6  ",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_tot",
        "content": "  ────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "total",
        "content": "   1 0 6 8",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "deduction_steps": [
      {
        "step_num": 1,
        "title": "2段目の2桁積から被乗数の確定",
        "target_part": "被乗数",
        "deduction": "被乗数(□2) × 8 が2桁(≤99)なので被乗数は12以下。末尾2より被乗数は12に確定！",
        "revealed_value": "被乗数 = 12",
        "explanation": "22×8 = 176 で3桁になるため、12しかありません。"
      },
      {
        "step_num": 2,
        "title": "1段目の3桁積から乗数の確定",
        "target_part": "乗数の一の位",
        "deduction": "12 × (一の位) が3桁(≥100)になるためには、一の位は 9 (12×9=108) のみ。",
        "revealed_value": "乗数 = 89, 総積 = 1068",
        "explanation": "12 × 89 = 1068。"
      }
    ],
    "operands": {
      "A": 12,
      "B": 89,
      "tot": 1068,
      "A_str": "12",
      "B_str": "89",
      "tot_str": "1068"
    },
    "uniqueness_verified": true,
    "metadata": {
      "A_len": 2,
      "B_len": 2,
      "product_lens": [
        3,
        2
      ],
      "tot_len": 4,
      "clues": {
        "A": {
          "1": 2
        },
        "B": {
          "0": 8
        }
      },
      "source": "オリジナル生成 (MUSHIKUI ENGINE)",
      "radix": 10
    }
  },
  {
    "id": "MUL-005",
    "title": "ゾロ目乗算「12の魔法」",
    "operation": "multiplication",
    "difficulty": "★☆☆☆☆ 初級",
    "hint_count": 2,
    "summary": "被乗数が「12」と分かっている基本問題。部分積が両方とも3桁で総積が4桁になる条件から99が導かれます。",
    "radix": 10,
    "problem_rows": [
      {
        "label": "multiplicand",
        "content": "       1 2",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "multiplier",
        "content": "     × □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_mul",
        "content": "  ────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "prod_0",
        "content": "     □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "   □ □ □  ",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_tot",
        "content": "  ────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "total",
        "content": "   □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "solution_rows": [
      {
        "label": "multiplicand",
        "content": "       1 2",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "multiplier",
        "content": "     × 9 9",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_mul",
        "content": "  ────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "prod_0",
        "content": "     1 0 8",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "   1 0 8  ",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_tot",
        "content": "  ────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "total",
        "content": "   1 1 8 8",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "deduction_steps": [
      {
        "step_num": 1,
        "title": "部分積が3桁になる乗数の桁",
        "target_part": "乗数の各桁",
        "deduction": "12に掛けて3桁(100以上)になる数字は 9 (12×9=108) のみ。",
        "revealed_value": "乗数 = 99",
        "explanation": "12×8=96 (2桁) なので、各桁とも9でなければなりません。"
      }
    ],
    "operands": {
      "A": 12,
      "B": 99,
      "tot": 1188,
      "A_str": "12",
      "B_str": "99",
      "tot_str": "1188"
    },
    "uniqueness_verified": true,
    "metadata": {
      "A_len": 2,
      "B_len": 2,
      "product_lens": [
        3,
        3
      ],
      "tot_len": 4,
      "clues": {
        "A": {
          "0": 1,
          "1": 2
        }
      },
      "source": "オリジナル生成 (MUSHIKUI ENGINE)",
      "radix": 10
    }
  },
  {
    "id": "ADD-001",
    "title": "「孤独の1」足し算",
    "operation": "addition",
    "difficulty": "★☆☆☆☆ 初級",
    "hint_count": 1,
    "summary": "3桁＋1桁＝4桁。足す数が「1」としか書かれていないのに、999＋1＝1000が一意に確定する究極のミニマル足し算。",
    "radix": 10,
    "problem_rows": [
      {
        "label": "operand_0",
        "content": "       □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "operand_1",
        "content": "         + 1",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_add",
        "content": "  ──────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sum",
        "content": "     □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "solution_rows": [
      {
        "label": "operand_0",
        "content": "       9 9 9",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "operand_1",
        "content": "         + 1",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_add",
        "content": "  ──────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sum",
        "content": "     1 0 0 0",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "deduction_steps": [
      {
        "step_num": 1,
        "title": "4桁への繰り上がり境界",
        "target_part": "1つ目の数",
        "deduction": "3桁の数に 1 を足して4桁(1000以上)になる数は、3桁の最大数 999 しかない！",
        "revealed_value": "1つ目の数 = 999, 和 = 1000",
        "explanation": "998 + 1 = 999 (3桁) なので、999以外に解は存在しません。"
      }
    ],
    "operands": {
      "operands": [
        999,
        1
      ],
      "sum": 1000,
      "op_strs": [
        "999",
        "1"
      ],
      "sum_str": "1000"
    },
    "uniqueness_verified": true,
    "metadata": {
      "operand_lens": [
        3,
        1
      ],
      "sum_len": 4,
      "clues": {
        "op_1": {
          "0": 1
        }
      },
      "enforce_order": false,
      "source": "オリジナル生成 (MUSHIKUI ENGINE)",
      "radix": 10
    }
  },
  {
    "id": "ADD-002",
    "title": "「千への到達（0と1の手がかり）」",
    "operation": "addition",
    "difficulty": "★★☆☆☆ 初中級",
    "hint_count": 2,
    "summary": "1つ目の数が「□01」、2つ目の数が「□□」、和が「□□□□」。わずか2個のヒントから1000への到達が一意に定まります。",
    "radix": 10,
    "problem_rows": [
      {
        "label": "operand_0",
        "content": "       □ 0 1",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "operand_1",
        "content": "       + □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_add",
        "content": "  ──────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sum",
        "content": "     □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "solution_rows": [
      {
        "label": "operand_0",
        "content": "       9 0 1",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "operand_1",
        "content": "       + 9 9",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_add",
        "content": "  ──────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sum",
        "content": "     1 0 0 0",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "deduction_steps": [
      {
        "step_num": 1,
        "title": "最大値からの挟み撃ち",
        "target_part": "両方の数",
        "deduction": "□01 の最大値は 901。2桁の最大値は 99。901 + 99 = 1000 でちょうど4桁の最小値に届く！",
        "revealed_value": "901 + 99 = 1000",
        "explanation": "もし1つ目が801以下、あるいは2つ目が98以下なら和が999以下になり4桁になり得ません。よって 901 + 99 = 1000 が唯一解です。"
      }
    ],
    "operands": {
      "operands": [
        901,
        99
      ],
      "sum": 1000,
      "op_strs": [
        "901",
        "99"
      ],
      "sum_str": "1000"
    },
    "uniqueness_verified": true,
    "metadata": {
      "operand_lens": [
        3,
        2
      ],
      "sum_len": 4,
      "clues": {
        "op_0": {
          "1": 0,
          "2": 1
        }
      },
      "enforce_order": false,
      "source": "オリジナル生成 (MUSHIKUI ENGINE)",
      "radix": 10
    }
  },
  {
    "id": "ADD-003",
    "title": "「九十八の残響」",
    "operation": "addition",
    "difficulty": "★★★☆☆ 中級",
    "hint_count": 2,
    "summary": "3桁＋2桁＝□□98。和の下2桁が「98」であることだけを手がかりに、すべての空欄が確定するエレガントな問題。",
    "radix": 10,
    "problem_rows": [
      {
        "label": "operand_0",
        "content": "       □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "operand_1",
        "content": "       + □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_add",
        "content": "  ──────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sum",
        "content": "     □ □ 9 8",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "solution_rows": [
      {
        "label": "operand_0",
        "content": "       9 9 9",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "operand_1",
        "content": "       + 9 9",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_add",
        "content": "  ──────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sum",
        "content": "     1 0 9 8",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "deduction_steps": [
      {
        "step_num": 1,
        "title": "3桁＋2桁の取り得る最大値",
        "target_part": "和の全貌",
        "deduction": "3桁最大999、2桁最大99。和の最大値は 999 + 99 = 1098。和は4桁で末尾98なので 1098 確定！",
        "revealed_value": "和 = 1098",
        "explanation": "1098以下の4桁で末尾98の数は 1098 しかありません。"
      },
      {
        "step_num": 2,
        "title": "加数の特定",
        "target_part": "2つの数",
        "deduction": "最大値 1098 を達成する組み合わせは 999 + 99 のみ。",
        "revealed_value": "999 + 99 = 1098",
        "explanation": "どちらかが1でも小さければ1098に届きません。"
      }
    ],
    "operands": {
      "operands": [
        999,
        99
      ],
      "sum": 1098,
      "op_strs": [
        "999",
        "99"
      ],
      "sum_str": "1098"
    },
    "uniqueness_verified": true,
    "metadata": {
      "operand_lens": [
        3,
        2
      ],
      "sum_len": 4,
      "clues": {
        "sum": {
          "2": 9,
          "3": 8
        }
      },
      "enforce_order": false,
      "source": "オリジナル生成 (MUSHIKUI ENGINE)",
      "radix": 10
    }
  },
  {
    "id": "ADD-004",
    "title": "繰り上がり連鎖「909の加算」",
    "operation": "addition",
    "difficulty": "★★☆☆☆ 初中級",
    "hint_count": 2,
    "summary": "1つ目の十位が「0」、和の一位が「8」。繰り上がりの連鎖により 909 + 99 = 1008 が一意に決まります。",
    "radix": 10,
    "problem_rows": [
      {
        "label": "operand_0",
        "content": "       □ 0 □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "operand_1",
        "content": "       + □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_add",
        "content": "  ──────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sum",
        "content": "     □ □ □ 8",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "solution_rows": [
      {
        "label": "operand_0",
        "content": "       9 0 9",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "operand_1",
        "content": "       + 9 9",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_add",
        "content": "  ──────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sum",
        "content": "     1 0 0 8",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "deduction_steps": [
      {
        "step_num": 1,
        "title": "一の位の繰り上がりと十の位の0",
        "target_part": "全体の復元",
        "deduction": "一の位の和が末尾8で、十の位が0。4桁に繰り上がる条件から 909 + 99 = 1008 に一意決定。",
        "revealed_value": "909 + 99 = 1008",
        "explanation": "計算の一致を完全に満たす唯一の解です。"
      }
    ],
    "operands": {
      "operands": [
        909,
        99
      ],
      "sum": 1008,
      "op_strs": [
        "909",
        "99"
      ],
      "sum_str": "1008"
    },
    "uniqueness_verified": true,
    "metadata": {
      "operand_lens": [
        3,
        2
      ],
      "sum_len": 4,
      "clues": {
        "op_0": {
          "1": 0
        },
        "sum": {
          "3": 8
        }
      },
      "enforce_order": false,
      "source": "オリジナル生成 (MUSHIKUI ENGINE)",
      "radix": 10
    }
  },
  {
    "id": "ADD-005",
    "title": "「千九十の壁」",
    "operation": "addition",
    "difficulty": "★★☆☆☆ 初中級",
    "hint_count": 2,
    "summary": "3桁＋2桁＝□□90。1つ目の末尾が「1」という2つのヒントから、991＋99＝1090が導かれます。",
    "radix": 10,
    "problem_rows": [
      {
        "label": "operand_0",
        "content": "       □ □ 1",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "operand_1",
        "content": "       + □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_add",
        "content": "  ──────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sum",
        "content": "     □ □ 9 □",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "solution_rows": [
      {
        "label": "operand_0",
        "content": "       9 9 1",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "operand_1",
        "content": "       + 9 9",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_add",
        "content": "  ──────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sum",
        "content": "     1 0 9 0",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "deduction_steps": [
      {
        "step_num": 1,
        "title": "末尾1と繰り上がり",
        "target_part": "2つ目の数の一の位",
        "deduction": "1 + □ = 10 (末尾0) より、2つ目の数の一位は 9。",
        "revealed_value": "2つ目の一位 = 9, 和 = 1090",
        "explanation": "991 + 99 = 1090。"
      }
    ],
    "operands": {
      "operands": [
        991,
        99
      ],
      "sum": 1090,
      "op_strs": [
        "991",
        "99"
      ],
      "sum_str": "1090"
    },
    "uniqueness_verified": true,
    "metadata": {
      "operand_lens": [
        3,
        2
      ],
      "sum_len": 4,
      "clues": {
        "op_0": {
          "2": 1
        },
        "sum": {
          "2": 9
        }
      },
      "enforce_order": false,
      "source": "オリジナル生成 (MUSHIKUI ENGINE)",
      "radix": 10
    }
  },
  {
    "id": "SUB-001",
    "title": "「孤独の1」引き算（至高の差1）",
    "operation": "subtraction",
    "difficulty": "★★☆☆☆ 初中級",
    "hint_count": 1,
    "summary": "4桁－3桁＝1。答えの欄に「1」がポツンと置かれているだけなのに、1000－999＝1が必然として導かれます。",
    "radix": 10,
    "problem_rows": [
      {
        "label": "minuend",
        "content": "     □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "subtrahend",
        "content": "     - □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_sub",
        "content": "  ──────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "difference",
        "content": "           1",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "solution_rows": [
      {
        "label": "minuend",
        "content": "     1 0 0 0",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "subtrahend",
        "content": "     - 9 9 9",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_sub",
        "content": "  ──────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "difference",
        "content": "           1",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "deduction_steps": [
      {
        "step_num": 1,
        "title": "4桁と3桁の差が1になる条件",
        "target_part": "引かれる数と引く数",
        "deduction": "引かれる数(4桁) ≥ 1000。引く数(3桁) ≤ 999。差が1になるのは最小4桁と最大3桁の境界のみ！",
        "revealed_value": "1000 - 999 = 1",
        "explanation": "1001 - 3桁 は必ず2以上になり、999以下の引く数で差が1になるのは 1000 - 999 のみです。"
      }
    ],
    "operands": {
      "A": 1000,
      "B": 999,
      "diff": 1,
      "A_str": "1000",
      "B_str": "999",
      "diff_str": "1"
    },
    "uniqueness_verified": true,
    "metadata": {
      "A_len": 4,
      "B_len": 3,
      "diff_len": 1,
      "clues": {
        "diff": {
          "0": 1
        }
      },
      "source": "オリジナル生成 (MUSHIKUI ENGINE)",
      "radix": 10
    }
  },
  {
    "id": "SUB-002",
    "title": "「孤独の1」引き算（末尾一の宿命）",
    "operation": "subtraction",
    "difficulty": "★★☆☆☆ 初中級",
    "hint_count": 1,
    "summary": "4桁－3桁＝1桁。引く数が「□□1」であることだけが与えられた、極めて美しい引き算覆面算。",
    "radix": 10,
    "problem_rows": [
      {
        "label": "minuend",
        "content": "     □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "subtrahend",
        "content": "     - □ □ 1",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_sub",
        "content": "  ──────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "difference",
        "content": "           □",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "solution_rows": [
      {
        "label": "minuend",
        "content": "     1 0 0 0",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "subtrahend",
        "content": "     - 9 9 1",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_sub",
        "content": "  ──────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "difference",
        "content": "           9",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "deduction_steps": [
      {
        "step_num": 1,
        "title": "4桁－3桁＝1桁の範囲の狭さ",
        "target_part": "引く数の百位と十位",
        "deduction": "引かれる数 ≥ 1000、差 ≤ 9。したがって引く数は 1000 - 9 = 991 以上でなければならない！",
        "revealed_value": "引く数 ≥ 991",
        "explanation": "4桁から3桁を引いて1桁にするには、引く数は991〜999の範囲に限定されます。"
      },
      {
        "step_num": 2,
        "title": "末尾1との合致",
        "target_part": "引く数の確定",
        "deduction": "991〜999の中で末尾が1の数は 991 のみ！ よって引く数は 991 に確定。",
        "revealed_value": "引く数 = 991, 引かれる数 = 1000, 差 = 9",
        "explanation": "991に1桁(1〜9)を足して4桁(1000以上)になるのは 991 + 9 = 1000 のみです。"
      }
    ],
    "operands": {
      "A": 1000,
      "B": 991,
      "diff": 9,
      "A_str": "1000",
      "B_str": "991",
      "diff_str": "9"
    },
    "uniqueness_verified": true,
    "metadata": {
      "A_len": 4,
      "B_len": 3,
      "diff_len": 1,
      "clues": {
        "B": {
          "2": 1
        }
      },
      "source": "オリジナル生成 (MUSHIKUI ENGINE)",
      "radix": 10
    }
  },
  {
    "id": "SUB-003",
    "title": "「孤独の8」引き算",
    "operation": "subtraction",
    "difficulty": "★★☆☆☆ 初中級",
    "hint_count": 1,
    "summary": "4桁－3桁＝1桁。引かれる数の末尾が「8（□□□8）」とだけ提示された驚異の一意解パズル。",
    "radix": 10,
    "problem_rows": [
      {
        "label": "minuend",
        "content": "     □ □ □ 8",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "subtrahend",
        "content": "     - □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_sub",
        "content": "  ──────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "difference",
        "content": "           □",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "solution_rows": [
      {
        "label": "minuend",
        "content": "     1 0 0 8",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "subtrahend",
        "content": "     - 9 9 9",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_sub",
        "content": "  ──────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "difference",
        "content": "           9",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "deduction_steps": [
      {
        "step_num": 1,
        "title": "引かれる数の上限",
        "target_part": "引かれる数",
        "deduction": "引く数(3桁) ≤ 999、差(1桁) ≤ 9 より、引かれる数 ≤ 999 + 9 = 1008。",
        "revealed_value": "引かれる数 ≤ 1008",
        "explanation": "4桁で末尾8かつ1008以下の数は、なんと 1008 そのものしかありません！"
      },
      {
        "step_num": 2,
        "title": "引く数と差の確定",
        "target_part": "引く数と差",
        "deduction": "1008 － (3桁) ＝ (1桁) を満たす3桁は 999 のみ（1008 - 999 = 9）。",
        "revealed_value": "1008 - 999 = 9",
        "explanation": "引く数が998以下だと差が10以上（2桁）になってしまいます。"
      }
    ],
    "operands": {
      "A": 1008,
      "B": 999,
      "diff": 9,
      "A_str": "1008",
      "B_str": "999",
      "diff_str": "9"
    },
    "uniqueness_verified": true,
    "metadata": {
      "A_len": 4,
      "B_len": 3,
      "diff_len": 1,
      "clues": {
        "A": {
          "3": 8
        }
      },
      "source": "オリジナル生成 (MUSHIKUI ENGINE)",
      "radix": 10
    }
  },
  {
    "id": "SUB-004",
    "title": "繰り下がり二重連鎖「901の減算」",
    "operation": "subtraction",
    "difficulty": "★★★☆☆ 中級",
    "hint_count": 2,
    "summary": "4桁－□01＝□□。引く数の下2桁が「01」という情報から、千からの引き算1000－901＝99が確定します。",
    "radix": 10,
    "problem_rows": [
      {
        "label": "minuend",
        "content": "     □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "subtrahend",
        "content": "     - □ 0 1",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_sub",
        "content": "  ──────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "difference",
        "content": "         □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "solution_rows": [
      {
        "label": "minuend",
        "content": "     1 0 0 0",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "subtrahend",
        "content": "     - 9 0 1",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_sub",
        "content": "  ──────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "difference",
        "content": "         9 9",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "deduction_steps": [
      {
        "step_num": 1,
        "title": "引く数と差の桁数",
        "target_part": "引く数の百位",
        "deduction": "4桁から引いて2桁(≤99)になるためには、引く数は 1000 - 99 = 901 以上。よって引く数は 901 に確定！",
        "revealed_value": "引く数 = 901",
        "explanation": "百位は9しかあり得ません。"
      },
      {
        "step_num": 2,
        "title": "引かれる数と差の確定",
        "target_part": "引かれる数と差",
        "deduction": "901に2桁(最大99)を足して4桁(1000以上)にするには 901 + 99 = 1000 しかない！",
        "revealed_value": "1000 - 901 = 99",
        "explanation": "すべて一意に確定します。"
      }
    ],
    "operands": {
      "A": 1000,
      "B": 901,
      "diff": 99,
      "A_str": "1000",
      "B_str": "901",
      "diff_str": "99"
    },
    "uniqueness_verified": true,
    "metadata": {
      "A_len": 4,
      "B_len": 3,
      "diff_len": 2,
      "clues": {
        "B": {
          "1": 0,
          "2": 1
        }
      },
      "source": "オリジナル生成 (MUSHIKUI ENGINE)",
      "radix": 10
    }
  },
  {
    "id": "SUB-005",
    "title": "「九十九の壁（減算篇）」",
    "operation": "subtraction",
    "difficulty": "★★★☆☆ 中級",
    "hint_count": 2,
    "summary": "引かれる数の十位が「9」、引く数の末尾が「1」。差が2桁という条件がパズルを縛ります。",
    "radix": 10,
    "problem_rows": [
      {
        "label": "minuend",
        "content": "     □ □ 9 □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "subtrahend",
        "content": "     - □ □ 1",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_sub",
        "content": "  ──────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "difference",
        "content": "         □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "solution_rows": [
      {
        "label": "minuend",
        "content": "     1 0 9 0",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "subtrahend",
        "content": "     - 9 9 1",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_sub",
        "content": "  ──────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "difference",
        "content": "         9 9",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "deduction_steps": [
      {
        "step_num": 1,
        "title": "一の位の繰り下がりと十の位",
        "target_part": "全体の特定",
        "deduction": "4桁-3桁=2桁で、引かれる数が□□9□、引く数が□□1を満たす整数解は 1090 - 991 = 99 のみ。",
        "revealed_value": "1090 - 991 = 99",
        "explanation": "1090 - 991 = 99。"
      }
    ],
    "operands": {
      "A": 1090,
      "B": 991,
      "diff": 99,
      "A_str": "1090",
      "B_str": "991",
      "diff_str": "99"
    },
    "uniqueness_verified": true,
    "metadata": {
      "A_len": 4,
      "B_len": 3,
      "diff_len": 2,
      "clues": {
        "A": {
          "2": 9
        },
        "B": {
          "2": 1
        }
      },
      "source": "オリジナル生成 (MUSHIKUI ENGINE)",
      "radix": 10
    }
  },
  {
    "id": "SUB-006",
    "title": "「千八からの減算」",
    "operation": "subtraction",
    "difficulty": "★★★☆☆ 中級",
    "hint_count": 2,
    "summary": "引かれる数の末尾が「8」、引く数の十位が「0」。差が2桁（99）になる唯一の組み合わせ。",
    "radix": 10,
    "problem_rows": [
      {
        "label": "minuend",
        "content": "     □ □ □ 8",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "subtrahend",
        "content": "     - □ 0 □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_sub",
        "content": "  ──────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "difference",
        "content": "         □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "solution_rows": [
      {
        "label": "minuend",
        "content": "     1 0 0 8",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "subtrahend",
        "content": "     - 9 0 9",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_sub",
        "content": "  ──────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "difference",
        "content": "         9 9",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "deduction_steps": [
      {
        "step_num": 1,
        "title": "差が2桁になる境界条件",
        "target_part": "引く数と引かれる数",
        "deduction": "引かれる数が1008で、引く数が909のとき、差はちょうど99。",
        "revealed_value": "1008 - 909 = 99",
        "explanation": "一意に確定します。"
      }
    ],
    "operands": {
      "A": 1008,
      "B": 909,
      "diff": 99,
      "A_str": "1008",
      "B_str": "909",
      "diff_str": "99"
    },
    "uniqueness_verified": true,
    "metadata": {
      "A_len": 4,
      "B_len": 3,
      "diff_len": 2,
      "clues": {
        "A": {
          "3": 8
        },
        "B": {
          "1": 0
        }
      },
      "source": "オリジナル生成 (MUSHIKUI ENGINE)",
      "radix": 10
    }
  },
  {
    "id": "BASE8-MUL-001",
    "title": "8進法における『孤独の7』（乗算篇）",
    "operation": "multiplication",
    "difficulty": "★★★★☆ 上級",
    "hint_count": 1,
    "summary": "8進数（0〜7）の世界で繰り広げられる『孤独の7』。乗数の一の位にたった1つ置かれた最大数字「7」から、全盤面が一意に導かれます。",
    "radix": 8,
    "problem_rows": [
      {
        "label": "multiplicand",
        "content": "       □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "multiplier",
        "content": "     × □ 7",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_mul",
        "content": "  ────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "prod_0",
        "content": "       □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "     □ □  ",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_tot",
        "content": "  ────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "total",
        "content": "   □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "solution_rows": [
      {
        "label": "multiplicand",
        "content": "       1 1",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "multiplier",
        "content": "     × 7 7",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_mul",
        "content": "  ────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "prod_0",
        "content": "       7 7",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "     7 7  ",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_tot",
        "content": "  ────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "total",
        "content": "   1 0 6 7",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "deduction_steps": [
      {
        "step_num": 1,
        "title": "8進数2桁の被乗数Aの範囲絞り込み",
        "target_part": "被乗数A",
        "deduction": "乗数の一の位が7で、部分積 A × 7 が8進数2桁（≤ 77₈ = 63）であるため、A ≤ 63/7 = 9 = 11₈。Aは2桁（≥ 10₈ = 8）なので A ∈ {10₈, 11₈}。",
        "revealed_value": "A ∈ {10₈, 11₈}",
        "explanation": "もし A ≥ 12₈ (10) ならば 10 × 7 = 70 = 106₈ (3桁) となり、部分積が2桁であることに反します。"
      },
      {
        "step_num": 2,
        "title": "積の桁数（4桁）による被乗数Aの確定",
        "target_part": "被乗数A",
        "deduction": "全体の積が8進数4桁（≥ 1000₈ = 512）である。もし A = 10₈ = 8 ならば、乗数Bの最大値 77₈ = 63 を掛けても 8 × 63 = 504 < 512 となり4桁に届かない。",
        "revealed_value": "被乗数 A = 11₈ (9)",
        "explanation": "したがって A は 11₈ (9) しかあり得ません。"
      },
      {
        "step_num": 3,
        "title": "乗数Bの確定と全盤面の完成",
        "target_part": "乗数Bおよび積",
        "deduction": "9 × B ≥ 512 より B ≥ 57。乗数の一の位は7なので B = 8×b₁ + 7。b₁ ≤ 6 なら B ≤ 55 < 57 で矛盾。よって b₁ = 7 に確定し、B = 77₈。",
        "revealed_value": "11₈ × 77₈ = 1067₈",
        "explanation": "部分積 11₈ × 7 = 77₈、全体の積 1067₈ となり、すべての空欄が完全に一意確定します。"
      }
    ],
    "operands": {
      "A": 9,
      "B": 63,
      "tot": 567,
      "A_str": "11",
      "B_str": "77",
      "tot_str": "1067"
    },
    "uniqueness_verified": true,
    "metadata": {
      "A_len": 2,
      "B_len": 2,
      "product_lens": [
        2,
        2
      ],
      "tot_len": 4,
      "clues": {
        "B": {
          "1": 7
        }
      },
      "source": "多進法虫食い算探索エンジン (MUSHIKUI ENGINE)",
      "radix": 8
    }
  },
  {
    "id": "BASE8-DIV-001",
    "title": "8進法における『孤独の7』（除算篇）",
    "operation": "division",
    "difficulty": "★★★★☆ 上級",
    "hint_count": 1,
    "summary": "8進法の割り算筆算。商の一の位に現れる「7」を手がかりに、各段の部分積と引き算の整合性から全3桁・4桁の数が一意に確定します。",
    "radix": 8,
    "problem_rows": [
      {
        "label": "quotient",
        "content": "           □ 7",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_top",
        "content": "    ┌─────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "dividend",
        "content": "□ □ │ □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_0",
        "content": "         □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_0",
        "content": "        ─────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_1",
        "content": "           □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "           □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_1",
        "content": "          ─────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "remainder",
        "content": "             0",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "solution_rows": [
      {
        "label": "quotient",
        "content": "           7 7",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_top",
        "content": "    ┌─────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "dividend",
        "content": "1 1 │ 1 0 6 7",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_0",
        "content": "         7 7",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_0",
        "content": "        ─────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_1",
        "content": "           7 7",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "           7 7",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_1",
        "content": "          ─────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "remainder",
        "content": "             0",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "deduction_steps": [
      {
        "step_num": 1,
        "title": "除数dの絞り込み",
        "target_part": "除数d",
        "deduction": "商の一の位が7で、除数(2桁) × 7 が2桁（≤ 77₈ = 63）であるため、除数 d ≤ 9 = 11₈。2桁なので d ∈ {10₈, 11₈}。",
        "revealed_value": "除数 d ∈ {10₈, 11₈}",
        "explanation": "d ≥ 12₈ では積が3桁になります。"
      },
      {
        "step_num": 2,
        "title": "被除数と商の完全確定",
        "target_part": "除数・商・被除数",
        "deduction": "被除数4桁から引く最初の段、および最後の段で割り切れる条件から、除数は 11₈、商は 77₈ に確定。",
        "revealed_value": "1067₈ ÷ 11₈ = 77₈",
        "explanation": "106₈ - 77₈ = 7₈、次桁7を下ろして 77₈ - 77₈ = 0 となり完全に合致します。"
      }
    ],
    "operands": {
      "d": 9,
      "q": 63,
      "D": 567,
      "d_str": "11",
      "q_str": "77",
      "D_str": "1067"
    },
    "uniqueness_verified": true,
    "metadata": {
      "d_len": 2,
      "q_len": 2,
      "D_len": 4,
      "steps_info": [
        {
          "q_idx": 0,
          "bring_down_count": 3,
          "sub_dividend_len": 3,
          "product_len": 2,
          "is_last": false
        },
        {
          "q_idx": 1,
          "bring_down_count": 1,
          "sub_dividend_len": 2,
          "product_len": 2,
          "is_last": true
        }
      ],
      "clues": {
        "q": {
          "1": 7
        }
      },
      "source": "多進法虫食い算探索エンジン (MUSHIKUI ENGINE)",
      "radix": 8
    }
  },
  {
    "id": "BASE16-MUL-001",
    "title": "16進法における『孤独のF』（乗算篇）",
    "operation": "multiplication",
    "difficulty": "★★★★☆ 上級",
    "hint_count": 1,
    "summary": "コンピュータサイエンスの母国語である16進数（0〜F）の世界。乗数の一の位に唯一提示された最大数字「F」から、4桁の積までの全盤面が導かれます。",
    "radix": 16,
    "problem_rows": [
      {
        "label": "multiplicand",
        "content": "       □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "multiplier",
        "content": "     × □ F",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_mul",
        "content": "  ────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "prod_0",
        "content": "       □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "     □ □  ",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_tot",
        "content": "  ────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "total",
        "content": "   □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "solution_rows": [
      {
        "label": "multiplicand",
        "content": "       1 1",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "multiplier",
        "content": "     × F F",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_mul",
        "content": "  ────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "prod_0",
        "content": "       F F",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "     F F  ",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_tot",
        "content": "  ────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "total",
        "content": "   1 0 E F",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "deduction_steps": [
      {
        "step_num": 1,
        "title": "16進数2桁の被乗数Aの絞り込み",
        "target_part": "被乗数A",
        "deduction": "乗数の一の位が F (15) で、部分積 A × 15 が16進数2桁（≤ FF₁₆ = 255）であるため、A ≤ 255/15 = 17 = 11₁₆。2桁なので A ∈ {10₁₆, 11₁₆}。",
        "revealed_value": "A ∈ {10₁₆, 11₁₆}",
        "explanation": "もし A ≥ 12₁₆ (18) なら 18 × 15 = 270 = 10E₁₆ (3桁) となり矛盾します。"
      },
      {
        "step_num": 2,
        "title": "積の桁数（4桁）による被乗数Aの確定",
        "target_part": "被乗数A",
        "deduction": "全体の積が16進数4桁（≥ 1000₁₆ = 4096）である。もし A = 10₁₆ = 16 ならば、乗数Bの最大値 FF₁₆ = 255 を掛けても 16 × 255 = 4080 < 4096 となり4桁に届かない。",
        "revealed_value": "被乗数 A = 11₁₆ (17)",
        "explanation": "したがって A は 11₁₆ (17) に確定します。"
      },
      {
        "step_num": 3,
        "title": "乗数Bと積の確定",
        "target_part": "乗数Bおよび積",
        "deduction": "17 × B ≥ 4096 より B ≥ 241。乗数の一の位は F (15) なので B = 16×b₁ + 15。b₁ ≤ 14 (E) ならば B ≤ 239 < 241 で矛盾。よって b₁ = 15 = F に確定。",
        "revealed_value": "11₁₆ × FF₁₆ = 10EF₁₆",
        "explanation": "部分積はともに FF₁₆、全体の積は 10EF₁₆ となり一意に確定します。"
      }
    ],
    "operands": {
      "A": 17,
      "B": 255,
      "tot": 4335,
      "A_str": "11",
      "B_str": "FF",
      "tot_str": "10EF"
    },
    "uniqueness_verified": true,
    "metadata": {
      "A_len": 2,
      "B_len": 2,
      "product_lens": [
        2,
        2
      ],
      "tot_len": 4,
      "clues": {
        "B": {
          "1": 15
        }
      },
      "source": "多進法虫食い算探索エンジン (MUSHIKUI ENGINE)",
      "radix": 16
    }
  },
  {
    "id": "BASE16-DIV-001",
    "title": "16進法における『孤独のF』（除算篇）",
    "operation": "division",
    "difficulty": "★★★★☆ 上級",
    "hint_count": 1,
    "summary": "16進法の筆算割り算。商の一の位の「F」のみを手がかりに、除数11₁₆と被除数10EF₁₆が完全に一意に定まります。",
    "radix": 16,
    "problem_rows": [
      {
        "label": "quotient",
        "content": "           □ F",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_top",
        "content": "    ┌─────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "dividend",
        "content": "□ □ │ □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_0",
        "content": "         □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_0",
        "content": "        ─────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_1",
        "content": "           □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "           □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_1",
        "content": "          ─────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "remainder",
        "content": "             0",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "solution_rows": [
      {
        "label": "quotient",
        "content": "           F F",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_top",
        "content": "    ┌─────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "dividend",
        "content": "1 1 │ 1 0 E F",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_0",
        "content": "         F F",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_0",
        "content": "        ─────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_1",
        "content": "           F F",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "           F F",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_1",
        "content": "          ─────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "remainder",
        "content": "             0",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "deduction_steps": [
      {
        "step_num": 1,
        "title": "商の一の位Fによる除数の絞り込み",
        "target_part": "除数d",
        "deduction": "商の一の位がFで、除数(2桁) × F が2桁（≤ FF₁₆ = 255）であるため、d ≤ 17 = 11₁₆。2桁なので d ∈ {10₁₆, 11₁₆}。",
        "revealed_value": "除数 d ∈ {10₁₆, 11₁₆}",
        "explanation": "d ≥ 12₁₆ では積が3桁になります。"
      },
      {
        "step_num": 2,
        "title": "被除数の桁数と割り切れ条件による確定",
        "target_part": "全盤面",
        "deduction": "被除数が4桁で、最初の部分積が2桁、引き算の残りに一の位を下ろしてF倍で割り切れる解は 10EF₁₆ ÷ 11₁₆ = FF₁₆ のみ。",
        "revealed_value": "10EF₁₆ ÷ 11₁₆ = FF₁₆",
        "explanation": "10E₁₆ - FF₁₆ = F₁₆、末尾Fを下ろして FF₁₆ - FF₁₆ = 0 と合致します。"
      }
    ],
    "operands": {
      "d": 17,
      "q": 255,
      "D": 4335,
      "d_str": "11",
      "q_str": "FF",
      "D_str": "10EF"
    },
    "uniqueness_verified": true,
    "metadata": {
      "d_len": 2,
      "q_len": 2,
      "D_len": 4,
      "steps_info": [
        {
          "q_idx": 0,
          "bring_down_count": 3,
          "sub_dividend_len": 3,
          "product_len": 2,
          "is_last": false
        },
        {
          "q_idx": 1,
          "bring_down_count": 1,
          "sub_dividend_len": 2,
          "product_len": 2,
          "is_last": true
        }
      ],
      "clues": {
        "q": {
          "1": 15
        }
      },
      "source": "多進法虫食い算探索エンジン (MUSHIKUI ENGINE)",
      "radix": 16
    }
  },
  {
    "id": "BASE12-MUL-001",
    "title": "12進法における『孤独のB』（乗算篇）",
    "operation": "multiplication",
    "difficulty": "★★★★☆ 上級",
    "hint_count": 1,
    "summary": "優れた高度合成数12を基数とする12進法（0〜B、B=11）。乗数の一の位の「B」1つから、すべてのマスが論理的に埋まります。",
    "radix": 12,
    "problem_rows": [
      {
        "label": "multiplicand",
        "content": "       □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "multiplier",
        "content": "     × □ B",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_mul",
        "content": "  ────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "prod_0",
        "content": "       □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "     □ □  ",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_tot",
        "content": "  ────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "total",
        "content": "   □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "solution_rows": [
      {
        "label": "multiplicand",
        "content": "       1 1",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "multiplier",
        "content": "     × B B",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_mul",
        "content": "  ────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "prod_0",
        "content": "       B B",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "     B B  ",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_tot",
        "content": "  ────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "total",
        "content": "   1 0 A B",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "deduction_steps": [
      {
        "step_num": 1,
        "title": "被乗数Aの範囲絞り込み",
        "target_part": "被乗数A",
        "deduction": "12進法で乗数の一の位が最大数字B(11)であり、部分積 A × B が2桁（≤ BB₁₂ = 143）であるため A ≤ 143/11 = 13 = 11₁₂。よって A ∈ {10₁₂, 11₁₂}。",
        "revealed_value": "A ∈ {10₁₂, 11₁₂}",
        "explanation": "A ≥ 12₁₂ では部分積が3桁になります。"
      },
      {
        "step_num": 2,
        "title": "4桁の積による解の確定",
        "target_part": "被乗数・乗数・積",
        "deduction": "積が4桁（≥ 1000₁₂ = 1728）になるためには、A = 10₁₂ = 12 では 12 × 143 = 1716 < 1728 となり不足。したがって A = 11₁₂ (13)、B = BB₁₂ (143)。",
        "revealed_value": "11₁₂ × BB₁₂ = 10AB₁₂",
        "explanation": "13 × 143 = 1859 = 10AB₁₂ となり一意に確定します。"
      }
    ],
    "operands": {
      "A": 13,
      "B": 143,
      "tot": 1859,
      "A_str": "11",
      "B_str": "BB",
      "tot_str": "10AB"
    },
    "uniqueness_verified": true,
    "metadata": {
      "A_len": 2,
      "B_len": 2,
      "product_lens": [
        2,
        2
      ],
      "tot_len": 4,
      "clues": {
        "B": {
          "1": 11
        }
      },
      "source": "多進法虫食い算探索エンジン (MUSHIKUI ENGINE)",
      "radix": 12
    }
  },
  {
    "id": "BASE2-MUL-001",
    "title": "2進法の極限『0文字覆面算』（完全空欄乗算）",
    "operation": "multiplication",
    "difficulty": "★★★☆☆ 中級",
    "hint_count": 0,
    "summary": "2進法（0と1の世界）では、盤面に数字ヒントが1つも書かれていなくても（完全な空欄□のみ）、筆算の形状と桁数制約だけで答えが一意に決定します！",
    "radix": 2,
    "problem_rows": [
      {
        "label": "multiplicand",
        "content": "       □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "multiplier",
        "content": "     × □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_mul",
        "content": "  ────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "prod_0",
        "content": "       □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "     □ □  ",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_tot",
        "content": "  ────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "total",
        "content": "   □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "solution_rows": [
      {
        "label": "multiplicand",
        "content": "       1 1",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "multiplier",
        "content": "     × 1 1",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_mul",
        "content": "  ────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "prod_0",
        "content": "       1 1",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "     1 1  ",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_tot",
        "content": "  ────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "total",
        "content": "   1 0 0 1",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "deduction_steps": [
      {
        "step_num": 1,
        "title": "2進数の基本性質と乗数の決定",
        "target_part": "乗数B",
        "deduction": "2進数では各桁は0か1のみで、最上位桁は1。乗数B(2桁)の各桁との積（部分積）が2段とも2桁で存在するため、乗数の各桁はどちらも1。",
        "revealed_value": "乗数 B = 11₂ (3)",
        "explanation": "もし乗数の一の位が0なら、第1部分積は0（または行が存在しない）となります。"
      },
      {
        "step_num": 2,
        "title": "積の桁数（4桁）による被乗数の決定",
        "target_part": "被乗数Aおよび積",
        "deduction": "2桁の2進数Aは 10₂ (2) または 11₂ (3)。もし A = 10₂ なら積は 2 × 3 = 6 = 110₂ (3桁)。積は4桁（1000₂以上）なので A = 11₂ (3) に確定！",
        "revealed_value": "11₂ × 11₂ = 1001₂",
        "explanation": "ヒント文字が0個でも、筆算の幾何学的レイアウトだけで 3 × 3 = 9 が唯一の解となります。"
      }
    ],
    "operands": {
      "A": 3,
      "B": 3,
      "tot": 9,
      "A_str": "11",
      "B_str": "11",
      "tot_str": "1001"
    },
    "uniqueness_verified": true,
    "metadata": {
      "A_len": 2,
      "B_len": 2,
      "product_lens": [
        2,
        2
      ],
      "tot_len": 4,
      "clues": {},
      "source": "多進法虫食い算探索エンジン (MUSHIKUI ENGINE)",
      "radix": 2
    }
  },
  {
    "id": "BASE2-ADD-001",
    "title": "2進法の極限『0文字加算』（繰り上がり連鎖）",
    "operation": "addition",
    "difficulty": "★★☆☆☆ 初中級",
    "hint_count": 0,
    "summary": "3桁＋1桁＝4桁という筆算の桁数配置だけで、2進法の繰り上がり連鎖により 111₂ + 1₂ = 1000₂ が確定する究極のヒント0個問題。",
    "radix": 2,
    "problem_rows": [
      {
        "label": "operand_0",
        "content": "       □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "operand_1",
        "content": "         + □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_add",
        "content": "  ──────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sum",
        "content": "     □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "solution_rows": [
      {
        "label": "operand_0",
        "content": "       1 1 1",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "operand_1",
        "content": "         + 1",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_add",
        "content": "  ──────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sum",
        "content": "     1 0 0 0",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "deduction_steps": [
      {
        "step_num": 1,
        "title": "3桁最大値と1桁最大値の加算制約",
        "target_part": "全オペランド",
        "deduction": "第1項は3桁（最大 111₂ = 7）、第2項は1桁（最大 1₂ = 1）。和は4桁（最小 1000₂ = 8）。7 + 1 = 8 以外の組み合わせは存在しない！",
        "revealed_value": "111₂ + 1₂ = 1000₂",
        "explanation": "盤面にヒントが1文字もなくても、桁数の関係から解が一意に確定します。"
      }
    ],
    "operands": {
      "operands": [
        7,
        1
      ],
      "sum": 8,
      "op_strs": [
        "111",
        "1"
      ],
      "sum_str": "1000"
    },
    "uniqueness_verified": true,
    "metadata": {
      "operand_lens": [
        3,
        1
      ],
      "sum_len": 4,
      "clues": {},
      "enforce_order": false,
      "source": "多進法虫食い算探索エンジン (MUSHIKUI ENGINE)",
      "radix": 2
    }
  },
  {
    "id": "BASE2-SUB-001",
    "title": "2進法の極限『0文字減算』（桁借り連鎖）",
    "operation": "subtraction",
    "difficulty": "★★☆☆☆ 初中級",
    "hint_count": 0,
    "summary": "4桁－3桁＝1桁という筆算の輪郭のみから、8－7＝1（1000₂－111₂＝1₂）が唯一解として導かれるヒント0個の引き算。",
    "radix": 2,
    "problem_rows": [
      {
        "label": "minuend",
        "content": "     □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "subtrahend",
        "content": "     - □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_sub",
        "content": "  ──────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "difference",
        "content": "           □",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "solution_rows": [
      {
        "label": "minuend",
        "content": "     1 0 0 0",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "subtrahend",
        "content": "     - 1 1 1",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_sub",
        "content": "  ──────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "difference",
        "content": "           1",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "deduction_steps": [
      {
        "step_num": 1,
        "title": "引かれる数・引く数・差の境界解析",
        "target_part": "全オペランド",
        "deduction": "引かれる数Aは4桁（8〜15）、引く数Bは3桁（4〜7）、差は1桁（1）。A - B = 1 より A = B + 1 ≤ 7 + 1 = 8。よって A=8, B=7 しかない。",
        "revealed_value": "1000₂ - 111₂ = 1₂",
        "explanation": "引き算の境界値解析により、全桁が一意に決定します。"
      }
    ],
    "operands": {
      "A": 8,
      "B": 7,
      "diff": 1,
      "A_str": "1000",
      "B_str": "111",
      "diff_str": "1"
    },
    "uniqueness_verified": true,
    "metadata": {
      "A_len": 4,
      "B_len": 3,
      "diff_len": 1,
      "clues": {},
      "source": "多進法虫食い算探索エンジン (MUSHIKUI ENGINE)",
      "radix": 2
    }
  },
  {
    "id": "BASE2-DIV-001",
    "title": "2進法の『0文字除算』（完全空欄長除法）",
    "operation": "division",
    "difficulty": "★★★★☆ 上級",
    "hint_count": 0,
    "summary": "数字のヒントが全くない（すべて□）2進法の筆算割り算。3段にわたる引き算の段数と桁数の構造から、21÷3＝7（10101₂÷11₂＝111₂）が一意に確定します。",
    "radix": 2,
    "problem_rows": [
      {
        "label": "quotient",
        "content": "           □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_top",
        "content": "    ┌───────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "dividend",
        "content": "□ □ │ □ □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_0",
        "content": "         □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_0",
        "content": "        ─────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_1",
        "content": "         □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "           □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_1",
        "content": "          ─────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_2",
        "content": "             □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_2",
        "content": "             □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_2",
        "content": "            ─────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "remainder",
        "content": "               0",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "solution_rows": [
      {
        "label": "quotient",
        "content": "           1 1 1",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_top",
        "content": "    ┌───────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "dividend",
        "content": "1 1 │ 1 0 1 0 1",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_0",
        "content": "         1 1",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_0",
        "content": "        ─────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_1",
        "content": "         1 0 0",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_1",
        "content": "           1 1",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_1",
        "content": "          ─────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "sub_2",
        "content": "             1 1",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "prod_2",
        "content": "             1 1",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_2",
        "content": "            ─────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "remainder",
        "content": "               0",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "deduction_steps": [
      {
        "step_num": 1,
        "title": "商の桁数と各段の商の決定",
        "target_part": "商q",
        "deduction": "商は3桁。各桁で割り算が行われて部分積が存在するため、商の各桁はすべて1（q = 111₂ = 7）。",
        "revealed_value": "商 q = 111₂ (7)",
        "explanation": "2進法では商の桁が0なら引き算を行わず次の桁を下ろすため、3段引き算があるということは商の3桁すべてが1です。"
      },
      {
        "step_num": 2,
        "title": "除数と被除数の確定",
        "target_part": "除数dおよび被除数D",
        "deduction": "除数は2桁（10₂ または 11₂）。各段で引かれる数（除数×1）は2桁。5桁の被除数を3桁の商7で割って割り切れる2桁の数は d = 11₂ = 3 のみ（3×7 = 21 = 10101₂）。",
        "revealed_value": "10101₂ ÷ 11₂ = 111₂",
        "explanation": "部分積がすべて 11₂ となり、引き算の余り推移（101₂-11₂=10₂ → 100₂-11₂=1₂ → 11₂-11₂=0）が完全に合致します。"
      }
    ],
    "operands": {
      "d": 3,
      "q": 7,
      "D": 21,
      "d_str": "11",
      "q_str": "111",
      "D_str": "10101"
    },
    "uniqueness_verified": true,
    "metadata": {
      "d_len": 2,
      "q_len": 3,
      "D_len": 5,
      "steps_info": [
        {
          "q_idx": 0,
          "bring_down_count": 3,
          "sub_dividend_len": 3,
          "product_len": 2,
          "is_last": false
        },
        {
          "q_idx": 1,
          "bring_down_count": 1,
          "sub_dividend_len": 3,
          "product_len": 2,
          "is_last": false
        },
        {
          "q_idx": 2,
          "bring_down_count": 1,
          "sub_dividend_len": 2,
          "product_len": 2,
          "is_last": true
        }
      ],
      "clues": {},
      "source": "多進法虫食い算探索エンジン (MUSHIKUI ENGINE)",
      "radix": 2
    }
  },
  {
    "id": "BASE16-SUB-001",
    "title": "16進法における『孤独の1』（減算篇）",
    "operation": "subtraction",
    "difficulty": "★★★☆☆ 中級",
    "hint_count": 1,
    "summary": "16進数で4桁－3桁＝1桁であり、差が「1」という唯一の手がかりから、4096－4095＝1（1000₁₆－FFF₁₆＝1₁₆）が一意に導かれます。",
    "radix": 16,
    "problem_rows": [
      {
        "label": "minuend",
        "content": "     □ □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "subtrahend",
        "content": "     - □ □ □",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_sub",
        "content": "  ──────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "difference",
        "content": "           1",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "solution_rows": [
      {
        "label": "minuend",
        "content": "     1 0 0 0",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "subtrahend",
        "content": "     - F F F",
        "is_line": false,
        "indent": 0,
        "row_type": "digits"
      },
      {
        "label": "line_sub",
        "content": "  ──────────",
        "is_line": true,
        "indent": 0,
        "row_type": "separator"
      },
      {
        "label": "difference",
        "content": "           1",
        "is_line": false,
        "indent": 0,
        "row_type": "result"
      }
    ],
    "deduction_steps": [
      {
        "step_num": 1,
        "title": "16進数の桁境界と差の1",
        "target_part": "全オペランド",
        "deduction": "引く数Bは16進数3桁（最大 FFF₁₆ = 4095）。引かれる数Aは4桁（最小 1000₁₆ = 4096）。差が1であるため、A = B + 1 ≤ 4095 + 1 = 4096。",
        "revealed_value": "1000₁₆ - FFF₁₆ = 1₁₆",
        "explanation": "16進数の桁上がりの境界によって、たった1つのヒント「1」から全桁が確定します。"
      }
    ],
    "operands": {
      "A": 4096,
      "B": 4095,
      "diff": 1,
      "A_str": "1000",
      "B_str": "FFF",
      "diff_str": "1"
    },
    "uniqueness_verified": true,
    "metadata": {
      "A_len": 4,
      "B_len": 3,
      "diff_len": 1,
      "clues": {
        "diff": {
          "0": 1
        }
      },
      "source": "多進法虫食い算探索エンジン (MUSHIKUI ENGINE)",
      "radix": 16
    }
  }
];
