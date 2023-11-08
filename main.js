const container = document.getElementById('numberContainer');


function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}


function mouseover(event) {
  const number = parseInt(event.target.textContent);

  let info = '';
  if (number % 2 === 0) {
    info += 'Even ';
  } else {
    info += 'Odd ';
  }

  if (isPrime(number)) {
    info += 'Prime';
  }

  event.target.setAttribute('title', info);
}

for (let i = 0; i <= 100; i++) {
  const numberDiv = document.createElement('div');
  numberDiv.classList.add('number');
  numberDiv.textContent = i;

  if (i % 2 === 0) {
    numberDiv.classList.add('even');
  } else {
    numberDiv.classList.add('odd');
  }

  if (isPrime(i)) {
    numberDiv.classList.remove('even', 'odd');
    numberDiv.classList.add('prime');
  }

  numberDiv.addEventListener('mouseover', mouseover);

  container.appendChild(numberDiv);
}

