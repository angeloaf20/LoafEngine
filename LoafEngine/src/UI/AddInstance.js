import * as THREE from 'three';
import { EventEmitter } from '../core/EventEmitter.js';


class AddInstance {
    static meshTypes = {
        Box: "Box", 
        Cone: "Cone",
        Cylinder: "Cylinder",
        Sphere: "Sphere"
    };

    static selectInstance( type, scene, elem ) {
        switch( type ) {
            case AddInstance.meshTypes.Box:
                AddInstance.createBox( scene, elem );
                console.log("Adding box to scene");
                break;
            case AddInstance.meshTypes.Sphere:
                AddInstance.createSphere( scene, elem );
                console.log("Adding sphere to scene");
                break;
            default:
                console.warn("not valid mesh!");
                break;
        }
    }

    static createBox( scene, elem ) {
        const boxGeo = new THREE.BoxGeometry( 1, 1, 1 );
        const boxMat = new THREE.MeshBasicMaterial();
        const box = new THREE.Mesh( boxGeo, boxMat ); 
        box.name = "Box";
        scene.add(box);
        console.dir(box);
        const emit = new EventEmitter(elem, "newObj");
        emit.fireEvent({ detail: box.uuid });
        return box;
    }

    static createSphere( scene, elem ) {
        const sphereGeo = new THREE.SphereGeometry( 4, 16, 8 );
        const sphereMat = new THREE.MeshBasicMaterial();
        const sphere = new THREE.Mesh( sphereGeo, sphereMat );
        sphere.name = "Sphere";
        scene.add(sphere);
        console.dir(sphere);
        const emit = new EventEmitter(elem, "newObj");
        emit.fireEvent({ detail: sphere.uuid });
        return sphere;
    }
}

export { AddInstance };
