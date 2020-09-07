let budget = prompt("所持金を数字で入力してください");
budget = parseFloat(budget);
if (budget >= 1500) {
    alert("ピザを注文しました");
} else if (budget >= 500) {
    alert("ポテトを注文しました");
} else {
    alert("節約、節約...");
}