var input = document.querySelector("input").value;
var url;
var response;
start(); //to start with trending page
function start(){
    AJAXrequest("https://api.giphy.com/v1/gifs/trending?api_key=rkL3YHTTyUAdQC3v4g4VLpmakBi4Luu5&limit=50");
}
//to check random button clicked or not
document.querySelector("#random").addEventListener("click",function(){
    input = "https://api.giphy.com/v1/gifs/random?api_key=rkL3YHTTyUAdQC3v4g4VLpmakBi4Luu5";
    AJAXrequest(input,true);
});

//for trending button
document.querySelector("#trending").addEventListener("click",function(){
    input = "https://api.giphy.com/v1/gifs/trending?api_key=rkL3YHTTyUAdQC3v4g4VLpmakBi4Luu5&limit=50";
    AJAXrequest(input);
});
//search button
document.querySelector(".btn").addEventListener('click',function(){

    var input = document.querySelector("input").value;
    change(input);
  
  });
  
document.querySelector("input").addEventListener('keyup',function(e){
    // if the key ENTER is pressed...
    input = document.querySelector("input").value;
    if(e.which === 13) {
    change(input);
    }
  
  });
//function to change multiple word query
function change(input){
      input.replace(' ','+');
      //alert(input)
      urlCreator(input);
  }
  
  /* 2. do the data stuff with the API */

  //function to create url 
function urlCreator(input){
     url = "http://api.giphy.com/v1/gifs/search?api_key=rkL3YHTTyUAdQC3v4g4VLpmakBi4Luu5&q=" + input + "&limit=50&offset=&rating=R&lang=en"; 
     //alert(input)
    AJAXrequest(url);
}

  function AJAXrequest(url,bool){
        // AJAX Request
  var GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open( 'GET', url );
  GiphyAJAXCall.send();
  
  GiphyAJAXCall.addEventListener('load',function(e){
  
    var data = e.target.response;
    //alert(data)
    if(bool == true)
    {//alert("if")
    randomgif(data);
    }
    else
    pushToDOM(data);
  
  });
 }//to get random gif
 function randomgif(data){
    response = JSON.parse(data);
    var container = document.querySelector(".imageArea");   
    container.innerHTML = " ";
    var src =  response.data.images.downsized_large.url;
    container.innerHTML = "<img class = \"image\" src=\"" + src + "\">";

 }
  

  
  /* 3. Show me the GIFs */
  
  
  function pushToDOM(input) {
  
    response = JSON.parse(input);
    var imageUrls = response.data;
    var container = document.querySelector(".imageArea");
    container.innerHTML = "";
    imageUrls.forEach(function(image){
      var src = image.images.fixed_height_downsampled.url;
      console.log(src);
      container.innerHTML += "<img class = \"image\" src=\"" + src + "\">";
    });
  
  }
  
