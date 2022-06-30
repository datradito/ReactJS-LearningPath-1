import { getEnvironments } from "./getEnvironments";
export const GetGifs = async( category ) => {
    const {
        VITE_API_KEY
    } = getEnvironments();

    const url=`https://api.giphy.com/v1/gifs/search?api_key=${ VITE_API_KEY }&q=${ category }&limit=20`;
    const response = await fetch( url );
    const { data } = await response.json();
    const gifs = data.map( gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url,
    }));
    return gifs;
}
