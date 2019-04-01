
let question = [
  {
    "question": "Er det nice i botanisk?",
    "option1": "ja",
    "option2": "måske",
    "option3": "nix",
  },
  {
    "question": "Er Lærke ikke bare sej",
    "option1": "ja",
    "option2": "måske",
    "option3": "nix",
  },
  {
    "question": "Hvad med Fie",
    "option1": "ja",
    "option2": "måske",
    "option3": "nix",
  },
];

for (var i = 0; i < question.length; i++){

  document.getElementById("question").innerHTML += "<li>" + question[i].question + "</li>";

}
