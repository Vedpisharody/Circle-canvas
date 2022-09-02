canvas = document.getElementById('canvas');
a = canvas.getContext("2d");

color = "orange";

a.beginPath();
a.strokeStyle = color;
a.lineWidth = 3.5;
a.arc(701, 499, 54, 0, 2*Math.PI);
a.stroke();


canvas.addEventListener("mousedown", mouse);

function mouse(e){
    color = document.getElementById("id").value;
    mousex = e.clientX - canvas.offsetLeft;
    mousey = e.clientY - canvas.offsetTop;
    circle(mousex, mousey);
}

function circle(mousex, mousey){
    a.beginPath();
a.strokeStyle = color;
a.lineWidth = 3.5;
a.arc(mousex, mousey, 54, 0, 2*Math.PI);
a.stroke()
}

function clearArea(){
    a.clearRect(0, 0, canvas.width, canvas.height)
}