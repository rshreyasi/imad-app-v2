console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML = 'New shreyasi';
//move the image when clicked
var img = document.getElementById('img');
img.onclick = function() {
    img.style.marginLeft = '100px';
};