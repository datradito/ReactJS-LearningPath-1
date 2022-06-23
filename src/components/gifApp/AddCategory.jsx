import '../../styles/gifApp.css';
import { useState } from 'react';

export default function AddCategory() {
    const [inputCategory, setInputCategory] = useState('');
   
    function handleInput(e) {
        setInputCategory(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <form onSubmit={(e) => {handleSubmit(e)}}>
            <input onChange={handleInput} placeholder="Buscar gifs" type="text" name="searchBar" id="searchBar" />
        </form>
    )
}