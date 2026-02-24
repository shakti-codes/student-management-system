let students = [];
let editIndex = null;

function addStudent() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let course = document.getElementById("course").value;

    if (name === "" || roll === "" || course === "") {
        alert("Please fill all fields");
        return;
    }

    students.push({ name, roll, course });
    displayStudents();

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("course").value = "";
}

function displayStudents() {
    let tbody = document.querySelector("#studentTable tbody");
    tbody.innerHTML = "";

    students.forEach((student, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${student.name}</td>
                <td>${student.roll}</td>
                <td>${student.course}</td>
                <td>
                    <button class="edit-btn" onclick="editStudent(${index})">Edit</button>
                    <button class="delete-btn" onclick="deleteStudent(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}

function editStudent(index) {
    editIndex = index;

    document.getElementById("editName").value = students[index].name;
    document.getElementById("editRoll").value = students[index].roll;
    document.getElementById("editCourse").value = students[index].course;

    document.getElementById("editModal").style.display = "flex";
}

function updateStudent() {
    students[editIndex].name = document.getElementById("editName").value;
    students[editIndex].roll = document.getElementById("editRoll").value;
    students[editIndex].course = document.getElementById("editCourse").value;

    displayStudents();
    closeModal();
}

function closeModal() {
    document.getElementById("editModal").style.display = "none";
}

function searchStudent() {
    let input = document.getElementById("search").value.toLowerCase();
    let rows = document.querySelectorAll("#studentTable tbody tr");

    rows.forEach(row => {
        let name = row.cells[0].textContent.toLowerCase();
        row.style.display = name.includes(input) ? "" : "none";
    });
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}