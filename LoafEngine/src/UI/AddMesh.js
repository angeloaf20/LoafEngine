import * as THREE from 'three';

class AddMesh {
    constructor( meshType ) {
        this.selectMesh(meshType);
    }

    selectMesh(meshType) {
        switch(meshType) {
            case ("Box"):
                this.createBox( 5, 5, 5 );
                break;
            default:
                console.warn("not valid mesh!");
                break;
        }
    }

    createBox(width, height, depth) {
        const boxGeo = new THREE.BoxGeometry( width, height, depth );
        const boxMat = new THREE.MeshBasicMaterial();
        return new THREE.Mesh( boxGeo, boxMat );
    }
}

export { AddMesh };