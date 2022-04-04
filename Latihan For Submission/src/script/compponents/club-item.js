class ClubItem extends HTMLElement {

    set club(club){
        this._club = club;
        this.render();
    }

    render(){
        this.innerHTML = `
            <div class="col-lg-12" style="margin-top: 12px;">
                <div class="card border-warning text-success mx-auto text-center" style="width:20rem;">

                    <div class="card-header">
                        <h3 style="text-align:center;">Data Club</h3>
                    </div>
                    <img src="${this._club.fanArt}" class="card-img-top" alt="..">
                    <div class="card-body">
                        <h5 class="card-title">${this._club.name}</h5>
                        <p class="card-text">${this._club.description}</p>
                        <a href="#" class="btn btn-primary text-center"
                        >Go somewhere</a>
                    </div> 
                </div>
            </div>
            `;

    }
}
customElements.define("club-item", ClubItem);