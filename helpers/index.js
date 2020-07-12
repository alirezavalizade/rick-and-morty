export const infiniteLoader = async (asyncFunction) => {
  const data = [];
  let page = 1;
  const load = async () => {
    try {
      const response = await asyncFunction({
        page
      });
      data.push(...response.results);
      page++;
      if (response.info.next) {
        await load();
      }
    } catch (e) {}
  };
  try {
    await load();
  } catch (e) {
    console.log(e);
  } finally {
    return data;
  }
};

export const filterCharactersByLocationId = (characters, locationId) => {
  return characters.filter((item) => {
    return item.location.url.includes(`/${locationId}`);
  });
};

export const filterCharactersByEpisodeId = (characters, episodeId) => {
  return characters.filter((item) => {
    return item.episode.some((episode) => {
      return episode.includes(`/${episodeId}`);
    });
  });
};

export const getVariantColorByStatus = (status) => {
  switch (status) {
    case 'Dead':
      return 'red';
    case 'Alive':
      return 'green';
    default:
  }
};
