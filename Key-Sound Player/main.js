var data = {};
var ch = 'a';
var w,h,x,y,shape;
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
    shape = Math.floor(Math.random()*4 + 1);
    if(shape==1){
    var circle = new Path.Circle(new Point(x,y),500);
    circle.fillColor = data[event.key].color;
    data[event.key].sound.play();
    mainArray.push(circle);
    }
    else if(shape==2){
        var rectangle = new Rectangle(new Point(x, y), new Point(x+500,y+300));
        var radius = new Size(10, 10);
        var path = new Path.Rectangle(rectangle, radius);
        path.fillColor = data[event.key].color;
        data[event.key].sound.play();
        mainArray.push(path);
    }
    else if(shape==3){
        var center = new Point(x, y);
        var sides = 6;
        var radius = 400;
        var path = new Path.RegularPolygon(center, sides, radius);
        path.fillColor = data[event.key].color;
        data[event.key].sound.play();
        mainArray.push(path);
    }
    else if(shape==4){
        var center = new Point(x, y);
        var points = 26;
        var radius1 = 325;
        var radius2 = 540;
        var path = new Path.Star(center, points, radius1, radius2);
        path.fillColor = data[event.key].color;
        data[event.key].sound.play();
        mainArray.push(path);

    }
    
}
}
var mainArray = [];
function onFrame(){
    for(var i=0;i<mainArray.length;i++){
        mainArray[i].scale(0.9);
        mainArray[i].fillColor.hue+=5; 
        if(mainArray[i].area<1){
            mainArray[i].remove();
            mainArray.splice(i,1);
        } 
    }
          
    }