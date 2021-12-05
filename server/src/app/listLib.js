export default class BggList extends HTMLElement {
    #data = [];
    #selected;

    constructor() {
        super();
        console.log('ListLib is in!');
    }

    connectedCallback (){
        // ready for loading data from API
        fetch('https://bgg-json.azurewebsites.net/hot').then(
            inp=>inp.json()
        ).then(
            resp=> {
                this.#data = resp;
                this.render();
            }
        );
    }

    disconnectedCallback (){

    }

    render() {
        this.innerHTML = "<ul>";
        this.#data.forEach(
            el=>{
                this.innerHTML += `<li><img title="${el.name}" src="${el.thumbnail}" /></li>`;
            }
        );
        this.innerHTML += "</ul>";

        // add some event listeners
        [...this.getElementsByTagName("li")].forEach(
            li=>li.addEventListener('click', ()=> {
                this.#selected=li.childNodes[0].title;
                const found = this.#data.find(el=>el.name==this.#selected);
                this.setAttribute('like',JSON.stringify(found));
            })
        );

        // add some styling as well
    }

    // ON CLICK OP ITEM = Attribute instellen op gekozen ITEM ???
}
