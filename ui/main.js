console.log('Loaded!');

// change the text
var element = document.getElementById('text-area'
    );
element.innerHTML = 'newValue';

//Move the image
var img = document.getElementById('img-area');
img.onclick = function() {
    img.style.marginLeft = '100px';
}
