// Anonymous functions
function named() {
    console.log("I have a name!");
}
function alsoNamed() {
    let anonymous = function() {
        console.log("I'm anonymous as f**k");
    }
    anonymous();
}
console.log("-----------------------------------------------------");
console.log("Anonymous functions");
console.log("-----------------------------------------------------");
named();
alsoNamed();

// Callback functions
function makeRequest(userName) {
    let api = new InstagramAPI();
    api.getAllPhotos(userName, function(err, success) {
        if (success) {
            console.log(success.message);
        } else {
            console.log(err.message);
        }
    });
}
/* Fake InstagramAPI */
function InstagramAPI() {
    this.getAllPhotos = function(userName, response) {
        console.log("Photos requested for " + userName);
        let success = { message: "Photos returned successfully." };
        response({}, success);
    }
}

function noRequest() {
    console.log("Function finished.");
}
console.log("-----------------------------------------------------");
console.log("Callback functions");
console.log("-----------------------------------------------------");
makeRequest("am192");
noRequest();
// Photos requested for am192
// Photos returned successfully.
// Function finished.
