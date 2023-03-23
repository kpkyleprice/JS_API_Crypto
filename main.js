let crypto;
let showInfo = false;

async function clickedEvent(img_id, item_index, my_id) {
    let id = document.getElementsByTagName('img')[1].attributes[2].value;

    const request = await fetch("http://api.coinlayer.com/live?access_key=2a08ed4cbc1f6d197fddf16d78dfff93")

    let response = await request.json();

    console.log(response)
    console.log(my_id)
    const BTC_price = response.rates.BTC
    const ETH_price = response.rates.ETH
    const LTC_price = response.rates.LTC
    const DOGE_price = response.rates.DOGE
    const PIZZA_price = response.rates.PIZZA
    const KICK_price = response.rates.KICK
    let BTC_crypto = document.getElementById("BTC_text")
    let ETH_crypto = document.getElementById("ETH_text")
    let LITE_crypto = document.getElementById("LITE_text")
    let DOGE_crypto = document.getElementById("DOGE_text")
    let PIZZA_crypto = document.getElementById("PIZZA_text")
    let KICK_crypto = document.getElementById("KICK_text")

    ETH_crypto.innerHTML = ETH_price
    BTC_crypto.innerHTML = BTC_price
    LITE_crypto.innerHTML = LTC_price
    DOGE_crypto.innerHTML = DOGE_price
    PIZZA_crypto.innerHTML = PIZZA_price
    KICK_crypto.innerHTML = KICK_price
    // console.log(response)
    // console.log(my_id)
    // my_id.innerHTML = response.rates.ETH
    // console.log(my_id)
    // my_id.innerHTML = response.rates.ETH

    // new_text.innerHTML = response.rates.BTC

}

  function hiddenText() {
    var x = document.getElementById("bit_details");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function hiddenTexteth() {
    var x = document.getElementById("eth_details");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function hiddenTexttlite() {
    var x = document.getElementById("lite_details");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function hiddenTextdoge() {
    var x = document.getElementById("doge_details");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function hiddenTextpizza() {
    var x = document.getElementById("pizza_details");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function hiddenTextkick() {
    var reveal = document.getElementById("kick_details");
    if (reveal.style.display === "none") {
      reveal.style.display = "block";
    } else {
      reveal.style.display = "none";
    }
  }
  hiddenText() 
  hiddenTexteth()
  hiddenTexttlite()
  hiddenTextdoge()
  hiddenTextpizza() 
  hiddenTextkick()
