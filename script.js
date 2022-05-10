$().ready(function () {
    $("#text").html("Text added by jQuery code.");
});

// Add "https://ipinfo.io" statement
// this will communicate with the ipify servers
// in order to retrieve the IP address
$.get("https://ipinfo.io", function (response) {
    alert(response.ip);
}, "json")