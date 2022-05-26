exports.getDate = function getDate() {
var today = new Date();
const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
today = today.toLocaleDateString("en-US", options);
return today;
};
