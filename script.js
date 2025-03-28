// Mock AI function for answering questions
function getAnswer() {
    const userInput = document.getElementById("user-input").value;
    const aiResponseElement = document.getElementById("ai-response");

    if (!userInput) {
        aiResponseElement.textContent = "Please enter a question!";
        return;
    }

    aiResponseElement.textContent = "Thinking...";

    // Simulating an AI response (replace this with an actual API call for real AI interaction)
    setTimeout(() => {
        aiResponseElement.textContent = `AI Answer: Here's what I think about '${userInput}'...`;
    }, 1000);
}

async function getAnswer() {
    const userInput = document.getElementById("user-input").value;
    const aiResponseElement = document.getElementById("ai-response");

    if (!userInput) {
        aiResponseElement.textContent = "Please enter a question!";
        return;
    }

    aiResponseElement.textContent = "Thinking...";

    try {
        const response = await fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer YOUR_OPENAI_API_KEY`
            },
            body: JSON.stringify({
                model: 'text-davinci-003', // Choose the model
                prompt: userInput,
                max_tokens: 150
            })
        });

        const data = await response.json();
        aiResponseElement.textContent = `AI Answer: ${data.choices[0].text.trim()}`;
    } catch (error) {
        aiResponseElement.textContent = "Sorry, I couldn't get an answer.";
    }
}
