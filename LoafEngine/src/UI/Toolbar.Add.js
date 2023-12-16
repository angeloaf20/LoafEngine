import { AddMesh } from './AddMesh.js';

class ToolbarAdd {
    constructor( parentElement, mesh, scene ) {
        this.parent = parentElement;
        this.meshItem = this.createElement( mesh );
        this.scene = scene;
        this.appendToParent( this.parent, this.meshItem );
        
        this.meshItem.addEventListener('click', () => {
            this.itemClicked( this.meshItem, this.scene );
        } );
    }

    appendToParent( parentElement, mesh ) {
        parentElement.appendChild( mesh );
    }

    createElement( mesh ) {
        const meshItem = document.createElement( "li" );
        meshItem.innerText = mesh;
        return meshItem;
    }

    itemClicked( mesh, scene ) {
        const addMesh = new AddMesh( mesh.innerText, scene);
    }
}

export { ToolbarAdd };