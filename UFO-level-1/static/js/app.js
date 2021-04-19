// from data.js
var tableData = data;

// create table to hold data
var tbody = d3.select("tbody");

// for each array, insert into the table body
tableData.forEach(ufoSighting => {

    // add a new row for each entry
    var newRow = tbody.append("tr");

    // Loop through UFO sightings
    Object.defineProperties(ufoSighting).forEach(function([key, value]) {

        // check console to make sure entries are being logged
        console.log(key, value);

        // add to the table in a new cell
        var newCell = newRow.append("td");
        newCell.text(value);
    })
})

// create event handlers for date inputs
var button = d3.select("#filter-btn");
var form = d3.select("#formz");

button.on("click", runEnter);
form.on("submit", runEnter);

// create function to filter through data that matches the search criteria
function runEnter(){

    // prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    // filter through the data based on the date provided by user
    var filteredData = tableData.filter(date => date.datetime === inputValue);
    console.log(filteredData);
    
    // clear the table of previous dasta 
    document.getElementById("tbodyid").innerHTML = "";
};