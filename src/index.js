function displayCar(response) {
  new Typewriter("#car", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateCar(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "5cdbe3e5o1ab49bf1ed39fb1d03ec3ct";
  let prompt = `User instructions: Recommend three cars that have the characteristics${instructionsInput.value}`;
  let context =
    //You are a romantic Poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and seperate each line with a <br /> element. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with `sheCodes AI` inside a <strong> element at the end of the poem//
    `You are a renowned car salesman that loves sport cars. Your mission is to name three sports cars that would be suitable for the user in basic HTML. Bullet Point your three results abd seperate with a <br /> element. YOU MUST NOT provide a description of the car, ONLY the name. Make sure to follow the user instructions.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let carElement = document.querySelector("#car");
  carElement.classList.remove("hidden");
  carlement.innerHTML = `<div class="generating">Generating the recommendations that have the requirements: ${instructionsInput.value}</div>`;

  console.log("Generating Recommendations");
  axios.get(apiUrl).then(displayCar);
}

let carFormElement = document.querySelector("#car-generator-form");
carFormElement.addEventListener("submit", generateCar);
