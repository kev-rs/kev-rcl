import { createApi } from '../src/index'
import { describe, expect, test } from 'vitest';
import type { PokeMethods } from "../src/types/index";

const API_URL = 'https://pokeapi.co/api/v2';
const POKE_API_METHODS = ['pokemon', 'type', 'ability'] as const;


describe('createApi', () => {

  test('should return a proxy object', async () => {
    const pokeApi = createApi<PokeMethods>(API_URL, POKE_API_METHODS);
    
    const res = await pokeApi.pokemon('1');
    
    console.log({res});
    
    expect(res).toEqual({ name: 'bulbasaur' })
  });
})
