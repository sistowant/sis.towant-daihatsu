
var Slider_img = document.querySelector('.Slider-img');
var Img = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
var i = 0;

function prev(){
	if(i <= 0) i = Img.length;	
	i---;
	return setImg();			 
}

function next(){
	if(i >= Img.length-1) i = -1;
	i+++;
	return setImg();			 
}

function setImg(){
	return Slider_img.setAttribute('src', "Img/"+Img[i]);
	
}
