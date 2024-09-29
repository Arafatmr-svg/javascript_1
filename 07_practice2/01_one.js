
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const instruction=document.querySelector("#instruction")

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / (height/100)**2).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
    if(bmi<18.6){
        instruction.innerHTML="Please take care of youself.You look like very weak"
        document.querySelector("#instruction").style.color="aqua"

    }
    if(bmi>18.5 && bmi<24.9){
        instruction.innerHTML="Congrats! Your BMI range is perfect"
        document.querySelector("#instruction").style.color="black"

    }
    if(bmi>24.9){
        instruction.innerHTML="You are having more weight.Kindly follow proper diet and do exercise"
        document.querySelector("#instruction").style.color="red"
    }
  }
  
});

