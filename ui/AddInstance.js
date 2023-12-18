import * as THREE from 'three';
import { EventEmitter } from '../core/EventEmitter.js';


class AddInstance {
    static meshTypes = {
        Box: "Box", 
        Cone: "Cone",
        Cylinder: "Cylinder",
        Sphere: "Sphere"
    };

    static selectInstance( type, scene ) {
        switch( type ) {
            case AddInstance.meshTypes.Box:
                AddInstance.createBox( 1, 1, 1, scene );
                console.log("Adding box to scene");
                break;
            case AddInstance.meshTypes.Sphere:
                AddInstance.createSphere( 5, 32, 16 , scene );
                console.log("Adding sphere to scene");
                break;
            default:
                console.warn("not valid mesh!");
                break;
        }
    }

    static createBox( width, height, depth, scene ) {
        const boxGeo = new THREE.BoxGeometry( width, height, depth );
        const boxMat = new THREE.MeshBasicMaterial();
        const box = new THREE.Mesh( boxGeo, boxMat ); 
        box.name = "Box";
        scene.add(box);
        return box;
    }

    static createSphere( radius, widthSegments, heightSegments, scene, objectList ) {
        const sphereGeo = new THREE.SphereGeometry( radius, widthSegments, heightSegments );
        const sphereMat = new THREE.MeshBasicMaterial();
        const sphere = new THREE.Mesh( sphereGeo, sphereMat );
        sphere.name = "Sphere";
        scene.add(sphere);
        return sphere;
    }
}

export { AddInstance };
