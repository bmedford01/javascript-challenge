// from data.js
var tableData = data;

// YOUR CODE HERE!
// Appending the table with the Sightings data
var tbody = d3.select("tbody");

function populateData(userEntry) {
    userEntry.forEach((sightings) => {
      var row = tbody.append("tr");
      Object.entries(sightings).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    })
  
  }

  populateData(tableData);

//Setup button for filtering
var buttonDate = d3.select("#filter-btn");

var DateData = d3.select("#datetime");

var errMsg = d3.select("#error")

buttonDate.on("click", runEnter);

function runEnter () {

    d3.event.preventDefault();

    var inputValueDate = DateData.property("value");

    var filteredDateData = tableData.filter(tableData => tableData.datetime === inputValueDate);

    tbody.html("");

    if (filteredDateData.length !== 0) {
        populateData(filteredDateData);
    
    }
    else {
        tbody.html("");

        errMsg.append("p").text("Sorry, entries for that date were deleted by user FBI-Agent_Roswell.")
    }


}











// var button = d3.select("#filter-btn");

// var inputElement = d3.select("#datetime");

// button.on("click", function() {
    
//     // var inputValue = inputElement.property("value");
//     // console.log(inputValue);
//     // var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
//     // console.log(filteredData);
//     // if (tableData.datetime === inputValue) {
//     //     filteredData.style.display;
//     // }

    
//     // var table = document.getElementById("ufo-table");
//     // var tr = table.getElementsByTagName("tr");

//     // for (i = 0; i < tr.length; i++) {
//     //     td = tr[i].getElementsByTagName("td")[0];
//     //     if (td) {
//     //       txtValue = td.textContent || td.innerText;
//     //       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//     //         tr[i].style.display = "";
//     //       } else {
//     //         tr[i].style.display = "none";
//     //       }
//     //     }
//     // }
// })
