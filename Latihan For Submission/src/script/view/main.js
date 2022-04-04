import '../compponents/club-list.js'
import '../compponents/search-bar.js';
import DataSource from "../data/data-source.js";

const main = () => {

    const searchElement = document.querySelector("search-bar");
    const clubListElement = document.querySelector("club-list");

    let onButtonSearchClicked = () => {//promise resolve reject
        DataSource.searchClub(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult => console.log(fallbackResult));
        
    };

    onButtonSearchClicked = async () =>{//promise asycn await
        try {
            const result = await DataSource.searchClub(searchElement.value);
            renderResult(result);
        } catch(message){
            fallbackResult(message);
        }
    }

    const renderResult = results => {
        clubListElement.clubs = results;
        
    };

    const fallbackResult = (message) =>{
        clubListElement.innerHTML = "";
        clubListElement.innerHTML = `<h2 class="placeholder">${message}</h2>`;
    }

    searchElement.clickEvent = onButtonSearchClicked;
};
export default main;