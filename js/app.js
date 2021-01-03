'use strict';


var hourArray= ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"];

var hourlyCustomersSeattle = {
    name:"Seatle",
    min: 23,
    max: 65,
    avg: 6.3,
    random :0,
    total:0,
    cookiesHourArray:[],
    genaretCustomer: function(){
        this.random =  Math.floor(Math.random() * (this.max - this.min) + this.min);
        
    }
};

var hourlyCustomersTokyo = {
    name:"Tokyo",
    min: 3,
    max: 24,
    avg: 1.2,
    random :0,
    total:0,
    cookiesHourArray:[],
    genaretCustomer: function(){
        this.random =  Math.floor(Math.random() * (this.max - this.min) + this.min);
        
    }
};


var hourlyCustomersDubai = {
    name:"Dubai",
    min: 11,
    max: 38,
    avg: 3.7,
    random :0,
    total:0,
    cookiesHourArray:[],
    genaretCustomer: function(){
        this.random =  Math.floor(Math.random() * (this.max - this.min) + this.min);
        
    }
};


var hourlyCustomersParis = {
    name:"Paris",
    min: 20,
    max: 38,
    avg: 2.3,
    random :0,
    cookiesHourArray:[],
    total:0,
    genaretCustomer: function(){
        this.random =  Math.floor(Math.random() * (this.max - this.min) + this.min);
        
    }
};
var hourlyCustomersLima = {
    name:"Lima",
    min: 2,
    max: 16,
    avg: 4.6,
    cookiesHourArray:[],
    random :0,
    total:0,
    genaretCustomer: function(){
        this.random =  Math.floor(Math.random() * (this.max - this.min) + this.min);
        
    }
};
var locaion = [hourlyCustomersSeattle ,hourlyCustomersTokyo ,hourlyCustomersDubai ,hourlyCustomersParis ,hourlyCustomersLima];
for(var j= 0 ;j<locaion.length; j++){
        for(var i =0;i<hourArray.length; i++){
            locaion[j].genaretCustomer();
            var multi =Math.floor( locaion[j].avg * locaion[j].random);
            locaion[j].cookiesHourArray[i]=hourArray[i]+": "+ multi+" cookies";
            locaion[j].total = locaion[j].total + multi;
        }
        locaion[j].cookiesHourArray.push("Total : "+ locaion[j].total+" cookies");

    console.log(locaion[j]);
}




var perant = document.getElementById("container");

for(var k =0; k<locaion.length;k++){
    var h2 = document.createElement('h2');
    h2.textContent = locaion[k].name;
    perant.appendChild(h2);
    var unorder = document.createElement('ul');
    perant.appendChild(unorder);

    for(var c = 0 ;c < locaion[k].cookiesHourArray.length;c++  ){
        var listItem = document.createElement('li'); 
        listItem.textContent = locaion[k].cookiesHourArray[c];
        unorder.appendChild(listItem); 
    }

}
