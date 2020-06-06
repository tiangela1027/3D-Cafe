const THREE = window.THREE = require('three');
let scene, camera, renderer;

let donuts = [];
const CHANGE = 0.05;

let randomInRange = function (from, to) {
    let x = Math.random() * (to - from);
    return x + from;
}

let createDonut = function () {
    let geometry = new THREE.TorusGeometry(0.25, 0.125, 5, 30);
    let material = new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff });

    let d = new THREE.Mesh(geometry, material);

    d.position.x = randomInRange(-3, 3);
    d.position.z = randomInRange(-15, 15);
    d.position.y = 5;
    scene.add(d);
    donuts.push(d);
}

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

    // 4. create the renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);
};

// main animation loop - calls every 50 - 60 ms
let mainLoop = function () {
    let x = Math.random();
    if (x < 0.1)
        createDonut();

    donuts.forEach(d => d.position.y -= CHANGE);

    renderer.render(scene, camera);
    requestAnimationFrame(mainLoop);
};

init();
mainLoop();