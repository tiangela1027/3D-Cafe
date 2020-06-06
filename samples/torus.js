const THREE = window.THREE = require('three');
let scene, camera, renderer;

const CHANGE = 0.01;

let createTorus = function() {
    // total radius, thickness of tube, radial segments, tubular segment, arc
    let geometry = new THREE.TorusGeometry(1, 0.5, 30, 30);
    let material = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true});

    torus = new THREE.Mesh(geometry, material);
    scene.add(torus);
};

// set up the environment - 
// initialize scene, camera, objects, and renderer
let init = function () {
    // 1. create the scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x123456);

    // 2. create and locate the camera
    camera = new THREE.PerspectiveCamera(30, 
        window.innerWidth / window.innerHeight,
        1,
        1000);
    camera.position.z = 5;

    // 3. create and locate the objects on the scene
    createTorus();

    // 4. create the renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    document.body.appendChild(renderer.domElement);
};

// main animation loop - calls every 50 - 60 ms
let mainLoop = function () {
    torus.rotation.x += CHANGE;
    torus.rotation.y += CHANGE;
    renderer.render(scene, camera);
    requestAnimationFrame(mainLoop);
};

init();
mainLoop();