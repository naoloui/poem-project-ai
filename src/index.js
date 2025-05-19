function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: `In your arms.
In your arms you hold me tight,
Never letting go through the night.
All my dreams are peaceful because of you,
Holding me in your arms like you do.
`,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
