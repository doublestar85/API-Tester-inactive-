// // Ajax version - live
// //  jQuery(document).ready(function(){
// //             jQuery( "#submit-ajax" ).click(function() {
// //                 alert( "Ajax Query button is clicked");
// //             });
// //         });

// // Ajax version - test
// //  jQuery(document).ready(function(){
// //             jQuery( "#submit-ajax" ).click(function() {
// //                 alert( "Ajax Query button is clicked");
// //             });
// //         });


// $(function(){
//     $.ajax({
//         type: 'GET',
//         url: 'http://xkcd.com/info.0.json',
//         success: function (data) {
//             console.log('success', data);
//         }
//     });
// });
// // 
// // https://learnwebcode.github.io/json-example/animals-1.json

var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
  function doCORSRequest(options, printResult) {
    var x = new XMLHttpRequest();
    x.open(options.method, cors_api_url + options.url);
    x.onload = x.onerror = function() {
      printResult(
        options.method + ' ' + options.url + '\n' +
        x.status + ' ' + x.statusText + '\n\n' +
        (x.responseText || '')
      );
    };
    if (/^POST/i.test(options.method)) {
      x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }
    x.send(options.data);
  }

  // Bind event
  (function() {
    var urlField = document.getElementById('url');
    var dataField = document.getElementById('data');
    var outputField = document.getElementById('output-ajax');
    document.getElementById('get-ajax').onclick =
    document.getElementById('post-ajax').onclick = function(e) {
      e.preventDefault();
      doCORSRequest({
        method: this.id === 'post-ajax' ? 'POST' : 'GET',
        url: urlField.value,
        data: dataField.value
      }, function printResult(result) {
        outputField.value = result;
      });
    };
  })();