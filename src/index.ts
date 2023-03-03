import type { Main, Pokemon } from './types';

const POKE_API_METHODS = ['pokemon', 'type', 'ability'] as const;
type ValidMethods = typeof POKE_API_METHODS[number];

type Params = Record<'limit' | 'offset', StrOrInt>;

type Props<T> = {
  [K in keyof T]: <S extends string | Params>(args: S) => Promise<S extends string ? Main : Pokemon>;
};


type StrOrInt = string | number;

const createApi = <T>(api_url: string, validProps: readonly ValidMethods[]) => {
  return new Proxy<Props<T>>({} as Props<T>, {
    get: (_, prop: ValidMethods) => {
      
      return async (q: string | Record<string, string>) => {
        if (!validProps.includes(prop)) return Promise.reject({ error: `Invalid method - ${prop}` })
        
        const url = new URL(`${api_url}/${prop}/${typeof q === 'string' ? q: ""}`)
        
        if (typeof q !== 'string') for (const k in q) url.searchParams.set(`${k}`, `${q[k]}`);
        
        const res = await fetch(url.toString());
        if (!res.ok) return Promise.reject({ error: `Something wrong happened with ${url}`});
        const pokemon = await res.json();
        
        if (typeof q !== 'string') return pokemon;
        return { name: pokemon.name }
      }
    }
  });  
};

export { createApi };
