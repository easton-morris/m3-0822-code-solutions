import React from 'react';
import ReactDOM from 'react-dom/client';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function PokeList(props) {
  const pokedex = props.pokedex;
  const pokeItems = pokedex.map(poke => {
    return (<li key={poke.number}>{poke.name}</li>);
  });
  return (
    <ul>{pokeItems}</ul>
  );
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<PokeList pokedex={pokedex} />);
