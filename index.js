// Write the code as shown in the video below:
    
// Write answer to the questions asked below:
const item = document.querySelector('#main-heading');
item.style.textAlign = 'center';
document.querySelector('#basket-heading').style.color = 'brown';
const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'gray';
   fruits.style.padding = '30px';
  fruits.style.margin = '30px';
  fruits.style.width = '50%';
  fruits.style.borderRadius = '5px';

  const basketheading = document.querySelector('#basket-heading');
  basketheading.style.marginLeft='30px';


const item1 = document.querySelectorAll('.fruit');
for (let i = 0; i < item1.length; i++)
{    
     item1[i].style.padding = '20px';
     item1[i].style.margin = '10px';
     item1[i].style.borderRadius = '5px';
    if (i % 2 != 0)
    {
        item1[i].style.backgroundColor = 'brown';
        item1[i].style.color = 'white';
    }
    else
        item1[i].style.backgroundColor = 'white';
    
}
document.querySelector('.fruits').style.listStyle= 'none';
