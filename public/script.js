/*
    FROM GHAZNA.COM 
    ONLY FOR STUDENTS FREE OF CODE 

    In this project we add, delete and update the data 

    BY MUHAMMAD HASNAIN GHAZNA 
    PLEASE FOLLOW US 
    ###########################################     THANKS      ##############################@@@@@@@@@@@@
*/

// global variables 
const input = document.getElementById("input"),
    button = document.getElementById("todobtn"),
    tbody = document.getElementById("tbody")
let counter = 0;


// in the below array the new item will added and updated and deleted using the following functions 
let arr = []
// funcitons = addNewItem(), delItem(), displayReturnTable(), editItem();


// this event on button to add new value in the list 
button.addEventListener("click", addNewItem)
let row = ""
// to add new item in the table
function addNewItem(e) {
    row = `<tr>
                <td>${counter + 1}</td>
                <td>${input.value}</td>
                <td class="action" id="edit${counter}" onclick="editItem(${counter})">✏️</td>
                <td class="action" id="del-${counter}" onclick="delItem(${counter})">🗑️</td>
           </tr> `

    //    simple validition 
    if (input.value.length < 3) {
        alert("Please todo value must be grater than 3 characters thanks ")
        input.value = ""
    }

    else {
        counter = counter + 1
        tbody.innerHTML += row
        arr.push(input.value);
        input.value = ""
    }
}






// function to delete a item 
function delItem(cnt) {
    // removing an item from arr (array)
    arr.splice(cnt, 1)
    // decrement counter value
    counter = counter - 1;
    // clear in table body /
    tbody.innerHTML = " "
    // again adding values into the table body using this function 
    displayReturnTable();
}





// to dislay data into the table tbody 
function displayReturnTable() {
    for (let item in arr) {
        tbody.innerHTML += `<tr>
        <td>${item}</td>
            <td>${arr[item]}</td>
            <td class="action" id="edit${item}" onclick="editItem(${item})">✏️</td>
            <td class="action" id="del-${item}" onclick="delItem(${item})">🗑️</td>
        </tr> `
    }
}




// to display dailog for edit the value of item
function editItem(cnt) {
    tbody.innerHTML = ""
    let newVal = prompt("Update this value ", arr[cnt])
    if (newVal == null) {
        displayReturnTable();
    }
    else {
        if (newVal.length < 3) {
            alert("please try value must be > 3 less than 20")
            displayReturnTable();
        }
        else {
            arr[cnt] = newVal
            displayReturnTable();
        }
    }
}

// .....................................................................................