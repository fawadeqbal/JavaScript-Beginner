

const getDadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/",{
        method: "GET",
        headers: {
            accept: "application/json"
        }
    });
    const jsonJokeData = await response.json();

    console.log(jsonJokeData.joke);
}

getDadJoke();