let notes = [];

// Add note
function addNote() {
    const title = document.getElementById("notestitle").value.trim();
    const content = document.getElementById("notesdescription").value.trim();

    if (title === "" && content === "") {
        alert("Please enter title or description");
        return;
    }

    const newNote = { title, content };

    axios.post(
        'https://crudcrud.com/api/cbcf7079b0654b0d87edba1ba561e48b/todos',
        newNote
    )
    .then(response => {
        // Save note with ID from server
        notes.push(response.data);
        displayNotes();
    })
    .catch(error => console.error(error));

    document.getElementById("notestitle").value = "";
    document.getElementById("notesdescription").value = "";
}

// Show notes
function displayNotes() {
    const ul = document.getElementById("shownotesdetail");
    ul.innerHTML = "";

    notes.forEach((note, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.content}</p>
            <button onclick="deleteNote(${index})">Delete</button>
        `;
        ul.appendChild(li);
    });

    updateCounts();
}

// Delete note
function deleteNote(index) {
    const noteId = notes[index]._id;

    axios.delete(
        `https://crudcrud.com/api/cbcf7079b0654b0d87edba1ba561e48b/todos/${noteId}`
    )
    .then(() => {
        notes.splice(index, 1);
        displayNotes();
    })
    .catch(error => console.error(error));
}

// Search notes
function searchNotes() {
    const value = document.getElementById("searchinput").value.toLowerCase();
    const items = document.querySelectorAll("#shownotesdetail li");

    items.forEach(item => {
        item.style.display = item.innerText.toLowerCase().includes(value)
            ? ""
            : "none";
    });

    updateCounts();
}

// Update counts
function updateCounts() {
    const total = notes.length;
    const visible =
        document.querySelectorAll("#shownotesdetail li:not([style*='none'])").length;

    document.getElementById("totalnotes").innerText = `Total Notes: ${total}`;
    document.getElementById("showingnotes").innerText = `Showing Notes: ${visible}`;
}

// Page load
window.onload = () => {
    document.getElementById("addBtn").onclick = addNote;
    document.getElementById("searchinput").oninput = searchNotes;
};