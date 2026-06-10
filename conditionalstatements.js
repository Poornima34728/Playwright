function launchBrowser() {
    let browsername = "chrome";

    if(browsername === "chrome") {
        console.log("Launching Chrome browser");
    } else if(browsername === "firefox") {
        console.log("Launching Firefox browser");
    } else {
        console.log("Browser not supported");
    }
}

launchBrowser();

function runTests(){

    let environment = "staging"

    switch(environment) {
        case "smoke" : 
            console.log("smoke tests");
            break;
        case "regression" : 
            console.log(" regression tests");
            break;
        case "sanity" : 
            console.log(" sanity tests");
            break;
        default :
            console.log("smoke tests");
    }


}runTests();