const questions = [	
	{
		question: "Who proposed the theory of relativity?",
		choices: ["Albert Einstein", "Isaac Newton", "Stephen Hawking", "Galileo Galilei"],
		answer: "Albert Einstein"
	},
    {		
        question: "¿Quién fue la primera programadora de la historia?",		
        choices: ["Ada Lovelace", "Grace Hopper", "Hedy Lamarr", "Katherine Johnson"],
		answer: "Ada Lovelace"
	},
	{
		question: "¿Quién descubrió la penicilina?",
		choices: ["Alexander Fleming", "Louis Pasteur", "Robert Koch", "Joseph Lister"],
		answer: "Alexander Fleming"
	},
	{
		question: "¿Qué científica descubrió la radioactividad?",
		choices: ["Marie Curie", "Rosalind Franklin", "Barbara McClintock", "Dorothy Hodgkin"],
		answer: "Marie Curie"
	},
	{
		question: "¿Quién inventó el sistema de comunicación inalámbrica que permitió el desarrollo de la telefonía móvil y el wifi?",
		choices: ["Hedy Lamarr", "Ada Lovelace", "Grace Hopper", "Katherine Johnson"],
		answer: "Hedy Lamarr"
	},
	{
		question: "¿Quién descubrió los rayos X?",
		choices: ["Wilhelm Conrad Röntgen", "Marie Curie", "Niels Bohr", "Ernest Rutherford"],
		answer: "Wilhelm Conrad Röntgen"
	},
	{
		question: "¿Quién desarrolló la teoría del átomo?",
		choices: ["John Dalton", "Ernest Rutherford", "Niels Bohr", "James Clerk Maxwell"],
		answer: "John Dalton"
	},
	{
		question: "¿Quién fue la primera mujer en obtener un Premio Nobel de Física?",
		choices: ["Marie Curie", "Lise Meitner", "Maria Goeppert-Mayer", "Chien-Shiung Wu"],
		answer: "Marie Curie"
	},
	{
		question: "¿Quién fue el primer científico en describir la circulación de la sangre en el cuerpo humano?",
		choices: ["William Harvey", "Galileo Galilei", "Andreas Vesalio", "Leonardo da Vinci"],
		answer: "William Harvey"
	},
	{
		question: "¿Quién es conocido como el padre de la electricidad?",
		choices: ["Benjamin Franklin", "Nikola Tesla", "Thomas Edison", "Alexander Graham Bell"],
		answer: "Benjamin Franklin"
	},
	{
		question: "¿Quién fue la primera mujer en obtener un Premio Nobel de Química?",
		choices: ["Marie Curie", "Dorothy Crowfoot Hodgkin", "Irène Joliot-Curie", "Gertrude B. Elion"],
		answer: "Marie Curie"
	},
	{   question: "¿Quién descubrió la ley de la gravitación universal?",    
		choices: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"],
    	answer: "Isaac Newton"
  	},
	{
		question: "¿Quién es conocida como la 'Reina de las computadoras'?",
		choices: ["Grace Hopper", "Ada Lovelace", "Katherine Johnson", "Rosalind Franklin"],
		answer: "Grace Hopper"
	},
	{
		question: "¿Quién propuso la ley de la conservación de la energía?",
		choices: ["Julius Robert von Mayer", "James Prescott Joule", "Albert Einstein", "Niels Bohr"],
		answer: "Julius Robert von Mayer"
	},
];


const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const submitBtn = document.getElementById("submit");
const resultEl = document.getElementById("result");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
	const question = questions[currentQuestion];
	questionEl.innerText = question.question;
	choicesEl.innerHTML = "";
	for (let i = 0; i < question.choices.length; i++) {
		const choice = question.choices[i];
		const choiceEl = document.createElement("div");
		choiceEl.classList.add("choice");
		choiceEl.innerText = choice;
		choiceEl.addEventListener("click", () => {
			choicesEl.querySelector(".selected")?.classList.remove("selected");
			choiceEl.classList.add("selected");
		});
		choicesEl.appendChild(choiceEl);
	}
}

showQuestion();

submitBtn.addEventListener("click", () => {
	const selectedChoice = choicesEl.querySelector(".selected");
	if (selectedChoice) {
		if (selectedChoice.innerText === questions[currentQuestion].answer) {
                        score++;
                    }
                    currentQuestion++;
                    if (currentQuestion >= questions.length) {
                        resultEl.innerText = `Obtuviste ${score} de ${questions.length} preguntas correctas.`;
                        submitBtn.disabled = true;
                    } else {
                        showQuestion();
                    }
                }
            });