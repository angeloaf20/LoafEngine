import { LoafRender } from './Core/LoafRender.js';

function main() {
  const renderContainer = document.querySelector("#render-container");
  const loaf = new LoafRender();
  loaf.load();

  function animate() {
    loaf.update();
    loaf.draw();
    requestAnimationFrame(animate);
  }

  function handleResize() {
    const width = renderContainer.innerWidth;
    const height = renderContainer.innerHeight;

    loaf.renderer.setSize(width, height);
    loaf.camera.aspect = width / height;
    loaf.camera.updateProjectionMatrix();
  }

  
  // Attach handleResize to the window's resize event
  window.addEventListener('resize', handleResize);

  // Start the animation loop
  animate();
}

main();