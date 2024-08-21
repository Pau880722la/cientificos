import React from 'react';

export default function Footer({ nacimiento, muerte}){
    return (
        <>
            <p><strong>Nacimiento:</strong> {nacimiento}</p>
            <p><strong>Muerte:</strong> {muerte}</p>
        </>
    );
}