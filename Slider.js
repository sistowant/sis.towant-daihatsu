var slider_img = document.querySelector('.slider-img');
var Img = ['6.jpg', '5.jpg', '4.jpg', '3.jpg', '2.jpg', '1.jpg'];
var i = 0;

function prev(){
	if(i <= 0) i = img.length;	
	i--;
	return setimg();			 
}

function next(){
	if(i >= img.length-1) i = -1;
	i++;
	return setimg();			 
}

function setimg(){
	return slider_img.setAttribute('src', "Img/"+Img[i]);
	
}
