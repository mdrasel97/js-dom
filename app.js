// const style = document.getElementById('hadding');
// style.style.backgroundColor = 'red'

// let title = document.getElementById('hadding');
// title.innerText = 'Hello javascript';

// let title = document.getElementById('hadding');
// title.innerText = title.innerText + ' Rasel';


// let boxes = document.querySelectorAll('.box');
// boxes[0].innerText = 'new text';

// let newNum = 1;
// for(let box of boxes){
//     box.innerText = `box No ${newNum}`;
//     newNum++;
// }


// 1. const amar = document.getElementsByTagName('');

// 2. const name = document.getElementById('');

// 3. const nam = document.getElementsByClassName('');

// 4. const nem = document.querySelector('');

// 5. const nn = document.querySelectorAll('');


// let student = document.getElementsByTagName('li');
// for(let stu of student){
//     console.log(stu.innerText)
// }

// let places = document.getElementsByClassName('inportent')
// for(let place of places){
//     console.log(place.innerText)
// }

// let title = document.getElementById('title');
// title.innerText = 'amar sonar bangal';

// let title = document.getElementById('title').style.color = 'red';
// let titleName = document.getElementById('title').style.textAlign = 'center';

        // let titleName1 = document.getElementById('title').style.color = 'red';

        // let titleName2 = document.getElementById('title');
        // titleName2.getAttribute('id')

        // function myFunc(){
        //     document.body.style.backgroundColor = 'yellow'
        // }

// let titleName = document.getElementById('title').style.color = 'blue'
// let titleName = document.getElementById('title');
// titleName.setAttribute('title', 'tool tip by javascript')

// let text = document.getElementById('container');
// const div = text.innerText;
// console.log(div)



// let placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'red';

// let placesContainer = document.getElementById('places-container');
// placesContainer.classList.add('text-center')


// let placesContainer = document.getElementById('places-container');
// placesContainer.classList.remove('large-size')

// let placesUl = document.querySelector('#places-container ul');
// console.log(placesUl)

// let placesParent = document.getElementById('parent');
// console.log(placesParent)

// let li = document.createElement('li');
// li.innerText = 'bandar ban';

// placesParent.appendChild(li)

let mainSection = document.getElementById('main');

// let section = document.createElement('section');
// let h1 = document.createElement('h1');
// h1.innerText = 'my food list';
// section.appendChild(h1)
// let ul = document.createElement('ul');
// section.appendChild(ul)
// let li1 = document.createElement('li');
// li1.innerText = 'mango';
// ul.appendChild(li1)
// let li2 = document.createElement('li');
// li2.innerText = 'Banana';
// ul.appendChild(li2)
// let li3 = document.createElement('li');
// li3.innerText = 'apple';
// ul.appendChild(li3)
// let li4 = document.createElement('li');
// li4.innerText = 'goyaba';
// ul.appendChild(li4)


// mainSection.appendChild(section)

// let section = document.createElement('section')
// section.innerHTML = `
// <h1> amar sonar bangla </h1>
// <ul>
// <li> biriyani </li>
// <li> borhani </li>
// <li> kabab </li>
// <li> chiken </li>
// </ul>
// `

// mainSection.appendChild(section)


let sections = document.querySelectorAll('section')
for(let section of sections){
    section.style.border = '2px solid blue';
    section.style.marginBottom = '10px';
    section.style.borderRadius = '10px';
    section.style.padding = '20px';
    section.style.backgroundColor = 'lightblue'
}