const chapters= getChaptersList;
// existing variable declarations referencing DOM elements
const arrayInput = document.querySelector('input');
const arrayButton = document.querySelector('button');
const arrayList = document.querySelector('list');

// add this array declaration and assignment statement
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
  });
  button.addEventListener('click', () => {
    if (input.value != '') {
      displayList(input.value);
      chaptersArray.push(input.value);
      setChapterList();
      input.value = '';
      input.focus();
    }
  });
  function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item; // note the use of the item parameter and then delete this comment
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
      list.removeChild(li);
      deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
      input.focus();
    });
  }
const list = document.querySelector('ul')
const input = document.querySelector('input')

const button = document.querySelector('button')
button.addEventListener('click', () => { 
    
    const myItem = input.value;

    if (myItem == '') {
        input.focus();
    }
    else {
        input.value = '';
        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');

        listItem.appendChild(listText);
        listText.textContent = myItem;
        listItem.appendChild(listBtn);
        listBtn.textContent = 'Delete' ;
        list.appendChild(listItem);

        listBtn.addEventListener('click', () => {
        list.removeChild(listItem);
        });

        input.focus();
    }
})