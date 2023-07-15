//Form submit
document.getElementById('btnSubmit').addEventListener('click', function() {
    if (emailInput.validity.valid) {
        plannerWindow();
    }
    else {
        alert("Error: Invalid email address.");
    }
});

//Email validation
var emailInput = document.getElementById("inputEmail")
emailInput.setAttribute('type', 'email');
emailInput.addEventListener("input", function() {
    if (emailInput.validity.valid) {
      emailInput.classList.remove("invalid");
    } else {
      emailInput.classList.add("invalid");
    }
});

//Create the new window function
function plannerWindow()
{
    //Open new window
    flyWindow = window.open("","Meal Planner");
    
    //Form inputs
    var visitorName = document.getElementById("inputName").value;
    var visitorEmail = document.getElementById("inputEmail").value;
    var visitorGoal = document.getElementById("inputGoal").value;
    var inputM1 = document.getElementById("inputM1").value;
    var inputM2 = document.getElementById("inputM2").value;
    var inputM3 = document.getElementById("inputM3").value;
    var inputM4 = document.getElementById("inputM4").value;
    var inputM5 = document.getElementById("inputM5").value;
    var arrayMeals = [inputM1, inputM2, inputM3, inputM4, inputM5]

    //Table constants
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const mealsPerDay = 5;
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    table.setAttribute("id", "mealPlannerTable");
    table.style.border = "1px solid black";

    //Generate planner table
    function createPlanner() {

        //Build the header row
        for (var i = 0; i < daysOfWeek.length; i++) {
            var headerCell = document.createElement('th');
            headerCell.textContent = daysOfWeek[i];
            headerRow.appendChild(headerCell);
        }
        table.appendChild(headerRow);

        //Build the meal rows
        for (var j = 0; j < mealsPerDay; j++) {
            var mealRow = document.createElement('tr');

            // Create and append the cells for each day
            for (var k = 0; k < daysOfWeek.length; k++) {
            var mealCell = document.createElement('td');
            mealCell.style.border = "1px solid black";
            mealCell.textContent = arrayMeals[j];
            mealRow.appendChild(mealCell);
            }

            // Append the meal row to the table
            table.appendChild(mealRow);
        }
    }

    //Create the planner table
    createPlanner();

    //Create container and buttons on new page
    const pageContainer = document.createElement('div');
    var pageHeader = document.createElement('h1');
    pageHeader.innerHTML = visitorName + '   ' + visitorEmail + '<br>' + visitorGoal;
    var clearButton = document.createElement('button');
    clearButton.textContent = 'Clear Meals';
    clearButton.id = 'clearButton';
    var printButton = document.createElement('button');
    printButton.textContent = 'Print';
    printButton.id = 'printButton';
    var downloadButton = document.createElement('button');
    downloadButton.textContent = 'Download';
    downloadButton.id = 'downloadButton';

    //Build container
    pageContainer.appendChild(pageHeader);
    pageContainer.appendChild(table);
    pageContainer.appendChild(clearButton);
    pageContainer.appendChild(printButton);
    pageContainer.appendChild(downloadButton);
    
    //Contents
    pageText = ("<html><head><title>Meal Planner</title></head><body><div id=newPage>");
    pageText += pageContainer.innerHTML
    pageText += ("<script src='buttonEvents.js'></script></div></body></html>");

    //Populate the window
    flyWindow.document.write(pageText);
    flyWindow.document.close();
}