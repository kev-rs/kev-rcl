// import { pokeApi } from 'kev-rcl-tsx'
import { pokeApi } from '../src/index'
import { describe, expect, test } from 'vitest';

describe('createApi', () => {

  test('should return a proxy object', async () => {
    
    const res = await pokeApi.pokemon('get_by_id')(1);
    console.log(res);
    
    expect(res).toEqual(Object)
  });
})
