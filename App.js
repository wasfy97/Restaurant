
function Food(id, name, type, price) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.price = price;
  }
  
  
  Food.prototype.generateId = function() {
   
    this.id = Math.floor(Math.random() * 9000) + 1000;
  }
  
  
  Food.prototype.render = function() {
    var tableBody = document.getElementById('foodTableBody');
  
    
    var row = document.createElement('tr');
   
    var idCell = document.createElement('td');
    idCell.textContent = this.id;
    row.appendChild(idCell);
  
    var nameCell = document.createElement('td');
    nameCell.textContent = this.name;
    row.appendChild(nameCell);
  
    var typeCell = document.createElement('td');
    typeCell.textContent = this.type;
    row.appendChild(typeCell);
  
    var priceCell = document.createElement('td');
    priceCell.textContent = this.price;
    row.appendChild(priceCell);
  
    
    tableBody.appendChild(row);
  }
  
  
  document.getElementById('foodForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    
    var name = event.target.foodName.value;
    var type = event.target.foodType.value;
    var price = event.target.foodPrice.value;
  
    
    var food = new Food();
    food.generateId();
    food.name = name;
    food.type = type;
    food.price = price;
  
    
    food.render();
  
     
  var foodData = localStorage.getItem('foodData');
  var foods = [];
  if (foodData) {
    foods = JSON.parse(foodData);
  }
  foods.push(food);
  localStorage.setItem('foodData', JSON.stringify(foods));
    event.target.reset();
  });
  