// CRUD Assessment #3
var selectedRow = null


// Unique ID 


// Show Alerts
function showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
} 


// Clear All Fields 
function clearFields(){
    document.querySelector("#playerName").value = "";
    document.querySelector("#playerRole").value = "";
    document.querySelector("#playerRatings").value = "";
}

// Add Data
document.querySelector("#player-form").addEventListener("submit", (e) =>{
    e.preventDefault();

    // Get Form Values
    const playerName = document.querySelector("#playerName").value;
    const playerRole = document.querySelector("#playerRole").value;
    const playerRatings = document.querySelector("#playerRatings").value;
    // Validate 
    if(playerName == "" || playerRole == "" || playerRatings == "" ){
        showAlert("Please fill in all fields", "danger");
    }
    else {
        if(selectedRow == null) {
            const list = document.querySelector("#player-list");
            const row = document.createElement("tr");
            var i = 1
            row.innerHTML = `
            <td>${i}</td>
            <td>${playerName}</td>
            <td>${playerRole}</td>
            <td>${playerRatings}</td>
            <td>
            <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
            <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
            `;

            list.appendChild(row);
            selectedRow = null;
            showAlert("Player Added", "Successfully")
        }
        else {
            selectedRow.children[1].textContent = playerName;
            selectedRow.children[2].textContent = playerRole;
            selectedRow.children[3].textContent = playerRatings;
            selectedRow = null;
            showAlert("Player Info Edited", "info");
        }
        clearFields();
    }
});


// Edit Data

document.querySelector("#player-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("edit")){
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#playerName").value = selectedRow.children[1].textContent = "Player Name"
        document.querySelector("#playerRole").value = selectedRow.children[2].textContent = "Select Role"
        document.querySelector("#playerRatings").value = selectedRow.children[3].textContent = "Player Ratings"
    }
});



// Delete Data

document.querySelector("#player-list").addEventListener("click", (e) =>{
    target = e.target;
    if (target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Player Data Deleted", "danger");
    }
});