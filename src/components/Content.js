import React from 'react';

export default function Content({año, descripcion, fraseCelebre}){
    return (
        <>
            <p>{año}</p>
            <p>{descripcion}</p>
            <blockquote>{fraseCelebre}</blockquote>

        </>
    );
}