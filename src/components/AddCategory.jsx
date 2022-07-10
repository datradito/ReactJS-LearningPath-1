import PropTypes from 'prop-types';
import { useForm } from '../hooks/useForm';

export const AddCategory = ({ onNewCategory }) => {
    const { formState, onInputChange } = useForm()

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( formState.search.trim().length <= 1 ) return;
        onNewCategory( formState.search.trim() );
        event.target[0].value = ""
    }

    return (
        <form className='form' onSubmit={ onSubmit } aria-label="form">
            <input 
                type="text"
                placeholder="Buscar gifs"
                name="search"
                onChange={ onInputChange }
            />
        </form>
    )
}



AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}