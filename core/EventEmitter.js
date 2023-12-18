class EventEmitter {
    constructor( target, evt ) {
        this.eventTarget = target;
        this.evt = evt;
    }

    fireEvent( data ) {
        const customEvent = new CustomEvent( this.evt, { detail: data } );
        this.eventTarget.dispatchEvent( customEvent );
    }

    addEventListener( callback ) {
        this.eventTarget.addEventListener( this.evt, event => {
            callback(event.detail);
        });
    }
}

export { EventEmitter };