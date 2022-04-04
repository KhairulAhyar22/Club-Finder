import './club-item.js';
class ClubList extends HTMLElement {

    set clubs(clubs){
        this._clubs = clubs;
        console.log(this._clubs);
        this.render();
    }
    render(){
        this.innerHTML = "";
        this._clubs.forEach(club => {
            const clubItemElement = document.createElement("club-item");

            clubItemElement.club = club;          
            this.append(clubItemElement);
        });
    }
}
customElements.define("club-list", ClubList);