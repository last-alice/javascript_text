/**document.getElementById("nav-toggle").onclick = function(){
  document.querySelector('html').classList.toggle('open');
} */

// ボタンを押したとき
function navToggle () {
// ボタンの要素取得
  let tog = document.getElementById('nav-toggle');
// 開閉するリストの要素
  let lis = document.getElementById('nav-list');
// 開閉ボタンの現在のクラスを取得と追加
  let togBtnClass = tog.getAttribute('class');
// 最初の表示ボタンを消すための取得
  let sta = document.querySelector('i');
// 条件分岐
// close
  if(togBtnClass == 'nav-toggle') {
    tog.classList.remove('close'); // 閉じている状態のを削除
    lis.classList.remove('close');

    tog.classList.add('open'); // 開いている状態のを付与
    lis.classList.add('open');

    sta.remove();
  } else {
    tog.classList.remove('open'); // 開いている状態のを削除
    lis.classList.remove('open');

    tog.classList.add('close'); // 閉じている状態のを付与
    lis.classList.add('close');
  }
}

document.getElementById('nav-toggle').onclick = navToggle;
// for文書けば繰り返しできるけど、後回し */