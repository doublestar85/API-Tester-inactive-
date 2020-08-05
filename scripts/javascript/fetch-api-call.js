// // Fetch version - live
// fetch('http://xkcd.com/[USER-INPUT]/info.0.json')
//     .then(response => response.json()) // response.json() returns a promise
//     .then((response) => {
//       console.log("I have friends!", response); //returns all of brad's friends
//     })

// // Fetch version - test
// // fetch('http://xkcd.com/info.211.json')
// //     .then(response => response.json()) // response.json() returns a promise
// //     .then((response) => {
// //       console.log("I have friends!", response); //returns all of brad's friends
// //     })
// The pre-written idea.



// When we console.log(fetch(...)) we see a Promise. A request is returned a promise that information will be supplied
// fetch('https://reqres.in/api/users') 
        // the fetch function literally retrieves information at a url. the promise is returned as a result.


//     .then(res => console.log(res))
        //like an if then function, .then brings the result to the user as an executed function console.log(res)


        // this produces a cors error 200,
        // we then have to specify the type of data we are receiving. In this case a json object.

// function GetFData() {
        // created a dom ID to call the event instead of relying on onloads.


//     fetch('https://reqres.in/api/users', {
//         method: 'get',
//     }).then(res => {
//         return res.json()
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log('it failed'))
//                                                  alert("message: it has been done");
// }
// This produced a nice result of an object I want to display on the page somehow. Next, we convert an object recived into an image and submit to a dom ID.

function GetFData() {
    fetch('http://xkcd.com/614/info.0.json', {
        header: ("Access-Control-Allow-Origin: *")
    })
        .then(res => {
            console.log(res);
            return Response.blob();
        })
        .then(blob => {
            console.log(blob);
            document.getElementById('submit-fetch').src = url.createObjectURL(blob);
        })
    .then(data => console.log(data))
    .catch(error => console.log('it failed'))
                                                 alert("message: it has been done");

}
// fetch('http://xkcd.com/info.0.json')
// const objectURL = URL.createObjectURL(object)
