const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);

function makeHero(event) {

    event.preventDefault(); // prevent the form from being submitted

    const hero = {}; // create an empty object

    hero.name = form.heroName.value; // create a name property based on the input field's value
    hero.realName = form.realName.value;
    hero.category = form.category.value;
    hero.age = form.age.value;
    hero.city = form.city.value;
    hero.origin = form.origin.value;

    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;

    
}
/*form.addEventListener('submit',validate,false);

function validate(event) {
    const firstLetter = form.heroName.value[0];
    if (firstLetter.toUpperCase() === 'X') {
        event.preventDefault();
        alert('Your name is not allowed to start with X!');
    }
}*/

const label = form.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);

function validateInline() {
    const heroName = this.value.toUpperCase();
    if(heroName.startsWith('X')){
    error.style.display = 'block';
    } else {
    error.style.display = 'none';
    }
}

/*We can then iterate over this collection using a for loop to see if each checkbox was checked. 
Checkbox objects have a checked property that tells us if it has been checked or not. 
It is a boolean property, so can only have the values true or false.*/
hero.powers = [];
for (let i=0; i < form.powers.length; i++) {
    if (form.powers[i].checked) {
        hero.powers.push(form.powers[i].value);
    }
}



//document.forms.hero.powers[0].checked = true;

//same example from above but just in another way
//hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);
// here is the explanation:
/*This uses the spread operator to turn the node list into an array.
 This then allows us to use the filter() method that returns an array containing only the check boxes that were 
checked (this is because their 'checked' property will be truthy). We then chain the map() method to the end, 
which replaces each checkbox in the array with its 'value' property. 
This array is then returned and stored in the hero.powers variable.*/

//form.type[2].checked = true;
//form.origin.value = 'Born as Kal-El on the planet Krypton...';

//validation for the form exclude any name that begins with an 'X'


function disableSubmit(event) {
    if(event.target.value === ''){
        document.getElementById('submit').disabled = true;
    } else {
        document.getElementById('submit').disabled = false;
    }
}

form.heroName.addEventListener('keyup',disableSubmit,false);