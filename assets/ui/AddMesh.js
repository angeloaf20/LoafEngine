import * as THREE from 'three';

class AddMesh {
    constructor( meshType, scene ) {
        this.scene = scene;
        this.mesh = meshType;
        console.log(this.mesh);
        this.selectMesh( this.mesh );
    }

    selectMesh( meshType ) {
        switch( meshType ) {
            case ( "Box" ):
                this.createBox( 1, 1, 1, this.scene );
                console.log("Adding box to scene");
                break;
            case ( "Sphere"):
                this.createSphere( 5, 32, 16 , this.scene);
                console.log("Adding sphere to scene");
            default:
                console.warn("not valid mesh!");
                break;
        }
    }

    createBox(width, height, depth, scene) {
        const boxGeo = new THREE.BoxGeometry( width, height, depth );
        const boxMat = new THREE.MeshBasicMaterial();
        const box = new THREE.Mesh( boxGeo, boxMat ); 
        scene.add(box);
        return box;
    }

    createSphere( radius, widthSegments, heightSegments, scene ) {
        const sphereGeo = new THREE.SphereGeometry( radius, widthSegments, heightSegments );
        const sphereMat = new THREE.MeshBasicMaterial();
        const sphere = new THREE.Mesh( sphereGeo, sphereMat );
        scene.add(sphere);
        return sphere;
    }
}

export { AddMesh };
