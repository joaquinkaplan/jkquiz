const correctAnswers = ['B', 'B', 'A', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.getElementById("result");
const button = document.getElementById("button");
const input1b = document.querySelectorAll('input[name="q1"]');
const input2a = document.getElementById("q2");
const input2b = document.querySelectorAll('input[name="q2"]');
const input3a = document.getElementById("q3");
const input3b = document.querySelectorAll('input[name="q3"]');
const input4a = document.getElementById("q4");
const input4b = document.querySelectorAll('input[name="q4"]');
const input = document.querySelectorAll('input[type="radio"]');


input1b.forEach(answer => { answer.addEventListener("click", () => { input2a.classList.remove('d-none'); input2a.scrollIntoView({behavior: "smooth"}) }) });

input2b.forEach(answer => { answer.addEventListener("click", () => { input3a.classList.remove('d-none'); input3a.scrollIntoView({behavior: "smooth"});}) });

input3b.forEach(answer => { answer.addEventListener("click", () => { input4a.classList.remove('d-none'); input4a.scrollIntoView({behavior: "smooth"})}) });

input4b.forEach(answer => { answer.addEventListener("click", () => {  button.classList.remove('d-none'); button.scrollIntoView({behavior: "smooth"})}) });



form.addEventListener('submit', e => {
    e.preventDefault();
    scrollTo(0, 0);
form.classList.add('d-none');
document.getElementById('lets-see').innerHTML = "Let's see how you did...";

    let score = 0;

    //check answers
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }


        //show result on page

        result.querySelector('span').textContent = `${score}%`;
        result.classList.remove('d-none');



        //THE WINDOW OBJECT: the global object in front-end JS
        //setTimeOut() & scrollTo();


        let output = 0;
        const timer = setInterval(() => {
            result.querySelector('span').textContent = `${output}%`;
            if (output === score) {
                clearInterval(timer);
            } else {
                output++;
            }
        }, 10);
    });







});

