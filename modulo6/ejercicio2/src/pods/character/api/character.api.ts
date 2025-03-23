import axios from 'axios';
import { Character } from './character.api-model';
import { CharacterEntityApi } from 'pods/character-collection/api';

const url = '/api/characters';

export const getCharacter = async ( id:number ): Promise<Character> => {
  const { data } = ( await axios.get<CharacterEntityApi>( `${ url }/${ id }` ));

  return data;
};

export const saveCharacter = async ( character: Character ): Promise<boolean> => {
  await axios.put(`${ url }/${ character.id }`, character);
  
  return true;
};

