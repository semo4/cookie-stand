'use strict';


var hourArray= ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","Daily Location Total"];
var totalColumn = new Array(hourArray.length).fill(0);

function Location(name, max, min, avg){
    this.name = name;
    this.max = max;
    this.min = min;
    this.avg = avg;
    this.cookiesHourArray = [];
    this.random = 0;
    this.total = 0 ;
};

// function for generate customer 
Location.prototype.genaretCustomer = function(){
    this.random =  Math.floor(Math.random() * (this.max - this.min) + this.min);
    
}

// generate array value of cookies to each location
Location.prototype.generateArrayCookiesValue=function(){
    for(var i =0;i<hourArray.length-1; i++){
        this.genaretCustomer();
        var multi =Math.floor( this.avg * this.random);
        this.cookiesHourArray[i]= multi;
        this.total = this.total + multi;
        totalColumn[i] = totalColumn[i] + multi;
    }
    this.cookiesHourArray.push(this.total);
    var length = totalColumn.length;
    totalColumn[length-1]= totalColumn[length-1]+this.total;


    console.log(this);
}
// defined the list
Location.prototype.renderLocationList = function(){
    var perant = document.getElementById("container");
    var h2 = document.createElement('h2');
    h2.textContent = this.name;
    perant.appendChild(h2);
    var unorder = document.createElement('ul');
    perant.appendChild(unorder);

    for(var c = 0 ;c < this.cookiesHourArray.length;c++  ){
        var listItem = document.createElement('li'); 
        listItem.textContent = this.cookiesHourArray[c];
        unorder.appendChild(listItem); 
    }
}

// defined the table and it is header
var perant = document.getElementById("container");
var table = document.createElement('table');
table.setAttribute("border","1");
perant.appendChild(table);
var tableRowHeader = document.createElement('tr');
table.appendChild(tableRowHeader);
var tableLocationHeader = document.createElement('th');
tableLocationHeader.textContent = 'Location';
tableRowHeader.appendChild(tableLocationHeader);
for(var c = 0 ;c < hourArray.length;c++  ){
    var tableTimeHeader = document.createElement('th'); 
    tableTimeHeader.textContent = hourArray[c];
    tableRowHeader.appendChild(tableTimeHeader); 
}


// table to fill all data from object to table row
Location.prototype.renderTableData = function(){
    var tableRowData = document.createElement('tr');
    table.appendChild(tableRowData);
    var tableLocationdata = document.createElement('th');
    tableLocationdata.textContent = this.name;
    tableRowData.appendChild(tableLocationdata);
    for(var c = 0 ;c < this.cookiesHourArray.length;c++  ){
        var tableTimeData = document.createElement('td'); 
        tableTimeData.textContent = this.cookiesHourArray[c];
        tableRowData.appendChild(tableTimeData); 
    }
}

// the table footer  
Location.prototype.renderTableTotal= function(){
    var tableRowData = document.createElement('tr');
    table.appendChild(tableRowData);
    var tableLocationTotal = document.createElement('th');
    tableLocationTotal.textContent = this.name;
    tableRowData.appendChild(tableLocationTotal);
    for(var c = 0 ;c < totalColumn.length;c++  ){
        var tableTimeTotal = document.createElement('td'); 
        tableTimeTotal.textContent =totalColumn[c];
        tableRowData.appendChild(tableTimeTotal); 
    }
}


var objectArray = [];

var Seatle = new Location('Seatle', 23, 65, 6.3);
objectArray.push(Seatle);
var Tokyo  = new Location('Tokyo ', 3, 24, 1.2);
objectArray.push(Tokyo);
var Dubai = new Location('Dubai', 11, 38, 3.7);
objectArray.push(Dubai);
var Paris = new Location('Paris', 20, 38, 2.3);
objectArray.push(Paris);
var Lima = new Location('Lima', 2, 16, 4.6);
objectArray.push(Lima);

// Seatle.renderTableHeader();

for(var x = 0; x< objectArray.length ; x++){
    objectArray[x].genaretCustomer();
    objectArray[x].generateArrayCookiesValue();
    objectArray[x].renderTableData();
}

var Totals = new Location('Totals', 0, 0, 0);
Totals.renderTableTotal();

