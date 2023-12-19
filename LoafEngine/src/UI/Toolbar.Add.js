import { AddInstance } from './AddInstance.js';
import { EventEmitter } from '../core/EventEmitter.js';


class ToolbarAdd {
    static addToToolbar( parentElement, item, scene ) {
        const newItem = ToolbarAdd.createElement( item );
        ToolbarAdd.appendToParent( parentElement, newItem );

        newItem.addEventListener('click', () => {
            ToolbarAdd.itemClicked( item, scene, newItem );
        });

        newItem.addEventListener("newObj", function(event) {
            const id = event.detail;
            
            newItem.id = `${id.detail}`;
            console.log(newItem.id);
        });
    }

    static itemClicked( item, scene, elem ) {
        const sceneChildren = document.getElementById("scene-children");
        AddInstance.selectInstance( item, scene, elem );
        // Dispatch "objectAdded" event
        const eventEmitter = new EventEmitter(sceneChildren, "objectAdded");
        eventEmitter.fireEvent();
    }

    static appendToParent( parentElement, item ) {
        parentElement.appendChild( item );
    }

    static createElement( item ) {
        const itemElement = document.createElement( "li" );
        itemElement.innerText = item;
        return itemElement;
    }
}

export { ToolbarAdd };