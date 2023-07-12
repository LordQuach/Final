document.getElementById("btnSubmit").addEventListener('click',plannerWindow)
function plannerWindow()
{
    visitorName = document.getElementById("inputName").value;
    
    flyWindow = window.open('about:blank','myPop','');
    flyWindow.document.write();
}