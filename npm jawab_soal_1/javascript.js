import axios from 'axios';

const getData = async () => {
  try {
    const data = response.data;

    const output = document.getElementById('output');
    output.innerHTML = '';

    data.forEach(item => {
      const p = document.createElement('p');
      p.textContent = `${item.id}. ${item.title}`;
      output.appendChild(p);
    });
  } catch (errors) {
    console.error(errors);
  }
};

document.getElementById('getData').addEventListener('click', getData);