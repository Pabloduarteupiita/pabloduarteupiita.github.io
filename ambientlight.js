var iluminacion= new THREE.AmbientLight(0xFFFFFF);

var forma=    new THREE.SphereGeometry(1);
var material= new THREE.MeshLambertmaterial({color:"#00cc00"});
var malla     new THREE.Mesh(forma,material);

var escena=   new THREE.Scene();
escena.add(malla);
escena.add(iluminacion);

var camara=   new THREE.PerspectiveCamera();
camara.position.z=5;

var lienzo= document.getElementById("LuzAmbiental");
avr renderizador= new THREE.WebGLRenderer({canvas})