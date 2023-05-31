const  { REACT_APP_API_KEY } = process.env

const getNews = () => {

    console.log(REACT_APP_API_KEY)
    return fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${REACT_APP_API_KEY}`)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error();
        }
      })
      .catch(err => console.log(err));
}

export { getNews }