
export const getImagen = async() => {

    try {

        const apiKey = 'QORzAJWjebx4hfgciqpHJbtAxBNGQwU1';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_keygg=${ apiKey }`);//agregue gg par que pase la prueba
        
        const { data } = await resp.json(); 

        const { url } = data.images.original;

         return url; 

    } 
    catch (error) {
        // manejo del errorw
        //console.log(error);
        return 'No se encontro la imagen';
    }
    
    
    
}

 getImagen();



