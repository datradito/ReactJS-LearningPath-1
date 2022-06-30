import useFetchGifs from '../../hooks/useFetchGifs';
import GifItem from './GifItem';
import PropTypes from 'prop-types';

export default function GifCategory({ category }) {
    const { foundGifs, isLoading } = useFetchGifs( category );
    return (
        <div>
            <h3>{category}</h3>
            { isLoading && <h3>Cargando...</h3>}
            <div className='card-grid'>
                { foundGifs.map( gif => {
                    return ( <GifItem gif={gif} key={gif.id}></GifItem> )
                }) 
                }
            </div>

        </div>
    )
}

GifCategory.propTypes = {
    category: PropTypes.string.isRequired
};