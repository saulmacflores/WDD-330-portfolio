//The focus event occurs when an element is focused on. In the case of an <input> element, 
//this is when the cursor is placed inside the element (either by clicking or tapping on it or navigating to it using the keyboard)
//const form = document.forms[0];;// selects or grabs the form 



//input.addEventListener('focus', () => alert('focused'), false);

//input.addEventListener('blur', () => alert('blurred'), false);
//input.addEventListener('change', () => alert('changed'), false);

const form = document.forms['search'];
form.addEventListener ('submit', search, false);
const input = form.elements.searchInput;
input.value = 'Search Here';

//Now the default text will disappear when the user
 /*clicks inside the input field (the focus event) and reappear if the user leaves the field blank and 
 clicks away from it (the blur event).*/
input.addEventListener('focus', function(){
    if (input.value==='Search Here') {
        input.value = '' 
    }
}, false);

input.addEventListener('blur', function(){
    if(input.value === '') {
        input.value = 'Search Here';
    } }, false);

function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}