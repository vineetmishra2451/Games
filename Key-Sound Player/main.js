var data = {};
var ch = 'a';
var w,h,x,y;
var colors=["","teal","yellow","steelblue","yellowgreen","orange","gray","pink","salmon","chocolate","mistyrose","hotpink","red","tomato","beige","coral","orchid","olive","blue","lightpink","lightgreen","skyblue","aqua","brown","lime","khaki","purple"]

for(var i=1;i<=26;i++){
    data[ch]={};
    data[ch].sound =new Howl({
        src: ['/sounds/'+i+'.mp3']
    })
    data[ch].color = colors[i];
    ch = String.fromCharCode(ch.charCodeAt(0) + 1);
    
}


function onKeyDown(event){
    if(data[event.key]){
    document.querySelector("#myCanvas").style.background =data[event.key].color;    
    w = view.size.width;
    h = view.size.height;
    x = Math.random()*w;
    y = Math.random()*h;
    var circle = new Path.Circle(new Point(x,y),300);
    circle.fillColor = data[event.key].color;
    data[event.key].sound.play();
    circleArray.push(circle);
}
}
var circleArray = [];
function onFrame(){
    for(var i=0;i<circleArray.length;i++){
        circleArray[i].scale(0.9);
        circleArray[i].fillColor.hue+=5; 
        if(circleArray[i].area<1){
            circleArray[i].remove();
            circleArray.splice(i,1);
        } 
    }
          
    }