import { LoafRender } from './core/LoafRender.js';
import { ToolbarAdd } from './ui/Toolbar.Add.js';
import { AddInstance } from './ui/AddInstance.js';
import { SceneChildren } from './ui/SceneChildren.js';

function addMeshes(loaf) {
  const addDropdown = document.getElementById("add-dropdown");
  ToolbarAdd.addToToolbar( addDropdown, AddInstance.meshTypes.Box, loaf.scene_ );
  ToolbarAdd.addToToolbar( addDropdown, AddInstance.meshTypes.Sphere, loaf.scene_ );
}

function addChildrenToHierarchy( renderable, parentElement ) {
  SceneChildren.addItemsToHierarchy( renderable, parentElement );
}

function main() {
  const sceneChildrenEl = document.getElementById("scene-children");
  const renderContainer = document.querySelector("#render-container");
  const loaf = new LoafRender();
  loaf.load();

  function animate() {
    loaf.update();
    loaf.draw();
    requestAnimationFrame(animate);
  }

  function handleResize() {
    const width = renderContainer.clientWidth;
    const height = renderContainer.clientHeight;

    loaf.renderer.setSize(width, height);
    loaf.camera.aspect = width / height;
    loaf.camera.updateProjectionMatrix();
}
  
  // Attach handleResize to the window's resize event
  window.addEventListener('resize', handleResize);

  // Start the animation loop
  animate();

  addMeshes(loaf);
  addChildrenToHierarchy( loaf.scene_, sceneChildrenEl );
  
  sceneChildrenEl.addEventListener("objectAdded", () => {
    SceneChildren.updateList( loaf.scene_, sceneChildrenEl );
  });

  SceneChildren.getCurrentSelection(sceneChildrenEl);
  
  console.log(sceneChildrenEl.children.length);
}

main();