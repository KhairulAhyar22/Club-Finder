class AppBar extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `<nav class="navbar navbar-expand-lg navbar-dark bg-primary" >
        <div class="container">
            <a class="navbar-brand" href="#">Club Finder</a>
            <ul class="navbar-nav" >
                <li class="nav-item">
                    <a href="#" class="nav-link">Fitur</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Populer</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Categori</a>
                </li>
            </ul>
        </div>
    </nav>`;
    }
}
customElements.define("app-bar", AppBar);