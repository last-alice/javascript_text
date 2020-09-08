/* プログラムで使用する変数の設定**********/
// フォームの要素を取得
let button = document.getElementById('button');
let form = document.getElementById('form');

/* イベント処理***************/
// お問い合わせボタンを押した時
button.addEventListener('click', function() {
  // フォームを表示
  form.style.display = 'block';
});