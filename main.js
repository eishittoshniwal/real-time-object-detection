status1=""
object=[]


function setup(){
 video=createCapture(VIDEO)
 video.size(380,380)
 video.hide()
   canvas=createCanvas(380,380)
   canvas.center()
   cocossd=ml5.objectDetector("cocossd",modelloaded)
   document.getElementById("status").innerHTML="Status: Detecting objects"
   
}
function modelloaded() {
    console.log("model has been loaded")
    status1=true
}

function gotresult(error,result) {
    if (error) {
        console.log(error)
    } else {
        object=result
        console.log(result)
    }
}


function draw() {
image(video,0,0,380,380) 
if (status1 != "") {
    cocossd.detect(video,gotresult)
    r = random(255)
    g= random(255)
    b= random(255)

    for ( i=0; i< object.length;i++) {
        document.getElementById("status").innerHTML="Status: objects detected"
        document.getElementById("no_of_objects").innerHTML="no of objects detected="+object.length
        fill(r,g,b)
        percent=floor(object[i].confidence*100)     
        text(object[i].label+" "+percent+"%",object[i].x,object[i].y+15)   
        noFill()
        stroke(r,g,b)
        rect(object[i].x,object[i].y,object[i].width,object[i].height)
         
    }
}
}
 