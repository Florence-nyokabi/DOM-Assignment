document.body.style.backgroundColor='silver'; 


document.getElementById('title').style.color='green';

document.getElementById("title-tag1").style.textTransform = "uppercase";
document.getElementById("title-tag2").style.textTransform = "uppercase";

let fruit = document.createElement('li');
fruit.innerHTML = 'Kiwi'
document.getElementById('fruList').appendChild(fruit);


let vegetable = document.createElement('li');
vegetable.innerHTML = 'Lettuce';
document.getElementById('vegList').appendChild(vegetable);


document.body.style.fontFamily='Arial';
document.body.style.fontSize ='25px';
document.body.style.margin = "20px 5px 20px 30px";

const img = new Image(300, 300);
img.src = "images/bellpeppers.jpg";
document.body.appendChild(img);


