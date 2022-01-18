const correctAnswers = ['B', 'B', 'A', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.getElementById("result");

form.addEventListener('submit', e => {
    e.preventDefault();
    scrollTo(0, 0);

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });
    
//show result on page

result.querySelector('span').textContent = `${score}%`;
let none = document.querySelector('.none');
none.classList.remove('none');

let output = 0;
const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;
    if (output === score){
        clearInterval(timer);
    } else {
        output++;
    }
}, 10);
});





//THE WINDOW OBJECT: the global object in front-end JS
//setTimeOut() & scrollTo();



