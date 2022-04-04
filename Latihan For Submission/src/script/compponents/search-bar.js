class SearchBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }
    get value(){
        return this.querySelector("#searchElement").value;
    }
    render(){
        this.innerHTML =`
        <!--<div id="search-container" class="search-container">
        <input placeholder="Search football club" id="searchElement" type="search">
        <button id="searchButtonElement" type="submit">Search</button>
        </div>-->

        <div class="container">
            <div class="d-flex">
                <input class="form-control me-2" id="searchElement" type="search" placeholder="Cari Kata Kunci" aria-label="Search">
                <button class="btn btn-outline-success" type="submit" id="searchButtonElement">Cari</button>
            </div>
        </div>    
        `;
        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}
customElements.define("search-bar", SearchBar);