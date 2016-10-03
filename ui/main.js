//counter code
var button = document.getElementById('btn_clickme');

button.onclick = function(){
// make a request to the counter endpoint
    var request = new XMLHttpRequest();

// capture the response and store it in a variable.
    request.onreadystatechange = function()
    {
      console.log('ready state');
      console.log(request.readyState);
      console.log(request.status);
      if(request.readyState === XMLHttpRequest.DONE)
      {
          console.log('request done');
          //take some action
          if(request.status === 200 )
          {
              console.log('Status 200');
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