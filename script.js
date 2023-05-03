
// Select all input Elements by ID.
const inputDay = document.getElementById('inputDay');
const inputMonth = document.getElementById('inputMonth');
const inputYear = document.getElementById('inputYear');
// <<


// Select all output Elements by ID.
const outputDays = document.getElementById('outputDays');
const outputMonths = document.getElementById('outputMonths');
const outputYears = document.getElementById('outputYears');
// <<


const button = document.getElementById('button');
const inputfields = document.getElementsByTagName('input');


// Heart of the program. Create a function to calculate the age of a person.
function calculateAge(year, month, day) {
    let birthDate = new Date(`${year}-${month}-${day}`);
    let difference = Date.now() - birthDate.getTime();
    let age = new Date(difference);
    let personMonth = age.getUTCMonth();
    let personDay = age.getUTCDate();
    let personYear = Math.abs(age.getUTCFullYear() - 1970);
    let ageOutput = [personYear, personMonth, personDay];
    return ageOutput;
}
// <<


// Excecute the program once the user clicks the submite button.
button.addEventListener('click', function(event) {

    // Avoid automatic page reload
    event.preventDefault();
    // <<

    clearErrorStyles(inputfields);

    const today = new Date();
    const currentYear = today.getUTCFullYear();
    const calculateLastDay = new Date(parseInt(inputYear.value), parseInt(inputMonth.value), 0);
    const lastDayOfMonth = calculateLastDay.getDate();


    const arrayOfValues = [];
    const arrayOfErrors = [lastDayOfMonth, 12, currentYear];
    const errorMessages = ["Must be a valid day", "Must be a valid month", "Must be in the past"];



    const applyErrorStyles = function(inputArg) {
        inputArg.nextElementSibling.textContent = "This field is required";
        inputArg.className = "invalid";
        inputArg.previousElementSibling.style.color = "hsl(0, 100%, 67%)";
    };

    const triggerOther = function(inputArg) {
        for (let input of inputArg) {
            input.style.borderColor = "hsl(0, 100%, 67%)"
            input.previousElementSibling.style.color = "hsl(0, 100%, 67%)"
        };
    };

    function clearErrorStyles(inputArg) {
        for (let input of inputArg) {
            input.nextElementSibling.textContent = "";
            input.className = "";
            input.previousElementSibling.style.color = "";
            input.style.borderColor = ""
        }
    }

    // Mind of the program. Check for validation errors and present feedback to user.
    for (let number = 0; number < inputfields.length; number++) {
        if (!inputfields[number].value) {
            applyErrorStyles(inputfields[number]);
            triggerOther(inputfields);

        } else if (inputfields[number].value > arrayOfErrors[number]) {
            inputfields[number].nextElementSibling.textContent = errorMessages[number];
            triggerOther(inputfields);

        } else if (inputfields[number].value <= 0 ) {
            triggerOther(inputfields);

        } else {
            arrayOfValues.push(inputfields[number].value);
        }
    };
    // <<

    if (arrayOfValues.length == 3) {
        const birthDate = calculateAge(arrayOfValues[2], arrayOfValues[1], arrayOfValues[0]);
        outputYears.textContent = birthDate[0];
        outputMonths.textContent = birthDate[1];
        outputDays.textContent = birthDate[2];
    };
});
// <<


// <<<<<<<<<<<<<<<<<<<<<<< END >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.