const THREE = window.THREE = require('three');
let scene, camera, renderer, sphere, torusInner, torusMiddle, torusOuter;

let CHANGE = 0.01;
let rings = []

let createPlanet = function() {
    let geometrySphere = new THREE.SphereGeometry(0.5, 30, 30);
    let materialSphere = new THREE.MeshBasicMaterial({color: 0x86592d, wireframe: true});

    let geometryTorusInner = new THREE.TorusGeometry(0.65, 0.07, 2, 30);
    let materialTorusInner = new THREE.MeshBasicMaterial({color: 0xf9f2ec});

    let geometryTorusMiddle = new THREE.TorusGeometry(0.82, 0.07, 2, 30);
    let materialTorusMiddle = new THREE.MeshBasicMaterial({color: 0xd9b38c});

    let geometryTorusOuter = new THREE.TorusGeometry(1, 0.07, 2, 30);
    let materialTorusOuter = new THREE.MeshBasicMaterial({color: 0xc68c53});

    sphere = new THREE.Mesh(geometrySphere, materialSphere);
    torusInner = new THREE.Mesh(geometryTorusInner, materialTorusInner);
    torusMiddle = new THREE.Mesh(geometryTorusMiddle, materialTorusMiddle);
    torusOuter = new THREE.Mesh(geometryTorusOuter, materialTorusOuter);

    rings.push(torusInner);
    rings.push(torusMiddle);
    rings.push(torusOuter);

    scene.add(sphere);

    rings.forEach(ring => {
        ring.rotation.x = 1.7;
        ring.rotation.y = 0.5;
        scene.add(ring);
    });
};

// set up the environment - 
// initialize scene, camera, objects, and renderer
let init = function () {
    // 1. create the scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    // 2. create and locate the camera
    camera = new THREE.PerspectiveCamera(30,
        window.innerWidth / window.innerHeight,
        1,
        1000);
    camera.position.z = 5;

    // let axesHelper = new THREE.AxesHelper(10);
    // scene.add(axesHelper);

    // 3. create and locate the objects on the scene
    createPlanet();

    // 4. create the renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);
};

// main animation loop - calls every 50 - 60 ms
let mainLoop = function () {
    camera.position.y += CHANGE;

    if (camera.position.y >= 0.5 || camera.position.y <= -0.5)
        CHANGE *= -1;

    renderer.render(scene, camera);
    requestAnimationFrame(mainLoop);
};

init();
mainLoop();