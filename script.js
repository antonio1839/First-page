// Configuración de la escena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear suelo
const groundGeometry = new THREE.PlaneGeometry(100, 100);
const groundMaterial = new THREE.MeshBasicMaterial({ color: 0x228B22, side: THREE.DoubleSide });
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = -Math.PI / 2;
scene.add(ground);

// Función para crear girasoles
function createSunflower(x, z) {
    const stemGeometry = new THREE.CylinderGeometry(0.1, 0.1, 2, 8);
    const stemMaterial = new THREE.MeshBasicMaterial({ color: 0x228B22 });
    const stem = new THREE.Mesh(stemGeometry, stemMaterial);
    stem.position.set(x, 1, z);

    const flowerGeometry = new THREE.CircleGeometry(0.5, 16);
    const flowerMaterial = new THREE.MeshBasicMaterial({ color: 0xFFD700 });
    const flower = new THREE.Mesh(flowerGeometry, flowerMaterial);
    flower.position.set(x, 2, z);
    flower.rotation.x = -Math.PI / 4;

    scene.add(stem);
    scene.add(flower);

    return flower;
}

// Crear varios girasoles
let sunflowers = [];
for (let i = -10; i < 10; i += 2) {
    for (let j = -10; j < 10; j += 2) {
        sunflowers.push(createSunflower(i, j));
    }
}

// Animación del movimiento de los girasoles con el viento
function animate() {
    requestAnimationFrame(animate);
    sunflowers.forEach((flower, index) => {
        flower.rotation.z = Math.sin(Date.now() * 0.001 + index) * 0.1;
    });
    renderer.render(scene, camera);
}

camera.position.set(0, 5, 15);
camera.lookAt(0, 0, 0);

animate();
