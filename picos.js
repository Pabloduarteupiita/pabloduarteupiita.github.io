var figura1= new THREE.Shape();
figura1.moveTo(10,10);
figura1.lineTo(30,10);
figura1.lineTo(30,30);
figura1.lineTo(10,30);
figura1.lineTo(10,10);
var forma1 = new THREE.ExtrudeGeometry(figura1,{amount:10});
var material1= new THREE.MeshNormalMaterial();
var malla1= new THREE.Mesh(forma1,material1);


var figura2= new THREE.Shape();
figura2.moveTo(-10,-10);
figura2.lineTo(-10,-30);
figura2.lineTo(-30,-30);
figura2.lineTo(-30,-10);
figura2.lineTo(-10,-10);
var forma2 = new THREE.ExtrudeGeometry(figura2,{amount:10});
var material2= new THREE.MeshNormalMaterial();
var malla2= new THREE.Mesh(forma2,material2);

var figura3= new THREE.Shape();
figura3.moveTo(-10,10);
figura3.lineTo(-30,10);
figura3.lineTo(-30,30);
figura3.lineTo(-10,30);
figura3.lineTo(-10,10);
var forma3 = new THREE.ExtrudeGeometry(figura3,{amount:10});
var material3= new THREE.MeshNormalMaterial();
var malla3= new THREE.Mesh(forma3,material3);

var figura4= new THREE.Shape();
figura4.moveTo(10,-10);
figura4.lineTo(30,-10);
figura4.lineTo(30,-30);
figura4.lineTo(10,-30);
figura4.lineTo(10,-10);
var forma4 = new THREE.ExtrudeGeometry(figura4,{amount:10});
var material4= new THREE.MeshNormalMaterial();
var malla4= new THREE.Mesh(forma4,material4);


var escena = new THREE.Scene();
var picosForma= new THREE.Geometry();

picosForma.merge(malla1.geometry,malla1.matrix);
picosForma.merge(malla2.geometry,malla2.matrix);
picosForma.merge(malla3.geometry,malla3.matrix);
picosForma.merge(malla4.geometry,malla4.matrix);

var material= new THREE.MeshNormalMaterial();
var picosMalla= new THREE.Mesh(picosForma,material);

var escena= new THREE.Scene();
escena.add(picosMalla);

var camara=new THREE.PerspectiveCamera();
camara.position.z=500;

var renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
