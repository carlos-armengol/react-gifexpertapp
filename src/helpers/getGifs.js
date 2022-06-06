

export const getGifts = async ( category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&offset=0&rating=g&lang=es&api_key=RndWM8MYzTlStbPyvb1sbqy4GKidNC4j`
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map( ({id, title, images}) => {
      return {
        id: id,
        title: title,
        url: images.downsized.url
      }
    })
    console.log(gifs)
    return gifs;
  }