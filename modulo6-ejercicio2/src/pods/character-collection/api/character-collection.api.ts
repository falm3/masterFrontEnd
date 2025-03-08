import axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';

const url = '/api/characters';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const { data } = ( await axios.get<CharacterEntityApi[]>( url ));

  return data;
};
