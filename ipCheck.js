//Dependencies
var request = require('request');
var schedule = require('node-schedule');

//WAN IP Check Website
var ipUrl = 'https://api.ipify.org/'

//User Settings

//Your IFTTT Webhook Key
//Create IFTTT receive web request with event name of ip_update
var iftttKey = '/with/key/'+'{{YOUR KEY HERE}}';
var iftttLink = 'https://maker.ifttt.com/trigger/';

//Run Everyday at Midnight
var j = schedule.scheduleJob('0 0 12 * * *',function(){

request ({
    url: ipUrl
},  function(error, response, body) {
    var now = new Date();
    request.post(iftttLink+'ip_update'+iftttKey, {
        json: {
        value1: body
      }})
            console.log('      Time Checked: '+now)
            console.log('Your Current IP is: '+body);
    });
});

