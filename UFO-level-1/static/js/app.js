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
var form = d3.select("formz");

button.on("click", runEnter);
form.on("submit", runEnter);

