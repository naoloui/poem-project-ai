function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "3bb429560a4tfe3ecf96fae66oed5d7f";
  let context =
    "You are a romantic poem expert. You want to write a poem that is romantic and beautiful. Your mission is to generate a 4-line poem in basic HTML. Make sure to follow the user instructions and seperate each line with a <br />.";
  let prompt = `Generate a poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=~${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating"> ⏳ Generating a poem about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then((response) => {
    displayPoem(response.data); // assuming response.data contains the poem
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem, "#answer");
