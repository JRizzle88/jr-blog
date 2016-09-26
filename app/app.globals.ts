
// globals file to access variables throughout the app

// default locahost url
// note: this will differ if the app is a 2nd process of ionic serve
let serverUrl = "http://localhost:8100/";

// export
export let GLOBALS = {
    server: serverUrl,
    // local data path
    api: serverUrl + "data/",
}
