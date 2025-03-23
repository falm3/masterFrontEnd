export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
}

export const createEmptyCharacter = (): Character => ({
  id: 1,
  name: '',
  status: '',
  species: '',
  image: '',
});
