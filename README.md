# Rest Client Library

Hi guys, I'm just a beginner, and this is the first library I create and still in development, it's a Rest API Client Library for the RESTful Pokémon API -> https://pokeapi.co/, using a JavaScript Proxy. It was built in typescript so it's completely type safety. You can collaborate on the project if you want. I know there's already different libraries for this out there, but I made this just for learning, so leet me see your feedback :). At the beginning I wanted to create a rest api client library for all the restful apis that exist, but it's kinda hard :(, because I don't know all the queries parameter a restful api could have, so I first started focusing on just one.

## Features I will add later
- Auto caching.
- A doc that explains how to use it.
- An easier way to use it and with more options like:
```
# Here you get a pokemon by its id and then u can also select what you want to receive like GraphQL or tRPC.

const bulbasaur = await pokeApi.pokemon('get_by_id')('1')({ select: { name: true } }); // { name: Bulbasaur }
```
- And more...



## Example
```
import { pokeApi } from 'kev-rcl-tsx'
    
# get all pokemons
const pokemons = await pokeApi.pokemon({
  # total of pokemons to get
  limit: 10, 
  offset: 10 
});

# get pokemon by id
const bulbasaur = await pokeApi.pokemon('1');

# get pokemon by its name
const bulbasaur = await pokeApi.pokemon('bulbasaur');
```