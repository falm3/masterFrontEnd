import { linkRoutes } from 'core/router';
import { Character } from './character.vm';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  return (
    <>
      <img
        src={`${character.image}`}
        alt={`Imagen del Personaje: ${character.name}`}
      />
      <h3>{character.name}</h3>
      <p>Specie: {character.species}</p>
      <p>
        Status: {character.status}
      </p>  
      <p>Best Sentences: {character.bestSentences}</p>

      <p>
        <Link to={linkRoutes.characterCollection}>Back to the list</Link>
      </p>
    </>
  );
};
