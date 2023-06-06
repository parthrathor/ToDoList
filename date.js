module.exports.getDate = getDate;

function getDate() {
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let today = new Date();
  return today.toLocaleDateString("en-US", options); //return the number of day (0-6 , Starting with Sunday)
}

module.exports.getDay = getDay;

function getDay() {
  let options = {
    weekday: "long",
  };
  let today = new Date();
  return today.toLocaleDateString("en-US", options); //return the number of day (0-6 , Starting with Sunday)
}
