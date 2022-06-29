import { useEffect, useState } from "react";
import getGif from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });
    /* setTimeout(() => {
        setState({
            data: [1,2,3,4,5],
            loading: true
        })
    }, 3000) */
    useEffect(() => {
        getGif(category)
            .then(imgs => {
                setTimeout(() => {
                    setState({
                        data: imgs,
                        loading: false
                    })
                });
            })
    }, [category]);
    return state;
}
