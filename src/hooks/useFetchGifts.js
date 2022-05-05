import { useEffect, useState } from "react";
import {getGifs} from "../helpers/getGifs"

export const useFetchGifts = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    
    });

        useEffect( () => {

        getGifs(category)
        .then (imgs => {

            setState({
                data: imgs,
                loading: false
            });
            
            // setTimeout ( () =>{
            // }, 3000);

        })
         }, [category] );




    return state; // {data[], loading: true};

}
