import { getShowDetails } from "../js/tvmaze-api.js";

const url = new URL(document.URL)
const searchParams = url.searchParams;
const showId = searchParams.get("id");

getShowDetails(showId, (show)=>{
    console.log(show);

    const title = document.getElementById("title");
    const image = document.getElementById("image");

    title.innerHTML = show.name;
    image.setAttribute("src", show.image.original);
})