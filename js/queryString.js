//Code to handle the header username and alerts badge.

//grabs entire query string from ? onware
var queryString = location.search;

//calls parse query to break string into key value pairs
var keyValuePairs = parseQuery(queryString);

//assign username from querystring
if (keyValuePairs.username.length > 0) {
document.getElementById("userName").innerHTML = "User: " + keyValuePairs.username;
document.getElementById("settings_email").value = keyValuePairs.username + "@fedex.com";
document.getElementById("settings_username").value = keyValuePairs.username;
}

//assign badge value
var badge = document.getElementById("button_badge");
if (keyValuePairs.alertNum > -1){
badge.innerHTML = keyValuePairs.alertNum; 
}


 
//if no alerts, then hide badge value
if (keyValuePairs.alertNum == 0){
			badge.style.display = "none";
}

//code to insert query string into URL
var queryStringParams = "username="+keyValuePairs.username+"&alertNum="+keyValuePairs.alertNum;

//parses querystring
function parseQuery(qstr) {
        var query = {};
        var a = (qstr[0] === '?' ? qstr.substr(1) : qstr).split('&');
        for (var i = 0; i < a.length; i++) {
            var b = a[i].split('=');
            query[decodeURIComponent(b[0])] = decodeURIComponent(b[1] || '');
        }
        return query;
    }