import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

class LoafRender {
    constructor() {
        console.log(THREE.REVISION);
        this.createScene();
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();
    }

    load() {
        this.scene_.add(this.axesHelper);
        // Add other objects or loading logic here
    }

    update() {
        // Add update logic here
    }

    draw() {
        this.renderer.render(this.scene_, this.camera);

        this.renderContainer.addEventListener('resize', () => {
            var width = this.renderContainer.clientWidth;
            var height = this.renderContainer.clientHeight;
            this.renderer.setSize(width, height);
            this.camera.aspect = width / height;
            this.camera.updateProjectionMatrix();
        });
    }

    createScene() {
        this.renderContainer = document.getElementById("render-container");
        this.renderer = new THREE.WebGLRenderer( { antialias: true } );
        this.scene_ = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, this.renderContainer.clientWidth / this.renderContainer.clientHeight, 0.1, 2000 );
        this.camera.position.set( 5, 5, 10 );
        this.camera.name = "Camera";
        
    
        this.renderer.setSize( this.renderContainer.clientWidth, this.renderContainer.clientHeight );
    
        const controls = new OrbitControls( this.camera, this.renderer.domElement );
        controls.minDistance = 0;
        controls.maxDistance = 80;
        controls.update();
    
        this.gridHelper = new THREE.GridHelper( 50, 50 );
        this.gridHelper.name = "Grid helper";
        this.scene_.add( this.gridHelper );
    
        this.axesHelper = new THREE.AxesHelper( 3 );
        this.axesHelper.position.x = -5;
        this.axesHelper.position.y = 5;
        this.axesHelper.name = "Axes helper";

        console.log(this.camera);
    
    
        this.renderContainer.appendChild( this.renderer.domElement );
    }

}

export { LoafRender };
