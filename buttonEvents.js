clearButton.addEventListener('click', function() {
    var mealCells = document.querySelectorAll("#mealPlannerTable td");
    mealCells.forEach(function(cell) {
        cell.textContent = "";
    });
});

printButton.addEventListener('click', function() {
    window.print();
});

downloadButton.addEventListener('click', function() {
    var htmlContent = newPage.innerHTML;
    var blob = new Blob([htmlContent], { type: "text/html" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "meal_planner.html";
    a.click();
});