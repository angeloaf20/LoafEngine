class SceneChildren {
    constructor( renderable, parentElement) {
        this.renderable = renderable;
        this.parentElement = parentElement;
        this.renderableList = this.getChildren( this.renderable );
        this.createSceneHierarchyItems( this.renderableList, this.parentElement );
        console.log(this.renderable.children);
    }

    createSceneHierarchyItems( renderableList, parentElement ) {
        for(let i = 0; i < renderableList.length; i++) {
            const item = renderableList[i];
            const elItem = this.createElement( item );
            this.appendToParent( parentElement, elItem );
        }
    }

    getChildren( renderable ) {
        return renderable.children;
    }

    appendToParent( parentElement, mesh ) {
        parentElement.appendChild( mesh );
    }

    createElement( mesh ) {
        const meshItem = document.createElement( "li" );
        meshItem.innerText = mesh.name;
        return meshItem;
    }
}

export { SceneChildren };