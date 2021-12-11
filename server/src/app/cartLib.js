export default class BggCart extends HTMLElement {
    #input;

    // can add constructor with super call

    connectedCallback (){
        // ready to show data when ListLib events pop; so, have to subscribe here and/or use attributes
        window.addEventListener('list:like', (ev)=> {
            this.#input=ev.detail;
            this.innerHTML = `Gekozen spel: ${this.#input.name}`;
        });
    }

    disconnectedCallback (){

    }
}
