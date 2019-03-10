
var pubnub = new PubNub({
    publishKey:   'pub-c-963342c0-7b70-468e-aada-84a86ad5d532',
    subscribeKey: 'sub-c-96b25e44-3fb7-11e9-99ed-dea01fda7778'
  });

var xhr = new XMLHttpRequest();

function processRequest(e) {
if (xhr.readyState == 4 && xhr.status == 200) {
    var response = JSON.parse(xhr.responseText);
        pubnub.publish({
        channel: 'bitcoin-feed',
        message: {
            eon: {
            'BitCoin': response.BTC.USD.toFixed(2)
            }
        }
        });
        pubnub.publish({
        channel: 'ether-feed',
        message: {
            eon: {
            'Ether': response.ETH.USD.toFixed(2)
            }
        }
        });
        pubnub.publish({
        channel: 'litecoin-feed',
        message: {
            eon: {
            'LiteCoin': response.LTC.USD.toFixed(2)
            }
        }
        });
    }
}

function mainApp() {
    setInterval(function(){
        xhr.open('GET', 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD', true)
        xhr.send();
        xhr.onreadystatechange = processRequest;
    }, 10000)
};
mainApp();