function onSubmit() {
    let expense = document.getElementById("expense-amount").value;
    let category = document.getElementById("category").value;
    let description = document.getElementById("expense-description").value;
  
    let myObj = {
      Amount: expense,
      Category: category,
      Description: description,
    };
  
    let myStr = myObj.Category.concat(" ", myObj.Description);
    localStorage.setItem(myStr, JSON.stringify(myObj));
    displayInfo(myStr, myObj);
  }
  
  function displayInfo(myStr, myObj) {
    var items = document.getElementById("item-list");
  
    var node = document.createElement("li");
    var text =
      myObj.Amount + " - " + myObj.Category + " - " + myObj.Description + " ";
  
    var btnDelete = document.createElement("input");
    btnDelete.value = "Delete Expense";
    btnDelete.type = "button";
  
    btnDelete.onclick = () => {
      localStorage.removeItem(myStr);
      items.removeChild(node);
    };
  
    var btnEdit = document.createElement("input");
    btnEdit.type = "button";
    btnEdit.value = "Edit Expense";
  
    btnEdit.onclick = () => {
      localStorage.removeItem(myStr);
      items.removeChild(node);
      document.getElementById("expense-amount").value = myObj.Amount;
      document.getElementById("category").value = myObj.Category;
      document.getElementById("expense-description").value = myObj.Description;
    };
  
    node.appendChild(document.createTextNode(text));
    node.appendChild(btnDelete);
    node.appendChild(btnEdit);
    items.appendChild(node);
  }
  