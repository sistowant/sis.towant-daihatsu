var slider_img = document.querySelector('.slider-img');
var Img = ['1.jpg', '2.jpg', '3.jpg', 4.jpg'];
var i = 0;

function prev(){
	if(i <= 0) i = Img.length;	
	i--;
	return setimg();			 
}

function next(){
	if(i >= Img.length-1) i = -1;
	i++;
	return setimg();			 
}

function setimg(){
	return slider_img.setAttribute('src', "Img/"+Img[i]);
	
}
