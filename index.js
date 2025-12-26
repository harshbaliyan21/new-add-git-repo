let editLi = null;

window.onload = function () {
    let savedData = localStorage.getItem("expenses");
    if (savedData) {
        document.getElementById("showDetail").innerHTML = savedData;
        attachEvents();
    }
};

function addExpense() {
    let expenseAmount = document.getElementById("expenseamount").value;
    let description = document.getElementById("discription").value;
    let chosecatagory = document.getElementById("category").value;

    // UPDATE MODE
    if (editLi !== null) {
        editLi.firstChild.nodeValue =
            "Expense Amount: " + expenseAmount +
            " | Description: " + description +
            " | Category: " + chosecatagory + " ";

        editLi = null;
    }
    // ADD MODE
    else {
        let li = document.createElement("li");

        li.appendChild(document.createTextNode(
            "Expense Amount: " + expenseAmount +
            " | Description: " + description +
            " | Category: " + chosecatagory + " "
        ));

        // DELETE BUTTON
        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete Expense";

        deleteBtn.onclick = function () {
            li.remove();
        };

        // EDIT BUTTON
        let editBtn = document.createElement("button");
        editBtn.innerHTML = "Edit Expense";

        editBtn.onclick = function () {
            document.getElementById("expenseamount").value = expenseAmount;
            document.getElementById("discription").value = description;
            document.getElementById("category").value = chosecatagory;
            editLi = li;
        };

        li.appendChild(deleteBtn);
        li.appendChild(editBtn);

        document.getElementById("showDetail").appendChild(li);
    }
	saveToLocalStorage()
    clearInputs();
	attachEvents
    
}
function attachEvents() {
    let listItems = document.getElementById("showDetail").getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++) {
        let deleteBtn = listItems[i].getElementsByTagName("button")[0];
        let editBtn = listItems[i].getElementsByTagName("button")[1];
        deleteBtn.onclick = function () {
            listItems[i].remove();
            saveToLocalStorage();
        };
        editBtn.onclick = function () {
            document.getElementById("expenseamount").value = listItems[i].firstChild.nodeValue.split("Expense Amount: ")[1].split(" | Description: ")[0];
            document.getElementById("discription").value = listItems[i].firstChild.nodeValue.split(" | Description: ")[1].split(" | Category: ")[0];
            document.getElementById("category").value = listItems[i].firstChild.nodeValue.split(" | Category: ")[1];
            editLi = listItems[i];
        };
    }
}
function saveToLocalStorage() {
    localStorage.setItem("expenses", document.getElementById("showDetail").innerHTML);
}

function clearInputs() {
    document.getElementById("expenseamount").value = "";
    document.getElementById("discription").value = "";
    document.getElementById("category").value = "";
}