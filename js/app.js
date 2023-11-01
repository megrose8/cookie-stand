const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


//she construct
function LocationSales(location, minCustomers,maxCustomers,avgCookiesPerSale) {
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.sales = this.estimateSales();
}


//method:creating the randomly gen numbers for this.sales
LocationSales.prototype.estimateSales = function() {
  const sales = [];   
  for (let i = 0; i < hours.length; i++) {
    const numCustomers = randomInRange(this.minCustomers, this.maxCustomers);
    // console.log (numCustomers)
    const hourSales = Math.ceil(numCustomers * this.avgCookiesPerSale);
    // console.log (hourSales);
    sales.push(hourSales);
  }
  return sales;
}



//now we make table
 const containerElem = document.getElementById('salesData');
  const tableElem = document.createElement('table');
containerElem.appendChild(tableElem);
function renderTable (){
renderHeaderRow(tableElem);
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
renderFooterRow(tableElem);
}

//objects & their things
const seattle = new LocationSales('Seattle', 23, 65, 6.3);
const tokyo = new LocationSales('Tokyo', 3, 24, 1.2);
const dubai = new LocationSales('Dubai', 11, 38, 3.7);
const paris =  new LocationSales('Paris', 20, 38, 3.7);
const lima =  new LocationSales('Lima', 2, 16, 4.6);

//now we make the specs of the table

function renderHeaderRow(tableElem){
const row = document.createElement('tr');
tableElem.appendChild(row);
const cell = document.createElement('th');
row.appendChild(cell);
cell.textContent = 'Locations';
   for (let i = 0; i<hours.length; i++){
    const currentHour = hours[i];
    const currentHeaderCell = document.createElement('th');
    row.appendChild(currentHeaderCell);
    currentHeaderCell.textContent = currentHour;
 }
 const totalCell= document.createElement('th');
 row.appendChild(totalCell);
 totalCell.textContent = 'Daily Total';
}

//here we see the prototype that inserts the data into the table

    LocationSales.prototype.render= function() {
    const row = document.createElement('tr');
    tableElem.appendChild(row);
    const cell = document.createElement('th');
    row.appendChild(cell);
    cell.textContent = this.location;
      for (let i=0; i<this.sales.length;i++){
        const locationCell = document.createElement('th');
        row.appendChild(locationCell);
        locationCell.textContent = this.sales[i];
      }
  }

//here lies the footer for the table 

const hourlyTotalArray = [seattle.sales[0], paris.sales[0], dubai.sales[0],paris.sales[0],lima.sales[0]]
//in this we need to calculate the totals from each hour for each store. 
//the numbers for the cookies sold are within the "sales" array
//we need to access the numbers for EACH item in the sales array index
//seattle.sales?


function renderFooterRow(tableElem){
  //create row and append to table
  const row = document.createElement('tr');
  tableElem.appendChild(row);
  const cell = document.createElement('th');
  row.appendChild(cell);
  cell.textContent = 'Hourly Totals for All';
}

totalSalesArray = function () {
  function totalSalesArray(hourlyTotalArray){
    let sum = 0;
    for (let i=0; hourlyTotalArray.length; i++){
      if (typeof hourlyTotalArray[i] === 'number') {
        sum += numbers[i];
      }
    }  
    console.log (totalSalesArray)
     }   

}
totalSalesArray();




//here we make table appear!
renderTable();
