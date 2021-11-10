$(document).ready(function() 
{
$(".slides").slick({
	prevArrow: "<img src='blue.jpg' class='prev' alt='1'>",
    nextArrow: "<img src='le.jpg' class='next' alt='2'>",
	slidesToShow: 5,
	slidesToScroll: 3,
	dots: true,
responsive:[
{
    breakpoint: 960,
    settings: {
	prevArrow: "<img src='blue.jpg' class='prev' alt='1'>",
    nextArrow: "<img src='le.jpg' class='next' alt='2'>",
    slidesToShow: 5,
	slidesToScroll: 3,
	
	dots:true ,
    }
},
{    breakpoint: 768,
    settings: {
    slidesToShow: 2,
	slidesToScroll: 1,
	prevArrow: "<img src='blue.jpg' class='prev' alt='1'>",
    nextArrow: "<img src='le.jpg' class='next' alt='2'>",
	dots: true,
    }
}
] 	
});
});
