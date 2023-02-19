$(function() {
	// 轮播图
	var mySwiper = new Swiper('.swiper-container', {
		loop: true, // 循环模式选项

		// 如果需要分页器
		pagination: {
			el: '.swiper-pagination',
		},

		// 自动播放
		autoplay: {
			disableOnInteraction: false, //手动滑动之后不打断播放
			delay: 2000
		},
	})
	
	// 导入头部
	/*$('#header').load('./header.html',function(){
		$('.title').text('家纺提花套件欧式简约提花四件套床上用品');
	});*/

	// 添加item信息
	// $('.item_box').load('./item.html');

	var iscollect = false;
	// 收藏的点击事件
	$('#click_col').on('touchstart', function() {
		if (iscollect == false) {
			$(this).children('img').eq(0).removeClass('hide');
			$(this).children('img').eq(1).addClass('hide');
			iscollect = true;
		} else {
			$(this).children('img').eq(0).addClass('hide');
			$(this).children('img').eq(1).removeClass('hide');
			iscollect = false;
		}
	})

});
