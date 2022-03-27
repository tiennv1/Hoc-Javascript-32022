let selectedElement = document.getElementById("mySelect");
selectedElement.addEventListener("change", changeFunction);
function changeFunction() {
    let selectedValue = document.getElementById("mySelect").value;
    alert(selectedValue);
}
