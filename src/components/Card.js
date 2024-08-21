import React from 'react';
import './Card.css';
import Imagen from './Imagen.js';
import Title from './Title.js';
import Content from './Content.js';
import Footer from './Footer.js';


export default function Card(props){
    return (
        <>
            <div className="card">
                <Title
                    nombre={props.nombre}
                />
                <Imagen
                    imagen={props.imagen}
                />
                <Content
                    año={props.año}
                    descripcion={props.descripcion}
                    fraseCelebre={props.fraseCelebre}
                    imagen={props.imagen}
                />
                <Footer
                   nacimiento={props.nacimiento}
                   muerte={props.muerte}
                />
            </div>

        </>
    );
}
