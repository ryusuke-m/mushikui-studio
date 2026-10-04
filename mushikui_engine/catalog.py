"""
Master Catalog of Curated Minimal-Clue Mushikuizan Puzzles.
Contains 26+ rigorously verified puzzles across Division, Multiplication, Addition, and Subtraction.
All puzzles are guaranteed mathematically unique by Z3 SMT solver verification.
"""

from typing import List
from .models import Puzzle, Difficulty, DeductionStep
from .generators.division_gen import DivisionGenerator
from .generators.multiplication_gen import MultiplicationGenerator
from .generators.addition_gen import AdditionGenerator
from .generators.subtraction_gen import SubtractionGenerator

def get_curated_puzzles() -> List[Puzzle]:
    puzzles = []

    # =========================================================================
    # 【第1部：割り算（除算）篇】
    # =========================================================================

    # DIV-001: オドリングの「孤独の7」
    puzzles.append(DivisionGenerator.create_puzzle(
        puzzle_id="DIV-001",
        title="E・F・オドリングの不朽の名作『孤独の7』",
        difficulty=Difficulty.LEVEL_5,
        d=124, q=97809, D=12128316,
        clues={'q': {1: 7}},
        summary="1922年に発表された数学パズル史上の最高傑作。提示された数字は商の「7」ただ1つのみで、全32個の空欄が純粋な論理で一意に確定します。",
        source="E. F. Odling (Strand Magazine, 1922); 佐野昌一『虫喰ひ算大會』例題七",
        deduction_steps=[
            DeductionStep(
                step_num=1,
                title="二重桁下げによる商の0の確定",
                target_part="商の十の位",
                deduction="第4回目の引き算において、上から一度に2桁下りてきている（11では割れず1116で割っている）。",
                revealed_value="商の十位 = 0",
                explanation="通常の筆算では1桁ずつ下ろしますが、割れない場合は商に0を立てて次の桁を下ろすため、十位は0しかあり得ません。"
            ),
            DeductionStep(
                step_num=2,
                title="商の7と部分積の桁数による除数の絞り込み",
                target_part="除数の百の位・商の万位と一位",
                deduction="除数(3桁)×7が3桁である一方、商の万位と一位による積は4桁になっている。",
                revealed_value="除数の百位 = 1、商の万位・一位 ∈ {8, 9}",
                explanation="もし除数の百位が2以上なら 200×7=1400 (4桁) となり矛盾。よって除数は1□□。また7倍で3桁なのに万位・一位で4桁になるため、万位・一位は8または9です。"
            ),
            DeductionStep(
                step_num=3,
                title="引き算の残り桁数からの除数・商の確定",
                target_part="除数全体および商全体",
                deduction="4桁から3桁を引いた残りが2桁下がり、商の百位の積(3桁)との整合性を検証する。",
                revealed_value="除数 = 124, 商 = 97809, 被除数 = 12,128,316",
                explanation="124×8=992 (3桁), 124×9=1116 (4桁), 124×7=868 (3桁) となり、すべての段の桁数・引き算条件が完全に合致します。"
            )
        ]
    ))

    # DIV-002: もうひとつの孤独の7（千位の7）
    puzzles.append(DivisionGenerator.create_puzzle(
        puzzle_id="DIV-002",
        title="孤独の7・第二章「千位の孤独」",
        difficulty=Difficulty.LEVEL_4,
        d=124, q=7809, D=968316,
        clues={'q': {0: 7}},
        summary="商の先頭（千の位）に「7」だけが残された割り算。4桁商（7□0□）の構造から除数124が一意に特定されます。",
        source="オリジナル生成 (MUSHIKUI ENGINE)",
        deduction_steps=[
            DeductionStep(
                step_num=1,
                title="先頭積の桁数",
                target_part="除数の範囲",
                deduction="除数(3桁)×7が3桁(□□□)であるため、除数は 100〜142 に限定される。",
                revealed_value="除数 ∈ [100, 142]",
                explanation="143×7 = 1001 (4桁) となるため、3桁に収まる上限は142です。"
            ),
            DeductionStep(
                step_num=2,
                title="二段目の4桁積と二重桁下げ",
                target_part="商の百の位・十の位",
                deduction="商の百位×除数は3桁だが、末尾の一の位×除数は4桁。途中に二重桁下げがあるため十位は0。",
                revealed_value="商 = 7809, 除数 = 124",
                explanation="商の十位が0で一の位が9となり、968,316 ÷ 124 = 7809 が唯一の解となります。"
            )
        ]
    ))

    # DIV-003: 孤独の7（十位の7）
    puzzles.append(DivisionGenerator.create_puzzle(
        puzzle_id="DIV-003",
        title="孤独の7・第三章「十位の孤独」",
        difficulty=Difficulty.LEVEL_4,
        d=124, q=8079, D=1001796,
        clues={'q': {2: 7}},
        summary="商が4桁（□07□）で、十の位にのみ「7」が置かれた割り算。7倍した積の桁数と末尾の4桁積の連携が鍵です。",
        source="オリジナル生成 (MUSHIKUI ENGINE)",
        deduction_steps=[
            DeductionStep(
                step_num=1,
                title="商の十位の7と二重桁下げ",
                target_part="百の位の0と除数",
                deduction="最初の引き算後に2桁下りているため百位は0。十位の7による積は3桁(□□□)。",
                revealed_value="商 = 8079, 除数 = 124",
                explanation="1001796 ÷ 124 = 8079。7倍で868、末尾の9倍で1116となり、すべての段の桁数が合致。"
            )
        ]
    ))

    # DIV-004: 孤独の8（千位の8）
    puzzles.append(DivisionGenerator.create_puzzle(
        puzzle_id="DIV-004",
        title="孤独の8・割り算篇「千位の8」",
        difficulty=Difficulty.LEVEL_4,
        d=124, q=8809, D=1092316,
        clues={'q': {0: 8}},
        summary="商の千の位に「8」が1つだけ書かれた割り算。8倍で3桁、末尾の9倍で4桁という極小マージンを突きます。",
        source="オリジナル生成 (MUSHIKUI ENGINE)",
        deduction_steps=[
            DeductionStep(
                step_num=1,
                title="8倍して3桁になる除数の範囲",
                target_part="除数の上限",
                deduction="除数(3桁)×8が3桁(□□□)なので、除数は最大でも 124。",
                revealed_value="除数 ≤ 124 (125×8=1000)",
                explanation="125×8=1000で4桁になるため、除数は124以下でなければなりません。"
            ),
            DeductionStep(
                step_num=2,
                title="末尾の一の位による4桁積",
                target_part="除数の下限と一意確定",
                deduction="末尾の商×除数は4桁(1000以上)。124×9=1116のみが成立可能。",
                revealed_value="除数 = 124, 商 = 8809",
                explanation="被除数は 1,092,316 と一意に決まります。"
            )
        ]
    ))

    # DIV-005: 孤独の8（百位の8）
    puzzles.append(DivisionGenerator.create_puzzle(
        puzzle_id="DIV-005",
        title="孤独の8・割り算篇「百位の8」",
        difficulty=Difficulty.LEVEL_4,
        d=124, q=9809, D=1216316,
        clues={'q': {1: 8}},
        summary="商の百の位に「8」がただ1つ。先頭積が4桁、二段目が3桁、末尾が4桁という非対称性が解を1つに縛ります。",
        source="オリジナル生成 (MUSHIKUI ENGINE)",
        deduction_steps=[
            DeductionStep(
                step_num=1,
                title="先頭の4桁積と百位の3桁積",
                target_part="商の千位と百位",
                deduction="百位の8による積は3桁、千位による積は4桁。千位は9しかあり得ない。",
                revealed_value="商の千位 = 9, 除数 = 124",
                explanation="1216316 ÷ 124 = 9809 が唯一適合します。"
            )
        ]
    ))

    # DIV-006: 孤独の8（一位の8）
    puzzles.append(DivisionGenerator.create_puzzle(
        puzzle_id="DIV-006",
        title="孤独の8・割り算篇「一位の8」",
        difficulty=Difficulty.LEVEL_4,
        d=124, q=9808, D=1216192,
        clues={'q': {3: 8}},
        summary="商の末尾（一の位）に「8」だけが与えられた問題。商は9808、除数は124に確定。",
        source="オリジナル生成 (MUSHIKUI ENGINE)",
        deduction_steps=[
            DeductionStep(
                step_num=1,
                title="末尾8による割り切れと除数",
                target_part="最後の引き算",
                deduction="最後は除数×8でちょうど割り切れて余り0になる。積の桁数は3桁(□□□)。",
                revealed_value="除数 = 124, 商 = 9808",
                explanation="1,216,192 ÷ 124 = 9808。"
            )
        ]
    ))

    # DIV-007: 孤独の8（2桁商の割り算）
    puzzles.append(DivisionGenerator.create_puzzle(
        puzzle_id="DIV-007",
        title="孤独の8・手軽な2桁商「112の妙技」",
        difficulty=Difficulty.LEVEL_3,
        d=112, q=89, D=9968,
        clues={'q': {0: 8}},
        summary="4桁÷3桁＝2桁（8□）のコンパクトな割り算。商の十位「8」だけで全体が美しく解けます。",
        source="オリジナル生成 (MUSHIKUI ENGINE)",
        deduction_steps=[
            DeductionStep(
                step_num=1,
                title="8倍して3桁、次の商で4桁",
                target_part="除数の範囲",
                deduction="除数×8が3桁(□□□)なので除数≤124。一方、一の位を掛けると4桁(□□□□)になるため一の位は9、かつ除数×9≥1000。",
                revealed_value="除数 ∈ [112, 124]",
                explanation="1000 ÷ 9 = 111.1... より除数は112以上。"
            ),
            DeductionStep(
                step_num=2,
                title="被除数の4桁制約からの確定",
                target_part="除数と被除数",
                deduction="被除数 D = 除数 × 89 が4桁(≤ 9999)。112 × 89 = 9968 のみが適合！",
                revealed_value="112 × 89 = 9968",
                explanation="113 × 89 = 10057 で5桁になってしまうため、112しか許されません。"
            )
        ]
    ))

    # DIV-008: 孤独の9（2桁÷2桁）
    puzzles.append(DivisionGenerator.create_puzzle(
        puzzle_id="DIV-008",
        title="孤独の9「ゾロ目の小宇宙」",
        difficulty=Difficulty.LEVEL_2,
        d=11, q=99, D=1089,
        clues={'q': {1: 9}},
        summary="商の一の位に「9」だけが提示された、初学者にも解きやすい2桁÷2桁の割り算覆面算。",
        source="オリジナル生成 (MUSHIKUI ENGINE)",
        deduction_steps=[
            DeductionStep(
                step_num=1,
                title="2桁の除数と2桁の積",
                target_part="除数の特定",
                deduction="除数(2桁)×9が2桁(□□)なので、除数は最大でも 11 (11×9=99)。2桁なので除数は10か11。",
                revealed_value="除数 ∈ {10, 11}",
                explanation="10×99=990 (3桁) に対し、被除数は4桁(□□□□)なので除数は11しかありません。"
            ),
            DeductionStep(
                step_num=2,
                title="全体の完成",
                target_part="商と被除数",
                deduction="11 × 99 = 1089。筆算の各段がすべて合致します。",
                revealed_value="1089 ÷ 11 = 99",
                explanation="一段目99、二段目99で余り0。"
            )
        ]
    ))

    # DIV-009: 孤独の7（除数末尾の7）
    puzzles.append(DivisionGenerator.create_puzzle(
        puzzle_id="DIV-009",
        title="孤独の7・除数篇「末尾の七」",
        difficulty=Difficulty.LEVEL_3,
        d=497, q=1202, D=597394,
        clues={'d': {2: 7}},
        summary="除数の末尾（一の位）に「7」だけが示された割り算。除数□□7と商の0が織りなす整然たる論理。",
        source="オリジナル生成 (MUSHIKUI ENGINE)",
        deduction_steps=[
            DeductionStep(
                step_num=1,
                title="商の二重桁下げと各段の桁数",
                target_part="除数497の確定",
                deduction="商の百位が2、十位が0。除数末尾の7と各段の引き算から497が一意に定まる。",
                revealed_value="除数 = 497, 商 = 1202",
                explanation="597,394 ÷ 497 = 1202。"
            )
        ]
    ))

    # DIV-010: 奇跡の二文字「2と9」
    puzzles.append(DivisionGenerator.create_puzzle(
        puzzle_id="DIV-010",
        title="奇跡の二文字「2と9のシンメトリー」",
        difficulty=Difficulty.LEVEL_3,
        d=102, q=999, D=101898,
        clues={'d': {2: 2}, 'q': {0: 9}},
        summary="6桁÷3桁＝3桁。ヒントは除数末尾の「2」と商先頭の「9」の2文字のみ。驚くほど美しい対称解。",
        source="オリジナル生成 (MUSHIKUI ENGINE)",
        deduction_steps=[
            DeductionStep(
                step_num=1,
                title="9倍して3桁になる除数",
                target_part="除数の確定",
                deduction="除数(□□2) × 9 が3桁(≤999)なので、除数は ≤ 111。末尾が2なので 102 に即時確定！",
                revealed_value="除数 = 102",
                explanation="末尾2で111以下の3桁の整数は 102 しか存在しません！"
            ),
            DeductionStep(
                step_num=2,
                title="商の全桁の特定",
                target_part="商の残り桁",
                deduction="除数が102と決まれば、各段の4桁引き算を満たす商は 999 のみ。",
                revealed_value="商 = 999, 被除数 = 101,898",
                explanation="101898 ÷ 102 = 999。"
            )
        ]
    ))

    # =========================================================================
    # 【第2部：掛け算（乗算）篇】
    # =========================================================================

    # MUL-001: 名作「孤独の8」掛け算
    puzzles.append(MultiplicationGenerator.create_puzzle(
        puzzle_id="MUL-001",
        title="名作「孤独の8」掛け算",
        difficulty=Difficulty.LEVEL_4,
        A=112, B=89,
        clues={'B': {0: 8}},
        summary="下平和夫『新数学事典』等にも取り上げられた乗算覆面算の金字塔。与えられた数字は乗数の十位「8」ただ1つ！",
        source="下平和夫『新数学事典』",
        deduction_steps=[
            DeductionStep(
                step_num=1,
                title="部分積の桁数の違い",
                target_part="乗数の一の位",
                deduction="被乗数(3桁)×8 は3桁なのに、被乗数×(一の位) は4桁になっている。",
                revealed_value="乗数の一の位 = 9",
                explanation="8倍で3桁なのに、それより大きい4桁になる数字は 9 しかありません。"
            ),
            DeductionStep(
                step_num=2,
                title="被乗数の範囲の限定",
                target_part="被乗数の上限と下限",
                deduction="被乗数×8 ≤ 999 より 被乗数 ≤ 124。一方、被乗数×9 ≥ 1000 より 被乗数 ≥ 112。",
                revealed_value="被乗数 ∈ [112, 124]",
                explanation="1000 ÷ 9 = 111.1... より、112以上です。"
            ),
            DeductionStep(
                step_num=3,
                title="合計積が4桁であることからの確定",
                target_part="被乗数の一意確定",
                deduction="全体の積 (被乗数 × 89) が4桁(≤ 9999)である。",
                revealed_value="被乗数 = 112 (112 × 89 = 9968)",
                explanation="113 × 89 = 10057 (5桁) となりオーバー！ したがって112しかあり得ません。"
            )
        ]
    ))

    # MUL-002: 二つのヒント「九十九の壁」
    puzzles.append(MultiplicationGenerator.create_puzzle(
        puzzle_id="MUL-002",
        title="二つのヒント「九十九の壁」",
        difficulty=Difficulty.LEVEL_3,
        A=102, B=99,
        clues={'A': {2: 2}, 'B': {0: 9}},
        summary="被乗数末尾の「2」と乗数の先頭「9」の2ヒント。積が10000を超えて5桁になる境界条件を利用した鮮やかな名作。",
        source="オリジナル生成 (MUSHIKUI ENGINE)",
        deduction_steps=[
            DeductionStep(
                step_num=1,
                title="部分積の桁数と被乗数",
                target_part="被乗数の確定",
                deduction="被乗数は末尾2(□□2)。被乗数×9が3桁なので被乗数≤111。よって被乗数は102に即確定！",
                revealed_value="被乗数 = 102",
                explanation="111以下の末尾2の3桁数は102しかありません。"
            ),
            DeductionStep(
                step_num=2,
                title="積が5桁になる条件",
                target_part="乗数の確定",
                deduction="102 × B ≥ 10000 (5桁) より B ≥ 98.03。Bは9□なので 99 しかない！",
                revealed_value="乗数 = 99, 総積 = 10,098",
                explanation="102 × 99 = 10,098。"
            )
        ]
    ))

    # MUL-003: 2桁乗算「11 × 91」
    puzzles.append(MultiplicationGenerator.create_puzzle(
        puzzle_id="MUL-003",
        title="2桁乗算の孤独な乗数「91」",
        difficulty=Difficulty.LEVEL_2,
        A=11, B=91,
        clues={'B': {0: 9, 1: 1}},
        summary="乗数が「91」と明かされているだけの2桁×2桁虫食い算。部分積と総積の桁数だけで被乗数11が確定します。",
        source="オリジナル生成 (MUSHIKUI ENGINE)",
        deduction_steps=[
            DeductionStep(
                step_num=1,
                title="部分積の桁数から被乗数の上限",
                target_part="被乗数の上限",
                deduction="被乗数 × 9 が2桁(≤ 99)なので、被乗数は 11 以下。",
                revealed_value="被乗数 ≤ 11",
                explanation="12×9 = 108 で3桁になってしまいます。"
            ),
            DeductionStep(
                step_num=2,
                title="総積の4桁から確定",
                target_part="被乗数の下限と確定",
                deduction="被乗数 × 91 が4桁(≥ 1000)なので、被乗数 ≥ 11。したがって被乗数は11！",
                revealed_value="11 × 91 = 1001",
                explanation="10 × 91 = 910 で3桁なので、11しかあり得ません。"
            )
        ]
    ))

    # MUL-004: 2桁乗算「12 × 89」
    puzzles.append(MultiplicationGenerator.create_puzzle(
        puzzle_id="MUL-004",
        title="末尾2と80台の乗算",
        difficulty=Difficulty.LEVEL_2,
        A=12, B=89,
        clues={'A': {1: 2}, 'B': {0: 8}},
        summary="被乗数が「□2」、乗数が「8□」。部分積の1段目が3桁、2段目が2桁という反転から解が一意に決まります。",
        source="オリジナル生成 (MUSHIKUI ENGINE)",
        deduction_steps=[
            DeductionStep(
                step_num=1,
                title="2段目の2桁積から被乗数の確定",
                target_part="被乗数",
                deduction="被乗数(□2) × 8 が2桁(≤99)なので被乗数は12以下。末尾2より被乗数は12に確定！",
                revealed_value="被乗数 = 12",
                explanation="22×8 = 176 で3桁になるため、12しかありません。"
            ),
            DeductionStep(
                step_num=2,
                title="1段目の3桁積から乗数の確定",
                target_part="乗数の一の位",
                deduction="12 × (一の位) が3桁(≥100)になるためには、一の位は 9 (12×9=108) のみ。",
                revealed_value="乗数 = 89, 総積 = 1068",
                explanation="12 × 89 = 1068。"
            )
        ]
    ))

    # MUL-005: ミニマル乗算「12 × 99」
    puzzles.append(MultiplicationGenerator.create_puzzle(
        puzzle_id="MUL-005",
        title="ゾロ目乗算「12の魔法」",
        difficulty=Difficulty.LEVEL_1,
        A=12, B=99,
        clues={'A': {0: 1, 1: 2}},
        summary="被乗数が「12」と分かっている基本問題。部分積が両方とも3桁で総積が4桁になる条件から99が導かれます。",
        source="オリジナル生成 (MUSHIKUI ENGINE)",
        deduction_steps=[
            DeductionStep(
                step_num=1,
                title="部分積が3桁になる乗数の桁",
                target_part="乗数の各桁",
                deduction="12に掛けて3桁(100以上)になる数字は 9 (12×9=108) のみ。",
                revealed_value="乗数 = 99",
                explanation="12×8=96 (2桁) なので、各桁とも9でなければなりません。"
            )
        ]
    ))

    # =========================================================================
    # 【第3部：足し算（加算）篇】
    # =========================================================================

    # ADD-001: 「孤独の1」足し算
    puzzles.append(AdditionGenerator.create_puzzle(
        puzzle_id="ADD-001",
        title="「孤独の1」足し算",
        difficulty=Difficulty.LEVEL_1,
        operands=[999, 1],
        clues={'op_1': {0: 1}},
        summary="3桁＋1桁＝4桁。足す数が「1」としか書かれていないのに、999＋1＝1000が一意に確定する究極のミニマル足し算。",
        source="オリジナル生成 (MUSHIKUI ENGINE)",
        deduction_steps=[
            DeductionStep(
                step_num=1,
                title="4桁への繰り上がり境界",
                target_part="1つ目の数",
                deduction="3桁の数に 1 を足して4桁(1000以上)になる数は、3桁の最大数 999 しかない！",
                revealed_value="1つ目の数 = 999, 和 = 1000",
                explanation="998 + 1 = 999 (3桁) なので、999以外に解は存在しません。"
            )
        ]
    ))

    # ADD-002: 「千への到達」
    puzzles.append(AdditionGenerator.create_puzzle(
        puzzle_id="ADD-002",
        title="「千への到達（0と1の手がかり）」",
        difficulty=Difficulty.LEVEL_2,
        operands=[901, 99],
        clues={'op_0': {1: 0, 2: 1}},
        summary="1つ目の数が「□01」、2つ目の数が「□□」、和が「□□□□」。わずか2個のヒントから1000への到達が一意に定まります。",
        source="オリジナル生成 (MUSHIKUI ENGINE)",
        deduction_steps=[
            DeductionStep(
                step_num=1,
                title="最大値からの挟み撃ち",
                target_part="両方の数",
                deduction="□01 の最大値は 901。2桁の最大値は 99。901 + 99 = 1000 でちょうど4桁の最小値に届く！",
                revealed_value="901 + 99 = 1000",
                explanation="もし1つ目が801以下、あるいは2つ目が98以下なら和が999以下になり4桁になり得ません。よって 901 + 99 = 1000 が唯一解です。"
            )
        ]
    ))

    # ADD-003: 「九十八の残響」
    puzzles.append(AdditionGenerator.create_puzzle(
        puzzle_id="ADD-003",
        title="「九十八の残響」",
        difficulty=Difficulty.LEVEL_3,
        operands=[999, 99],
        clues={'sum': {2: 9, 3: 8}},
        summary="3桁＋2桁＝□□98。和の下2桁が「98」であることだけを手がかりに、すべての空欄が確定するエレガントな問題。",
        source="オリジナル生成 (MUSHIKUI ENGINE)",
        deduction_steps=[
            DeductionStep(
                step_num=1,
                title="3桁＋2桁の取り得る最大値",
                target_part="和の全貌",
                deduction="3桁最大999、2桁最大99。和の最大値は 999 + 99 = 1098。和は4桁で末尾98なので 1098 確定！",
                revealed_value="和 = 1098",
                explanation="1098以下の4桁で末尾98の数は 1098 しかありません。"
            ),
            DeductionStep(
                step_num=2,
                title="加数の特定",
                target_part="2つの数",
                deduction="最大値 1098 を達成する組み合わせは 999 + 99 のみ。",
                revealed_value="999 + 99 = 1098",
                explanation="どちらかが1でも小さければ1098に届きません。"
            )
        ]
    ))

    # ADD-004: 繰り上がり連鎖「909の加算」
    puzzles.append(AdditionGenerator.create_puzzle(
        puzzle_id="ADD-004",
        title="繰り上がり連鎖「909の加算」",
        difficulty=Difficulty.LEVEL_2,
        operands=[909, 99],
        clues={'op_0': {1: 0}, 'sum': {3: 8}},
        summary="1つ目の十位が「0」、和の一位が「8」。繰り上がりの連鎖により 909 + 99 = 1008 が一意に決まります。",
        source="オリジナル生成 (MUSHIKUI ENGINE)",
        deduction_steps=[
            DeductionStep(
                step_num=1,
                title="一の位の繰り上がりと十の位の0",
                target_part="全体の復元",
                deduction="一の位の和が末尾8で、十の位が0。4桁に繰り上がる条件から 909 + 99 = 1008 に一意決定。",
                revealed_value="909 + 99 = 1008",
                explanation="計算の一致を完全に満たす唯一の解です。"
            )
        ]
    ))

    # ADD-005: 1090の壁
    puzzles.append(AdditionGenerator.create_puzzle(
        puzzle_id="ADD-005",
        title="「千九十の壁」",
        difficulty=Difficulty.LEVEL_2,
        operands=[991, 99],
        clues={'op_0': {2: 1}, 'sum': {2: 9}},
        summary="3桁＋2桁＝□□90。1つ目の末尾が「1」という2つのヒントから、991＋99＝1090が導かれます。",
        source="オリジナル生成 (MUSHIKUI ENGINE)",
        deduction_steps=[
            DeductionStep(
                step_num=1,
                title="末尾1と繰り上がり",
                target_part="2つ目の数の一の位",
                deduction="1 + □ = 10 (末尾0) より、2つ目の数の一位は 9。",
                revealed_value="2つ目の一位 = 9, 和 = 1090",
                explanation="991 + 99 = 1090。"
            )
        ]
    ))

    # =========================================================================
    # 【第4部：引き算（減算）篇】
    # =========================================================================

    # SUB-001: 「孤独の1」引き算（答えが1）
    puzzles.append(SubtractionGenerator.create_puzzle(
        puzzle_id="SUB-001",
        title="「孤独の1」引き算（至高の差1）",
        difficulty=Difficulty.LEVEL_2,
        A=1000, B=999,
        clues={'diff': {0: 1}},
        summary="4桁－3桁＝1。答えの欄に「1」がポツンと置かれているだけなのに、1000－999＝1が必然として導かれます。",
        source="オリジナル生成 (MUSHIKUI ENGINE)",
        deduction_steps=[
            DeductionStep(
                step_num=1,
                title="4桁と3桁の差が1になる条件",
                target_part="引かれる数と引く数",
                deduction="引かれる数(4桁) ≥ 1000。引く数(3桁) ≤ 999。差が1になるのは最小4桁と最大3桁の境界のみ！",
                revealed_value="1000 - 999 = 1",
                explanation="1001 - 3桁 は必ず2以上になり、999以下の引く数で差が1になるのは 1000 - 999 のみです。"
            )
        ]
    ))

    # SUB-002: 「孤独の1」引き算（引く数の末尾が1）
    puzzles.append(SubtractionGenerator.create_puzzle(
        puzzle_id="SUB-002",
        title="「孤独の1」引き算（末尾一の宿命）",
        difficulty=Difficulty.LEVEL_2,
        A=1000, B=991,
        clues={'B': {2: 1}},
        summary="4桁－3桁＝1桁。引く数が「□□1」であることだけが与えられた、極めて美しい引き算覆面算。",
        source="オリジナル生成 (MUSHIKUI ENGINE)",
        deduction_steps=[
            DeductionStep(
                step_num=1,
                title="4桁－3桁＝1桁の範囲の狭さ",
                target_part="引く数の百位と十位",
                deduction="引かれる数 ≥ 1000、差 ≤ 9。したがって引く数は 1000 - 9 = 991 以上でなければならない！",
                revealed_value="引く数 ≥ 991",
                explanation="4桁から3桁を引いて1桁にするには、引く数は991〜999の範囲に限定されます。"
            ),
            DeductionStep(
                step_num=2,
                title="末尾1との合致",
                target_part="引く数の確定",
                deduction="991〜999の中で末尾が1の数は 991 のみ！ よって引く数は 991 に確定。",
                revealed_value="引く数 = 991, 引かれる数 = 1000, 差 = 9",
                explanation="991に1桁(1〜9)を足して4桁(1000以上)になるのは 991 + 9 = 1000 のみです。"
            )
        ]
    ))

    # SUB-003: 「孤独の8」引き算
    puzzles.append(SubtractionGenerator.create_puzzle(
        puzzle_id="SUB-003",
        title="「孤独の8」引き算",
        difficulty=Difficulty.LEVEL_2,
        A=1008, B=999,
        clues={'A': {3: 8}},
        summary="4桁－3桁＝1桁。引かれる数の末尾が「8（□□□8）」とだけ提示された驚異の一意解パズル。",
        source="オリジナル生成 (MUSHIKUI ENGINE)",
        deduction_steps=[
            DeductionStep(
                step_num=1,
                title="引かれる数の上限",
                target_part="引かれる数",
                deduction="引く数(3桁) ≤ 999、差(1桁) ≤ 9 より、引かれる数 ≤ 999 + 9 = 1008。",
                revealed_value="引かれる数 ≤ 1008",
                explanation="4桁で末尾8かつ1008以下の数は、なんと 1008 そのものしかありません！"
            ),
            DeductionStep(
                step_num=2,
                title="引く数と差の確定",
                target_part="引く数と差",
                deduction="1008 － (3桁) ＝ (1桁) を満たす3桁は 999 のみ（1008 - 999 = 9）。",
                revealed_value="1008 - 999 = 9",
                explanation="引く数が998以下だと差が10以上（2桁）になってしまいます。"
            )
        ]
    ))

    # SUB-004: 繰り下がり二重連鎖
    puzzles.append(SubtractionGenerator.create_puzzle(
        puzzle_id="SUB-004",
        title="繰り下がり二重連鎖「901の減算」",
        difficulty=Difficulty.LEVEL_3,
        A=1000, B=901,
        clues={'B': {1: 0, 2: 1}},
        summary="4桁－□01＝□□。引く数の下2桁が「01」という情報から、千からの引き算1000－901＝99が確定します。",
        source="オリジナル生成 (MUSHIKUI ENGINE)",
        deduction_steps=[
            DeductionStep(
                step_num=1,
                title="引く数と差の桁数",
                target_part="引く数の百位",
                deduction="4桁から引いて2桁(≤99)になるためには、引く数は 1000 - 99 = 901 以上。よって引く数は 901 に確定！",
                revealed_value="引く数 = 901",
                explanation="百位は9しかあり得ません。"
            ),
            DeductionStep(
                step_num=2,
                title="引かれる数と差の確定",
                target_part="引かれる数と差",
                deduction="901に2桁(最大99)を足して4桁(1000以上)にするには 901 + 99 = 1000 しかない！",
                revealed_value="1000 - 901 = 99",
                explanation="すべて一意に確定します。"
            )
        ]
    ))

    # SUB-005: 99の壁（引き算）
    puzzles.append(SubtractionGenerator.create_puzzle(
        puzzle_id="SUB-005",
        title="「九十九の壁（減算篇）」",
        difficulty=Difficulty.LEVEL_3,
        A=1090, B=991,
        clues={'A': {2: 9}, 'B': {2: 1}},
        summary="引かれる数の十位が「9」、引く数の末尾が「1」。差が2桁という条件がパズルを縛ります。",
        source="オリジナル生成 (MUSHIKUI ENGINE)",
        deduction_steps=[
            DeductionStep(
                step_num=1,
                title="一の位の繰り下がりと十の位",
                target_part="全体の特定",
                deduction="4桁-3桁=2桁で、引かれる数が□□9□、引く数が□□1を満たす整数解は 1090 - 991 = 99 のみ。",
                revealed_value="1090 - 991 = 99",
                explanation="1090 - 991 = 99。"
            )
        ]
    ))

    # SUB-006: 1008からの減算
    puzzles.append(SubtractionGenerator.create_puzzle(
        puzzle_id="SUB-006",
        title="「千八からの減算」",
        difficulty=Difficulty.LEVEL_3,
        A=1008, B=909,
        clues={'A': {3: 8}, 'B': {1: 0}},
        summary="引かれる数の末尾が「8」、引く数の十位が「0」。差が2桁（99）になる唯一の組み合わせ。",
        source="オリジナル生成 (MUSHIKUI ENGINE)",
        deduction_steps=[
            DeductionStep(
                step_num=1,
                title="差が2桁になる境界条件",
                target_part="引く数と引かれる数",
                deduction="引かれる数が1008で、引く数が909のとき、差はちょうど99。",
                revealed_value="1008 - 909 = 99",
                explanation="一意に確定します。"
            )
        ]
    ))

    return puzzles
