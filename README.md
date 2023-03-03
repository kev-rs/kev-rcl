# Rest Client Library

This is a rest client library for the pokemon rest api. It's completely type safety because it was built in typescript.

## Example
```
import { createApi } from '../src/index'
import type { PokeMethods } from "../src/types/index";

const API_URL = 'https://pokeapi.co/api/v2';
const POKE_API_METHODS = ['pokemon', 'type', 'ability'] as const;

const pokeApi = createApi<PokeMethods>(API_URL, POKE_API_METHODS);
    
const pokemons = await pokeApi.pokemon({ limit: 10, offset: 10 });
const bulbasaur = await pokeApi.pokemon('1');
```