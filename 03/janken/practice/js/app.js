// じゃんけんの手の番号を指定
const GU = 1;
const CHOKI = 2;
const PA = 3;

// じゃんけんの入力ダイアログボックスを表示
let hum = prompt("半角数字で1〜3の数字を入力してください。\n\n" + GU + ":グー\n" + CHOKI + ":チョキ\n" + PA + ":パー");
hum = parseInt(hum, 10);

// 入力値のチェック
if (hum !== GU && hum !== CHOKI && hum !== PA) {
    // 入力値が不適切な場合
    alert("入力値をうまく認識できませんでした。ブラウザを再読込すると、もう一度挑戦できます。");
} else {

    // コンピューターの手を決める
    let com = Math.floor(Math.random() * 3) + 1;

    // コンピューターの手の名前
    let comHandName = "";
    switch (com) {
        case GU:
            comHandName = "グー";
            break;
        case CHOKI:
            comHandName = "チョキ";
            break;
        case PA:
            comHandName = "パー";
            break;
    }
}