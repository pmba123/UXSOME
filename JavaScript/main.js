
const questions = {
  1: {
    id: '1',
    question: 'Er det nice i botanisk?',
    option1: 'ja',
    option2: 'måske',
    opttion3: 'nix',
  },
  2: {
    id:'2',
    question: 'er det gode spørgsmål?',
    option1: 'ja',
    option2: 'måske',
    opttion3: 'nix',
  }
}
$('#sprg1').append(
  "<div>" + questions[0].question + "</div>"
);
