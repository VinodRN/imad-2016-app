console.log('Loaded!');

// change the text
var element = document.getElementById('text-area'
    );
element.innerHTML = 'newValue';

//Move the image
var img = document.getElementById('img-area');
var marginLeft= 0 ;

function moveRight()
{
    marginLeft = marginLeft + 10 ; 
    img.style.marginLeft = marginLeft +'px' ; 
    
}
img.onclick = function() {
    var internal = setInterval(moveRight,100)
}
