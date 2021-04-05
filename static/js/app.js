// from data.js
var tableData = data;

// YOUR CODE HERE!
// Appending the table with the Sightings data
var tbody = d3.select("tbody");

tableData.forEach(function(sighting) {
    console.log(sighting);
    var row = tbody.append("tr");

    Object.entries(sighting).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
})