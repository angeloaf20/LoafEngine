import * as THREE from 'three';
// todo: import cube so as to load it, update it if anything, and draw it

class LoafRender {
    constructor() {
        this.renderContainer = document.getElementById("render-container");
        this.renderer = new THREE.WebGLRenderer( { antialias: true } );
        this.scene_ = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, this.renderContainer.clientWidth / this.renderContainer.clientHeight, 0.1, 2000 );
        this.camera.position.z = 10;


        this.renderer.setSize( this.renderContainer.clientWidth, this.renderContainer.clientHeight );

        this.sceneTree = new THREE.Group();

        this.renderContainer.appendChild( this.renderer.domElement );
    }

    load() {
        const materials = [
            new THREE.MeshBasicMaterial({ color: 0xff0000 }), // Right face (red)
            new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // Left face (green)
            new THREE.MeshBasicMaterial({ color: 0x0000ff }), // Top face (blue)
            new THREE.MeshBasicMaterial({ color: 0xffff00 }), // Bottom face (yellow)
            new THREE.MeshBasicMaterial({ color: 0xff00ff }), // Front face (magenta)
            new THREE.MeshBasicMaterial({ color: 0x00ffff })  // Back face (cyan)
        ];
        const cube = new THREE.Mesh(
            new THREE.BoxGeometry(5, 5, 5),
            materials
        );
        this.sceneTree.add(cube);
        this.scene_.add(this.sceneTree);
    }

    update() {
        this.sceneTree.rotation.x += 0.01;
        this.sceneTree.rotation.y += 0.01;
    }

    draw() {
        this.renderer.render(this.scene_, this.camera);

        this.renderContainer.addEventListener( 'resize' , () => {
            var width = this.renderContainer.clientWidth;
            var height = this.renderContainer.clientHeight;
            this.renderer.setSize(width, height);
            this.camera.aspect = width / height;
            this.camera.updateProjectionMatrix();
        });
    }
}

export { LoafRender };
