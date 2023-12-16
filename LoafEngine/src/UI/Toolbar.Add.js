import { AddMesh } from './AddMesh.js';

class ToolbarAdd {
    constructor( parentElement, mesh ) {
        this.parent = parentElement;
        this.meshItem = this.createElement( mesh );
        this.appendToParent( this.parent, this.meshItem );
        
        this.meshItem.addEventListener('click', this.itemClicked );
    }

    appendToParent( parentElement, mesh ) {
        parentElement.appendChild( mesh );
    }

    createElement( mesh ) {
        const meshItem = document.createElement( "li" );
        meshItem.innerText = mesh;
        return meshItem;
    }

    itemClicked( item, mesh ) {
        const addMesh = new AddMesh('Box');
    }
}

export { ToolbarAdd };