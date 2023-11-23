import React from 'react';
import { useState } from "react";

export default function findPokemon() {
    const [pokemon, setPokemon] = useState(null);
    const [val, setVal] = useState("");

    const change = event => {
        const newVal = event.target.value;
        setVal(newVal);
    }

    React.useEffect(() => {
        fetchPokemon(1);
    }, []);


    const fetchPokemon = (id) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) => res.json())
            .then((json) => setPokemon(json));
    }

    return (
        <>
            <p>Enter a Number from 1 - 1017</p>
            <input type="number" onChange={change} />
            <button onClick={_e => {
                fetchPokemon(val);
            }}>Submit!</button>
            <div>
                {pokemon && (
                    <div>
                        <h1>{pokemon.name}</h1>
                        <img src={pokemon.sprites.front_default} />
                        <p>Global Pokedex Number: {pokemon.id}</p>
                        <p>Pokemon Type: {pokemon.types[0].type.name}</p>
                    </div>
                )}
            </div>
        </>
    );
}