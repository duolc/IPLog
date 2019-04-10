var request = require('request');

var ipUrl = 'https://api.ipify.org/'
//User Settings
//Your IFTTT Webhook Key
var iftttKey = '/with/key/'+'{{YOUR KEY HERE}}';
var iftttLink = 'https://maker.ifttt.com/trigger/';


request ({
    url: ipUrl
},  function(error, response, body) {
    var now = Date();
    request.post(iftttLink+'ip_update'+iftttKey, {
        json: {
        value1: body
      }})
            console.log(now)
            console.log('Your Current IP is: '+body);
    });
