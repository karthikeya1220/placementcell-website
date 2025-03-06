

const bachelors = document.getElementById("details1");
const dd = document.getElementById("details2");
const masters = document.getElementById("details3");



// select all with class name branch
let branch_dropdown = document.getElementsByClassName("branch");
console.log(branch_dropdown.length);
// on clicking branch_dropdown dropdown will be shown
for (let i = 0; i < branch_dropdown.length; i++) {
    branch_dropdown[i].addEventListener("click", function () {
        // console.log("Clicked");
        // Add border to the selected dropdown and change color to blue and underline
        this.classList.toggle("active-1");
        let dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "grid") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "grid";
        }
    });
}
