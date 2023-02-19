$(function(){

	/*$('#header').load('./header.html',function(){
		// $('.title').text('家居生活 ｜ 春夏换新 ｜ 收纳日用');
	});*/
	// 返回顶部
	$('.return').on('click', move); //绑定点击事件，也可写成：$("#backtop").click(function(){  //代码   })

	$(window).on('scroll', function() {
		checkposition($('#header').height());
	});

	function move() {
		$('html,body').animate({
			scrollTop: 0
		}, 800);
	}

	function checkposition(H) {
		if ($(window).scrollTop() > H) {
			$('.return').fadeIn();
		} else {
			$('.return').fadeOut();
		}
	}

})