// // EXAMINE THE DOCUMENT OBJECT //
//
// // List everything under document, in #document
// // console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
//
// // Will give you an array of elements of everything that is in the DOM.
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
//
// // Show you the list of forms in the document.
// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// ########################################################################

// // GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
//
// // These two do almost the same thing.
// // headerTitle.textContent = 'Hello';
// // headerTitle.innerText = 'Goodbye';
//
// // <h1 id="header-title">Item Lister <span style="display:none">123</span></h1>
// console.log(headerTitle.textContent); // Shows 'Item Lister 123'
// console.log(headerTitle.innerText); // Show 'Item Lister'
// // Change the whole element.
// // headerTitle.innerHTML = '<h3>Hello</h3>';
//
// // The actual is css selector is border-bottom
// headerTitle.style.borderBottom = 'solid 3px #000';
// header.style.borderBottom = 'solid 3px #000';

// ########################################################################

// // GETELEMENTSBYCLASSNAME //
// // Gives HTMLCollection
// // Have to get elements, plural, not element, singleton
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]); // second one..
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';
//
// // This will not work because items is a collection of array. Gives error.
// // items.style.backgroundColor = '#f4f4f4';
// for(var i=0; i<items.length; i++){
//     items[i].style.backgroundColor = 'yellow';
// }

// ########################################################################

// GETELEMENTSBYTAGNAME //
// Gives HTMLCollection
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]); // second one..
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';
//
// // This will not work because items is a collection of array. Gives error.
// // li.style.backgroundColor = '#f4f4f4';
// for(var i=0; i<li.length; i++){
//     li[i].style.backgroundColor = 'yellow';
// }

// ########################################################################

// // QUERYSELECTOR //
// // Use it only for one item. It only grep the first one.
// // It's css selector, just like $('#main-header')
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';
//
// var input = document.querySelector('input');
// input.value = 'Hello World';
//
// var submit = document.querySelector("input[type='submit']");
// submit.value='SEND';
//
// var item = document.querySelector('.list-group-item');
// item.style.color='red';
//
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color='blue';
//
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color='coral';

// ########################################################################

// QUERYSELECTORALL //
// Gives a NodeList
var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';
}

console.dir(document);
