import type { Main, PokeMethods, Pokemon } from './types';

const API_URL = 'https://pokeapi.co/api/v2';
const POKE_API_METHODS = ['pokemon', 'type', 'ability'] as const;
type ValidMethods = typeof POKE_API_METHODS[number];

type Params = Record<'limit' | 'offset', StrOrInt>;
type Methods = 'get_all' | 'get_by_id' | 'get_by_name';
type Check<T, S, K> = T extends 'get_all' ? S : K;
type Props<T> = {
  [K in keyof T]: <M extends Methods>(props: M) 
    => <S extends Check<M, Params, StrOrInt>>(args: S) 
      => Promise<Check<M, Main, Pokemon>>;
};

type StrOrInt = string | number;

// function isPokemon(q: unknown): q is Pokemon {
//   if (q !== null && typeof q === 'object') return true;

//   return false;
// }

async function handleResponse<T>(url: URL): Promise<T> {
  const res = await fetch(url.toString());
  if (!res.ok) return Promise.reject({ error: `Something wrong happened with ${url}`});
  const pokemon = await res.json() as T;

  return pokemon;
}

const createApi = <T>(api_url: string, validProps: readonly ValidMethods[]) => {
  return new Proxy<Props<T>>({} as Props<T>, {
    get: (_, prop: ValidMethods) => {
      return (method: Methods) => {
        if (!validProps.includes(prop)) return Promise.reject({ error: `Invalid method - ${prop}` })

        if (method === 'get_all') {
          return async (q: Record<string, string>) => {
            const url = new URL(`${api_url}/${prop}`)
          
            for (const k in q) url.searchParams.set(`${k}`, `${q[k]}`);

            const pokemon = await handleResponse<Main>(url);
            
            return pokemon;
          };
        }

        return async (q: string) => {          
          const url = new URL(`${api_url}/${prop}/${q}`)
          
          const pokemon = await handleResponse<Pokemon>(url);

          return pokemon;
        }
      }
    }
  });  
};

const pokeApi = createApi<PokeMethods>(API_URL, POKE_API_METHODS);
// pokeApi.pokemon('get_all')({ limit: 2, offset: 2 }).then(res => {});

export { pokeApi };
