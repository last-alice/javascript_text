// 体重の数値を得る
let weight;
weight = prompt("BMIを測定します。まずはあなたの体重（kg）を入力してください");
// 身長の数値を得る
let height;
height = prompt("BMIを測定します。次にあなたの身長（m）を入力してください");
let bmi = weight / (height * height);
let massage = "あなたのBMIは 「" + bmi + "」です" ;
alert(massage);