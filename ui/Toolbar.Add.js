import { AddInstance } from './AddInstance.js';
import { SceneChildren } from './SceneChildren.js';
import { EventEmitter } from '../core/EventEmitter.js';


class ToolbarAdd {
    static addToToolbar( parentElement, item, scene ) {
        const newItem = ToolbarAdd.createElement( item );
        ToolbarAdd.appendToParent( parentElement, newItem );

        newItem.addEventListener('click', () => {
            ToolbarAdd.itemClicked( item, scene );
        });
    }

    static itemClicked( item, scene ) {
        const sceneChildren = document.getElementById("scene-children");
        AddInstance.selectInstance( item, scene );
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