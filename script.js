/*$.getJSON('https://jsonip.com/', function (data) {

    // Setting text of element P with id gfg
    $("#gfg").html(data.ip);
});
**/


var VisitorAPI = function (t, e, a) { var s = new XMLHttpRequest; s.onreadystatechange = function () { var t; s.readyState === XMLHttpRequest.DONE && (200 === (t = JSON.parse(s.responseText)).status ? e(t.data) : a(t.status, t.result)) }, s.open("GET", "https://visitorapi-dev.uc.r.appspot.com/api/?pid=" + t), s.send(null) };
new VisitorAPI(projectID, successHandler, errorHandler);

VisitorAPI(
    "om61tWZOjuBBPxTdDlpy",
    function (data) { console.log(data) },
    function (errorCode, errorMessage) { console.log(errorCode, errorMessage) }
    $("#gfg").html(data.ipAddress)
);
