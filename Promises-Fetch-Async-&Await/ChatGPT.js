const apiKey = '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';
const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

const getChatMessage = async (message) => {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      prompt: message,
      max_tokens: 100,
      temperature: 0.7,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0
    })
  });

  const responseData = await response.json();
  const chatMessage = responseData.choices[0].text.trim();

  return chatMessage;
};

// Example usage
const inputMessage = 'What is the capital of France?';
getChatMessage(inputMessage)
  .then((response) => {
    console.log(`Input message: ${inputMessage}`);
    console.log(`ChatGPT response: ${response}`);
  })
  .catch((error) => {
    console.error(error);
  });
