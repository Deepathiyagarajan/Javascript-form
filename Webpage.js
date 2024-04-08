
function myfunction()
{
    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var table = document.getElementById("info")

    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = name;
    cell2.innerHTML = date;
    cell3.innerHTML = phone;
    cell4.innerHTML = email;
}

function changestyle(){
    var body = document.body;
    var html = document.documentElement;
    var inputName = document.getElementById("name");
    var inputDate = document.getElementById("date");
    var inputPhone = document.getElementById("phone");
    var inputEmail = document.getElementById("email");


    // Change the style properties
    html.style.fontSize = '20px';
    body.style.backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8hwhRphD2VaKQrVXvTaQZGDIhYr9zxt2JLQ&s')";
    inputName.style.border='2px dotted green';
    inputDate.style.border='2px dotted green';
    inputPhone.style.border='2px dotted green';
    inputEmail.style.border='2px dotted green';

    // Add more style changes as needed
}
function changestylee(){
    var body = document.body;
    var html = document.documentElement;
    var inputName = document.getElementById("name");
    var inputDate = document.getElementById("date");
    var inputPhone = document.getElementById("phone");
    var inputEmail = document.getElementById("email");
    html.style.fontSize = '10px';
    body.style.backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsBnFnMaUyOHB9PmwG0R58KGMhyiR5ZUxgBw&s')";
    inputName.style.border='2px solid green';
    inputDate.style.border='2px solid green';
    inputPhone.style.border='2px solid green';
    inputEmail.style.border='2px solid green';

}




 

