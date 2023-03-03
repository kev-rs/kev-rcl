# Rest Client Library

Hi guys, I'm just a beginner, and this is the first library I create, it's a rest client library for the pokemon rest api using a JavaScript Proxy. It was built in typescript so it's completely type safety. You can collaborate on the project if you want. Leet me see your feedback :)

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