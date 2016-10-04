//counter code
var button = document.getElementById('btn_clickme');

button.onclick = function(){
// make a request to the counter endpoint
    var request = new XMLHttpRequest();

// capture the response and store it in a variable.
    request.onreadystatechange = function()
    {
      if(request.readyState === XMLHttpRequest.DONE)
      {
          //take some action
          if(request.status === 200){
          counter = request.responseText;
          var span = document.getElementById('count');
          span.innerHTML = counter.toString();
          }
      }  
    };
    request.open('GET', 'http://vinodrn.imad.hasura-app.io/counter',true);
    request.send(null);
};

//submit name

var submit = document.getElementById('submit_btn');
submit.onclick = function()
{
    
    // make a request to the counter endpoint
    var request = new XMLHttpRequest();

// capture the response and store it in a variable.
    request.onreadystatechange = function()
    {
      if(request.readyState === XMLHttpRequest.DONE)
      {
          //take some action
          if(request.status === 200){
            var names = request.responseText;
            names = JSON.parse(names);
            var list = '';
            for ( var i =0 ; i<names.length ; i++)
            {
                list += '<li>' +names[i] +'</li>';
            }
            var ul = document.getElementById('namelist');
            ul.innerHTML = list;
          }
      }  
    };
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    
    request.open('GET', 'http://vinodrn.imad.hasura-app.io/submit-name?name='+name,true);
    request.send(null);
};