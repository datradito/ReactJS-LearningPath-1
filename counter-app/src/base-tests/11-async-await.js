export const getImagen = async() =>  {
    try{
        const apiKey = 'xd';
        const resp = await fetch('xd');
        const { data } = await resp.json();

        const { url } = data.images.original;

        return url;
    } catch(error){
        console.error(error);
        return 'No se encontro imagen';
    }
}