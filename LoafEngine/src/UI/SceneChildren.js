class SceneChildren {
    static addItemsToHierarchy( sceneChildren, parentElement ) {
        SceneChildren.createItems( sceneChildren.children, parentElement );
    }

    static createItems( sceneChildren, parentElement ) {
        sceneChildren.forEach(child => {
            if (child.type !== "AxesHelper" && child.type !== "GridHelper"){
                const item = SceneChildren.createElement( child );
                SceneChildren.appendToParent(parentElement, item);
            };
        });
    }

    static updateList(scene, parentElement) {
        // Clear the existing list
        parentElement.innerHTML = '';

        // Update the list with the current scene children
        SceneChildren.createItems(scene.children, parentElement);
    }

    static getCurrentSelection(parentElement) {
        parentElement.addEventListener("click", function(e) {
            const child = e.target;
            child.style = "background-color: #222";
        });
    }

    static childSelected(item) {
        console.log(item.name + " selected");
        item.style.backgroundColor = "#222";
    }

    static appendToParent( parentElement, item ) {
        parentElement.appendChild( item );
    }

    static createElement( item ) {
        const itemElement = document.createElement( "li" );
        itemElement.innerText = item.name;
        return itemElement;
    }
}

export { SceneChildren };
