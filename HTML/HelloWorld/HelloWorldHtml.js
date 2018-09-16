//document.addEventListener("DOMContentLoaded", function () {alert("Complete");}, false);
//window.onload = Initialize();
//function Initialize()
//{
//    window.document.getElementById("Gameboard").innerText = "Hello";
//}
////window.document.body.onload = Initialize();
//function clicked()
//{
//    window.document.getElementById("Gameboard").innerText = "Hello";
//}
function PageDone()
{
    for (var x = 0; x < 36; x++)
    {
        window.document.getElementById("Gameboard").innerHTML +=
            "<div class=\"grid-item\">" + x + "</div>";
    }
}