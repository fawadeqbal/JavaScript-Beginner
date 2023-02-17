
const getDataFromForm = () => {
    const requestObj = {
        type: "knock-knock"
    };

    return requestObj;
}

const buildRequestUrl = () => {

    return `https://api.jokes.one/jod?category=animal`;
}

const requestJoke = async (url) => {
    const response = await fetch(url,{
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const jsonResponse = await response.json();
    const joke = jsonResponse.contents.jokes[0].joke;
    postJokeToPage(joke.text);
}

const postJokeToPage = (joke) =>{
    console.log(joke);
}

const processJokeRequest = async () => {
    const reqData = getDataFromForm();
    const reqUrl = buildRequestUrl();
    await requestJoke(reqUrl);
    console.log("Finished");
}

processJokeRequest();