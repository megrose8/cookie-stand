const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//constructor//

function LocationSales(location, minCustomers,maxCustomers,avgCookiesPerSale) {
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.sales = this.estimateSales();
}
//method: Function bound to a particular object//

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

// //rendering//
//function "for loop"//
//function creating the header row//

LocationSales.prototype.render = function ( )

const containerElem = document.getElementById('salesData');

const articleElem = document.createElement('article');
containerElem.appendChild(articleElem);

const tableElem = document.createElement('table');
articleElem.appendChild(tableElem);

const headerRow = document.createElement('tr');
tableElem.appendChild(headerRow);

//function- for loop- const Header

 for (let i = 0; i<hours.length; i++){
    const currentHour = hours[i];
    const currentHeaderCell = document.createElement('th');
    headerRow.appendChild(currentHeaderCell);
    currentHeaderCell.textContent = currentHour;
 }



// function render(LocationSales) {
//   // need an article per cookie stand
//   const cookieStandArticle = document.createElement('article');
//   container.appendChild(cookieStandArticle);

//   const heading = document.createElement('h2');
//   cookieStandArticle.appendChild(heading);
//   heading.textContent = store.location;

//   const hoursList = document.createElement('ul');
//   cookieStandArticle.appendChild(hoursList);

//   let totalSold = 0;

//   for (let i = 0; i < store.sales.length; i++) {
//     const salesItem = document.createElement('li');
//     hoursList.appendChild(salesItem);
//     const cookiesSoldThisHour = store.sales[i];
//     totalSold += cookiesSoldThisHour;
//     const salesInfo = `${hours[i]}: ${cookiesSoldThisHour} cookies`;
//     salesItem.textContent = salesInfo;
//   }

//   // add total line
//   const totalItem = document.createElement('li');
//   hoursList.appendChild(totalItem);
//   const totalInfo = `Total: ${totalSold} cookies sold`;
//   totalItem.textContent = totalInfo;

// }


const seattle = new LocationSales('seattle', 23, 65, 6.3);
const tokyo = new LocationSales('tokyo', 3, 24, 1.2);
const dubai = new LocationSales('dubai', 11, 38, 3.7);
const paris =  new LocationSales('paris', 20, 38, 3.7);
const lima =  new LocationSales('lima', 2, 16, 4.6);

// render(seattle);
// render(tokyo);
// render(dubai);
// render(paris);
// render(lima);