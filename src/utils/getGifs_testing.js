//The original file imports the api key from .env, jest cant read the info like that
export const GetGifs = async( category ) => {
    const url=`https://api.giphy.com/v1/gifs/search?api_key=IhRmTjj9qw6dDyk1KtqIbkDmxyd5B61P&q=${ category }&limit=20`;
    const response = await fetch( url );
    const { data } = await response.json();
    const gifs = data.map( gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url,
    }));
    return gifs;
}
