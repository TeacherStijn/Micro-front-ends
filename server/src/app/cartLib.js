export default class BggCart extends HTMLElement {
    constructor() {
        super();
        console.log('cartLib is in!');
    }

    connectedCallback (){
        // ready to show data when ListLib events pop; so, have to subscribe here and/or use attributes
        this.innerHTML = "Cart";
    }

    disconnectedCallback (){

    }
}
