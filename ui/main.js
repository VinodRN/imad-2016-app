//counter code
var button = document.getElementById('btn_clickme');
var counter = 0 ;

button.onclick = function(){
// make a request to the counter endpoint
    var request = new XMLHttpRequest();

// capture the response and store it in a variable.
    request.onreadystatechange = function()
    {
        console.log('ready state');
      if(request.readystate === XMLHttpRequest.DONE)
      {
          console.log('request done');
          //take some action
          if(request.status === 200 )
          {
              console.log('Status 200');
              console.log(200);
              counter = request.responseText;
              console.log(counter);
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
          }
      }  
    };
    request.open('GET', 'http://vinodrn.imad.hasura-app.io/counter',true);
    request.send(null);
};