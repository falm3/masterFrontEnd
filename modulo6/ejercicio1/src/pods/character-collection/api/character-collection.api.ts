import axios from 'axios';
import { APIResponse, Character } from './character-collection.api-model';

export const getCharacterCollection = async (): Promise<Character[]> => {
  const { data } = ( await axios.get<APIResponse>( 'https://rickandmortyapi.com/api/character' ));

  return data.results;
};
