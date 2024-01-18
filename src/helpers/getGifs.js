export const fetchGetGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=OgaxCE5mqbKVtBghoDw6kwMTQdqImUZW&q=${category}&limit=20`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const cleanDataGifs = data.map(({ id, title, images: { downsized_medium: { url } } }) => ({ id, title, url, }));

    return cleanDataGifs;

}