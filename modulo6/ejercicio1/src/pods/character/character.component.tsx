import { linkRoutes } from 'core/router';
import { Character } from './character.vm';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  character: Character;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  return (
    <>
      <img
        src={`${character.image}`}
        alt={`Imagen del Personaje: ${character.name}`}
        className='cards__item--img'
      />
      <h3 className='cards__item--title'>{character.name}</h3>
      <p className='cards__item--text' >Specie: {character.species}</p>
        Status: {character.status}
      <p>
        <Link to={linkRoutes.characterCollection}>Back to the list</Link>
      </p>
    </>
  );
};
