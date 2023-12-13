import { LoafRender } from './Core/LoafRender';

function main() {
  const loaf = new LoafRender();
  loaf.load();

  function animate() {
    loaf.update();
    loaf.draw();
    requestAnimationFrame(animate);
  }

  // Start the animation loop
  animate();
}

main();