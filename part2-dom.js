// the first h2 is the child of a div, and has sibling of form

// TRAVERSING THE DOM
var itemList = document.querySelector('#items');

// // parentNode
// console.log(itemList.parentNode);
// // I don't understand the above code will log the background color even through i only change background color (below) after i log it?
// // itemList.parentNode.style.backgroundColor = '#f4f4f4'; // This is very useful to get all the backgournd color away from it's children
// console.log(itemList.parentNode.parentNode);
//
// // Different between
// // In most cases, it is the same as parentNode. The only difference comes when a node's parentNode is not an element.
// // If so, parentElement is null
// // e.g. <html> element is document.documentElement
// // document.documentElement.parentNode; // the document node
// // document.documentElement.parentElement; // null
// // console.log(itemList.parentNode.parentNode);
// // console.log(itemList.parentNode.parentElement);
//
// console.log(itemList.parentNode.parentNode.parentNode.parentNode);
//
// // parentElement
// console.log(itemList.parentElement);
// // itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement);
// console.log(itemList.parentElement.parentElement.parentElement.parentElement);

// // childNodes (don't use it)
// // linebreak is consider a childnode. That is doubling the number. That's why using childnode is not a good idea. Should use children.
// // console.log(itemList.childNodes);
//
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';
//
// // firstChild (don't use it)
// console.log(itemList.firstChild); // Give us the textnode, which is linebreak (similar to childNodes concept), rather than <li class="list-group-item">Item 1</li>
// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hello 1';
//
// lastChild (don't use it)
// console.log(itemList.lastChild);
// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.firstElementChild.textContent='Hello 4';

// // // nextSibling
// // console.log(itemList.nextSibling);
// // // nextElementSibling
// // console.log(itemList.nextElementSibling);
//
// // previousSibling
// console.log(itemList.previousSibling); // get the new line character as usual.
// // previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='green';
//
// // For simple DOM manipulation, use javascript. jquery is good for certain annimation too. So don't dismiss it.

// createElement

// Create a div
var newDiv = document.createElement('div'); // print <div></div>
// Add class
newDiv.className='hello';
// Add id
newDiv.id='hello1';
// Add attr
newDiv.setAttribute('title', 'Hello Div');
// Create textnode
var newDivText = document.createTextNode('Hello World');
// Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1); // in the container, insert before h1

console.log(newDiv);
newDiv.style.fontSize='30px';

console.dir(document);
