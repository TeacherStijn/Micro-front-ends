export default class BggList extends HTMLElement {
    #data = [];
    #selected;

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
            el => {
                this.innerHTML += `<li><img title="${el.name}" src="${el.thumbnail}" /></li>`;
            }
        );
        this.innerHTML += "</ul>";

        // add some event listeners
        [...this.getElementsByTagName("li")].forEach(
            li => li.addEventListener('click', () => {
                this.#selected = li.childNodes[0].title;
                const found = this.#data.find(el => el.name == this.#selected);
                this.notify(found);
            })
        );
    }

    notify(el){
        this.setAttribute('like',JSON.stringify(el));
        const ev = new CustomEvent('list:like', { bubbles: true, detail: el}); // bubbles = belangrijk ivm naar body toe
        this.dispatchEvent(ev);
    }
}
