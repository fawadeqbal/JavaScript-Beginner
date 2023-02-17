const jokeObject ={
    id: "0WBEEYS78vS",
    joke: "Why did the tomato turn red\nBecause it saw the salad dressing!"
}

const postData = async (jokeObject) => {
    const response = await fetch("https://httpbin.org/post",
    {
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(jokeObject)
    });

    const jsonResponse = await response.json();

    console.log(JSON.parse(jsonResponse.data).joke);
    };

    postData(jokeObject);