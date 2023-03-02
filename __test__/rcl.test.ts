import { createApi } from '../src/index'
import { describe, expect, beforeAll, afterAll, test } from 'vitest';


const API_URL = 'https://pokeapi.co/api/v2';
const POKE_API_METHODS = ['pokemon', 'type', 'ability'] as const;

type ValidMethods = typeof POKE_API_METHODS[number];

interface Valid {
  pokemon: string;
  type: string;
  ability: string;
};

describe('createApi', () => {
  test('should return a proxy object', async () => {
    
    
    const pokeApi = createApi<Valid>(API_URL, POKE_API_METHODS);
    // expect(pokeApi).toBeInstanceOf(new Proxy({}, {}));

    const res = await pokeApi.pokemon('1');
    console.log({res});
    
    expect(res).toEqual({ name: 'bulbasaur' })
  });
})
