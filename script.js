let apiKey = '25864308b6a77fd90f8bf04b3021a48c1f2fb302a676dd3809054bc1b07f5b42';

$.getJSON('http://ip.jsontest.com/', function (data) {
    console.log(JSON.stringify(data, null, 2))

    // Setting text of element P with id gfg
    $("#gfg").html(data.ip);
})