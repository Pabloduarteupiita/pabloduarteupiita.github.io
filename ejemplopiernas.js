function Pieza(){
THREE.Object3D.call(this);
this.piernaIzq=newTHREE.Mesh(new THREE.BoxGeometry(1,5,1));
this.piernaDer=newTHREE.Mesh(new THREE.BoxGeometry(1,5,1));
var cuerpo=newTHREE.Mesh(new THREE.BoxGeometry(5,10,15);
this.add(this.piernaIzq,this.piernaDer,cuerpo);

this.piernaIzq.position.z=-2
this.piernaIzq.position.y=-2.5
this.piernaDer.position.z=-2
this.piernaDer.position.y=-2.5
cuerpo.position.z=2.5
}

var pieza
pieza.protype=new THREE.Object3D;
fucntion setup(){
pieza=new Pieza()

var escena=new THREE.Scene();
escena.add(pieza)

var camara= new THREE.PerspectiveCamera();
camara.position.z=15;
camara.position.z=5;

var lienzo= document.getElementById("ejemplopiernas");
var renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderizador.domElement);

}

functionloop(){
pieza.rotateY=0.1;
renderizador.render(escena,camara);
}