var c = document.getElementById('can');
var ctx = c.getContext('2d');
var color = '#000000';
var size = document.getElementById('sld');
var clear = document.getElementById('clr');
var openf = document.getElementById('openf');

var pi = Math.PI;

document.getElementById('col').oninput = function(){
    color = this.value;
}

//ctx.fillStyle = '#4287f5';
//ctx.fillRect(0, 0, 400, 300);

function updSize(slideAmount) {
    var sizediv = document.getElementById('snum');
    sizediv.innerHTML = slideAmount;
}

clear.onclick = function(){
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, c.width, c.height);
}

ctx.fillStyle = '#FFFFFF';
ctx.fillRect(0, 0, c.width, c.height);

document.getElementById('save').onclick = function(){
    // Convert the canvas to data
    var image = c.toDataURL();
    // Create a link
    var aDownloadLink = document.createElement('a');
    // Add the name of the file to the link
    aDownloadLink.download = document.getElementById('name').value+'.png';
    // Attach the data to the link
    aDownloadLink.href = image;
    // Get the code to click the download link
    aDownloadLink.click();
}

c.onmousedown = function(){
    c.onmousemove = function(e){
        var x = e.offsetX;
        var y = e.offsetY;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.lineWidth = 0;

        //ctx.rect(x-10, y-10, 20, 20);

        ctx.arc(x, y, size.value, 0, 2*pi, false);

        ctx.stroke();
        ctx.fill();
    }
    c.onmouseup = function(){
        c.onmousemove = null;
    }
}

openf.addEventListener('change', (e)=>{
    //console.log('agaga');
    if (openf.files == null) return
    var file = openf.files[0];
    //console.log(file.name);

    var img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = function(){
        //console.log(img.width, img.height);
        ctx.fillStyle = color
        ctx.fillRect(0, 0, 600, 450);
        ctx.drawImage(img, 0, 0, c.width, c.height);
        openf.files = null
    }
})

/*ctx.beginPath();
ctx.strokeStyle = '#000000';
ctx.fillStyle = '#FFFFFF';
ctx.lineWidth = 0;
ctx.rect(175, 125, 50, 50);
ctx.stroke();
ctx.fill();*/