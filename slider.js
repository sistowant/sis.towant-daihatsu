var slider_img = document.querySelector('.slider-img');
var Img = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
var i = 0;

function prev(){
	if(i <= 0) i = Img.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= Img.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "Img/"+Img[i]);
	
}
