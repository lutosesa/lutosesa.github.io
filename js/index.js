//window.onload = function() {

    /**********************************************
     * Canvas 1
     *********************************************/
    var canvas1 = document.getElementById('canvas1');
    canvas1.width = window.innerWidth / 4;
    canvas1.height = window.innerWidth / 4;
    var ctx1 = canvas1.getContext('2d');

    ctx1.beginPath();
    ctx1.moveTo(canvas1.width/2, 0);
    ctx1.lineTo(canvas1.width, canvas1.height);
    ctx1.lineTo(0, canvas1.height);
    ctx1.lineTo(canvas1.width/2, 0)
    ctx1.stroke();
    ctx1.fillStyle = "red";
    ctx1.fill();

    /**********************************************
     * Canvas 2
     *********************************************/
    var canvas2 = document.getElementById('canvas2');
    canvas2.width = window.innerWidth / 4;
    canvas2.height = window.innerWidth / 4;
    var ctx2 = canvas2.getContext('2d');

    ctx2.beginPath();
    ctx2.rect(0, 0, canvas2.width, canvas2.height);
    ctx2.stroke();
    ctx2.fillStyle = 'blue';
    ctx2.fill();

    /**********************************************
     * Canvas 3
     *********************************************/
    var canvas3 = document.getElementById('canvas3');
    canvas3.width = window.innerWidth / 4;
    canvas3.height = window.innerWidth/ 4;
    var ctx3 = canvas3.getContext('2d');

    ctx3.beginPath();
    ctx3.arc(canvas3.width/2, canvas3.height/2, canvas3.width/2, 0, Math.PI*2, false);
    ctx3.stroke();
    ctx3.fillStyle = '#ffff99';
    ctx3.fill();

    /***************************************************
     * Hämta och lagra Id:et till varje canvas element
     ***************************************************/
    var triangel = document.getElementById("canvas1");
    var kvadrat  = document.getElementById("canvas2");
    var cirkel   = document.getElementById("canvas3");

    /**********************************************
     *  Knapp klick på elementet canvas
     *********************************************/
    var tr=1,kv=1,ci=1;
    function clickCanvas(id){
        var c = document.getElementById(id);

        if(id ==="content1" && tr==1 ) {c.style.display = "none"; tr=0;}
        if(id ==="content2" && kv==1)  {c.style.display = "none"; kv=0;}
        if(id ==="content3" && ci==1)  {c.style.display = "none"; ci=0;} 

        console.log(id);
        console.log(document.getElementById(id).style.display);
        console.log(c);

        if ( c.style.display == 'block') {      
            c.style.display = "none";
            if(id === "content1"){
              kvadrat.style.width = "50%";
              cirkel.style.width  = "50%";
            }
            else if(id === "content2"){
              triangel.style.width = "50%";
              cirkel.style.width  = "50%";
            }
            else{
              triangel.style.width = "50%";
              kvadrat.style.width = "50%";
            }
        }    
        else {
            c.style.display='block'
            if(id === "content1"){
              kvadrat.style.width = "40%";
              cirkel.style.width  = "40%";
            }
            else if(id === "content2"){
              triangel.style.width = "40%";
              cirkel.style.width  = "40%";
            }
            else{
              triangel.style.width = "40%";
              kvadrat.style.width = "40%";
            }
        }    
    }

    /**********************************************
     * Mus över elementet canvas Triangel
     *********************************************/
    triangel.addEventListener("mouseover", mouseoverTriangelFunction);
    triangel.addEventListener("mouseout", mouseoutTriangelFunction);

    function mouseoverTriangelFunction() {
      document.getElementById("content1").style.display = "block";
      kvadrat.style.width = "40%";
      cirkel.style.width  = "40%";
    }

    function mouseoutTriangelFunction() {
      document.getElementById("content1").style.display = "none";
      kvadrat.style.width = "50%";
      cirkel.style.width = "50%";
    }

    /**********************************************
     * Mus över elementet canvas Kvadrat
     *********************************************/
    kvadrat.addEventListener("mouseover", mouseoverKvadratFunction);
    kvadrat.addEventListener("mouseout",  mouseoutKvadratFunction);

    function mouseoverKvadratFunction() {
      document.getElementById("content2").style.display = "block";
      triangel.style.width = "40%";
      cirkel.style.width  = "40%";
    }

    function mouseoutKvadratFunction() {
      document.getElementById("content2").style.display = "none";
      triangel.style.width = "50%";
      cirkel.style.width  = "50%";
    }

    /**********************************************
     * Mus över elementet canvas Cirkel
     *********************************************/
    cirkel.addEventListener("mouseover", mouseoverCirkelFunction);
    cirkel.addEventListener("mouseout",  mouseoutCirkelFunction);

    function mouseoverCirkelFunction() {
      document.getElementById("content3").style.display = "block";
      triangel.style.width = "40%";
      kvadrat.style.width = "40%";
    }

    function mouseoutCirkelFunction() {
      document.getElementById("content3").style.display = "none";
      triangel.style.width = "50%";
      kvadrat.style.width = "50%";
    }

 // }




