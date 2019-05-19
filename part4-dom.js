var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e) {
    e.preventDefault();

    // console.log('1'); // print out to see it can hit this method...

    // Get input value
    // var newItem = document.getElementById('item'); // This return [object HTMLInputElement]
    var newItem = document.getElementById('item').value;

    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create delete button element
    var deleteBtn = document.createElement('button');

    // Add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li);

    console.log(li);
    console.log(deleteBtn);
}

// Remove item
function removeItem(e) {
    // console.log(1); // click anywhere in the item (not necessary within the button, will log this...

    if(e.target.classList.contains('delete')) {
        // console.log('1'); // only log when clicking the button, not anywhere else inside the item.

        if(confirm('Are You Sure?')) { // will create confirmation box
            var li = e.target.parentElement;
            // console.log(li);

            itemList.removeChild(li);
        }
    }
}

// Filter Items
function filterItems(e) {
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    console.log(text);
    // Get lis
    var items = itemList.getElementsByTagName('li'); // HTMLCollection
    console.log(items);
    // Convert to an array
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        console.log(itemName);
        if(itemName.toLowerCase().indexOf(text) != -1){ // filter by contains, not equals
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })

}
