const { response } = require("express");

$.getJSON('https://ipinfo.io/json', function (data) {
    console.log(JSON.stringify(data, null, 2))


    // Setting text of element P with id gfg
    $("#gfg").html(data.ip);
});


const tt = fetch('http://www.geoplugin.net/json.gp', { headers, method: "POST" })
    .then((response, reject) => {
        const rejectResponse = {
        "error_type": "SERVER_ERROR",
        "error": true
        }
            if (response.ok === true) return response.json()
                else if (response.status === 500) return reject (rejectResponse)
    })

tt.then(x=>console.log(x)).then(undefined,x=>console.log(x))



async function makeRequest3() {
    try {
        const response = await fetch('http://ip-api.com/json');

        console.log('status code: ', response.status); // 200

        if (!response.ok) {
            console.log(response);
            console.log("toimii3")
            $.getJSON('http://ip-api.com/json', function (data) {
                console.log(JSON.stringify(data, null, 2))

                // Setting text of element P with id gfg
                $("#gfg3").html(data.ip);
            });

            throw new Error(`Error! status: ${response.status}`);

            
        }

        const result = await response.json();
        return result;
    } catch (err) {
        console.log(err);
        console.log("error3");
        makeRequest4();
    }
}


async function makeRequest2() {
    try {
        const response = await fetch('https://api.ipify.org?format=jsonp&callback=?');

        console.log('status code: ', response.status); // 200

        if (!response.ok) {
            console.log(response);
            throw new Error(`Error! status: ${response.status}`);

            $.getJSON('https://api.ipify.org?format=jsonp&callback=?', function (data) {
                console.log(JSON.stringify(data, null, 2))

                // Setting text of element P with id gfg
                $("#gfg1").html(data.ip);
            });
        }

        const result = await response.json();
        return result;
    } catch (err) {
        console.log(err);
        console.log("error1");
        makeRequest3();
    }
}


async function makeRequest() {
    try {
        const response = await fetch('https://ipinfo.io/json');

        console.log('status code: ', response.status); // 200

        if (!response.ok) {
            console.log(response);
            throw new Error(`Error! status: ${response.status}`);

            $.getJSON('https://ipinfo.io/json', function (data) {
                console.log(JSON.stringify(data, null, 2))

                // Setting text of element P with id gfg
                $("#gfg").html(data.ip);
            });
        }

        const result = await response.json();
        return result;
    } catch (err) {
        console.log(err);
        console.log("error2");
        makeRequest2();
    }
}

makeRequest();


/*$.getJSON('https://ipinfo.io/json', function (data) {
    console.log(JSON.stringify(data, null, 2))

    // Setting text of element P with id gfg
    $("#gfg").html(data.ip);
});
 **/