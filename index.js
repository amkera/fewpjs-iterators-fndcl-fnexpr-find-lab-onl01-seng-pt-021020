const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]




function superbowlWin(record) {
  record.find(function(win) {
    if (record.result === "W") {
      return record.year;
    } else {
      return undefined;
    }
  })
}











//There is a difference between find and filter. Find returns the first value for which the callback function returns true, but filter returns all of them. 

// let roommates = ["jess", "winston", "winston", "nick"];
 
// roommates.find( function(s) { return s === "winston" })
//=> winston
 
// roommates.filter(function(s) { return s === "winston" })
//=> [winston, winston]