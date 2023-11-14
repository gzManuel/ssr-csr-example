const getData = async () => {
  const response = await fetch(
    "https://official-joke-api.appspot.com/random_ten"
  );
  const data = await response.json();
  return data;
};

export default async function Home() {
  const data = await getData();

  return (
    <>
      <div>
        <h1>Here are some Jokes!</h1>
        <br></br>
        <br></br>
        <ol>
          {data.map((joke) => (
            <li key={joke.id}>
              <Link href="/joke/1">{joke.setup}</Link>
            </li>
          ))}
        </ol>
      </div>
      <div></div>
    </>
  );
}
