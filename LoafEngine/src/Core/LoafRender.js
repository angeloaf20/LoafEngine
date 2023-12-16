import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// todo: import cube so as to load it, update it if anything, and draw it

class LoafRender {
    constructor() {
        console.log(THREE.REVISION);
        this.renderContainer = document.getElementById("render-container");
        this.renderer = new THREE.WebGLRenderer( { antialias: true } );
        this.scene_ = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, this.renderContainer.clientWidth / this.renderContainer.clientHeight, 0.1, 2000 );
        this.camera.position.set( 5, 5, 10 );

        this.sceneTree = new THREE.Group();

        this.editorLight = new THREE.AmbientLight( 0x404040 );
        this.scene_.add(this.editorLight);

        this.renderer.setSize( this.renderContainer.clientWidth, this.renderContainer.clientHeight );

        const controls = new OrbitControls( this.camera, this.renderer.domElement );
        controls.update();

        this.gridHelper = new THREE.GridHelper( 50, 50 );
        this.scene_.add( this.gridHelper );

        this.scene_.fog = new THREE.Fog( 0xD44534, 50, 200 );

        this.renderContainer.appendChild( this.renderer.domElement );
    }

    load() {
        this.sky = this.createSky();
        this.scene_.add(this.sky);
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

    createSky() {
        return new THREE.Mesh(
            new THREE.SphereGeometry(10000, 32, 32),
            new THREE.MeshBasicMaterial({
                color: 0xFF0000,
                side: THREE.BackSide
            })
        );
    }
}

export { LoafRender };
