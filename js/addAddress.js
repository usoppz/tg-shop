$(function() {
	// 导入头部
	$('#header').load('./header.html', function() {
		$('.title').text('添加收货地址');
		$('.title_box').children('span').removeClass('iconfont icon-houtuijiantou').css('font-size','8vw').text('×');
	});
});