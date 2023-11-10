const getData = async () => {
  const response = await fetch('https://official-joke-api.appspot.com/random_ten')
  const data = await response.json()
  return data;
}

export default async function Home () {
  
    const data = await getData();
  

  return (
    <main>
      <h1>Here are some Jokes!</h1>
      <ul>
        {data.map(joke => (
          <li key={joke.id}>{joke.setup} - {joke.punchline}</li>
        ))}
      </ul>
    </main>
  )
}
