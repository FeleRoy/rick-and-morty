import type {
  ApiCharacterResponse,
  Character,
  CharacterFilter,
  Episode,
} from "./types";

const baseUrl = "https://rickandmortyapi.com/api";

export async function getCharacters(
  filters: CharacterFilter = {}
): Promise<ApiCharacterResponse> {
  try {
    if (filters.episode) {
      // Если задан фильтр по эпизоду, сначала получаем все эпизоды
      const episodes = await fetchAllEpisodesByName(filters.episode);
      const charactersIdsSet = await characterIdsFromEpisodes(episodes);
      // getCharactersByIds принимает массив строк, поэтому мы преобразуем Set в массив
      // Возможно есть другое решение с изменением типов, но пока что оставлю так
      const charactersIdsArray: string[] = [...charactersIdsSet].filter(
        (item) => item !== undefined
      ) as string[];
      let charactersFromEpisodes = await getCharactersByIds(charactersIdsArray);
      if (filters.name) {
        charactersFromEpisodes = charactersFromEpisodes.filter((c) =>
          c.name.toLowerCase().includes(filters.name!.toLowerCase())
        );
      }
      if (filters.status) {
        charactersFromEpisodes = charactersFromEpisodes.filter(
          (c) => c.status.toLowerCase() === filters.status
        );
      }
      if (filters.species) {
        charactersFromEpisodes = charactersFromEpisodes.filter(
          (c) => c.species.toLowerCase() === filters.species!.toLowerCase()
        );
      }

      return {
        info: {
          count: charactersFromEpisodes.length,
          pages: 0,
          next: null,
          prev: null,
        },
        results: charactersFromEpisodes,
      };
    } else {
      // Если не задан фильтр по эпизоду - выполняем обычный запрос
      const params = new URLSearchParams();
      if (filters.page) params.append("page", filters.page.toString());
      if (filters.name) params.append("name", filters.name);
      if (filters.status) params.append("status", filters.status);
      if (filters.species) params.append("species", filters.species);

      const url = `${baseUrl}/character/?${params.toString()}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Ошибка запроса: ${response.status}`);
      }

      const data: ApiCharacterResponse = await response.json();
      return data;
    }
  } catch (error) {
    console.error("Ошибка запроса:", error);
    throw error;
  }
}

export async function fetchAllEpisodesByName(episodeName: string) {
  let url = `${baseUrl}/episode/?name=${episodeName}`;
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

export function characterIdsFromEpisodes(episodes: Episode[]) {
  let charactersUrls: string[] = [];
  episodes.forEach((episod) => {
    charactersUrls = [...charactersUrls, ...(episod.characters || [])];
  });
  const charactersIds = charactersUrls.map((url) => url.split("/").pop()) || [];
  return new Set(charactersIds);
}

const CHUNK_SIZE = 20;

export async function getCharactersByIds(ids: string[]) {
  const characters = [];
  for (let i = 0; i < ids.length; i += CHUNK_SIZE) {
    const chunk = ids.slice(i, i + CHUNK_SIZE);
    const resp = await fetch(`${baseUrl}/character/${chunk.join(",")}`);
    if (!resp.ok) throw new Error("Ошибка получения персонажей");
    const data = await resp.json();
    //проверка на массив и добавление элементов
    characters.push(...(Array.isArray(data) ? data : [data]));
  }
  return characters;
}

export async function getCharacterById(id: string): Promise<Character> {
  const resp = await fetch(`${baseUrl}/character/${id}`);
  if (!resp.ok) throw new Error("Ошибка получения персонажа");
  const data = await resp.json();
  return data;
}
