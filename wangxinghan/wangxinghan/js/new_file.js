$('.slider_btn').click(function(){
	showSlider();
})
$('.mask').click(function(){
	hideSlider()
})
function showSlider(){
   	$('.mask').fadeIn()
   	$('.silder').css('right',0)
   }
function hideSlider(){
   	$('.mask').fadeOut()
   	$('.silder').css('right',-300)
}
