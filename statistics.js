'use strict'
document.addEventListener('DOMContentLoaded', function() {
    var foodData = localStorage.getItem('foodData');
    if (foodData) {
      var foods = JSON.parse(foodData);
      var tableBody = document.getElementById('foodTableBody');
      for (var i = 0; i < foods.length; i++) {
        var food = foods[i];
        var row = document.createElement('tr');
        var idCell = document.createElement('td');
        var nameCell = document.createElement('td');
        var typeCell = document.createElement('td');
        var priceCell = document.createElement('td');
  
        idCell.textContent = food.id;
        nameCell.textContent = food.name;
        typeCell.textContent = food.type;
        priceCell.textContent = food.price;
  
        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(typeCell);
        row.appendChild(priceCell);
  
        tableBody.appendChild(row);
      }
    }
  });
  