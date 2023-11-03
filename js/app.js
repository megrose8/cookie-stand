const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let grandTotal = 0;
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
  this.dailyTotalSum = 0;
}
//method:creating the randomly gen numbers for this.sales
LocationSales.prototype.estimateSales = function() {
  const sales = [];   
  for (let i = 0; i < hours.length; i++) {
    const numCustomers = randomInRange(this.minCustomers, this.maxCustomers);
    const hourSales = Math.ceil(numCustomers * this.avgCookiesPerSale);
    sales.push(hourSales);
  }
  return sales;
};


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

//array of all objects for footer row
const cities = [seattle, tokyo, dubai, paris, lima]
// let dailyTotalSum = [this.sales]

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
   const totalCell = document.createElement('td');
   row.appendChild(totalCell)
   totalCell.textContent = 'Location Totals';
} 

//Prototyping of Location Sales:
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
  
      for (let i = 0; i< this.sales.length; i++){
      this.dailyTotalSum += this.sales[i];
      grandTotal +=this.sales[i]
      console.log (grandTotal)
      }
    const totalDailyCell = document.createElement('td');
    row.appendChild(totalDailyCell)
    totalDailyCell.textContent =this.dailyTotalSum;
};

    
//hourly totals footer row
    function renderFooterRow(tableElem){
      const row = document.createElement('tr');
      tableElem.appendChild(row);
      const cell = document.createElement('th');
      row.appendChild(cell);
    cell.textContent = 'Hourly Totals for All';
        for (let i=0; i<hours.length; i++){
          let hourlyTotals = 0;
          const totalCell = document.createElement('td');
          row.appendChild(totalCell);
              for (let k=0; k<cities.length; k++){
              hourlyTotals += cities[k].sales[i]
              }
         totalCell.textContent=  hourlyTotals;
    }
    const salesForAllLocations = document.createElement('td');
    row.appendChild(salesForAllLocations);
    salesForAllLocations.textContent = grandTotal
  }

//here we make table appear!
renderTable();