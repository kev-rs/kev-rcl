import { pokeApi } from '../src/index'
import { describe, expect, test } from 'vitest';

describe('createApi', () => {

  test('should return a proxy object', async () => {
    
    const res = await pokeApi.pokemon('1');
    
    console.log({res});
    
    expect(res).toEqual({ name: 'bulbasaur' })
  });
})
