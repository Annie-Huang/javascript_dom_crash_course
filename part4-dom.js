var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);

// Add item
function addItem(e){
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
