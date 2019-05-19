// EVENTS //
// Mouse....

// var button = document.getElementById('button').addEventListener('click', function(){
//     console.log(123);
// });

// var button = document.getElementById('button').addEventListener('click', buttonClick);
//
// function buttonClick(e) {
//     // console.log('Button clicked');
//     // document.getElementById('header-title').textContent='Changed';
//     // document.querySelector('#main').style.backgroundColor='#f4f4f4';
//
//     // console.log(e); // log MouseEvent
//
//     // Gives the actual element that was clicked: <button class="btn btn-dark btn-block" id="button">Click Here</button>
//     console.log(e.target);
//     console.log(e.target.id);
//     console.log(e.target.className);
//     console.log(e.target.classList); // return DOMTokenList
//     var output = document.getElementById('output');
//     output.innerHTML='<h3>' + e.target.id + '</h3>';
//
//     console.log(e.type); // click
//     console.log(e.clientX); // x position of the mouseclick, from the window
//     console.log(e.clientY); // Y position of the mouseclick, from the window
//
//     console.log(e.offsetX); // x position related to the element;
//     console.log(e.offsetY); // y position related to the element;
//
//     console.log(e.altKey); // if you hold down the altKey and click the button, it will display true.
//     console.log(e.ctrlKey);
//     console.log(e.shiftKey);
// }

var button = document.getElementById('button');
var box = document.getElementById('box');

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent); // double click
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent); // as soon as I mouse enter the box boundary, the event will fired.
// box.addEventListener('mouseleave', runEvent); // as soon as I mouse enter the box boundary, the event will fired.

// When I enter the box, both mouseenter and mouseover are fired;
// But when I to the Hello, only mouseover is fired.
// Similar concept of mouseleave vs mouseout
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

// Keyboard...
var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// When you do anything with the input: typing, cut, paste, etc.
// itemInput.addEventListener('input', runEvent);

// Add change event for dropdown list: both change and input will work.
// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);

function runEvent(e) {
    // Prevent form from submitting...
    // Without it you can see the page blicking as the form will do page submission.
    e.preventDefault();

    console.log('EVENT TYPE: ' + e.type);

    // output.innerHTML='<h3>MouseX: ' + e.offsetX + ' </h3><h3>MouseY ' + e.offsetY + '</h3>'

    // box.style.backgroundColor="rgb(" + e.offsetX + "," + e.offsetY + ",40)";
    // document.body.style.backgroundColor="rgb(" + e.offsetX + "," + e.offsetY + ",40)";

    // console.log(e.target.value);
    // document.getElementById('output').innerHTML='<h3>' + e.target.value + '</h3>'

    // If you associate this with cut, it will remove all content when you do ctrl+c some content
    // document.body.style.display = 'none';

    // To get dropdown value.
    // console.log(e.target.value);


}
