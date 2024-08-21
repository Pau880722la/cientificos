import React from 'react';
import './Imagen.css';

export default function Imagen(props){
    return (
        <>
            <img className="image-card" src={props.imagen} />
        </>
    );
}