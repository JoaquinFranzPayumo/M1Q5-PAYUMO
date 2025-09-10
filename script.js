// === Setup Scene, Camera, Renderer ===
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("three-canvas") });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// === Lighting ===
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

// === Geometries ===
// Box
const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.x = -4;
scene.add(box);

// Cone
const coneGeometry = new THREE.ConeGeometry(1, 2, 32);
const coneMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cone = new THREE.Mesh(coneGeometry, coneMaterial);
cone.position.x = -2;
scene.add(cone);

// Cylinder
const cylinderGeometry = new THREE.CylinderGeometry(1, 1, 2, 32);
const cylinderMaterial = new THREE.MeshStandardMaterial({ color: 0x0000ff });
const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
cylinder.position.x = 0;
scene.add(cylinder);

// Sphere
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xffff00 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.x = 2;
scene.add(sphere);

// Torus
const torusGeometry = new THREE.TorusGeometry(1, 0.3, 16, 100);
const torusMaterial = new THREE.MeshStandardMaterial({ color: 0xff00ff });
const torus = new THREE.Mesh(torusGeometry, torusMaterial);
torus.position.x = 4;
scene.add(torus);

// === Camera Position ===
camera.position.z = 8;

// === Animation Loop ===
function animate() {
  requestAnimationFrame(animate);

  // Simple animations
  box.rotation.x += 0.01;
  box.rotation.y += 0.01;

  cone.rotation.y += 0.02;

  cylinder.rotation.x += 0.02;

  sphere.position.y = Math.sin(Date.now() * 0.002) * 1.5;

  torus.rotation.z += 0.03;

  renderer.render(scene, camera);
}

animate();

// === Handle Window Resize ===
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
