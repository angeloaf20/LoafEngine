import * as THREE from '../../libs/three/build/three.module.js';
import { OrbitControls } from '../../libs/three/examples/jsm/controls/OrbitControls.js'
// todo: import cube so as to load it, update it if anything, and draw it

class LoafRender {
    constructor() {
        console.log(THREE.REVISION);
        this.createScene();
    }

    load() {
        

        this.scene_.add( this.axesHelper );

      
    }

    update() {
        
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

    createScene() {
        this.renderContainer = document.getElementById("render-container");
        this.renderer = new THREE.WebGLRenderer( { antialias: true } );
        this.scene_ = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, this.renderContainer.clientWidth / this.renderContainer.clientHeight, 0.1, 2000 );
        this.camera.position.set( 5, 5, 10 );


        this.renderer.setSize( this.renderContainer.clientWidth, this.renderContainer.clientHeight );

        const controls = new OrbitControls( this.camera, this.renderer.domElement );
        controls.update();

        this.gridHelper = new THREE.GridHelper( 50, 50 );
        this.scene_.add( this.gridHelper );

        this.axesHelper = new THREE.AxesHelper( 2 );
        this.axesHelper.position.x = -5;
        this.axesHelper.position.y = 5;


        this.renderContainer.appendChild( this.renderer.domElement );
    }
}

export { LoafRender };