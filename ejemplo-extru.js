var puntos=[];

for(var i=0; i<50; i++){
puntos.push(new THREE.Vector2(Math.sin(i*0.2)*15+50, (i-5)*2))};

var material =new THREE.MeshNormalMaterial();
var forma = new THREE.ShapeGeometry(figura);

var malla= new THREE.Mesh(forma,material);
malla.rotateX(Math.PI/4);

var escena = new THREE.Scene();
escena.add(malla);
var camara=new THREE.PerspectiveCamera();
camara.position.z=500;
var renderizador= new THREE.WebGLRender();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
