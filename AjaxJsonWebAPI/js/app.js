/*document.getElementById('btn').onclick = function() {
  let scrp = document.createElement('script');
  scrp.charset = 'utf-8';
  scrp.src = 'https://zipcloud.ibsnet.co.jp/api/search?' + '#zipcode' + '&callback=jyusyo';
  document.body.appendChild(scrp);
};

function jyusyo (data) {
  if (data.results) {
    getData(data.results[0]);
    } else {
      alert('該当データが見つかりません');
  };
};*/

$(function(){
  $('#btn').on('click', () => {
    $.ajax({
      url: "https://zipcloud.ibsnet.co.jp/api/search?zipcode=" + $('#zipcode').val(),
      dataType: 'jsonp',
    }).done((data) => {
      if (data.results) {
        getData(data.results[0]);
      } else {
        alert('該当データが見つかりません');
      }
    }).fail((data) => {
      alert('通信に失敗しました');
    });
  });

  function getData(data) {
    $('#prefecture').val(data.address1);
    $('#city').val(data.address2);
    $('#address').val(data.address3);
  }

  $('#zipcode').on('keyup', function(event){

		// 郵便番号の入力が空になった場合
		if ($(this).val() == '') {
			$('#prefecture').val('');	// 都道府県を削除する
      $('#city').val('');	// 市区町村を削除する
      $('#address').val('');	// 住所を削除する
		}
	});

});