import type { ApiCharacterResponse, Character, CharacterFilter, Episode } from "./types";

const baseUrl = "https://rickandmortyapi.com/api/character";

// export async function getCharacters(
//   filters: CharacterFilter = {}
// ): Promise<Character[]> {
//   try {
//     if (filters.episode) {
//       const episodes = await fetchAllEpisodesByName(filters.episode);
//       const episodesCharacters =
        
      

//     } else {
//         // Если не задан фильтр по эпизоду - выполняем обычный запрос
//     const params = new URLSearchParams();

//     if (filters.name) params.append("name", filters.name);
//     if (filters.status) params.append("status", filters.status);
//     if (filters.species) params.append("species", filters.species);

//     const url = `${baseUrl}?${params.toString()}`;

//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error(`Ошибка запроса: ${response.status}`);
//     }

//     const data: ApiResponse = await response.json();
//     return data.results;
//     }
//   } catch (error) {
//     console.error("Ошибка запроса:", error);
//     throw error;
//   }
// }

// getCharacters()
//   .then(characters => {
//     console.log('Персонажи:', characters);
//   })
//   .catch(error => {
//     console.error('Ошибка запроса персонажей:', error);
//   });


export async function fetchAllEpisodesByName(episodeName: string) {
  let url = `https://rickandmortyapi.com/api/episode/?name=${episodeName}`;
  let allEpisodes: Episode[] = [];

  while (url) {
    const resp = await fetch(url);
    if (!resp.ok) throw new Error("Ошибка получения эпизодов");
    const data = await resp.json();

    allEpisodes = [...allEpisodes, ...(data.results || [])];
    url = data.info?.next ?? null;
  }

  return allEpisodes;
}

export function characterIdsFromEpisodes(episodes: Episode[]){
    let charactersUrls: string[] = [];
    episodes.forEach((episod)=>{
        charactersUrls = [...charactersUrls, ...(episod.characters || [])]
    })
    const charactersIds = charactersUrls.map(url => url.split("/").pop()) || [];
    return new Set(charactersIds)
}