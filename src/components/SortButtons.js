import React from 'react';

const SortButtons= ({ sortByName, sortByDate}) => (
    <div className="sort-buttons">
        <button onClick={sortByName}>Ordenar por Nombre</button>
        <button onClick={sortByDate}>Ordenar por Año</button>
    </div>
)

export default SortButtons;