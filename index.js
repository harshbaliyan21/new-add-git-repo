// Write your code below:
const para = document.createElement('h3');
const paratext = document.createTextNode('Buy high quality organic fruits online');
para.appendChild(paratext);

const divs = document.getElementsByTagName('div');
divs[0].appendChild(para);

const para2 = document.createElement('p');
const paratext2 = document.createTextNode('Total fruits: 4');
const item = document.querySelector('.fruits');
para2.appendChild(paratext2);
divs[1].insertBefore(para2, item);

para2.id = 'fruits-total';

para.style.fontStyle = 'italic';



