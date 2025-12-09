// Write the code as shown in the video below:

// Write answer to the questions asked below:
const item = document.querySelector('#main-heading');
item.style.textAlign = 'right';
document.querySelector('#basket-heading').style.color = 'brown';
const item1 = document.querySelectorAll('.fruit');
for (let i = 0; i < item1.length; i++)
{
    if (i % 2 != 0)
    {
        item1[i].style.backgroundColor = 'brown';
        item1[i].style.color = 'white';
    }
    else
        item1[i].style.backgroundColor = 'white';
    
}
document.querySelector('.fruits').style.listStyle= 'none';
