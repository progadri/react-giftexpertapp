import React from 'react';
import { useFetchGifts } from '../hooks/useFetchGifts';
import { GifGriditem } from './GifGriditem';

export const GifGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifts( category );
    
  return (
    <>
        <h3>{category}</h3>

        {loading && <p>Loading</p>}

        <div className="card-grid">
                {
                images.map( img => (
                <GifGriditem 
                        key={img.id}
                        {...img}
                    /> 
                ))}
        </div>

    </>
  )
}
