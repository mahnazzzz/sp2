
var students = [
    {"name": "mahnaz", "email": "mahnaz@tr.dk", "phone": "101010101", "category": "red", "group": "r1"},
];

var addNewStudent = function (Nname, Nemail, NPhone, NCategory, NGroup) {
    students.push({"name": Nname, "email": Nemail, "phone": NPhone, "category": NCategory, "group": NGroup});
};


var removeStudent = function (Nindex) {
    students.splice(Nindex, 1);
    showTable();
};

var tableBody = document.getElementById("studentsTable");

var showTable = function () {

    tableBody.innerHTML = "";

    for (var i = 0; i < students.length; i++) {
        var row = tableBody.insertRow(i);

        row.insertCell(0).innerHTML = students[i].name;
        row.insertCell(1).innerHTML = students[i].email;
        row.insertCell(2).innerHTML = students[i].phone;
        row.insertCell(3).innerHTML = students[i].category;
        row.insertCell(4).innerHTML = students[i].group;
        row.insertCell(5).innerHTML = "<button type=button class=\"btn btn-xs btn-danger\" onclick='javascript:removeStudent(" + i + ")'>X</button>"
    }
};


var studentForm = document.getElementById("studentForm");
var category = document.getElementById("category");


studentForm.onsubmit = function (event) {
//console.log(category.selectedIndex);
    event.preventDefault();
    addNewStudent(studentForm.elements["name"].value, studentForm.elements["email"].value, studentForm.elements["phone"].value, studentForm.elements["category"].value, studentForm.elements["group"].value)

    showTable();
};

showTable();


function sortByName(a, b)
{
    if (a.name < b.name)
        return -1;
    if (a.name > b.name)
        return 1;
    return 0;

}

function sortByCategory(a, b)
{
    if (a.category < b.category)
        return -1;
    if (a.category > b.category)
        return 1;
    return 0;

}


function sortByGroup(a, b)
{
    if (a.group < b.group)
        return -1;
    if (a.group > b.group)
        return 1;
    return 0;

}


var sortName = document.getElementById("sortName");

sortName.onclick = function () {

    students.sort(sortByName);
    showTable();
}


var sortCategory = document.getElementById("sortCategory");

sortCategory.onclick = function () {

    students.sort(sortByCategory);
    showTable();
}


var sortGroup = document.getElementById("sortGroup");

sortGroup.onclick = function () {

    students.sort(sortByGroup);
    showTable();
}

//function sortName () {
//console.log(0);
//    students.sort(sortByName);
//    showTable();
//}