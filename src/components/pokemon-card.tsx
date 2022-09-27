import React, { FunctionComponent, useState } from 'react';
import Pokemon from '../models/pokemon';
import './pokemon-card.css';
import formatDate from '../helpers/formatDate';
import formatType from '../helpers/formatType';
type Props = {//methodes pour les props
  pokemon: Pokemon,
  borderColor ? : string //couleur des bordures par défaut
};

const PokemonCard: FunctionComponent<Props> = ({ pokemon, borderColor = 'red' }) => { //methode pour les props
  const [color, setColor] = useState <string>();
  
  const showBorder = () => {
    setColor(borderColor);
  }
  const hideBorder = ()=>{
    setColor("#f5f5f5");
  }

  return (
    <div className="col s6 m4" onMouseEnter={showBorder} onMouseLeave={hideBorder}> 
      <div className="card horizontal" style={{borderColor : color}}>  
        <div className="card-image">
          <img src={pokemon.picture} alt={pokemon.name} />
        </div>
        <div className="card-stacked">
          <div className="card-content">
          
            <p>{pokemon.name}</p>
            <p><small>{formatDate(pokemon.created)}</small></p>
               
                {pokemon.types.map(type=>(
                    <span key={type} className={formatType(type)}> {type}</span>
                    ))} 
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;