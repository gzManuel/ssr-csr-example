const getData = async () => {
  const response = await fetch(
    "https://official-joke-api.appspot.com/random_ten"
  );
  const data = await response.json();
  return data;
};

export default async function Home() {
  const data = await getData();
  const jokes =
    data.length === 0 ? 
      "LOADING"
     : (
      <ol className="list-decimal">
        {data.map((joke) => (
          <li key={joke.id}>
            {joke.setup} - {joke.punchline}
          </li>
        ))}
      </ol>
    );
  return (
    <>
      <>
      <div className="bg-sky-500/50 p-10 rounded-md w-3/4">
        <h2>Here are some Jokes!</h2>
        <div>{jokes}</div>
      </div>
    </>
    </>
  );
}
