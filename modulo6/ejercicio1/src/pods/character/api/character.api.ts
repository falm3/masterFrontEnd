import axios from 'axios';
import { Character } from './character.api-model';

export const getCharacter = async (id:number): Promise<Character> => {
  const { data } = ( await axios.get<Character>( `https://rickandmortyapi.com/api/character/${id}` ));

  return data;
};