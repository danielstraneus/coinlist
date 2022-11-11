// SESH STORAGE // SESH STORAGE //

if (sessionStorage.getItem("blink") === "hide") {
  showBlinkers();
}

if (sessionStorage.getItem("colors") === "hide") {
  colorSwap();
}

let oneHourWinner = [];

// BLINK BUTTON

let blinkers = document.querySelector("#blink");
function showBlinkers() {
  let marquees = document.querySelector(".table-head");
  console.log(marquees.style.display === "");
  if (marquees.style.display === "") {
    sessionStorage.setItem("blink", "hide");
    console.log(sessionStorage);
    marquees.style.display = "none";
  } else {
    marquees.style.display = "";
    sessionStorage.setItem("blink", "show");
    console.log(sessionStorage);
  }
}

blinkers.addEventListener("click", showBlinkers);

// REFRESH BUTTON

let refresh = document.querySelector("#refresh");
function reloadPage() {
  location.reload();
}
refresh.addEventListener("click", reloadPage);

// COLORS ON/OFF-BUTTON

let colorsOnOff = document.querySelector("#colors");
function colorSwap() {
  let btc1h = document.querySelector("#btc-change1h");
  if (btc1h.style.background === "") {
    sessionStorage.setItem("colors", "hide");
    btc1h.style.background = "transparent";
  } else {
    sessionStorage.setItem("colors", "show");
    btc1h.style.background = "";
  }
  let btc24h = document.querySelector("#btc-change24");
  if (btc24h.style.background === "") {
    btc24h.style.background = "transparent";
  } else {
    btc24h.style.background = "";
  }
  let btc7d = document.querySelector("#btc-change7d");
  if (btc7d.style.background === "") {
    btc7d.style.background = "transparent";
  } else {
    btc7d.style.background = "";
  }
  let eth1h = document.querySelector("#eth-change1h");
  if (eth1h.style.background === "") {
    eth1h.style.background = "transparent";
  } else {
    eth1h.style.background = "";
  }
  let eth24h = document.querySelector("#eth-change24");
  if (eth24h.style.background === "") {
    eth24h.style.background = "transparent";
  } else {
    eth24h.style.background = "";
  }
  let eth7d = document.querySelector("#eth-change7d");
  if (eth7d.style.background === "") {
    eth7d.style.background = "transparent";
  } else {
    eth7d.style.background = "";
  }
  let bnb1h = document.querySelector("#bnb-change1h");
  if (bnb1h.style.background === "") {
    bnb1h.style.background = "transparent";
  } else {
    bnb1h.style.background = "";
  }
  let bnb24h = document.querySelector("#bnb-change24");
  if (bnb24h.style.background === "") {
    bnb24h.style.background = "transparent";
  } else {
    bnb24h.style.background = "";
  }
  let bnb7d = document.querySelector("#bnb-change7d");
  if (bnb7d.style.background === "") {
    bnb7d.style.background = "transparent";
  } else {
    bnb7d.style.background = "";
  }
  let ada1h = document.querySelector("#ada-change1h");
  if (ada1h.style.background === "") {
    ada1h.style.background = "transparent";
  } else {
    ada1h.style.background = "";
  }
  let ada24h = document.querySelector("#ada-change24");
  if (ada24h.style.background === "") {
    ada24h.style.background = "transparent";
  } else {
    ada24h.style.background = "";
  }
  let ada7d = document.querySelector("#ada-change7d");
  if (ada7d.style.background === "") {
    ada7d.style.background = "transparent";
  } else {
    ada7d.style.background = "";
  }
  let tether1h = document.querySelector("#tether-change1h");
  if (tether1h.style.background === "") {
    tether1h.style.background = "transparent";
  } else {
    tether1h.style.background = "";
  }
  let tether24h = document.querySelector("#tether-change24");
  if (tether24h.style.background === "") {
    tether24h.style.background = "transparent";
  } else {
    tether24h.style.background = "";
  }
  let tether7d = document.querySelector("#tether-change7d");
  if (tether7d.style.background === "") {
    tether7d.style.background = "transparent";
  } else {
    tether7d.style.background = "";
  }
  let solana1h = document.querySelector("#solana-change1h");
  if (solana1h.style.background === "") {
    solana1h.style.background = "transparent";
  } else {
    solana1h.style.background = "";
  }
  let solana24h = document.querySelector("#solana-change24");
  if (solana24h.style.background === "") {
    solana24h.style.background = "transparent";
  } else {
    solana24h.style.background = "";
  }
  let solana7d = document.querySelector("#solana-change7d");
  if (solana7d.style.background === "") {
    solana7d.style.background = "transparent";
  } else {
    solana7d.style.background = "";
  }
  let xrp1h = document.querySelector("#xrp-change1h");
  if (xrp1h.style.background === "") {
    xrp1h.style.background = "transparent";
  } else {
    xrp1h.style.background = "";
  }
  let xrp24h = document.querySelector("#xrp-change24");
  if (xrp24h.style.background === "") {
    xrp24h.style.background = "transparent";
  } else {
    xrp24h.style.background = "";
  }
  let xrp7d = document.querySelector("#xrp-change7d");
  if (xrp7d.style.background === "") {
    xrp7d.style.background = "transparent";
  } else {
    xrp7d.style.background = "";
  }
  let doge1h = document.querySelector("#doge-change1h");
  if (doge1h.style.background === "") {
    doge1h.style.background = "transparent";
  } else {
    doge1h.style.background = "";
  }
  let doge24h = document.querySelector("#doge-change24");
  if (doge24h.style.background === "") {
    doge24h.style.background = "transparent";
  } else {
    doge24h.style.background = "";
  }
  let doge7d = document.querySelector("#doge-change7d");
  if (doge7d.style.background === "") {
    doge7d.style.background = "transparent";
  } else {
    doge7d.style.background = "";
  }
  let usd1h = document.querySelector("#usd-change1h");
  if (usd1h.style.background === "") {
    usd1h.style.background = "transparent";
  } else {
    usd1h.style.background = "";
  }
  let usd24h = document.querySelector("#usd-change24");
  if (usd24h.style.background === "") {
    usd24h.style.background = "transparent";
  } else {
    usd24h.style.background = "";
  }
  let usd7d = document.querySelector("#usd-change7d");
  if (usd7d.style.background === "") {
    usd7d.style.background = "transparent";
  } else {
    usd7d.style.background = "";
  }
  let dot1h = document.querySelector("#dot-change1h");
  if (dot1h.style.background === "") {
    dot1h.style.background = "transparent";
  } else {
    dot1h.style.background = "";
  }
  let dot24h = document.querySelector("#dot-change24");
  if (dot24h.style.background === "") {
    dot24h.style.background = "transparent";
  } else {
    dot24h.style.background = "";
  }
  let dot7d = document.querySelector("#dot-change7d");
  if (dot7d.style.background === "") {
    dot7d.style.background = "transparent";
  } else {
    dot7d.style.background = "";
  }
  let luna1h = document.querySelector("#luna-change1h");
  if (luna1h.style.background === "") {
    luna1h.style.background = "transparent";
  } else {
    luna1h.style.background = "";
  }
  let luna24h = document.querySelector("#luna-change24");
  if (luna24h.style.background === "") {
    luna24h.style.background = "transparent";
  } else {
    luna24h.style.background = "";
  }
  let luna7d = document.querySelector("#luna-change7d");
  if (luna7d.style.background === "") {
    luna7d.style.background = "transparent";
  } else {
    luna7d.style.background = "";
  }
  let uni1h = document.querySelector("#uni-change1h");
  if (uni1h.style.background === "") {
    uni1h.style.background = "transparent";
  } else {
    uni1h.style.background = "";
  }
  let uni24h = document.querySelector("#uni-change24");
  if (uni24h.style.background === "") {
    uni24h.style.background = "transparent";
  } else {
    uni24h.style.background = "";
  }
  let uni7d = document.querySelector("#uni-change7d");
  if (uni7d.style.background === "") {
    uni7d.style.background = "transparent";
  } else {
    uni7d.style.background = "";
  }
  let ltc1h = document.querySelector("#ltc-change1h");
  if (ltc1h.style.background === "") {
    ltc1h.style.background = "transparent";
  } else {
    ltc1h.style.background = "";
  }
  let ltc24h = document.querySelector("#ltc-change24");
  if (ltc24h.style.background === "") {
    ltc24h.style.background = "transparent";
  } else {
    ltc24h.style.background = "";
  }
  let ltc7d = document.querySelector("#ltc-change7d");
  if (ltc7d.style.background === "") {
    ltc7d.style.background = "transparent";
  } else {
    ltc7d.style.background = "";
  }
  let avax1h = document.querySelector("#avax-change1h");
  if (avax1h.style.background === "") {
    avax1h.style.background = "transparent";
  } else {
    avax1h.style.background = "";
  }
  let avax24h = document.querySelector("#avax-change24");
  if (avax24h.style.background === "") {
    avax24h.style.background = "transparent";
  } else {
    avax24h.style.background = "";
  }
  let avax7d = document.querySelector("#avax-change7d");
  if (avax7d.style.background === "") {
    avax7d.style.background = "transparent";
  } else {
    avax7d.style.background = "";
  }
  let wbtc1h = document.querySelector("#wbtc-change1h");
  if (wbtc1h.style.background === "") {
    wbtc1h.style.background = "transparent";
  } else {
    wbtc1h.style.background = "";
  }
  let wbtc24h = document.querySelector("#wbtc-change24");
  if (wbtc24h.style.background === "") {
    wbtc24h.style.background = "transparent";
  } else {
    wbtc24h.style.background = "";
  }
  let wbtc7d = document.querySelector("#wbtc-change7d");
  if (wbtc7d.style.background === "") {
    wbtc7d.style.background = "transparent";
  } else {
    wbtc7d.style.background = "";
  }
  let busd1h = document.querySelector("#busd-change1h");
  if (busd1h.style.background === "") {
    busd1h.style.background = "transparent";
  } else {
    busd1h.style.background = "";
  }
  let busd24h = document.querySelector("#busd-change24");
  if (busd24h.style.background === "") {
    busd24h.style.background = "transparent";
  } else {
    busd24h.style.background = "";
  }
  let busd7d = document.querySelector("#busd-change7d");
  if (busd7d.style.background === "") {
    busd7d.style.background = "transparent";
  } else {
    busd7d.style.background = "";
  }
  let link1h = document.querySelector("#link-change1h");
  if (link1h.style.background === "") {
    link1h.style.background = "transparent";
  } else {
    link1h.style.background = "";
  }
  let link24h = document.querySelector("#link-change24");
  if (link24h.style.background === "") {
    link24h.style.background = "transparent";
  } else {
    link24h.style.background = "";
  }
  let link7d = document.querySelector("#link-change7d");
  if (link7d.style.background === "") {
    link7d.style.background = "transparent";
  } else {
    link7d.style.background = "";
  }
  let bch1h = document.querySelector("#bch-change1h");
  if (bch1h.style.background === "") {
    bch1h.style.background = "transparent";
  } else {
    bch1h.style.background = "";
  }
  let bch24h = document.querySelector("#bch-change24");
  if (bch24h.style.background === "") {
    bch24h.style.background = "transparent";
  } else {
    bch24h.style.background = "";
  }
  let bch7d = document.querySelector("#bch-change7d");
  if (bch7d.style.background === "") {
    bch7d.style.background = "transparent";
  } else {
    bch7d.style.background = "";
  }
  let shib1h = document.querySelector("#shib-change1h");
  if (shib1h.style.background === "") {
    shib1h.style.background = "transparent";
  } else {
    shib1h.style.background = "";
  }
  let shib24h = document.querySelector("#shib-change24");
  if (shib24h.style.background === "") {
    shib24h.style.background = "transparent";
  } else {
    shib24h.style.background = "";
  }
  let shib7d = document.querySelector("#shib-change7d");
  if (shib7d.style.background === "") {
    shib7d.style.background = "transparent";
  } else {
    shib7d.style.background = "";
  }
  let algo1h = document.querySelector("#algo-change1h");
  if (algo1h.style.background === "") {
    algo1h.style.background = "transparent";
  } else {
    algo1h.style.background = "";
  }
  let algo24h = document.querySelector("#algo-change24");
  if (algo24h.style.background === "") {
    algo24h.style.background = "transparent";
  } else {
    algo24h.style.background = "";
  }
  let algo7d = document.querySelector("#algo-change7d");
  if (algo7d.style.background === "") {
    algo7d.style.background = "transparent";
  } else {
    algo7d.style.background = "";
  }
  let xlm1h = document.querySelector("#xlm-change1h");
  if (xlm1h.style.background === "") {
    xlm1h.style.background = "transparent";
  } else {
    xlm1h.style.background = "";
  }
  let xlm24h = document.querySelector("#xlm-change24");
  if (xlm24h.style.background === "") {
    xlm24h.style.background = "transparent";
  } else {
    xlm24h.style.background = "";
  }
  let xlm7d = document.querySelector("#xlm-change7d");
  if (xlm7d.style.background === "") {
    xlm7d.style.background = "transparent";
  } else {
    xlm7d.style.background = "";
  }
  let vet1h = document.querySelector("#vet-change1h");
  if (vet1h.style.background === "") {
    vet1h.style.background = "transparent";
  } else {
    vet1h.style.background = "";
  }
  let vet24h = document.querySelector("#vet-change24");
  if (vet24h.style.background === "") {
    vet24h.style.background = "transparent";
  } else {
    vet24h.style.background = "";
  }
  let vet7d = document.querySelector("#vet-change7d");
  if (vet7d.style.background === "") {
    vet7d.style.background = "transparent";
  } else {
    vet7d.style.background = "";
  }
  let atom1h = document.querySelector("#atom-change1h");
  if (atom1h.style.background === "") {
    atom1h.style.background = "transparent";
  } else {
    atom1h.style.background = "";
  }
  let atom24h = document.querySelector("#atom-change24");
  if (atom24h.style.background === "") {
    atom24h.style.background = "transparent";
  } else {
    atom24h.style.background = "";
  }
  let atom7d = document.querySelector("#atom-change7d");
  if (atom7d.style.background === "") {
    atom7d.style.background = "transparent";
  } else {
    atom7d.style.background = "";
  }
  let axs1h = document.querySelector("#axs-change1h");
  if (axs1h.style.background === "") {
    axs1h.style.background = "transparent";
  } else {
    axs1h.style.background = "";
  }
  let axs24h = document.querySelector("#axs-change24");
  if (axs24h.style.background === "") {
    axs24h.style.background = "transparent";
  } else {
    axs24h.style.background = "";
  }
  let axs7d = document.querySelector("#axs-change7d");
  if (axs7d.style.background === "") {
    axs7d.style.background = "transparent";
  } else {
    axs7d.style.background = "";
  }
  let rank251h = document.querySelector("#change1h-25");
  if (rank251h.style.background === "") {
    rank251h.style.background = "transparent";
  } else {
    rank251h.style.background = "";
  }
  let rank2524h = document.querySelector("#change24-25");
  if (rank2524h.style.background === "") {
    rank2524h.style.background = "transparent";
  } else {
    rank2524h.style.background = "";
  }
  let rank257d = document.querySelector("#change7d-25");
  if (rank257d.style.background === "") {
    rank257d.style.background = "transparent";
  } else {
    rank257d.style.background = "";
  }
  let rank261h = document.querySelector("#change1h-26");
  if (rank261h.style.background === "") {
    rank261h.style.background = "transparent";
  } else {
    rank261h.style.background = "";
  }
  let rank2624h = document.querySelector("#change24-26");
  if (rank2624h.style.background === "") {
    rank2624h.style.background = "transparent";
  } else {
    rank2624h.style.background = "";
  }
  let rank267d = document.querySelector("#change7d-26");
  if (rank267d.style.background === "") {
    rank267d.style.background = "transparent";
  } else {
    rank267d.style.background = "";
  }
  let rank271h = document.querySelector("#change1h-27");
  if (rank271h.style.background === "") {
    rank271h.style.background = "transparent";
  } else {
    rank271h.style.background = "";
  }
  let rank2724h = document.querySelector("#change24-27");
  if (rank2724h.style.background === "") {
    rank2724h.style.background = "transparent";
  } else {
    rank2724h.style.background = "";
  }
  let rank277d = document.querySelector("#change7d-27");
  if (rank277d.style.background === "") {
    rank277d.style.background = "transparent";
  } else {
    rank277d.style.background = "";
  }
  let rank281h = document.querySelector("#change1h-28");
  if (rank281h.style.background === "") {
    rank281h.style.background = "transparent";
  } else {
    rank281h.style.background = "";
  }
  let rank2824h = document.querySelector("#change24-28");
  if (rank2824h.style.background === "") {
    rank2824h.style.background = "transparent";
  } else {
    rank2824h.style.background = "";
  }
  let rank287d = document.querySelector("#change7d-28");
  if (rank287d.style.background === "") {
    rank287d.style.background = "transparent";
  } else {
    rank287d.style.background = "";
  }
  let rank291h = document.querySelector("#change1h-29");
  if (rank291h.style.background === "") {
    rank291h.style.background = "transparent";
  } else {
    rank291h.style.background = "";
  }
  let rank2924h = document.querySelector("#change24-29");
  if (rank2924h.style.background === "") {
    rank2924h.style.background = "transparent";
  } else {
    rank2924h.style.background = "";
  }
  let rank297d = document.querySelector("#change7d-29");
  if (rank297d.style.background === "") {
    rank297d.style.background = "transparent";
  } else {
    rank297d.style.background = "";
  }
  let rank301h = document.querySelector("#change1h-30");
  if (rank301h.style.background === "") {
    rank301h.style.background = "transparent";
  } else {
    rank301h.style.background = "";
  }
  let rank3024h = document.querySelector("#change24-30");
  if (rank3024h.style.background === "") {
    rank3024h.style.background = "transparent";
  } else {
    rank3024h.style.background = "";
  }
  let rank307d = document.querySelector("#change7d-30");
  if (rank307d.style.background === "") {
    rank307d.style.background = "transparent";
  } else {
    rank307d.style.background = "";
  }
  let rank311h = document.querySelector("#change1h-31");
  if (rank311h.style.background === "") {
    rank311h.style.background = "transparent";
  } else {
    rank311h.style.background = "";
  }
  let rank3124h = document.querySelector("#change24-31");
  if (rank3124h.style.background === "") {
    rank3124h.style.background = "transparent";
  } else {
    rank3124h.style.background = "";
  }
  let rank317d = document.querySelector("#change7d-31");
  if (rank317d.style.background === "") {
    rank317d.style.background = "transparent";
  } else {
    rank317d.style.background = "";
  }
  let rank321h = document.querySelector("#change1h-32");
  if (rank321h.style.background === "") {
    rank321h.style.background = "transparent";
  } else {
    rank321h.style.background = "";
  }
  let rank3224h = document.querySelector("#change24-32");
  if (rank3224h.style.background === "") {
    rank3224h.style.background = "transparent";
  } else {
    rank3224h.style.background = "";
  }
  let rank327d = document.querySelector("#change7d-32");
  if (rank327d.style.background === "") {
    rank327d.style.background = "transparent";
  } else {
    rank327d.style.background = "";
  }
  let rank331h = document.querySelector("#change1h-33");
  if (rank331h.style.background === "") {
    rank331h.style.background = "transparent";
  } else {
    rank331h.style.background = "";
  }
  let rank3324h = document.querySelector("#change24-33");
  if (rank3324h.style.background === "") {
    rank3324h.style.background = "transparent";
  } else {
    rank3324h.style.background = "";
  }
  let rank337d = document.querySelector("#change7d-33");
  if (rank337d.style.background === "") {
    rank337d.style.background = "transparent";
  } else {
    rank337d.style.background = "";
  }
  let rank341h = document.querySelector("#change1h-34");
  if (rank341h.style.background === "") {
    rank341h.style.background = "transparent";
  } else {
    rank341h.style.background = "";
  }
  let rank3424h = document.querySelector("#change24-34");
  if (rank3424h.style.background === "") {
    rank3424h.style.background = "transparent";
  } else {
    rank3424h.style.background = "";
  }
  let rank347d = document.querySelector("#change7d-34");
  if (rank347d.style.background === "") {
    rank347d.style.background = "transparent";
  } else {
    rank347d.style.background = "";
  }
  let rank351h = document.querySelector("#change1h-35");
  if (rank351h.style.background === "") {
    rank351h.style.background = "transparent";
  } else {
    rank351h.style.background = "";
  }
  let rank3524h = document.querySelector("#change24-35");
  if (rank3524h.style.background === "") {
    rank3524h.style.background = "transparent";
  } else {
    rank3524h.style.background = "";
  }
  let rank357d = document.querySelector("#change7d-35");
  if (rank357d.style.background === "") {
    rank357d.style.background = "transparent";
  } else {
    rank357d.style.background = "";
  }
  let rank361h = document.querySelector("#change1h-36");
  if (rank361h.style.background === "") {
    rank361h.style.background = "transparent";
  } else {
    rank361h.style.background = "";
  }
  let rank3624h = document.querySelector("#change24-36");
  if (rank3624h.style.background === "") {
    rank3624h.style.background = "transparent";
  } else {
    rank3624h.style.background = "";
  }
  let rank367d = document.querySelector("#change7d-36");
  if (rank367d.style.background === "") {
    rank367d.style.background = "transparent";
  } else {
    rank367d.style.background = "";
  }
  let rank371h = document.querySelector("#change1h-37");
  if (rank371h.style.background === "") {
    rank371h.style.background = "transparent";
  } else {
    rank371h.style.background = "";
  }
  let rank3724h = document.querySelector("#change24-37");
  if (rank3724h.style.background === "") {
    rank3724h.style.background = "transparent";
  } else {
    rank3724h.style.background = "";
  }
  let rank377d = document.querySelector("#change7d-37");
  if (rank377d.style.background === "") {
    rank377d.style.background = "transparent";
  } else {
    rank377d.style.background = "";
  }
  let rank381h = document.querySelector("#change1h-38");
  if (rank381h.style.background === "") {
    rank381h.style.background = "transparent";
  } else {
    rank381h.style.background = "";
  }
  let rank3824h = document.querySelector("#change24-38");
  if (rank3824h.style.background === "") {
    rank3824h.style.background = "transparent";
  } else {
    rank3824h.style.background = "";
  }
  let rank387d = document.querySelector("#change7d-38");
  if (rank387d.style.background === "") {
    rank387d.style.background = "transparent";
  } else {
    rank387d.style.background = "";
  }
  let rank391h = document.querySelector("#change1h-39");
  if (rank391h.style.background === "") {
    rank391h.style.background = "transparent";
  } else {
    rank391h.style.background = "";
  }
  let rank3924h = document.querySelector("#change24-39");
  if (rank3924h.style.background === "") {
    rank3924h.style.background = "transparent";
  } else {
    rank3924h.style.background = "";
  }
  let rank397d = document.querySelector("#change7d-39");
  if (rank397d.style.background === "") {
    rank397d.style.background = "transparent";
  } else {
    rank397d.style.background = "";
  }
  let rank401h = document.querySelector("#change1h-40");
  if (rank401h.style.background === "") {
    rank401h.style.background = "transparent";
  } else {
    rank401h.style.background = "";
  }
  let rank4024h = document.querySelector("#change24-40");
  if (rank4024h.style.background === "") {
    rank4024h.style.background = "transparent";
  } else {
    rank4024h.style.background = "";
  }
  let rank407d = document.querySelector("#change7d-40");
  if (rank407d.style.background === "") {
    rank407d.style.background = "transparent";
  } else {
    rank407d.style.background = "";
  }
  let rank411h = document.querySelector("#change1h-41");
  if (rank411h.style.background === "") {
    rank411h.style.background = "transparent";
  } else {
    rank411h.style.background = "";
  }
  let rank4124h = document.querySelector("#change24-41");
  if (rank4124h.style.background === "") {
    rank4124h.style.background = "transparent";
  } else {
    rank4124h.style.background = "";
  }
  let rank417d = document.querySelector("#change7d-41");
  if (rank417d.style.background === "") {
    rank417d.style.background = "transparent";
  } else {
    rank417d.style.background = "";
  }

  let rank421h = document.querySelector("#change1h-42");
  if (rank421h.style.background === "") {
    rank421h.style.background = "transparent";
  } else {
    rank421h.style.background = "";
  }
  let rank4224h = document.querySelector("#change24-42");
  if (rank4224h.style.background === "") {
    rank4224h.style.background = "transparent";
  } else {
    rank4224h.style.background = "";
  }
  let rank427d = document.querySelector("#change7d-42");
  if (rank427d.style.background === "") {
    rank427d.style.background = "transparent";
  } else {
    rank427d.style.background = "";
  }

  let rank431h = document.querySelector("#change1h-43");
  if (rank431h.style.background === "") {
    rank431h.style.background = "transparent";
  } else {
    rank431h.style.background = "";
  }
  let rank4324h = document.querySelector("#change24-43");
  if (rank4324h.style.background === "") {
    rank4324h.style.background = "transparent";
  } else {
    rank4324h.style.background = "";
  }
  let rank437d = document.querySelector("#change7d-43");
  if (rank437d.style.background === "") {
    rank437d.style.background = "transparent";
  } else {
    rank437d.style.background = "";
  }

  let rank441h = document.querySelector("#change1h-44");
  if (rank441h.style.background === "") {
    rank441h.style.background = "transparent";
  } else {
    rank441h.style.background = "";
  }
  let rank4424h = document.querySelector("#change24-44");
  if (rank4424h.style.background === "") {
    rank4424h.style.background = "transparent";
  } else {
    rank4424h.style.background = "";
  }
  let rank447d = document.querySelector("#change7d-44");
  if (rank447d.style.background === "") {
    rank447d.style.background = "transparent";
  } else {
    rank447d.style.background = "";
  }

  let rank451h = document.querySelector("#change1h-45");
  if (rank451h.style.background === "") {
    rank451h.style.background = "transparent";
  } else {
    rank451h.style.background = "";
  }
  let rank4524h = document.querySelector("#change24-45");
  if (rank4524h.style.background === "") {
    rank4524h.style.background = "transparent";
  } else {
    rank4524h.style.background = "";
  }
  let rank457d = document.querySelector("#change7d-45");
  if (rank457d.style.background === "") {
    rank457d.style.background = "transparent";
  } else {
    rank457d.style.background = "";
  }

  let rank461h = document.querySelector("#change1h-46");
  if (rank461h.style.background === "") {
    rank461h.style.background = "transparent";
  } else {
    rank461h.style.background = "";
  }
  let rank4624h = document.querySelector("#change24-46");
  if (rank4624h.style.background === "") {
    rank4624h.style.background = "transparent";
  } else {
    rank4624h.style.background = "";
  }
  let rank467d = document.querySelector("#change7d-46");
  if (rank467d.style.background === "") {
    rank467d.style.background = "transparent";
  } else {
    rank467d.style.background = "";
  }

  let rank471h = document.querySelector("#change1h-47");
  if (rank471h.style.background === "") {
    rank471h.style.background = "transparent";
  } else {
    rank471h.style.background = "";
  }
  let rank4724h = document.querySelector("#change24-47");
  if (rank4724h.style.background === "") {
    rank4724h.style.background = "transparent";
  } else {
    rank4724h.style.background = "";
  }
  let rank477d = document.querySelector("#change7d-47");
  if (rank477d.style.background === "") {
    rank477d.style.background = "transparent";
  } else {
    rank477d.style.background = "";
  }

  let rank481h = document.querySelector("#change1h-48");
  if (rank481h.style.background === "") {
    rank481h.style.background = "transparent";
  } else {
    rank481h.style.background = "";
  }
  let rank4824h = document.querySelector("#change24-48");
  if (rank4824h.style.background === "") {
    rank4824h.style.background = "transparent";
  } else {
    rank4824h.style.background = "";
  }
  let rank487d = document.querySelector("#change7d-48");
  if (rank487d.style.background === "") {
    rank487d.style.background = "transparent";
  } else {
    rank487d.style.background = "";
  }

  let rank491h = document.querySelector("#change1h-49");
  if (rank491h.style.background === "") {
    rank491h.style.background = "transparent";
  } else {
    rank491h.style.background = "";
  }
  let rank4924h = document.querySelector("#change24-49");
  if (rank4924h.style.background === "") {
    rank4924h.style.background = "transparent";
  } else {
    rank4924h.style.background = "";
  }
  let rank497d = document.querySelector("#change7d-49");
  if (rank497d.style.background === "") {
    rank497d.style.background = "transparent";
  } else {
    rank497d.style.background = "";
  }

  let rank501h = document.querySelector("#change1h-50");
  if (rank501h.style.background === "") {
    rank501h.style.background = "transparent";
  } else {
    rank501h.style.background = "";
  }
  let rank5024h = document.querySelector("#change24-50");
  if (rank5024h.style.background === "") {
    rank5024h.style.background = "transparent";
  } else {
    rank5024h.style.background = "";
  }
  let rank507d = document.querySelector("#change7d-50");
  if (rank507d.style.background === "") {
    rank507d.style.background = "transparent";
  } else {
    rank507d.style.background = "";
  }

  let rank511h = document.querySelector("#change1h-51");
  if (rank511h.style.background === "") {
    rank511h.style.background = "transparent";
  } else {
    rank511h.style.background = "";
  }
  let rank5124h = document.querySelector("#change24-51");
  if (rank5124h.style.background === "") {
    rank5124h.style.background = "transparent";
  } else {
    rank5124h.style.background = "";
  }
  let rank517d = document.querySelector("#change7d-51");
  if (rank517d.style.background === "") {
    rank517d.style.background = "transparent";
  } else {
    rank517d.style.background = "";
  }

  let rank521h = document.querySelector("#change1h-52");
  if (rank521h.style.background === "") {
    rank521h.style.background = "transparent";
  } else {
    rank521h.style.background = "";
  }
  let rank5224h = document.querySelector("#change24-52");
  if (rank5224h.style.background === "") {
    rank5224h.style.background = "transparent";
  } else {
    rank5224h.style.background = "";
  }
  let rank527d = document.querySelector("#change7d-52");
  if (rank527d.style.background === "") {
    rank527d.style.background = "transparent";
  } else {
    rank527d.style.background = "";
  }

  let rank531h = document.querySelector("#change1h-53");
  if (rank531h.style.background === "") {
    rank531h.style.background = "transparent";
  } else {
    rank531h.style.background = "";
  }
  let rank5324h = document.querySelector("#change24-53");
  if (rank5324h.style.background === "") {
    rank5324h.style.background = "transparent";
  } else {
    rank5324h.style.background = "";
  }
  let rank537d = document.querySelector("#change7d-53");
  if (rank537d.style.background === "") {
    rank537d.style.background = "transparent";
  } else {
    rank537d.style.background = "";
  }

  let rank541h = document.querySelector("#change1h-54");
  if (rank541h.style.background === "") {
    rank541h.style.background = "transparent";
  } else {
    rank541h.style.background = "";
  }
  let rank5424h = document.querySelector("#change24-54");
  if (rank5424h.style.background === "") {
    rank5424h.style.background = "transparent";
  } else {
    rank5424h.style.background = "";
  }
  let rank547d = document.querySelector("#change7d-54");
  if (rank547d.style.background === "") {
    rank547d.style.background = "transparent";
  } else {
    rank547d.style.background = "";
  }

  let rank551h = document.querySelector("#change1h-55");
  if (rank551h.style.background === "") {
    rank551h.style.background = "transparent";
  } else {
    rank551h.style.background = "";
  }
  let rank5524h = document.querySelector("#change24-55");
  if (rank5524h.style.background === "") {
    rank5524h.style.background = "transparent";
  } else {
    rank5524h.style.background = "";
  }
  let rank557d = document.querySelector("#change7d-55");
  if (rank557d.style.background === "") {
    rank557d.style.background = "transparent";
  } else {
    rank557d.style.background = "";
  }

  let rank561h = document.querySelector("#change1h-56");
  if (rank561h.style.background === "") {
    rank561h.style.background = "transparent";
  } else {
    rank561h.style.background = "";
  }
  let rank5624h = document.querySelector("#change24-56");
  if (rank5624h.style.background === "") {
    rank5624h.style.background = "transparent";
  } else {
    rank5624h.style.background = "";
  }
  let rank567d = document.querySelector("#change7d-56");
  if (rank567d.style.background === "") {
    rank567d.style.background = "transparent";
  } else {
    rank567d.style.background = "";
  }

  let rank571h = document.querySelector("#change1h-57");
  if (rank571h.style.background === "") {
    rank571h.style.background = "transparent";
  } else {
    rank571h.style.background = "";
  }
  let rank5724h = document.querySelector("#change24-57");
  if (rank5724h.style.background === "") {
    rank5724h.style.background = "transparent";
  } else {
    rank5724h.style.background = "";
  }
  let rank577d = document.querySelector("#change7d-57");
  if (rank577d.style.background === "") {
    rank577d.style.background = "transparent";
  } else {
    rank577d.style.background = "";
  }

  let rank581h = document.querySelector("#change1h-58");
  if (rank581h.style.background === "") {
    rank581h.style.background = "transparent";
  } else {
    rank581h.style.background = "";
  }
  let rank5824h = document.querySelector("#change24-58");
  if (rank5824h.style.background === "") {
    rank5824h.style.background = "transparent";
  } else {
    rank5824h.style.background = "";
  }
  let rank587d = document.querySelector("#change7d-58");
  if (rank587d.style.background === "") {
    rank587d.style.background = "transparent";
  } else {
    rank587d.style.background = "";
  }

  let rank591h = document.querySelector("#change1h-59");
  if (rank591h.style.background === "") {
    rank591h.style.background = "transparent";
  } else {
    rank591h.style.background = "";
  }
  let rank5924h = document.querySelector("#change24-59");
  if (rank5924h.style.background === "") {
    rank5924h.style.background = "transparent";
  } else {
    rank5924h.style.background = "";
  }
  let rank597d = document.querySelector("#change7d-59");
  if (rank597d.style.background === "") {
    rank597d.style.background = "transparent";
  } else {
    rank597d.style.background = "";
  }

  let rank601h = document.querySelector("#change1h-60");
  if (rank601h.style.background === "") {
    rank601h.style.background = "transparent";
  } else {
    rank601h.style.background = "";
  }
  let rank6024h = document.querySelector("#change24-60");
  if (rank6024h.style.background === "") {
    rank6024h.style.background = "transparent";
  } else {
    rank6024h.style.background = "";
  }
  let rank607d = document.querySelector("#change7d-60");
  if (rank607d.style.background === "") {
    rank607d.style.background = "transparent";
  } else {
    rank607d.style.background = "";
  }

  let rank611h = document.querySelector("#change1h-61");
  if (rank611h.style.background === "") {
    rank611h.style.background = "transparent";
  } else {
    rank611h.style.background = "";
  }
  let rank6124h = document.querySelector("#change24-61");
  if (rank6124h.style.background === "") {
    rank6124h.style.background = "transparent";
  } else {
    rank6124h.style.background = "";
  }
  let rank617d = document.querySelector("#change7d-61");
  if (rank617d.style.background === "") {
    rank617d.style.background = "transparent";
  } else {
    rank617d.style.background = "";
  }

  let rank621h = document.querySelector("#change1h-62");
  if (rank621h.style.background === "") {
    rank621h.style.background = "transparent";
  } else {
    rank621h.style.background = "";
  }
  let rank6224h = document.querySelector("#change24-62");
  if (rank6224h.style.background === "") {
    rank6224h.style.background = "transparent";
  } else {
    rank6224h.style.background = "";
  }
  let rank627d = document.querySelector("#change7d-62");
  if (rank627d.style.background === "") {
    rank627d.style.background = "transparent";
  } else {
    rank627d.style.background = "";
  }

  let rank631h = document.querySelector("#change1h-63");
  if (rank631h.style.background === "") {
    rank631h.style.background = "transparent";
  } else {
    rank631h.style.background = "";
  }
  let rank6324h = document.querySelector("#change24-63");
  if (rank6324h.style.background === "") {
    rank6324h.style.background = "transparent";
  } else {
    rank6324h.style.background = "";
  }
  let rank637d = document.querySelector("#change7d-63");
  if (rank637d.style.background === "") {
    rank637d.style.background = "transparent";
  } else {
    rank637d.style.background = "";
  }

  let rank641h = document.querySelector("#change1h-64");
  if (rank641h.style.background === "") {
    rank641h.style.background = "transparent";
  } else {
    rank641h.style.background = "";
  }
  let rank6424h = document.querySelector("#change24-64");
  if (rank6424h.style.background === "") {
    rank6424h.style.background = "transparent";
  } else {
    rank6424h.style.background = "";
  }
  let rank647d = document.querySelector("#change7d-64");
  if (rank647d.style.background === "") {
    rank647d.style.background = "transparent";
  } else {
    rank647d.style.background = "";
  }

  let rank651h = document.querySelector("#change1h-65");
  if (rank651h.style.background === "") {
    rank651h.style.background = "transparent";
  } else {
    rank651h.style.background = "";
  }
  let rank6524h = document.querySelector("#change24-65");
  if (rank6524h.style.background === "") {
    rank6524h.style.background = "transparent";
  } else {
    rank6524h.style.background = "";
  }
  let rank657d = document.querySelector("#change7d-65");
  if (rank657d.style.background === "") {
    rank657d.style.background = "transparent";
  } else {
    rank657d.style.background = "";
  }

  let rank661h = document.querySelector("#change1h-66");
  if (rank661h.style.background === "") {
    rank661h.style.background = "transparent";
  } else {
    rank661h.style.background = "";
  }
  let rank6624h = document.querySelector("#change24-66");
  if (rank6624h.style.background === "") {
    rank6624h.style.background = "transparent";
  } else {
    rank6624h.style.background = "";
  }
  let rank667d = document.querySelector("#change7d-66");
  if (rank667d.style.background === "") {
    rank667d.style.background = "transparent";
  } else {
    rank667d.style.background = "";
  }

  let rank671h = document.querySelector("#change1h-67");
  if (rank671h.style.background === "") {
    rank671h.style.background = "transparent";
  } else {
    rank671h.style.background = "";
  }
  let rank6724h = document.querySelector("#change24-67");
  if (rank6724h.style.background === "") {
    rank6724h.style.background = "transparent";
  } else {
    rank6724h.style.background = "";
  }
  let rank677d = document.querySelector("#change7d-67");
  if (rank677d.style.background === "") {
    rank677d.style.background = "transparent";
  } else {
    rank677d.style.background = "";
  }

  let rank681h = document.querySelector("#change1h-68");
  if (rank681h.style.background === "") {
    rank681h.style.background = "transparent";
  } else {
    rank681h.style.background = "";
  }
  let rank6824h = document.querySelector("#change24-68");
  if (rank6824h.style.background === "") {
    rank6824h.style.background = "transparent";
  } else {
    rank6824h.style.background = "";
  }
  let rank687d = document.querySelector("#change7d-68");
  if (rank687d.style.background === "") {
    rank687d.style.background = "transparent";
  } else {
    rank687d.style.background = "";
  }

  let rank691h = document.querySelector("#change1h-69");
  if (rank691h.style.background === "") {
    rank691h.style.background = "transparent";
  } else {
    rank691h.style.background = "";
  }
  let rank6924h = document.querySelector("#change24-69");
  if (rank6924h.style.background === "") {
    rank6924h.style.background = "transparent";
  } else {
    rank6924h.style.background = "";
  }
  let rank697d = document.querySelector("#change7d-69");
  if (rank697d.style.background === "") {
    rank697d.style.background = "transparent";
  } else {
    rank697d.style.background = "";
  }

  let rank701h = document.querySelector("#change1h-70");
  if (rank701h.style.background === "") {
    rank701h.style.background = "transparent";
  } else {
    rank701h.style.background = "";
  }
  let rank7024h = document.querySelector("#change24-70");
  if (rank7024h.style.background === "") {
    rank7024h.style.background = "transparent";
  } else {
    rank7024h.style.background = "";
  }
  let rank707d = document.querySelector("#change7d-70");
  if (rank707d.style.background === "") {
    rank707d.style.background = "transparent";
  } else {
    rank707d.style.background = "";
  }

  let rank711h = document.querySelector("#change1h-71");
  if (rank711h.style.background === "") {
    rank711h.style.background = "transparent";
  } else {
    rank711h.style.background = "";
  }
  let rank7124h = document.querySelector("#change24-71");
  if (rank7124h.style.background === "") {
    rank7124h.style.background = "transparent";
  } else {
    rank7124h.style.background = "";
  }
  let rank717d = document.querySelector("#change7d-71");
  if (rank717d.style.background === "") {
    rank717d.style.background = "transparent";
  } else {
    rank717d.style.background = "";
  }

  let rank721h = document.querySelector("#change1h-72");
  if (rank721h.style.background === "") {
    rank721h.style.background = "transparent";
  } else {
    rank721h.style.background = "";
  }
  let rank7224h = document.querySelector("#change24-72");
  if (rank7224h.style.background === "") {
    rank7224h.style.background = "transparent";
  } else {
    rank7224h.style.background = "";
  }
  let rank727d = document.querySelector("#change7d-72");
  if (rank727d.style.background === "") {
    rank727d.style.background = "transparent";
  } else {
    rank727d.style.background = "";
  }

  let rank731h = document.querySelector("#change1h-73");
  if (rank731h.style.background === "") {
    rank731h.style.background = "transparent";
  } else {
    rank731h.style.background = "";
  }
  let rank7324h = document.querySelector("#change24-73");
  if (rank7324h.style.background === "") {
    rank7324h.style.background = "transparent";
  } else {
    rank7324h.style.background = "";
  }
  let rank737d = document.querySelector("#change7d-73");
  if (rank737d.style.background === "") {
    rank737d.style.background = "transparent";
  } else {
    rank737d.style.background = "";
  }

  let rank741h = document.querySelector("#change1h-74");
  if (rank741h.style.background === "") {
    rank741h.style.background = "transparent";
  } else {
    rank741h.style.background = "";
  }
  let rank7424h = document.querySelector("#change24-74");
  if (rank7424h.style.background === "") {
    rank7424h.style.background = "transparent";
  } else {
    rank7424h.style.background = "";
  }
  let rank747d = document.querySelector("#change7d-74");
  if (rank747d.style.background === "") {
    rank747d.style.background = "transparent";
  } else {
    rank747d.style.background = "";
  }

  let rank751h = document.querySelector("#change1h-75");
  if (rank751h.style.background === "") {
    rank751h.style.background = "transparent";
  } else {
    rank751h.style.background = "";
  }
  let rank7524h = document.querySelector("#change24-75");
  if (rank7524h.style.background === "") {
    rank7524h.style.background = "transparent";
  } else {
    rank7524h.style.background = "";
  }
  let rank757d = document.querySelector("#change7d-75");
  if (rank757d.style.background === "") {
    rank757d.style.background = "transparent";
  } else {
    rank757d.style.background = "";
  }

  let rank761h = document.querySelector("#change1h-76");
  if (rank761h.style.background === "") {
    rank761h.style.background = "transparent";
  } else {
    rank761h.style.background = "";
  }
  let rank7624h = document.querySelector("#change24-76");
  if (rank7624h.style.background === "") {
    rank7624h.style.background = "transparent";
  } else {
    rank7624h.style.background = "";
  }
  let rank767d = document.querySelector("#change7d-76");
  if (rank767d.style.background === "") {
    rank767d.style.background = "transparent";
  } else {
    rank767d.style.background = "";
  }

  let rank771h = document.querySelector("#change1h-77");
  if (rank771h.style.background === "") {
    rank771h.style.background = "transparent";
  } else {
    rank771h.style.background = "";
  }
  let rank7724h = document.querySelector("#change24-77");
  if (rank7724h.style.background === "") {
    rank7724h.style.background = "transparent";
  } else {
    rank7724h.style.background = "";
  }
  let rank777d = document.querySelector("#change7d-77");
  if (rank777d.style.background === "") {
    rank777d.style.background = "transparent";
  } else {
    rank777d.style.background = "";
  }

  let rank781h = document.querySelector("#change1h-78");
  if (rank781h.style.background === "") {
    rank781h.style.background = "transparent";
  } else {
    rank781h.style.background = "";
  }
  let rank7824h = document.querySelector("#change24-78");
  if (rank7824h.style.background === "") {
    rank7824h.style.background = "transparent";
  } else {
    rank7824h.style.background = "";
  }
  let rank787d = document.querySelector("#change7d-78");
  if (rank787d.style.background === "") {
    rank787d.style.background = "transparent";
  } else {
    rank787d.style.background = "";
  }

  let rank791h = document.querySelector("#change1h-79");
  if (rank791h.style.background === "") {
    rank791h.style.background = "transparent";
  } else {
    rank791h.style.background = "";
  }
  let rank7924h = document.querySelector("#change24-79");
  if (rank7924h.style.background === "") {
    rank7924h.style.background = "transparent";
  } else {
    rank7924h.style.background = "";
  }
  let rank797d = document.querySelector("#change7d-79");
  if (rank797d.style.background === "") {
    rank797d.style.background = "transparent";
  } else {
    rank797d.style.background = "";
  }

  let rank801h = document.querySelector("#change1h-80");
  if (rank801h.style.background === "") {
    rank801h.style.background = "transparent";
  } else {
    rank801h.style.background = "";
  }
  let rank8024h = document.querySelector("#change24-80");
  if (rank8024h.style.background === "") {
    rank8024h.style.background = "transparent";
  } else {
    rank8024h.style.background = "";
  }
  let rank807d = document.querySelector("#change7d-80");
  if (rank807d.style.background === "") {
    rank807d.style.background = "transparent";
  } else {
    rank807d.style.background = "";
  }

  let rank811h = document.querySelector("#change1h-81");
  if (rank811h.style.background === "") {
    rank811h.style.background = "transparent";
  } else {
    rank811h.style.background = "";
  }
  let rank8124h = document.querySelector("#change24-81");
  if (rank8124h.style.background === "") {
    rank8124h.style.background = "transparent";
  } else {
    rank8124h.style.background = "";
  }
  let rank817d = document.querySelector("#change7d-81");
  if (rank817d.style.background === "") {
    rank817d.style.background = "transparent";
  } else {
    rank817d.style.background = "";
  }

  let rank821h = document.querySelector("#change1h-82");
  if (rank821h.style.background === "") {
    rank821h.style.background = "transparent";
  } else {
    rank821h.style.background = "";
  }
  let rank8224h = document.querySelector("#change24-82");
  if (rank8224h.style.background === "") {
    rank8224h.style.background = "transparent";
  } else {
    rank8224h.style.background = "";
  }
  let rank827d = document.querySelector("#change7d-82");
  if (rank827d.style.background === "") {
    rank827d.style.background = "transparent";
  } else {
    rank827d.style.background = "";
  }

  let rank831h = document.querySelector("#change1h-83");
  if (rank831h.style.background === "") {
    rank831h.style.background = "transparent";
  } else {
    rank831h.style.background = "";
  }
  let rank8324h = document.querySelector("#change24-83");
  if (rank8324h.style.background === "") {
    rank8324h.style.background = "transparent";
  } else {
    rank8324h.style.background = "";
  }
  let rank837d = document.querySelector("#change7d-83");
  if (rank837d.style.background === "") {
    rank837d.style.background = "transparent";
  } else {
    rank837d.style.background = "";
  }

  let rank841h = document.querySelector("#change1h-84");
  if (rank841h.style.background === "") {
    rank841h.style.background = "transparent";
  } else {
    rank841h.style.background = "";
  }
  let rank8424h = document.querySelector("#change24-84");
  if (rank8424h.style.background === "") {
    rank8424h.style.background = "transparent";
  } else {
    rank8424h.style.background = "";
  }
  let rank847d = document.querySelector("#change7d-84");
  if (rank847d.style.background === "") {
    rank847d.style.background = "transparent";
  } else {
    rank847d.style.background = "";
  }

  let rank851h = document.querySelector("#change1h-85");
  if (rank851h.style.background === "") {
    rank851h.style.background = "transparent";
  } else {
    rank851h.style.background = "";
  }
  let rank8524h = document.querySelector("#change24-85");
  if (rank8524h.style.background === "") {
    rank8524h.style.background = "transparent";
  } else {
    rank8524h.style.background = "";
  }
  let rank857d = document.querySelector("#change7d-85");
  if (rank857d.style.background === "") {
    rank857d.style.background = "transparent";
  } else {
    rank857d.style.background = "";
  }

  let rank861h = document.querySelector("#change1h-86");
  if (rank861h.style.background === "") {
    rank861h.style.background = "transparent";
  } else {
    rank861h.style.background = "";
  }
  let rank8624h = document.querySelector("#change24-86");
  if (rank8624h.style.background === "") {
    rank8624h.style.background = "transparent";
  } else {
    rank8624h.style.background = "";
  }
  let rank867d = document.querySelector("#change7d-86");
  if (rank867d.style.background === "") {
    rank867d.style.background = "transparent";
  } else {
    rank867d.style.background = "";
  }

  let rank871h = document.querySelector("#change1h-87");
  if (rank871h.style.background === "") {
    rank871h.style.background = "transparent";
  } else {
    rank871h.style.background = "";
  }
  let rank8724h = document.querySelector("#change24-87");
  if (rank8724h.style.background === "") {
    rank8724h.style.background = "transparent";
  } else {
    rank8724h.style.background = "";
  }
  let rank877d = document.querySelector("#change7d-87");
  if (rank877d.style.background === "") {
    rank877d.style.background = "transparent";
  } else {
    rank877d.style.background = "";
  }

  let rank881h = document.querySelector("#change1h-88");
  if (rank881h.style.background === "") {
    rank881h.style.background = "transparent";
  } else {
    rank881h.style.background = "";
  }
  let rank8824h = document.querySelector("#change24-88");
  if (rank8824h.style.background === "") {
    rank8824h.style.background = "transparent";
  } else {
    rank8824h.style.background = "";
  }
  let rank887d = document.querySelector("#change7d-88");
  if (rank887d.style.background === "") {
    rank887d.style.background = "transparent";
  } else {
    rank887d.style.background = "";
  }

  let rank891h = document.querySelector("#change1h-89");
  if (rank891h.style.background === "") {
    rank891h.style.background = "transparent";
  } else {
    rank891h.style.background = "";
  }
  let rank8924h = document.querySelector("#change24-89");
  if (rank8924h.style.background === "") {
    rank8924h.style.background = "transparent";
  } else {
    rank8924h.style.background = "";
  }
  let rank897d = document.querySelector("#change7d-89");
  if (rank897d.style.background === "") {
    rank897d.style.background = "transparent";
  } else {
    rank897d.style.background = "";
  }

  let rank901h = document.querySelector("#change1h-90");
  if (rank901h.style.background === "") {
    rank901h.style.background = "transparent";
  } else {
    rank901h.style.background = "";
  }
  let rank9024h = document.querySelector("#change24-90");
  if (rank9024h.style.background === "") {
    rank9024h.style.background = "transparent";
  } else {
    rank9024h.style.background = "";
  }
  let rank907d = document.querySelector("#change7d-90");
  if (rank907d.style.background === "") {
    rank907d.style.background = "transparent";
  } else {
    rank907d.style.background = "";
  }

  let rank911h = document.querySelector("#change1h-91");
  if (rank911h.style.background === "") {
    rank911h.style.background = "transparent";
  } else {
    rank911h.style.background = "";
  }
  let rank9124h = document.querySelector("#change24-91");
  if (rank9124h.style.background === "") {
    rank9124h.style.background = "transparent";
  } else {
    rank9124h.style.background = "";
  }
  let rank917d = document.querySelector("#change7d-91");
  if (rank917d.style.background === "") {
    rank917d.style.background = "transparent";
  } else {
    rank917d.style.background = "";
  }

  let rank921h = document.querySelector("#change1h-92");
  if (rank921h.style.background === "") {
    rank921h.style.background = "transparent";
  } else {
    rank921h.style.background = "";
  }
  let rank9224h = document.querySelector("#change24-92");
  if (rank9224h.style.background === "") {
    rank9224h.style.background = "transparent";
  } else {
    rank9224h.style.background = "";
  }
  let rank927d = document.querySelector("#change7d-92");
  if (rank927d.style.background === "") {
    rank927d.style.background = "transparent";
  } else {
    rank927d.style.background = "";
  }

  let rank931h = document.querySelector("#change1h-93");
  if (rank931h.style.background === "") {
    rank931h.style.background = "transparent";
  } else {
    rank931h.style.background = "";
  }
  let rank9324h = document.querySelector("#change24-93");
  if (rank9324h.style.background === "") {
    rank9324h.style.background = "transparent";
  } else {
    rank9324h.style.background = "";
  }
  let rank937d = document.querySelector("#change7d-93");
  if (rank937d.style.background === "") {
    rank937d.style.background = "transparent";
  } else {
    rank937d.style.background = "";
  }

  let rank941h = document.querySelector("#change1h-94");
  if (rank941h.style.background === "") {
    rank941h.style.background = "transparent";
  } else {
    rank941h.style.background = "";
  }
  let rank9424h = document.querySelector("#change24-94");
  if (rank9424h.style.background === "") {
    rank9424h.style.background = "transparent";
  } else {
    rank9424h.style.background = "";
  }
  let rank947d = document.querySelector("#change7d-94");
  if (rank947d.style.background === "") {
    rank947d.style.background = "transparent";
  } else {
    rank947d.style.background = "";
  }

  let rank951h = document.querySelector("#change1h-95");
  if (rank951h.style.background === "") {
    rank951h.style.background = "transparent";
  } else {
    rank951h.style.background = "";
  }
  let rank9524h = document.querySelector("#change24-95");
  if (rank9524h.style.background === "") {
    rank9524h.style.background = "transparent";
  } else {
    rank9524h.style.background = "";
  }
  let rank957d = document.querySelector("#change7d-95");
  if (rank957d.style.background === "") {
    rank957d.style.background = "transparent";
  } else {
    rank957d.style.background = "";
  }

  let rank961h = document.querySelector("#change1h-96");
  if (rank961h.style.background === "") {
    rank961h.style.background = "transparent";
  } else {
    rank961h.style.background = "";
  }
  let rank9624h = document.querySelector("#change24-96");
  if (rank9624h.style.background === "") {
    rank9624h.style.background = "transparent";
  } else {
    rank9624h.style.background = "";
  }
  let rank967d = document.querySelector("#change7d-96");
  if (rank967d.style.background === "") {
    rank967d.style.background = "transparent";
  } else {
    rank967d.style.background = "";
  }

  let rank971h = document.querySelector("#change1h-97");
  if (rank971h.style.background === "") {
    rank971h.style.background = "transparent";
  } else {
    rank971h.style.background = "";
  }
  let rank9724h = document.querySelector("#change24-97");
  if (rank9724h.style.background === "") {
    rank9724h.style.background = "transparent";
  } else {
    rank9724h.style.background = "";
  }
  let rank977d = document.querySelector("#change7d-97");
  if (rank977d.style.background === "") {
    rank977d.style.background = "transparent";
  } else {
    rank977d.style.background = "";
  }

  let rank981h = document.querySelector("#change1h-98");
  if (rank981h.style.background === "") {
    rank981h.style.background = "transparent";
  } else {
    rank981h.style.background = "";
  }
  let rank9824h = document.querySelector("#change24-98");
  if (rank9824h.style.background === "") {
    rank9824h.style.background = "transparent";
  } else {
    rank9824h.style.background = "";
  }
  let rank987d = document.querySelector("#change7d-98");
  if (rank987d.style.background === "") {
    rank987d.style.background = "transparent";
  } else {
    rank987d.style.background = "";
  }

  let rank991h = document.querySelector("#change1h-99");
  if (rank991h.style.background === "") {
    rank991h.style.background = "transparent";
  } else {
    rank991h.style.background = "";
  }
  let rank9924h = document.querySelector("#change24-99");
  if (rank9924h.style.background === "") {
    rank9924h.style.background = "transparent";
  } else {
    rank9924h.style.background = "";
  }
  let rank997d = document.querySelector("#change7d-99");
  if (rank997d.style.background === "") {
    rank997d.style.background = "transparent";
  } else {
    rank997d.style.background = "";
  }

  let rank1001h = document.querySelector("#change1h-100");
  if (rank1001h.style.background === "") {
    rank1001h.style.background = "transparent";
  } else {
    rank1001h.style.background = "";
  }
  let rank10024h = document.querySelector("#change24-100");
  if (rank10024h.style.background === "") {
    rank10024h.style.background = "transparent";
  } else {
    rank10024h.style.background = "";
  }
  let rank1007d = document.querySelector("#change7d-100");
  if (rank1007d.style.background === "") {
    rank1007d.style.background = "transparent";
  } else {
    rank1007d.style.background = "";
  }

  let winner24 = document.querySelector("#marquee-up");
  if (winner24.style.background === "") {
    winner24.style.background = "transparent";
  } else {
    winner24.style.background = "";
  }
  let loser24 = document.querySelector("#marquee-down");
  if (loser24.style.background === "") {
    loser24.style.background = "transparent";
  } else {
    loser24.style.background = "";
  }
}
colorsOnOff.addEventListener("click", colorSwap);

// FETCH 2.0 // FETCH 2.0 //

Promise.all([
  fetch("https://api.coinlore.net/api/tickers/").then((response) =>
    response.json()
  ),
]).then((results) => {
  document.getElementById("btc-price").innerHTML =
    "$" + results[0].data[0].price_usd;
  document.getElementById("rank-1").innerHTML = results[0].data[0].rank;
  document.getElementById("btc").innerHTML = results[0].data[0].nameid;
  document.getElementById("btc-symbol").innerHTML = results[0].data[0].symbol;
  document.getElementById("btc-change24").innerHTML =
    results[0].data[0].percent_change_24h;
  document.getElementById("btc-change7d").innerHTML =
    results[0].data[0].percent_change_7d;
  document.getElementById("btc-change1h").innerHTML =
    results[0].data[0].percent_change_1h;
  if (document.getElementById("btc-change1h").textContent >= 0) {
    document.getElementById("btc-change1h").className = "positive";
  } else {
    document.getElementById("btc-change1h").className = "negative";
  }
  if (document.getElementById("btc-change24").textContent >= 0) {
    document.getElementById("btc-change24").className = "positive";
  } else {
    document.getElementById("btc-change24").className = "negative";
  }
  if (document.getElementById("btc-change7d").textContent >= 0) {
    document.getElementById("btc-change7d").className = "positive";
  } else {
    document.getElementById("btc-change7d").className = "negative";
  }

  let icon1 = results[0].data[0].symbol;
  let icon1LowCaps = icon1.toLowerCase();
  let link1 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon1LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-1").innerHTML = link1;

  document.getElementById("eth-price").innerHTML =
    "$" + results[0].data[1].price_usd;
  document.getElementById("rank-2").innerHTML = results[0].data[1].rank;
  document.getElementById("eth").innerHTML = results[0].data[1].nameid;
  document.getElementById("eth-symbol").innerHTML = results[0].data[1].symbol;
  document.getElementById("eth-change24").innerHTML =
    results[0].data[1].percent_change_24h;
  document.getElementById("eth-change7d").innerHTML =
    results[0].data[1].percent_change_7d;
  document.getElementById("eth-change1h").innerHTML =
    results[0].data[1].percent_change_1h;
  if (document.getElementById("eth-change1h").textContent >= 0) {
    document.getElementById("eth-change1h").className = "positive";
  } else {
    document.getElementById("eth-change1h").className = "negative";
  }
  if (document.getElementById("eth-change24").textContent >= 0) {
    document.getElementById("eth-change24").className = "positive";
  } else {
    document.getElementById("eth-change24").className = "negative";
  }
  if (document.getElementById("eth-change7d").textContent >= 0) {
    document.getElementById("eth-change7d").className = "positive";
  } else {
    document.getElementById("eth-change7d").className = "negative";
  }

  let icon2 = results[0].data[1].symbol;
  let icon2LowCaps = icon2.toLowerCase();
  let link2 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon2LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-2").innerHTML = link2;

  document.getElementById("bnb-price").innerHTML =
    "$" + results[0].data[2].price_usd;
  document.getElementById("rank-3").innerHTML = results[0].data[2].rank;
  document.getElementById("bnb").innerHTML = results[0].data[2].nameid;
  document.getElementById("bnb-symbol").innerHTML = results[0].data[2].symbol;
  document.getElementById("bnb-change24").innerHTML =
    results[0].data[2].percent_change_24h;
  document.getElementById("bnb-change7d").innerHTML =
    results[0].data[2].percent_change_7d;
  document.getElementById("bnb-change1h").innerHTML =
    results[0].data[2].percent_change_1h;
  if (document.getElementById("bnb-change1h").textContent >= 0) {
    document.getElementById("bnb-change1h").className = "positive";
  } else {
    document.getElementById("bnb-change1h").className = "negative";
  }
  if (document.getElementById("bnb-change24").textContent >= 0) {
    document.getElementById("bnb-change24").className = "positive";
  } else {
    document.getElementById("bnb-change24").className = "negative";
  }
  if (document.getElementById("bnb-change7d").textContent >= 0) {
    document.getElementById("bnb-change7d").className = "positive";
  } else {
    document.getElementById("bnb-change7d").className = "negative";
  }

  let icon3 = results[0].data[2].symbol;
  let icon3LowCaps = icon3.toLowerCase();
  let link3 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon3LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-3").innerHTML = link3;

  document.getElementById("ada-price").innerHTML =
    "$" + results[0].data[3].price_usd;
  document.getElementById("rank-4").innerHTML = results[0].data[3].rank;
  document.getElementById("ada").innerHTML = results[0].data[3].nameid;
  document.getElementById("ada-symbol").innerHTML = results[0].data[3].symbol;
  document.getElementById("ada-change24").innerHTML =
    results[0].data[3].percent_change_24h;
  document.getElementById("ada-change7d").innerHTML =
    results[0].data[3].percent_change_7d;
  document.getElementById("ada-change1h").innerHTML =
    results[0].data[3].percent_change_1h;
  if (document.getElementById("ada-change1h").textContent >= 0) {
    document.getElementById("ada-change1h").className = "positive";
  } else {
    document.getElementById("ada-change1h").className = "negative";
  }
  if (document.getElementById("ada-change24").textContent >= 0) {
    document.getElementById("ada-change24").className = "positive";
  } else {
    document.getElementById("ada-change24").className = "negative";
  }
  if (document.getElementById("ada-change7d").textContent >= 0) {
    document.getElementById("ada-change7d").className = "positive";
  } else {
    document.getElementById("ada-change7d").className = "negative";
  }

  let icon4 = results[0].data[3].symbol;
  let icon4LowCaps = icon4.toLowerCase();
  let link4 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon4LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-4").innerHTML = link4;

  document.getElementById("tether-price").innerHTML =
    "$" + results[0].data[4].price_usd;
  document.getElementById("rank-5").innerHTML = results[0].data[4].rank;
  document.getElementById("tether").innerHTML = results[0].data[4].nameid;
  document.getElementById("tether-symbol").innerHTML =
    results[0].data[4].symbol;
  document.getElementById("tether-change24").innerHTML =
    results[0].data[4].percent_change_24h;
  document.getElementById("tether-change7d").innerHTML =
    results[0].data[4].percent_change_7d;
  document.getElementById("tether-change1h").innerHTML =
    results[0].data[4].percent_change_1h;
  if (document.getElementById("tether-change1h").textContent >= 0) {
    document.getElementById("tether-change1h").className = "positive";
  } else {
    document.getElementById("tether-change1h").className = "negative";
  }
  if (document.getElementById("tether-change24").textContent >= 0) {
    document.getElementById("tether-change24").className = "positive";
  } else {
    document.getElementById("tether-change24").className = "negative";
  }
  if (document.getElementById("tether-change7d").textContent >= 0) {
    document.getElementById("tether-change7d").className = "positive";
  } else {
    document.getElementById("tether-change7d").className = "negative";
  }
  let icon5 = results[0].data[4].symbol;
  let icon5LowCaps = icon5.toLowerCase();
  let link5 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon5LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-5").innerHTML = link5;

  document.getElementById("solana-price").innerHTML =
    "$" + results[0].data[5].price_usd;
  document.getElementById("rank-6").innerHTML = results[0].data[5].rank;
  document.getElementById("solana").innerHTML = results[0].data[5].nameid;
  document.getElementById("solana-symbol").innerHTML =
    results[0].data[5].symbol;
  document.getElementById("solana-change24").innerHTML =
    results[0].data[5].percent_change_24h;
  document.getElementById("solana-change7d").innerHTML =
    results[0].data[5].percent_change_7d;
  document.getElementById("solana-change1h").innerHTML =
    results[0].data[5].percent_change_1h;
  if (document.getElementById("solana-change1h").textContent >= 0) {
    document.getElementById("solana-change1h").className = "positive";
  } else {
    document.getElementById("solana-change1h").className = "negative";
  }
  if (document.getElementById("solana-change24").textContent >= 0) {
    document.getElementById("solana-change24").className = "positive";
  } else {
    document.getElementById("solana-change24").className = "negative";
  }
  if (document.getElementById("solana-change7d").textContent >= 0) {
    document.getElementById("solana-change7d").className = "positive";
  } else {
    document.getElementById("solana-change7d").className = "negative";
  }

  let icon6 = results[0].data[5].symbol;
  let icon6LowCaps = icon6.toLowerCase();
  let link6 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon6LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-6").innerHTML = link6;

  document.getElementById("xrp-price").innerHTML =
    "$" + results[0].data[6].price_usd;
  document.getElementById("rank-7").innerHTML = results[0].data[6].rank;
  document.getElementById("xrp").innerHTML = results[0].data[6].nameid;
  document.getElementById("xrp-symbol").innerHTML = results[0].data[6].symbol;
  document.getElementById("xrp-change24").innerHTML =
    results[0].data[6].percent_change_24h;
  document.getElementById("xrp-change7d").innerHTML =
    results[0].data[6].percent_change_7d;
  document.getElementById("xrp-change1h").innerHTML =
    results[0].data[6].percent_change_1h;
  if (document.getElementById("xrp-change1h").textContent >= 0) {
    document.getElementById("xrp-change1h").className = "positive";
  } else {
    document.getElementById("xrp-change1h").className = "negative";
  }
  if (document.getElementById("xrp-change24").textContent >= 0) {
    document.getElementById("xrp-change24").className = "positive";
  } else {
    document.getElementById("xrp-change24").className = "negative";
  }
  if (document.getElementById("xrp-change7d").textContent >= 0) {
    document.getElementById("xrp-change7d").className = "positive";
  } else {
    document.getElementById("xrp-change7d").className = "negative";
  }
  let icon7 = results[0].data[6].symbol;
  let icon7LowCaps = icon7.toLowerCase();
  let link7 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon7LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-7").innerHTML = link7;

  document.getElementById("doge-price").innerHTML =
    "$" + results[0].data[7].price_usd;
  document.getElementById("rank-8").innerHTML = results[0].data[7].rank;
  document.getElementById("doge").innerHTML = results[0].data[7].nameid;
  document.getElementById("doge-symbol").innerHTML = results[0].data[7].symbol;
  document.getElementById("doge-change24").innerHTML =
    results[0].data[7].percent_change_24h;
  document.getElementById("doge-change7d").innerHTML =
    results[0].data[7].percent_change_7d;
  document.getElementById("doge-change1h").innerHTML =
    results[0].data[7].percent_change_1h;
  if (document.getElementById("doge-change1h").textContent >= 0) {
    document.getElementById("doge-change1h").className = "positive";
  } else {
    document.getElementById("doge-change1h").className = "negative";
  }
  if (document.getElementById("doge-change24").textContent >= 0) {
    document.getElementById("doge-change24").className = "positive";
  } else {
    document.getElementById("doge-change24").className = "negative";
  }
  if (document.getElementById("doge-change7d").textContent >= 0) {
    document.getElementById("doge-change7d").className = "positive";
  } else {
    document.getElementById("doge-change7d").className = "negative";
  }
  let icon8 = results[0].data[7].symbol;
  let icon8LowCaps = icon8.toLowerCase();
  let link8 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon8LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-8").innerHTML = link8;

  document.getElementById("icon-7").innerHTML = link7;
  document.getElementById("usd-price").innerHTML =
    "$" + results[0].data[8].price_usd;
  document.getElementById("rank-9").innerHTML = results[0].data[8].rank;
  document.getElementById("usd").innerHTML = results[0].data[8].nameid;
  document.getElementById("usd-symbol").innerHTML = results[0].data[8].symbol;
  document.getElementById("usd-change24").innerHTML =
    results[0].data[8].percent_change_24h;
  document.getElementById("usd-change7d").innerHTML =
    results[0].data[8].percent_change_7d;
  document.getElementById("usd-change1h").innerHTML =
    results[0].data[8].percent_change_1h;
  if (document.getElementById("usd-change1h").textContent >= 0) {
    document.getElementById("usd-change1h").className = "positive";
  } else {
    document.getElementById("usd-change1h").className = "negative";
  }
  if (document.getElementById("usd-change24").textContent >= 0) {
    document.getElementById("usd-change24").className = "positive";
  } else {
    document.getElementById("usd-change24").className = "negative";
  }
  if (document.getElementById("usd-change7d").textContent >= 0) {
    document.getElementById("usd-change7d").className = "positive";
  } else {
    document.getElementById("usd-change7d").className = "negative";
  }
  let icon9 = results[0].data[8].symbol;
  let icon9LowCaps = icon9.toLowerCase();
  let link9 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon9LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-9").innerHTML = link9;

  document.getElementById("dot-price").innerHTML =
    "$" + results[0].data[9].price_usd;
  document.getElementById("rank-10").innerHTML = results[0].data[9].rank;
  document.getElementById("dot").innerHTML = results[0].data[9].nameid;
  document.getElementById("dot-symbol").innerHTML = results[0].data[9].symbol;
  document.getElementById("dot-change24").innerHTML =
    results[0].data[9].percent_change_24h;
  document.getElementById("dot-change7d").innerHTML =
    results[0].data[9].percent_change_7d;
  document.getElementById("dot-change1h").innerHTML =
    results[0].data[9].percent_change_1h;
  if (document.getElementById("dot-change1h").textContent >= 0) {
    document.getElementById("dot-change1h").className = "positive";
  } else {
    document.getElementById("dot-change1h").className = "negative";
  }
  if (document.getElementById("dot-change24").textContent >= 0) {
    document.getElementById("dot-change24").className = "positive";
  } else {
    document.getElementById("dot-change24").className = "negative";
  }
  if (document.getElementById("dot-change7d").textContent >= 0) {
    document.getElementById("dot-change7d").className = "positive";
  } else {
    document.getElementById("dot-change7d").className = "negative";
  }
  let icon10 = results[0].data[9].symbol;
  let icon10LowCaps = icon10.toLowerCase();
  let link10 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon10LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-10").innerHTML = link10;

  document.getElementById("luna-price").innerHTML =
    "$" + results[0].data[10].price_usd;
  document.getElementById("rank-11").innerHTML = results[0].data[10].rank;
  document.getElementById("luna").innerHTML = results[0].data[10].nameid;
  document.getElementById("luna-symbol").innerHTML = results[0].data[10].symbol;
  document.getElementById("luna-change24").innerHTML =
    results[0].data[10].percent_change_24h;
  document.getElementById("luna-change7d").innerHTML =
    results[0].data[10].percent_change_7d;
  document.getElementById("luna-change1h").innerHTML =
    results[0].data[10].percent_change_1h;
  if (document.getElementById("luna-change1h").textContent >= 0) {
    document.getElementById("luna-change1h").className = "positive";
  } else {
    document.getElementById("luna-change1h").className = "negative";
  }
  if (document.getElementById("luna-change24").textContent >= 0) {
    document.getElementById("luna-change24").className = "positive";
  } else {
    document.getElementById("luna-change24").className = "negative";
  }
  if (document.getElementById("luna-change7d").textContent >= 0) {
    document.getElementById("luna-change7d").className = "positive";
  } else {
    document.getElementById("luna-change7d").className = "negative";
  }

  let icon11 = results[0].data[10].symbol;
  let icon11LowCaps = icon11.toLowerCase();
  let link11 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon11LowCaps +
    '.png" width="20" heigth="20" onerror="myFunction()"/>';

  document.getElementById("icon-11").innerHTML = link11;

  document.getElementById("uni-price").innerHTML =
    "$" + results[0].data[11].price_usd;
  document.getElementById("rank-12").innerHTML = results[0].data[11].rank;
  document.getElementById("uni").innerHTML = results[0].data[11].nameid;
  document.getElementById("uni-symbol").innerHTML = results[0].data[11].symbol;
  document.getElementById("uni-change24").innerHTML =
    results[0].data[11].percent_change_24h;
  document.getElementById("uni-change7d").innerHTML =
    results[0].data[11].percent_change_7d;
  document.getElementById("uni-change1h").innerHTML =
    results[0].data[11].percent_change_1h;
  if (document.getElementById("uni-change1h").textContent >= 0) {
    document.getElementById("uni-change1h").className = "positive";
  } else {
    document.getElementById("uni-change1h").className = "negative";
  }
  if (document.getElementById("uni-change24").textContent >= 0) {
    document.getElementById("uni-change24").className = "positive";
  } else {
    document.getElementById("uni-change24").className = "negative";
  }
  if (document.getElementById("uni-change7d").textContent >= 0) {
    document.getElementById("uni-change7d").className = "positive";
  } else {
    document.getElementById("uni-change7d").className = "negative";
  }
  let icon12 = results[0].data[11].symbol;
  let icon12LowCaps = icon12.toLowerCase();
  let link12 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon12LowCaps +
    '.png" width="20" heigth="20"/>';

  document.getElementById("icon-12").innerHTML = link12;

  document.getElementById("ltc-price").innerHTML =
    "$" + results[0].data[12].price_usd;
  document.getElementById("rank-13").innerHTML = results[0].data[12].rank;
  document.getElementById("ltc").innerHTML = results[0].data[12].nameid;
  document.getElementById("ltc-symbol").innerHTML = results[0].data[12].symbol;
  document.getElementById("ltc-change24").innerHTML =
    results[0].data[12].percent_change_24h;
  document.getElementById("ltc-change7d").innerHTML =
    results[0].data[12].percent_change_7d;
  document.getElementById("ltc-change1h").innerHTML =
    results[0].data[12].percent_change_1h;
  if (document.getElementById("ltc-change1h").textContent >= 0) {
    document.getElementById("ltc-change1h").className = "positive";
  } else {
    document.getElementById("ltc-change1h").className = "negative";
  }
  if (document.getElementById("ltc-change24").textContent >= 0) {
    document.getElementById("ltc-change24").className = "positive";
  } else {
    document.getElementById("ltc-change24").className = "negative";
  }
  if (document.getElementById("ltc-change7d").textContent >= 0) {
    document.getElementById("ltc-change7d").className = "positive";
  } else {
    document.getElementById("ltc-change7d").className = "negative";
  }

  let icon13 = results[0].data[12].symbol;
  let icon13LowCaps = icon13.toLowerCase();
  let link13 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon13LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-13").innerHTML = link13;

  document.getElementById("avax-price").innerHTML =
    "$" + results[0].data[13].price_usd;
  document.getElementById("rank-14").innerHTML = results[0].data[13].rank;
  document.getElementById("avax").innerHTML = results[0].data[13].nameid;
  document.getElementById("avax-symbol").innerHTML = results[0].data[13].symbol;
  document.getElementById("avax-change24").innerHTML =
    results[0].data[13].percent_change_24h;
  document.getElementById("avax-change7d").innerHTML =
    results[0].data[13].percent_change_7d;
  document.getElementById("avax-change1h").innerHTML =
    results[0].data[13].percent_change_1h;
  if (document.getElementById("avax-change1h").textContent >= 0) {
    document.getElementById("avax-change1h").className = "positive";
  } else {
    document.getElementById("avax-change1h").className = "negative";
  }
  if (document.getElementById("avax-change24").textContent >= 0) {
    document.getElementById("avax-change24").className = "positive";
  } else {
    document.getElementById("avax-change24").className = "negative";
  }
  if (document.getElementById("avax-change7d").textContent >= 0) {
    document.getElementById("avax-change7d").className = "positive";
  } else {
    document.getElementById("avax-change7d").className = "negative";
  }

  let icon14 = results[0].data[13].symbol;
  let icon14LowCaps = icon14.toLowerCase();
  let link14 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon14LowCaps +
    '.png" width="20" heigth="20"/>';

  document.getElementById("icon-14").innerHTML = link14;

  document.getElementById("wbtc-price").innerHTML =
    "$" + results[0].data[14].price_usd;
  document.getElementById("rank-15").innerHTML = results[0].data[14].rank;
  document.getElementById("wbtc").innerHTML = results[0].data[14].nameid;
  document.getElementById("wbtc-symbol").innerHTML = results[0].data[14].symbol;
  document.getElementById("wbtc-change24").innerHTML =
    results[0].data[14].percent_change_24h;
  document.getElementById("wbtc-change7d").innerHTML =
    results[0].data[14].percent_change_7d;
  document.getElementById("wbtc-change1h").innerHTML =
    results[0].data[14].percent_change_1h;
  if (document.getElementById("wbtc-change1h").textContent >= 0) {
    document.getElementById("wbtc-change1h").className = "positive";
  } else {
    document.getElementById("wbtc-change1h").className = "negative";
  }
  if (document.getElementById("wbtc-change24").textContent >= 0) {
    document.getElementById("wbtc-change24").className = "positive";
  } else {
    document.getElementById("wbtc-change24").className = "negative";
  }
  if (document.getElementById("wbtc-change7d").textContent >= 0) {
    document.getElementById("wbtc-change7d").className = "positive";
  } else {
    document.getElementById("wbtc-change7d").className = "negative";
  }

  let icon15 = results[0].data[14].symbol;
  let icon15LowCaps = icon15.toLowerCase();
  let link15 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon15LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-15").innerHTML = link15;

  document.getElementById("busd-price").innerHTML =
    "$" + results[0].data[15].price_usd;
  document.getElementById("rank-16").innerHTML = results[0].data[15].rank;
  document.getElementById("busd").innerHTML = results[0].data[15].nameid;
  document.getElementById("busd-symbol").innerHTML = results[0].data[15].symbol;
  document.getElementById("busd-change24").innerHTML =
    results[0].data[15].percent_change_24h;
  document.getElementById("busd-change7d").innerHTML =
    results[0].data[15].percent_change_7d;
  document.getElementById("busd-change1h").innerHTML =
    results[0].data[15].percent_change_1h;
  if (document.getElementById("busd-change1h").textContent >= 0) {
    document.getElementById("busd-change1h").className = "positive";
  } else {
    document.getElementById("busd-change1h").className = "negative";
  }
  if (document.getElementById("busd-change24").textContent >= 0) {
    document.getElementById("busd-change24").className = "positive";
  } else {
    document.getElementById("busd-change24").className = "negative";
  }
  if (document.getElementById("busd-change7d").textContent >= 0) {
    document.getElementById("busd-change7d").className = "positive";
  } else {
    document.getElementById("busd-change7d").className = "negative";
  }

  let icon16 = results[0].data[15].symbol;
  let icon16LowCaps = icon16.toLowerCase();
  let link16 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon16LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-16").innerHTML = link16;

  document.getElementById("link-price").innerHTML =
    "$" + results[0].data[16].price_usd;
  document.getElementById("rank-17").innerHTML = results[0].data[16].rank;
  document.getElementById("link").innerHTML = results[0].data[16].nameid;
  document.getElementById("link-symbol").innerHTML = results[0].data[16].symbol;
  document.getElementById("link-change24").innerHTML =
    results[0].data[16].percent_change_24h;
  document.getElementById("link-change7d").innerHTML =
    results[0].data[16].percent_change_7d;
  document.getElementById("link-change1h").innerHTML =
    results[0].data[16].percent_change_1h;
  if (document.getElementById("link-change1h").textContent >= 0) {
    document.getElementById("link-change1h").className = "positive";
  } else {
    document.getElementById("link-change1h").className = "negative";
  }
  if (document.getElementById("link-change24").textContent >= 0) {
    document.getElementById("link-change24").className = "positive";
  } else {
    document.getElementById("link-change24").className = "negative";
  }
  if (document.getElementById("link-change7d").textContent >= 0) {
    document.getElementById("link-change7d").className = "positive";
  } else {
    document.getElementById("link-change7d").className = "negative";
  }

  let icon17 = results[0].data[16].symbol;
  let icon17LowCaps = icon17.toLowerCase();
  let link17 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon17LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-17").innerHTML = link17;

  document.getElementById("bch-price").innerHTML =
    "$" + results[0].data[17].price_usd;
  document.getElementById("rank-18").innerHTML = results[0].data[17].rank;
  document.getElementById("bch").innerHTML = results[0].data[17].nameid;
  document.getElementById("bch-symbol").innerHTML = results[0].data[17].symbol;
  document.getElementById("bch-change24").innerHTML =
    results[0].data[17].percent_change_24h;
  document.getElementById("bch-change7d").innerHTML =
    results[0].data[17].percent_change_7d;
  document.getElementById("bch-change1h").innerHTML =
    results[0].data[17].percent_change_1h;
  if (document.getElementById("bch-change1h").textContent >= 0) {
    document.getElementById("bch-change1h").className = "positive";
  } else {
    document.getElementById("bch-change1h").className = "negative";
  }
  if (document.getElementById("bch-change24").textContent >= 0) {
    document.getElementById("bch-change24").className = "positive";
  } else {
    document.getElementById("bch-change24").className = "negative";
  }
  if (document.getElementById("bch-change7d").textContent >= 0) {
    document.getElementById("bch-change7d").className = "positive";
  } else {
    document.getElementById("bch-change7d").className = "negative";
  }

  let icon18 = results[0].data[17].symbol;
  let icon18LowCaps = icon18.toLowerCase();
  let link18 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon18LowCaps +
    '.png" width="20" heigth="20"/>';

  document.getElementById("icon-18").innerHTML = link18;

  document.getElementById("shib-price").innerHTML =
    "$" + results[0].data[18].price_usd;
  document.getElementById("rank-19").innerHTML = results[0].data[18].rank;
  document.getElementById("shib").innerHTML = results[0].data[18].nameid;
  document.getElementById("shib-symbol").innerHTML = results[0].data[18].symbol;
  document.getElementById("shib-change24").innerHTML =
    results[0].data[18].percent_change_24h;
  document.getElementById("shib-change7d").innerHTML =
    results[0].data[18].percent_change_7d;
  document.getElementById("shib-change1h").innerHTML =
    results[0].data[18].percent_change_1h;
  if (document.getElementById("shib-change1h").textContent >= 0) {
    document.getElementById("shib-change1h").className = "positive";
  } else {
    document.getElementById("shib-change1h").className = "negative";
  }
  if (document.getElementById("shib-change24").textContent >= 0) {
    document.getElementById("shib-change24").className = "positive";
  } else {
    document.getElementById("shib-change24").className = "negative";
  }
  if (document.getElementById("shib-change7d").textContent >= 0) {
    document.getElementById("shib-change7d").className = "positive";
  } else {
    document.getElementById("shib-change7d").className = "negative";
  }

  let icon19 = results[0].data[18].symbol;
  let icon19LowCaps = icon19.toLowerCase();
  let link19 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon19LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-19").innerHTML = link19;

  document.getElementById("algo-price").innerHTML =
    "$" + results[0].data[19].price_usd;
  document.getElementById("rank-20").innerHTML = results[0].data[19].rank;
  document.getElementById("algo").innerHTML = results[0].data[19].nameid;
  document.getElementById("algo-symbol").innerHTML = results[0].data[19].symbol;
  document.getElementById("algo-change24").innerHTML =
    results[0].data[19].percent_change_24h;
  document.getElementById("algo-change7d").innerHTML =
    results[0].data[19].percent_change_7d;
  document.getElementById("algo-change1h").innerHTML =
    results[0].data[19].percent_change_1h;
  if (document.getElementById("algo-change1h").textContent >= 0) {
    document.getElementById("algo-change1h").className = "positive";
  } else {
    document.getElementById("algo-change1h").className = "negative";
  }
  if (document.getElementById("algo-change24").textContent >= 0) {
    document.getElementById("algo-change24").className = "positive";
  } else {
    document.getElementById("algo-change24").className = "negative";
  }
  if (document.getElementById("algo-change7d").textContent >= 0) {
    document.getElementById("algo-change7d").className = "positive";
  } else {
    document.getElementById("algo-change7d").className = "negative";
  }

  let icon20 = results[0].data[19].symbol;
  let icon20LowCaps = icon20.toLowerCase();
  let link20 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon20LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-20").innerHTML = link20;

  document.getElementById("xlm-price").innerHTML =
    "$" + results[0].data[20].price_usd;
  document.getElementById("rank-21").innerHTML = results[0].data[20].rank;
  document.getElementById("xlm").innerHTML = results[0].data[20].nameid;
  document.getElementById("xlm-symbol").innerHTML = results[0].data[20].symbol;
  document.getElementById("xlm-change24").innerHTML =
    results[0].data[20].percent_change_24h;
  document.getElementById("xlm-change7d").innerHTML =
    results[0].data[20].percent_change_7d;
  document.getElementById("xlm-change1h").innerHTML =
    results[0].data[20].percent_change_1h;
  if (document.getElementById("xlm-change1h").textContent >= 0) {
    document.getElementById("xlm-change1h").className = "positive";
  } else {
    document.getElementById("xlm-change1h").className = "negative";
  }
  if (document.getElementById("xlm-change24").textContent >= 0) {
    document.getElementById("xlm-change24").className = "positive";
  } else {
    document.getElementById("xlm-change24").className = "negative";
  }
  if (document.getElementById("xlm-change7d").textContent >= 0) {
    document.getElementById("xlm-change7d").className = "positive";
  } else {
    document.getElementById("xlm-change7d").className = "negative";
  }

  let icon21 = results[0].data[20].symbol;
  let icon21LowCaps = icon21.toLowerCase();
  let link21 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon21LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-21").innerHTML = link21;

  document.getElementById("vet-price").innerHTML =
    "$" + results[0].data[21].price_usd;
  document.getElementById("rank-22").innerHTML = results[0].data[21].rank;
  document.getElementById("vet").innerHTML = results[0].data[21].nameid;
  document.getElementById("vet-symbol").innerHTML = results[0].data[21].symbol;
  document.getElementById("vet-change24").innerHTML =
    results[0].data[21].percent_change_24h;
  document.getElementById("vet-change7d").innerHTML =
    results[0].data[21].percent_change_7d;
  document.getElementById("vet-change1h").innerHTML =
    results[0].data[21].percent_change_1h;
  if (document.getElementById("vet-change1h").textContent >= 0) {
    document.getElementById("vet-change1h").className = "positive";
  } else {
    document.getElementById("vet-change1h").className = "negative";
  }
  if (document.getElementById("vet-change24").textContent >= 0) {
    document.getElementById("vet-change24").className = "positive";
  } else {
    document.getElementById("vet-change24").className = "negative";
  }
  if (document.getElementById("vet-change7d").textContent >= 0) {
    document.getElementById("vet-change7d").className = "positive";
  } else {
    document.getElementById("vet-change7d").className = "negative";
  }

  let icon22 = results[0].data[21].symbol;
  let icon22LowCaps = icon22.toLowerCase();
  let link22 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon22LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-22").innerHTML = link22;

  document.getElementById("atom-price").innerHTML =
    "$" + results[0].data[22].price_usd;
  document.getElementById("rank-23").innerHTML = results[0].data[22].rank;
  document.getElementById("atom").innerHTML = results[0].data[22].nameid;
  document.getElementById("atom-symbol").innerHTML = results[0].data[22].symbol;
  document.getElementById("atom-change24").innerHTML =
    results[0].data[22].percent_change_24h;
  document.getElementById("atom-change7d").innerHTML =
    results[0].data[22].percent_change_7d;
  document.getElementById("atom-change1h").innerHTML =
    results[0].data[22].percent_change_1h;
  if (document.getElementById("atom-change1h").textContent >= 0) {
    document.getElementById("atom-change1h").className = "positive";
  } else {
    document.getElementById("atom-change1h").className = "negative";
  }
  if (document.getElementById("atom-change24").textContent >= 0) {
    document.getElementById("atom-change24").className = "positive";
  } else {
    document.getElementById("atom-change24").className = "negative";
  }
  if (document.getElementById("atom-change7d").textContent >= 0) {
    document.getElementById("atom-change7d").className = "positive";
  } else {
    document.getElementById("atom-change7d").className = "negative";
  }

  let icon23 = results[0].data[22].symbol;
  let icon23LowCaps = icon23.toLowerCase();
  let link23 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon23LowCaps +
    '.png" width="20" heigth="20"/>';

  document.getElementById("icon-23").innerHTML = link23;

  document.getElementById("axs-price").innerHTML =
    "$" + results[0].data[23].price_usd;
  document.getElementById("rank-24").innerHTML = results[0].data[23].rank;
  document.getElementById("axs").innerHTML = results[0].data[23].nameid;
  document.getElementById("axs-symbol").innerHTML = results[0].data[23].symbol;
  document.getElementById("axs-change24").innerHTML =
    results[0].data[23].percent_change_24h;
  document.getElementById("axs-change7d").innerHTML =
    results[0].data[23].percent_change_7d;
  document.getElementById("axs-change1h").innerHTML =
    results[0].data[23].percent_change_1h;
  if (document.getElementById("axs-change1h").textContent >= 0) {
    document.getElementById("axs-change1h").className = "positive";
  } else {
    document.getElementById("axs-change1h").className = "negative";
  }
  if (document.getElementById("axs-change24").textContent >= 0) {
    document.getElementById("axs-change24").className = "positive";
  } else {
    document.getElementById("axs-change24").className = "negative";
  }
  if (document.getElementById("axs-change7d").textContent >= 0) {
    document.getElementById("axs-change7d").className = "positive";
  } else {
    document.getElementById("axs-change7d").className = "negative";
  }

  let icon24 = results[0].data[23].symbol;
  let icon24LowCaps = icon24.toLowerCase();
  let link24 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon24LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-24").innerHTML = link24;

  document.getElementById("price-25").innerHTML =
    "$" + results[0].data[24].price_usd;
  document.getElementById("rank-25").innerHTML = results[0].data[24].rank;
  document.getElementById("name-25").innerHTML = results[0].data[24].nameid;
  document.getElementById("symbol-25").innerHTML = results[0].data[24].symbol;
  document.getElementById("change24-25").innerHTML =
    results[0].data[24].percent_change_24h;
  document.getElementById("change7d-25").innerHTML =
    results[0].data[24].percent_change_7d;
  document.getElementById("change1h-25").innerHTML =
    results[0].data[24].percent_change_1h;
  if (document.getElementById("change1h-25").textContent >= 0) {
    document.getElementById("change1h-25").className = "positive";
  } else {
    document.getElementById("change1h-25").className = "negative";
  }
  if (document.getElementById("change24-25").textContent >= 0) {
    document.getElementById("change24-25").className = "positive";
  } else {
    document.getElementById("change24-25").className = "negative";
  }
  if (document.getElementById("change7d-25").textContent >= 0) {
    document.getElementById("change7d-25").className = "positive";
  } else {
    document.getElementById("change7d-25").className = "negative";
  }

  let icon25 = results[0].data[24].symbol;
  let icon25LowCaps = icon25.toLowerCase();
  let link25 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon25LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-25").innerHTML = link25;

  document.getElementById("price-26").innerHTML =
    "$" + results[0].data[25].price_usd;
  document.getElementById("rank-26").innerHTML = results[0].data[25].rank;
  document.getElementById("name-26").innerHTML = results[0].data[25].nameid;
  document.getElementById("symbol-26").innerHTML = results[0].data[25].symbol;
  document.getElementById("change24-26").innerHTML =
    results[0].data[25].percent_change_24h;
  document.getElementById("change7d-26").innerHTML =
    results[0].data[25].percent_change_7d;
  document.getElementById("change1h-26").innerHTML =
    results[0].data[25].percent_change_1h;
  if (document.getElementById("change1h-26").textContent >= 0) {
    document.getElementById("change1h-26").className = "positive";
  } else {
    document.getElementById("change1h-26").className = "negative";
  }
  if (document.getElementById("change24-26").textContent >= 0) {
    document.getElementById("change24-26").className = "positive";
  } else {
    document.getElementById("change24-26").className = "negative";
  }
  if (document.getElementById("change7d-26").textContent >= 0) {
    document.getElementById("change7d-26").className = "positive";
  } else {
    document.getElementById("change7d-26").className = "negative";
  }

  let icon26 = results[0].data[25].symbol;
  let icon26LowCaps = icon26.toLowerCase();
  let link26 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon26LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-26").innerHTML = link26;

  document.getElementById("price-27").innerHTML =
    "$" + results[0].data[26].price_usd;
  document.getElementById("rank-27").innerHTML = results[0].data[26].rank;
  document.getElementById("name-27").innerHTML = results[0].data[26].nameid;
  document.getElementById("symbol-27").innerHTML = results[0].data[26].symbol;
  document.getElementById("change24-27").innerHTML =
    results[0].data[26].percent_change_24h;
  document.getElementById("change7d-27").innerHTML =
    results[0].data[26].percent_change_7d;
  document.getElementById("change1h-27").innerHTML =
    results[0].data[26].percent_change_1h;
  if (document.getElementById("change1h-27").textContent >= 0) {
    document.getElementById("change1h-27").className = "positive";
  } else {
    document.getElementById("change1h-27").className = "negative";
  }
  if (document.getElementById("change24-27").textContent >= 0) {
    document.getElementById("change24-27").className = "positive";
  } else {
    document.getElementById("change24-27").className = "negative";
  }
  if (document.getElementById("change7d-27").textContent >= 0) {
    document.getElementById("change7d-27").className = "positive";
  } else {
    document.getElementById("change7d-27").className = "negative";
  }

  let icon27 = results[0].data[26].symbol;
  let icon27LowCaps = icon27.toLowerCase();
  let link27 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon27LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-27").innerHTML = link27;

  document.getElementById("price-28").innerHTML =
    "$" + results[0].data[27].price_usd;
  document.getElementById("rank-28").innerHTML = results[0].data[27].rank;
  document.getElementById("name-28").innerHTML = results[0].data[27].nameid;
  document.getElementById("symbol-28").innerHTML = results[0].data[27].symbol;
  document.getElementById("change24-28").innerHTML =
    results[0].data[27].percent_change_24h;
  document.getElementById("change7d-28").innerHTML =
    results[0].data[27].percent_change_7d;
  document.getElementById("change1h-28").innerHTML =
    results[0].data[27].percent_change_1h;
  if (document.getElementById("change1h-28").textContent >= 0) {
    document.getElementById("change1h-28").className = "positive";
  } else {
    document.getElementById("change1h-28").className = "negative";
  }
  if (document.getElementById("change24-28").textContent >= 0) {
    document.getElementById("change24-28").className = "positive";
  } else {
    document.getElementById("change24-28").className = "negative";
  }
  if (document.getElementById("change7d-28").textContent >= 0) {
    document.getElementById("change7d-28").className = "positive";
  } else {
    document.getElementById("change7d-28").className = "negative";
  }

  let icon28 = results[0].data[27].symbol;
  let icon28LowCaps = icon28.toLowerCase();
  let link28 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon28LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-28").innerHTML = link28;

  document.getElementById("price-29").innerHTML =
    "$" + results[0].data[28].price_usd;
  document.getElementById("rank-29").innerHTML = results[0].data[28].rank;
  document.getElementById("name-29").innerHTML = results[0].data[28].nameid;
  document.getElementById("symbol-29").innerHTML = results[0].data[28].symbol;
  document.getElementById("change24-29").innerHTML =
    results[0].data[28].percent_change_24h;
  document.getElementById("change7d-29").innerHTML =
    results[0].data[28].percent_change_7d;
  document.getElementById("change1h-29").innerHTML =
    results[0].data[28].percent_change_1h;
  if (document.getElementById("change1h-29").textContent >= 0) {
    document.getElementById("change1h-29").className = "positive";
  } else {
    document.getElementById("change1h-29").className = "negative";
  }
  if (document.getElementById("change24-29").textContent >= 0) {
    document.getElementById("change24-29").className = "positive";
  } else {
    document.getElementById("change24-29").className = "negative";
  }
  if (document.getElementById("change7d-29").textContent >= 0) {
    document.getElementById("change7d-29").className = "positive";
  } else {
    document.getElementById("change7d-29").className = "negative";
  }

  let icon29 = results[0].data[28].symbol;
  let icon29LowCaps = icon29.toLowerCase();
  let link29 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon29LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-29").innerHTML = link29;

  document.getElementById("price-30").innerHTML =
    "$" + results[0].data[29].price_usd;
  document.getElementById("rank-30").innerHTML = results[0].data[29].rank;
  document.getElementById("name-30").innerHTML = results[0].data[29].nameid;
  document.getElementById("symbol-30").innerHTML = results[0].data[29].symbol;
  document.getElementById("change24-30").innerHTML =
    results[0].data[29].percent_change_24h;
  document.getElementById("change7d-30").innerHTML =
    results[0].data[29].percent_change_7d;
  document.getElementById("change1h-30").innerHTML =
    results[0].data[29].percent_change_1h;
  if (document.getElementById("change1h-30").textContent >= 0) {
    document.getElementById("change1h-30").className = "positive";
  } else {
    document.getElementById("change1h-30").className = "negative";
  }
  if (document.getElementById("change24-30").textContent >= 0) {
    document.getElementById("change24-30").className = "positive";
  } else {
    document.getElementById("change24-30").className = "negative";
  }
  if (document.getElementById("change7d-30").textContent >= 0) {
    document.getElementById("change7d-30").className = "positive";
  } else {
    document.getElementById("change7d-30").className = "negative";
  }

  let icon30 = results[0].data[29].symbol;
  let icon30LowCaps = icon30.toLowerCase();
  let link30 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon30LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-30").innerHTML = link30;

  document.getElementById("price-31").innerHTML =
    "$" + results[0].data[30].price_usd;
  document.getElementById("rank-31").innerHTML = results[0].data[30].rank;
  document.getElementById("name-31").innerHTML = results[0].data[30].nameid;
  document.getElementById("symbol-31").innerHTML = results[0].data[30].symbol;
  document.getElementById("change24-31").innerHTML =
    results[0].data[30].percent_change_24h;
  document.getElementById("change7d-31").innerHTML =
    results[0].data[30].percent_change_7d;
  document.getElementById("change1h-31").innerHTML =
    results[0].data[30].percent_change_1h;
  if (document.getElementById("change1h-31").textContent >= 0) {
    document.getElementById("change1h-31").className = "positive";
  } else {
    document.getElementById("change1h-31").className = "negative";
  }
  if (document.getElementById("change24-31").textContent >= 0) {
    document.getElementById("change24-31").className = "positive";
  } else {
    document.getElementById("change24-31").className = "negative";
  }
  if (document.getElementById("change7d-31").textContent >= 0) {
    document.getElementById("change7d-31").className = "positive";
  } else {
    document.getElementById("change7d-31").className = "negative";
  }

  let icon31 = results[0].data[30].symbol;
  let icon31LowCaps = icon31.toLowerCase();
  let link31 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon31LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-31").innerHTML = link31;

  document.getElementById("price-32").innerHTML =
    "$" + results[0].data[31].price_usd;
  document.getElementById("rank-32").innerHTML = results[0].data[31].rank;
  document.getElementById("name-32").innerHTML = results[0].data[31].nameid;
  document.getElementById("symbol-32").innerHTML = results[0].data[31].symbol;
  document.getElementById("change24-32").innerHTML =
    results[0].data[31].percent_change_24h;
  document.getElementById("change7d-32").innerHTML =
    results[0].data[31].percent_change_7d;
  document.getElementById("change1h-32").innerHTML =
    results[0].data[31].percent_change_1h;
  if (document.getElementById("change1h-32").textContent >= 0) {
    document.getElementById("change1h-32").className = "positive";
  } else {
    document.getElementById("change1h-32").className = "negative";
  }
  if (document.getElementById("change24-32").textContent >= 0) {
    document.getElementById("change24-32").className = "positive";
  } else {
    document.getElementById("change24-32").className = "negative";
  }
  if (document.getElementById("change7d-32").textContent >= 0) {
    document.getElementById("change7d-32").className = "positive";
  } else {
    document.getElementById("change7d-32").className = "negative";
  }

  let icon32 = results[0].data[31].symbol;
  let icon32LowCaps = icon32.toLowerCase();
  let link32 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon32LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-32").innerHTML = link32;

  document.getElementById("price-34").innerHTML =
    "$" + results[0].data[33].price_usd;
  document.getElementById("rank-34").innerHTML = results[0].data[33].rank;
  document.getElementById("name-34").innerHTML = results[0].data[33].nameid;
  document.getElementById("symbol-34").innerHTML = results[0].data[33].symbol;
  document.getElementById("change24-34").innerHTML =
    results[0].data[33].percent_change_24h;
  document.getElementById("change7d-34").innerHTML =
    results[0].data[33].percent_change_7d;
  document.getElementById("change1h-34").innerHTML =
    results[0].data[33].percent_change_1h;
  if (document.getElementById("change1h-34").textContent >= 0) {
    document.getElementById("change1h-34").className = "positive";
  } else {
    document.getElementById("change1h-34").className = "negative";
  }
  if (document.getElementById("change24-34").textContent >= 0) {
    document.getElementById("change24-34").className = "positive";
  } else {
    document.getElementById("change24-34").className = "negative";
  }
  if (document.getElementById("change7d-34").textContent >= 0) {
    document.getElementById("change7d-34").className = "positive";
  } else {
    document.getElementById("change7d-34").className = "negative";
  }

  let icon34 = results[0].data[33].symbol;
  let icon34LowCaps = icon34.toLowerCase();
  let link34 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon34LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-34").innerHTML = link34;

  document.getElementById("price-33").innerHTML =
    "$" + results[0].data[32].price_usd;
  document.getElementById("rank-33").innerHTML = results[0].data[32].rank;
  document.getElementById("name-33").innerHTML = results[0].data[32].nameid;
  document.getElementById("symbol-33").innerHTML = results[0].data[32].symbol;
  document.getElementById("change24-33").innerHTML =
    results[0].data[32].percent_change_24h;
  document.getElementById("change7d-33").innerHTML =
    results[0].data[32].percent_change_7d;
  document.getElementById("change1h-33").innerHTML =
    results[0].data[32].percent_change_1h;
  if (document.getElementById("change1h-33").textContent >= 0) {
    document.getElementById("change1h-33").className = "positive";
  } else {
    document.getElementById("change1h-33").className = "negative";
  }
  if (document.getElementById("change24-33").textContent >= 0) {
    document.getElementById("change24-33").className = "positive";
  } else {
    document.getElementById("change24-33").className = "negative";
  }
  if (document.getElementById("change7d-33").textContent >= 0) {
    document.getElementById("change7d-33").className = "positive";
  } else {
    document.getElementById("change7d-33").className = "negative";
  }

  let icon33 = results[0].data[32].symbol;
  let icon33LowCaps = icon33.toLowerCase();
  let link33 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon33LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-33").innerHTML = link33;

  document.getElementById("price-35").innerHTML =
    "$" + results[0].data[34].price_usd;
  document.getElementById("rank-35").innerHTML = results[0].data[34].rank;
  document.getElementById("name-35").innerHTML = results[0].data[34].nameid;
  document.getElementById("symbol-35").innerHTML = results[0].data[34].symbol;
  document.getElementById("change24-35").innerHTML =
    results[0].data[34].percent_change_24h;
  document.getElementById("change7d-35").innerHTML =
    results[0].data[34].percent_change_7d;
  document.getElementById("change1h-35").innerHTML =
    results[0].data[34].percent_change_1h;
  if (document.getElementById("change1h-35").textContent >= 0) {
    document.getElementById("change1h-35").className = "positive";
  } else {
    document.getElementById("change1h-35").className = "negative";
  }
  if (document.getElementById("change24-35").textContent >= 0) {
    document.getElementById("change24-35").className = "positive";
  } else {
    document.getElementById("change24-35").className = "negative";
  }
  if (document.getElementById("change7d-35").textContent >= 0) {
    document.getElementById("change7d-35").className = "positive";
  } else {
    document.getElementById("change7d-35").className = "negative";
  }

  let icon35 = results[0].data[34].symbol;
  let icon35LowCaps = icon35.toLowerCase();
  let link35 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon35LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-35").innerHTML = link35;

  document.getElementById("price-36").innerHTML =
    "$" + results[0].data[35].price_usd;
  document.getElementById("rank-36").innerHTML = results[0].data[35].rank;
  document.getElementById("name-36").innerHTML = results[0].data[35].nameid;
  document.getElementById("symbol-36").innerHTML = results[0].data[35].symbol;
  document.getElementById("change24-36").innerHTML =
    results[0].data[35].percent_change_24h;
  document.getElementById("change7d-36").innerHTML =
    results[0].data[35].percent_change_7d;
  document.getElementById("change1h-36").innerHTML =
    results[0].data[35].percent_change_1h;
  if (document.getElementById("change1h-36").textContent >= 0) {
    document.getElementById("change1h-36").className = "positive";
  } else {
    document.getElementById("change1h-36").className = "negative";
  }
  if (document.getElementById("change24-36").textContent >= 0) {
    document.getElementById("change24-36").className = "positive";
  } else {
    document.getElementById("change24-36").className = "negative";
  }
  if (document.getElementById("change7d-36").textContent >= 0) {
    document.getElementById("change7d-36").className = "positive";
  } else {
    document.getElementById("change7d-36").className = "negative";
  }

  let icon36 = results[0].data[35].symbol;
  let icon36LowCaps = icon36.toLowerCase();
  let link36 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon36LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-36").innerHTML = link36;

  document.getElementById("price-37").innerHTML =
    "$" + results[0].data[36].price_usd;
  document.getElementById("rank-37").innerHTML = results[0].data[36].rank;
  document.getElementById("name-37").innerHTML = results[0].data[36].nameid;
  document.getElementById("symbol-37").innerHTML = results[0].data[36].symbol;
  document.getElementById("change24-37").innerHTML =
    results[0].data[36].percent_change_24h;
  document.getElementById("change7d-37").innerHTML =
    results[0].data[36].percent_change_7d;
  document.getElementById("change1h-37").innerHTML =
    results[0].data[36].percent_change_1h;
  if (document.getElementById("change1h-37").textContent >= 0) {
    document.getElementById("change1h-37").className = "positive";
  } else {
    document.getElementById("change1h-37").className = "negative";
  }
  if (document.getElementById("change24-37").textContent >= 0) {
    document.getElementById("change24-37").className = "positive";
  } else {
    document.getElementById("change24-37").className = "negative";
  }
  if (document.getElementById("change7d-37").textContent >= 0) {
    document.getElementById("change7d-37").className = "positive";
  } else {
    document.getElementById("change7d-37").className = "negative";
  }

  let icon37 = results[0].data[36].symbol;
  let icon37LowCaps = icon37.toLowerCase();
  let link37 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon37LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-37").innerHTML = link37;

  document.getElementById("price-38").innerHTML =
    "$" + results[0].data[37].price_usd;
  document.getElementById("rank-38").innerHTML = results[0].data[37].rank;
  document.getElementById("name-38").innerHTML = results[0].data[37].nameid;
  document.getElementById("symbol-38").innerHTML = results[0].data[37].symbol;
  document.getElementById("change24-38").innerHTML =
    results[0].data[37].percent_change_24h;
  document.getElementById("change7d-38").innerHTML =
    results[0].data[37].percent_change_7d;
  document.getElementById("change1h-38").innerHTML =
    results[0].data[37].percent_change_1h;
  if (document.getElementById("change1h-38").textContent >= 0) {
    document.getElementById("change1h-38").className = "positive";
  } else {
    document.getElementById("change1h-38").className = "negative";
  }
  if (document.getElementById("change24-38").textContent >= 0) {
    document.getElementById("change24-38").className = "positive";
  } else {
    document.getElementById("change24-38").className = "negative";
  }
  if (document.getElementById("change7d-38").textContent >= 0) {
    document.getElementById("change7d-38").className = "positive";
  } else {
    document.getElementById("change7d-38").className = "negative";
  }

  let icon38 = results[0].data[37].symbol;
  let icon38LowCaps = icon38.toLowerCase();
  let link38 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon38LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-38").innerHTML = link38;

  document.getElementById("price-39").innerHTML =
    "$" + results[0].data[38].price_usd;
  document.getElementById("rank-39").innerHTML = results[0].data[38].rank;
  document.getElementById("name-39").innerHTML = results[0].data[38].nameid;
  document.getElementById("symbol-39").innerHTML = results[0].data[38].symbol;
  document.getElementById("change24-39").innerHTML =
    results[0].data[38].percent_change_24h;
  document.getElementById("change7d-39").innerHTML =
    results[0].data[38].percent_change_7d;
  document.getElementById("change1h-39").innerHTML =
    results[0].data[38].percent_change_1h;
  if (document.getElementById("change1h-39").textContent >= 0) {
    document.getElementById("change1h-39").className = "positive";
  } else {
    document.getElementById("change1h-39").className = "negative";
  }
  if (document.getElementById("change24-39").textContent >= 0) {
    document.getElementById("change24-39").className = "positive";
  } else {
    document.getElementById("change24-39").className = "negative";
  }
  if (document.getElementById("change7d-39").textContent >= 0) {
    document.getElementById("change7d-39").className = "positive";
  } else {
    document.getElementById("change7d-39").className = "negative";
  }

  let icon39 = results[0].data[38].symbol;
  let icon39LowCaps = icon39.toLowerCase();
  let link39 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon39LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-39").innerHTML = link39;

  document.getElementById("price-40").innerHTML =
    "$" + results[0].data[39].price_usd;
  document.getElementById("rank-40").innerHTML = results[0].data[39].rank;
  document.getElementById("name-40").innerHTML = results[0].data[39].nameid;
  document.getElementById("symbol-40").innerHTML = results[0].data[39].symbol;
  document.getElementById("change24-40").innerHTML =
    results[0].data[39].percent_change_24h;
  document.getElementById("change7d-40").innerHTML =
    results[0].data[39].percent_change_7d;
  document.getElementById("change1h-40").innerHTML =
    results[0].data[39].percent_change_1h;
  if (document.getElementById("change1h-40").textContent >= 0) {
    document.getElementById("change1h-40").className = "positive";
  } else {
    document.getElementById("change1h-40").className = "negative";
  }
  if (document.getElementById("change24-40").textContent >= 0) {
    document.getElementById("change24-40").className = "positive";
  } else {
    document.getElementById("change24-40").className = "negative";
  }
  if (document.getElementById("change7d-40").textContent >= 0) {
    document.getElementById("change7d-40").className = "positive";
  } else {
    document.getElementById("change7d-40").className = "negative";
  }

  let icon40 = results[0].data[39].symbol;
  let icon40LowCaps = icon40.toLowerCase();
  let link40 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon40LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-40").innerHTML = link40;

  document.getElementById("price-41").innerHTML =
    "$" + results[0].data[40].price_usd;
  document.getElementById("rank-41").innerHTML = results[0].data[40].rank;
  document.getElementById("name-41").innerHTML = results[0].data[40].nameid;
  document.getElementById("symbol-41").innerHTML = results[0].data[40].symbol;
  document.getElementById("change24-41").innerHTML =
    results[0].data[40].percent_change_24h;
  document.getElementById("change7d-41").innerHTML =
    results[0].data[40].percent_change_7d;
  document.getElementById("change1h-41").innerHTML =
    results[0].data[40].percent_change_1h;
  if (document.getElementById("change1h-41").textContent >= 0) {
    document.getElementById("change1h-41").className = "positive";
  } else {
    document.getElementById("change1h-41").className = "negative";
  }
  if (document.getElementById("change24-41").textContent >= 0) {
    document.getElementById("change24-41").className = "positive";
  } else {
    document.getElementById("change24-41").className = "negative";
  }
  if (document.getElementById("change7d-41").textContent >= 0) {
    document.getElementById("change7d-41").className = "positive";
  } else {
    document.getElementById("change7d-41").className = "negative";
  }

  let icon41 = results[0].data[40].symbol;
  let icon41LowCaps = icon41.toLowerCase();
  let link41 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon41LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-41").innerHTML = link41;

  document.getElementById("price-42").innerHTML =
    "$" + results[0].data[41].price_usd;
  document.getElementById("rank-42").innerHTML = results[0].data[41].rank;
  document.getElementById("name-42").innerHTML = results[0].data[41].nameid;
  document.getElementById("symbol-42").innerHTML = results[0].data[41].symbol;
  document.getElementById("change24-42").innerHTML =
    results[0].data[41].percent_change_24h;
  document.getElementById("change7d-42").innerHTML =
    results[0].data[41].percent_change_7d;
  document.getElementById("change1h-42").innerHTML =
    results[0].data[41].percent_change_1h;
  if (document.getElementById("change1h-42").textContent >= 0) {
    document.getElementById("change1h-42").className = "positive";
  } else {
    document.getElementById("change1h-42").className = "negative";
  }
  if (document.getElementById("change24-42").textContent >= 0) {
    document.getElementById("change24-42").className = "positive";
  } else {
    document.getElementById("change24-42").className = "negative";
  }
  if (document.getElementById("change7d-42").textContent >= 0) {
    document.getElementById("change7d-42").className = "positive";
  } else {
    document.getElementById("change7d-42").className = "negative";
  }

  let icon42 = results[0].data[41].symbol;
  let icon42LowCaps = icon42.toLowerCase();
  let link42 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon42LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-42").innerHTML = link42;

  document.getElementById("price-43").innerHTML =
    "$" + results[0].data[42].price_usd;
  document.getElementById("rank-43").innerHTML = results[0].data[42].rank;
  document.getElementById("name-43").innerHTML = results[0].data[42].nameid;
  document.getElementById("symbol-43").innerHTML = results[0].data[42].symbol;
  document.getElementById("change24-43").innerHTML =
    results[0].data[42].percent_change_24h;
  document.getElementById("change7d-43").innerHTML =
    results[0].data[42].percent_change_7d;
  document.getElementById("change1h-43").innerHTML =
    results[0].data[42].percent_change_1h;
  if (document.getElementById("change1h-43").textContent >= 0) {
    document.getElementById("change1h-43").className = "positive";
  } else {
    document.getElementById("change1h-43").className = "negative";
  }
  if (document.getElementById("change24-43").textContent >= 0) {
    document.getElementById("change24-43").className = "positive";
  } else {
    document.getElementById("change24-43").className = "negative";
  }
  if (document.getElementById("change7d-43").textContent >= 0) {
    document.getElementById("change7d-43").className = "positive";
  } else {
    document.getElementById("change7d-43").className = "negative";
  }

  let icon43 = results[0].data[42].symbol;
  let icon43LowCaps = icon43.toLowerCase();
  let link43 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon43LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-43").innerHTML = link43;

  document.getElementById("price-44").innerHTML =
    "$" + results[0].data[43].price_usd;
  document.getElementById("rank-44").innerHTML = results[0].data[43].rank;
  document.getElementById("name-44").innerHTML = results[0].data[43].nameid;
  document.getElementById("symbol-44").innerHTML = results[0].data[43].symbol;
  document.getElementById("change24-44").innerHTML =
    results[0].data[43].percent_change_24h;
  document.getElementById("change7d-44").innerHTML =
    results[0].data[43].percent_change_7d;
  document.getElementById("change1h-44").innerHTML =
    results[0].data[43].percent_change_1h;
  if (document.getElementById("change1h-44").textContent >= 0) {
    document.getElementById("change1h-44").className = "positive";
  } else {
    document.getElementById("change1h-44").className = "negative";
  }
  if (document.getElementById("change24-44").textContent >= 0) {
    document.getElementById("change24-44").className = "positive";
  } else {
    document.getElementById("change24-44").className = "negative";
  }
  if (document.getElementById("change7d-44").textContent >= 0) {
    document.getElementById("change7d-44").className = "positive";
  } else {
    document.getElementById("change7d-44").className = "negative";
  }

  let icon44 = results[0].data[43].symbol;
  let icon44LowCaps = icon44.toLowerCase();
  let link44 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon44LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-44").innerHTML = link44;

  document.getElementById("price-45").innerHTML =
    "$" + results[0].data[44].price_usd;
  document.getElementById("rank-45").innerHTML = results[0].data[44].rank;
  document.getElementById("name-45").innerHTML = results[0].data[44].nameid;
  document.getElementById("symbol-45").innerHTML = results[0].data[44].symbol;
  document.getElementById("change24-45").innerHTML =
    results[0].data[44].percent_change_24h;
  document.getElementById("change7d-45").innerHTML =
    results[0].data[44].percent_change_7d;
  document.getElementById("change1h-45").innerHTML =
    results[0].data[44].percent_change_1h;
  if (document.getElementById("change1h-45").textContent >= 0) {
    document.getElementById("change1h-45").className = "positive";
  } else {
    document.getElementById("change1h-45").className = "negative";
  }
  if (document.getElementById("change24-45").textContent >= 0) {
    document.getElementById("change24-45").className = "positive";
  } else {
    document.getElementById("change24-45").className = "negative";
  }
  if (document.getElementById("change7d-45").textContent >= 0) {
    document.getElementById("change7d-45").className = "positive";
  } else {
    document.getElementById("change7d-45").className = "negative";
  }

  let icon45 = results[0].data[44].symbol;
  let icon45LowCaps = icon45.toLowerCase();
  let link45 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon45LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-45").innerHTML = link45;

  document.getElementById("price-46").innerHTML =
    "$" + results[0].data[45].price_usd;
  document.getElementById("rank-46").innerHTML = results[0].data[45].rank;
  document.getElementById("name-46").innerHTML = results[0].data[45].nameid;
  document.getElementById("symbol-46").innerHTML = results[0].data[45].symbol;
  document.getElementById("change24-46").innerHTML =
    results[0].data[45].percent_change_24h;
  document.getElementById("change7d-46").innerHTML =
    results[0].data[45].percent_change_7d;
  document.getElementById("change1h-46").innerHTML =
    results[0].data[45].percent_change_1h;
  if (document.getElementById("change1h-46").textContent >= 0) {
    document.getElementById("change1h-46").className = "positive";
  } else {
    document.getElementById("change1h-46").className = "negative";
  }
  if (document.getElementById("change24-46").textContent >= 0) {
    document.getElementById("change24-46").className = "positive";
  } else {
    document.getElementById("change24-46").className = "negative";
  }
  if (document.getElementById("change7d-46").textContent >= 0) {
    document.getElementById("change7d-46").className = "positive";
  } else {
    document.getElementById("change7d-46").className = "negative";
  }

  let icon46 = results[0].data[45].symbol;
  let icon46LowCaps = icon46.toLowerCase();
  let link46 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon46LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-46").innerHTML = link46;

  document.getElementById("price-47").innerHTML =
    "$" + results[0].data[46].price_usd;
  document.getElementById("rank-47").innerHTML = results[0].data[46].rank;
  document.getElementById("name-47").innerHTML = results[0].data[46].nameid;
  document.getElementById("symbol-47").innerHTML = results[0].data[46].symbol;
  document.getElementById("change24-47").innerHTML =
    results[0].data[46].percent_change_24h;
  document.getElementById("change7d-47").innerHTML =
    results[0].data[46].percent_change_7d;
  document.getElementById("change1h-47").innerHTML =
    results[0].data[46].percent_change_1h;
  if (document.getElementById("change1h-47").textContent >= 0) {
    document.getElementById("change1h-47").className = "positive";
  } else {
    document.getElementById("change1h-47").className = "negative";
  }
  if (document.getElementById("change24-47").textContent >= 0) {
    document.getElementById("change24-47").className = "positive";
  } else {
    document.getElementById("change24-47").className = "negative";
  }
  if (document.getElementById("change7d-47").textContent >= 0) {
    document.getElementById("change7d-47").className = "positive";
  } else {
    document.getElementById("change7d-47").className = "negative";
  }

  let icon47 = results[0].data[46].symbol;
  let icon47LowCaps = icon47.toLowerCase();
  let link47 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon47LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-47").innerHTML = link47;

  document.getElementById("price-48").innerHTML =
    "$" + results[0].data[47].price_usd;
  document.getElementById("rank-48").innerHTML = results[0].data[47].rank;
  document.getElementById("name-48").innerHTML = results[0].data[47].nameid;
  document.getElementById("symbol-48").innerHTML = results[0].data[47].symbol;
  document.getElementById("change24-48").innerHTML =
    results[0].data[47].percent_change_24h;
  document.getElementById("change7d-48").innerHTML =
    results[0].data[47].percent_change_7d;
  document.getElementById("change1h-48").innerHTML =
    results[0].data[47].percent_change_1h;
  if (document.getElementById("change1h-48").textContent >= 0) {
    document.getElementById("change1h-48").className = "positive";
  } else {
    document.getElementById("change1h-48").className = "negative";
  }
  if (document.getElementById("change24-48").textContent >= 0) {
    document.getElementById("change24-48").className = "positive";
  } else {
    document.getElementById("change24-48").className = "negative";
  }
  if (document.getElementById("change7d-48").textContent >= 0) {
    document.getElementById("change7d-48").className = "positive";
  } else {
    document.getElementById("change7d-48").className = "negative";
  }

  let icon48 = results[0].data[47].symbol;
  let icon48LowCaps = icon48.toLowerCase();
  let link48 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon48LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-48").innerHTML = link48;

  document.getElementById("price-49").innerHTML =
    "$" + results[0].data[48].price_usd;
  document.getElementById("rank-49").innerHTML = results[0].data[48].rank;
  document.getElementById("name-49").innerHTML = results[0].data[48].nameid;
  document.getElementById("symbol-49").innerHTML = results[0].data[48].symbol;
  document.getElementById("change24-49").innerHTML =
    results[0].data[48].percent_change_24h;
  document.getElementById("change7d-49").innerHTML =
    results[0].data[48].percent_change_7d;
  document.getElementById("change1h-49").innerHTML =
    results[0].data[48].percent_change_1h;
  if (document.getElementById("change1h-49").textContent >= 0) {
    document.getElementById("change1h-49").className = "positive";
  } else {
    document.getElementById("change1h-49").className = "negative";
  }
  if (document.getElementById("change24-49").textContent >= 0) {
    document.getElementById("change24-49").className = "positive";
  } else {
    document.getElementById("change24-49").className = "negative";
  }
  if (document.getElementById("change7d-49").textContent >= 0) {
    document.getElementById("change7d-49").className = "positive";
  } else {
    document.getElementById("change7d-49").className = "negative";
  }

  let icon49 = results[0].data[48].symbol;
  let icon49LowCaps = icon49.toLowerCase();
  let link49 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon49LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-49").innerHTML = link49;

  document.getElementById("price-50").innerHTML =
    "$" + results[0].data[49].price_usd;
  document.getElementById("rank-50").innerHTML = results[0].data[49].rank;
  document.getElementById("name-50").innerHTML = results[0].data[49].nameid;
  document.getElementById("symbol-50").innerHTML = results[0].data[49].symbol;
  document.getElementById("change24-50").innerHTML =
    results[0].data[49].percent_change_24h;
  document.getElementById("change7d-50").innerHTML =
    results[0].data[49].percent_change_7d;
  document.getElementById("change1h-50").innerHTML =
    results[0].data[49].percent_change_1h;
  if (document.getElementById("change1h-50").textContent >= 0) {
    document.getElementById("change1h-50").className = "positive";
  } else {
    document.getElementById("change1h-50").className = "negative";
  }
  if (document.getElementById("change24-50").textContent >= 0) {
    document.getElementById("change24-50").className = "positive";
  } else {
    document.getElementById("change24-50").className = "negative";
  }
  if (document.getElementById("change7d-50").textContent >= 0) {
    document.getElementById("change7d-50").className = "positive";
  } else {
    document.getElementById("change7d-50").className = "negative";
  }

  let icon50 = results[0].data[49].symbol;
  let icon50LowCaps = icon50.toLowerCase();
  let link50 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon50LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-50").innerHTML = link50;

  document.getElementById("price-51").innerHTML =
    "$" + results[0].data[50].price_usd;
  document.getElementById("rank-51").innerHTML = results[0].data[50].rank;
  document.getElementById("name-51").innerHTML = results[0].data[50].nameid;
  document.getElementById("symbol-51").innerHTML = results[0].data[50].symbol;
  document.getElementById("change24-51").innerHTML =
    results[0].data[50].percent_change_24h;
  document.getElementById("change7d-51").innerHTML =
    results[0].data[50].percent_change_7d;
  document.getElementById("change1h-51").innerHTML =
    results[0].data[50].percent_change_1h;
  if (document.getElementById("change1h-51").textContent >= 0) {
    document.getElementById("change1h-51").className = "positive";
  } else {
    document.getElementById("change1h-51").className = "negative";
  }
  if (document.getElementById("change24-51").textContent >= 0) {
    document.getElementById("change24-51").className = "positive";
  } else {
    document.getElementById("change24-51").className = "negative";
  }
  if (document.getElementById("change7d-51").textContent >= 0) {
    document.getElementById("change7d-51").className = "positive";
  } else {
    document.getElementById("change7d-51").className = "negative";
  }

  let icon51 = results[0].data[50].symbol;
  let icon51LowCaps = icon51.toLowerCase();
  let link51 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon51LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-51").innerHTML = link51;

  document.getElementById("price-52").innerHTML =
    "$" + results[0].data[51].price_usd;
  document.getElementById("rank-52").innerHTML = results[0].data[51].rank;
  document.getElementById("name-52").innerHTML = results[0].data[51].nameid;
  document.getElementById("symbol-52").innerHTML = results[0].data[51].symbol;
  document.getElementById("change24-52").innerHTML =
    results[0].data[51].percent_change_24h;
  document.getElementById("change7d-52").innerHTML =
    results[0].data[51].percent_change_7d;
  document.getElementById("change1h-52").innerHTML =
    results[0].data[51].percent_change_1h;
  if (document.getElementById("change1h-52").textContent >= 0) {
    document.getElementById("change1h-52").className = "positive";
  } else {
    document.getElementById("change1h-52").className = "negative";
  }
  if (document.getElementById("change24-52").textContent >= 0) {
    document.getElementById("change24-52").className = "positive";
  } else {
    document.getElementById("change24-52").className = "negative";
  }
  if (document.getElementById("change7d-52").textContent >= 0) {
    document.getElementById("change7d-52").className = "positive";
  } else {
    document.getElementById("change7d-52").className = "negative";
  }

  let icon52 = results[0].data[51].symbol;
  let icon52LowCaps = icon52.toLowerCase();
  let link52 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon52LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-52").innerHTML = link52;

  document.getElementById("price-53").innerHTML =
    "$" + results[0].data[52].price_usd;
  document.getElementById("rank-53").innerHTML = results[0].data[52].rank;
  document.getElementById("name-53").innerHTML = results[0].data[52].nameid;
  document.getElementById("symbol-53").innerHTML = results[0].data[52].symbol;
  document.getElementById("change24-53").innerHTML =
    results[0].data[52].percent_change_24h;
  document.getElementById("change7d-53").innerHTML =
    results[0].data[52].percent_change_7d;
  document.getElementById("change1h-53").innerHTML =
    results[0].data[52].percent_change_1h;
  if (document.getElementById("change1h-53").textContent >= 0) {
    document.getElementById("change1h-53").className = "positive";
  } else {
    document.getElementById("change1h-53").className = "negative";
  }
  if (document.getElementById("change24-53").textContent >= 0) {
    document.getElementById("change24-53").className = "positive";
  } else {
    document.getElementById("change24-53").className = "negative";
  }
  if (document.getElementById("change7d-53").textContent >= 0) {
    document.getElementById("change7d-53").className = "positive";
  } else {
    document.getElementById("change7d-53").className = "negative";
  }

  let icon53 = results[0].data[52].symbol;
  let icon53LowCaps = icon53.toLowerCase();
  let link53 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon53LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-53").innerHTML = link53;

  document.getElementById("price-54").innerHTML =
    "$" + results[0].data[53].price_usd;
  document.getElementById("rank-54").innerHTML = results[0].data[53].rank;
  document.getElementById("name-54").innerHTML = results[0].data[53].nameid;
  document.getElementById("symbol-54").innerHTML = results[0].data[53].symbol;
  document.getElementById("change24-54").innerHTML =
    results[0].data[53].percent_change_24h;
  document.getElementById("change7d-54").innerHTML =
    results[0].data[53].percent_change_7d;
  document.getElementById("change1h-54").innerHTML =
    results[0].data[53].percent_change_1h;
  if (document.getElementById("change1h-54").textContent >= 0) {
    document.getElementById("change1h-54").className = "positive";
  } else {
    document.getElementById("change1h-54").className = "negative";
  }
  if (document.getElementById("change24-54").textContent >= 0) {
    document.getElementById("change24-54").className = "positive";
  } else {
    document.getElementById("change24-54").className = "negative";
  }
  if (document.getElementById("change7d-54").textContent >= 0) {
    document.getElementById("change7d-54").className = "positive";
  } else {
    document.getElementById("change7d-54").className = "negative";
  }

  let icon54 = results[0].data[53].symbol;
  let icon54LowCaps = icon54.toLowerCase();
  let link54 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon54LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-54").innerHTML = link54;

  document.getElementById("price-55").innerHTML =
    "$" + results[0].data[54].price_usd;
  document.getElementById("rank-55").innerHTML = results[0].data[54].rank;
  document.getElementById("name-55").innerHTML = results[0].data[54].nameid;
  document.getElementById("symbol-55").innerHTML = results[0].data[54].symbol;
  document.getElementById("change24-55").innerHTML =
    results[0].data[54].percent_change_24h;
  document.getElementById("change7d-55").innerHTML =
    results[0].data[54].percent_change_7d;
  document.getElementById("change1h-55").innerHTML =
    results[0].data[54].percent_change_1h;
  if (document.getElementById("change1h-55").textContent >= 0) {
    document.getElementById("change1h-55").className = "positive";
  } else {
    document.getElementById("change1h-55").className = "negative";
  }
  if (document.getElementById("change24-55").textContent >= 0) {
    document.getElementById("change24-55").className = "positive";
  } else {
    document.getElementById("change24-55").className = "negative";
  }
  if (document.getElementById("change7d-55").textContent >= 0) {
    document.getElementById("change7d-55").className = "positive";
  } else {
    document.getElementById("change7d-55").className = "negative";
  }

  let icon55 = results[0].data[54].symbol;
  let icon55LowCaps = icon55.toLowerCase();
  let link55 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon55LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-55").innerHTML = link55;

  document.getElementById("price-56").innerHTML =
    "$" + results[0].data[55].price_usd;
  document.getElementById("rank-56").innerHTML = results[0].data[55].rank;
  document.getElementById("name-56").innerHTML = results[0].data[55].nameid;
  document.getElementById("symbol-56").innerHTML = results[0].data[55].symbol;
  document.getElementById("change24-56").innerHTML =
    results[0].data[55].percent_change_24h;
  document.getElementById("change7d-56").innerHTML =
    results[0].data[55].percent_change_7d;
  document.getElementById("change1h-56").innerHTML =
    results[0].data[55].percent_change_1h;
  if (document.getElementById("change1h-56").textContent >= 0) {
    document.getElementById("change1h-56").className = "positive";
  } else {
    document.getElementById("change1h-56").className = "negative";
  }
  if (document.getElementById("change24-56").textContent >= 0) {
    document.getElementById("change24-56").className = "positive";
  } else {
    document.getElementById("change24-56").className = "negative";
  }
  if (document.getElementById("change7d-56").textContent >= 0) {
    document.getElementById("change7d-56").className = "positive";
  } else {
    document.getElementById("change7d-56").className = "negative";
  }

  let icon56 = results[0].data[55].symbol;
  let icon56LowCaps = icon56.toLowerCase();
  let link56 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon56LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-56").innerHTML = link56;

  document.getElementById("price-57").innerHTML =
    "$" + results[0].data[56].price_usd;
  document.getElementById("rank-57").innerHTML = results[0].data[56].rank;
  document.getElementById("name-57").innerHTML = results[0].data[56].nameid;
  document.getElementById("symbol-57").innerHTML = results[0].data[56].symbol;
  document.getElementById("change24-57").innerHTML =
    results[0].data[56].percent_change_24h;
  document.getElementById("change7d-57").innerHTML =
    results[0].data[56].percent_change_7d;
  document.getElementById("change1h-57").innerHTML =
    results[0].data[56].percent_change_1h;
  if (document.getElementById("change1h-57").textContent >= 0) {
    document.getElementById("change1h-57").className = "positive";
  } else {
    document.getElementById("change1h-57").className = "negative";
  }
  if (document.getElementById("change24-57").textContent >= 0) {
    document.getElementById("change24-57").className = "positive";
  } else {
    document.getElementById("change24-57").className = "negative";
  }
  if (document.getElementById("change7d-57").textContent >= 0) {
    document.getElementById("change7d-57").className = "positive";
  } else {
    document.getElementById("change7d-57").className = "negative";
  }

  let icon57 = results[0].data[56].symbol;
  let icon57LowCaps = icon57.toLowerCase();
  let link57 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon57LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-57").innerHTML = link57;

  document.getElementById("price-58").innerHTML =
    "$" + results[0].data[57].price_usd;
  document.getElementById("rank-58").innerHTML = results[0].data[57].rank;
  document.getElementById("name-58").innerHTML = results[0].data[57].nameid;
  document.getElementById("symbol-58").innerHTML = results[0].data[57].symbol;
  document.getElementById("change24-58").innerHTML =
    results[0].data[57].percent_change_24h;
  document.getElementById("change7d-58").innerHTML =
    results[0].data[57].percent_change_7d;
  document.getElementById("change1h-58").innerHTML =
    results[0].data[57].percent_change_1h;
  if (document.getElementById("change1h-58").textContent >= 0) {
    document.getElementById("change1h-58").className = "positive";
  } else {
    document.getElementById("change1h-58").className = "negative";
  }
  if (document.getElementById("change24-58").textContent >= 0) {
    document.getElementById("change24-58").className = "positive";
  } else {
    document.getElementById("change24-58").className = "negative";
  }
  if (document.getElementById("change7d-58").textContent >= 0) {
    document.getElementById("change7d-58").className = "positive";
  } else {
    document.getElementById("change7d-58").className = "negative";
  }

  let icon58 = results[0].data[57].symbol;
  let icon58LowCaps = icon58.toLowerCase();
  let link58 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon58LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-58").innerHTML = link58;

  document.getElementById("price-59").innerHTML =
    "$" + results[0].data[58].price_usd;
  document.getElementById("rank-59").innerHTML = results[0].data[58].rank;
  document.getElementById("name-59").innerHTML = results[0].data[58].nameid;
  document.getElementById("symbol-59").innerHTML = results[0].data[58].symbol;
  document.getElementById("change24-59").innerHTML =
    results[0].data[58].percent_change_24h;
  document.getElementById("change7d-59").innerHTML =
    results[0].data[58].percent_change_7d;
  document.getElementById("change1h-59").innerHTML =
    results[0].data[58].percent_change_1h;
  if (document.getElementById("change1h-59").textContent >= 0) {
    document.getElementById("change1h-59").className = "positive";
  } else {
    document.getElementById("change1h-59").className = "negative";
  }
  if (document.getElementById("change24-59").textContent >= 0) {
    document.getElementById("change24-59").className = "positive";
  } else {
    document.getElementById("change24-59").className = "negative";
  }
  if (document.getElementById("change7d-59").textContent >= 0) {
    document.getElementById("change7d-59").className = "positive";
  } else {
    document.getElementById("change7d-59").className = "negative";
  }

  let icon59 = results[0].data[58].symbol;
  let icon59LowCaps = icon59.toLowerCase();
  let link59 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon59LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-59").innerHTML = link59;

  document.getElementById("price-60").innerHTML =
    "$" + results[0].data[59].price_usd;
  document.getElementById("rank-60").innerHTML = results[0].data[59].rank;
  document.getElementById("name-60").innerHTML = results[0].data[59].nameid;
  document.getElementById("symbol-60").innerHTML = results[0].data[59].symbol;
  document.getElementById("change24-60").innerHTML =
    results[0].data[59].percent_change_24h;
  document.getElementById("change7d-60").innerHTML =
    results[0].data[59].percent_change_7d;
  document.getElementById("change1h-60").innerHTML =
    results[0].data[59].percent_change_1h;
  if (document.getElementById("change1h-60").textContent >= 0) {
    document.getElementById("change1h-60").className = "positive";
  } else {
    document.getElementById("change1h-60").className = "negative";
  }
  if (document.getElementById("change24-60").textContent >= 0) {
    document.getElementById("change24-60").className = "positive";
  } else {
    document.getElementById("change24-60").className = "negative";
  }
  if (document.getElementById("change7d-60").textContent >= 0) {
    document.getElementById("change7d-60").className = "positive";
  } else {
    document.getElementById("change7d-60").className = "negative";
  }

  let icon60 = results[0].data[59].symbol;
  let icon60LowCaps = icon60.toLowerCase();
  let link60 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon60LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-60").innerHTML = link60;

  document.getElementById("price-61").innerHTML =
    "$" + results[0].data[60].price_usd;
  document.getElementById("rank-61").innerHTML = results[0].data[60].rank;
  document.getElementById("name-61").innerHTML = results[0].data[60].nameid;
  document.getElementById("symbol-61").innerHTML = results[0].data[60].symbol;
  document.getElementById("change24-61").innerHTML =
    results[0].data[60].percent_change_24h;
  document.getElementById("change7d-61").innerHTML =
    results[0].data[60].percent_change_7d;
  document.getElementById("change1h-61").innerHTML =
    results[0].data[60].percent_change_1h;
  if (document.getElementById("change1h-61").textContent >= 0) {
    document.getElementById("change1h-61").className = "positive";
  } else {
    document.getElementById("change1h-61").className = "negative";
  }
  if (document.getElementById("change24-61").textContent >= 0) {
    document.getElementById("change24-61").className = "positive";
  } else {
    document.getElementById("change24-61").className = "negative";
  }
  if (document.getElementById("change7d-61").textContent >= 0) {
    document.getElementById("change7d-61").className = "positive";
  } else {
    document.getElementById("change7d-61").className = "negative";
  }

  let icon61 = results[0].data[60].symbol;
  let icon61LowCaps = icon61.toLowerCase();
  let link61 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon61LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-61").innerHTML = link61;

  document.getElementById("price-62").innerHTML =
    "$" + results[0].data[61].price_usd;
  document.getElementById("rank-62").innerHTML = results[0].data[61].rank;
  document.getElementById("name-62").innerHTML = results[0].data[61].nameid;
  document.getElementById("symbol-62").innerHTML = results[0].data[61].symbol;
  document.getElementById("change24-62").innerHTML =
    results[0].data[61].percent_change_24h;
  document.getElementById("change7d-62").innerHTML =
    results[0].data[61].percent_change_7d;
  document.getElementById("change1h-62").innerHTML =
    results[0].data[61].percent_change_1h;
  if (document.getElementById("change1h-62").textContent >= 0) {
    document.getElementById("change1h-62").className = "positive";
  } else {
    document.getElementById("change1h-62").className = "negative";
  }
  if (document.getElementById("change24-62").textContent >= 0) {
    document.getElementById("change24-62").className = "positive";
  } else {
    document.getElementById("change24-62").className = "negative";
  }
  if (document.getElementById("change7d-62").textContent >= 0) {
    document.getElementById("change7d-62").className = "positive";
  } else {
    document.getElementById("change7d-62").className = "negative";
  }

  let icon62 = results[0].data[61].symbol;
  let icon62LowCaps = icon62.toLowerCase();
  let link62 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon62LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-62").innerHTML = link62;

  document.getElementById("price-63").innerHTML =
    "$" + results[0].data[62].price_usd;
  document.getElementById("rank-63").innerHTML = results[0].data[62].rank;
  document.getElementById("name-63").innerHTML = results[0].data[62].nameid;
  document.getElementById("symbol-63").innerHTML = results[0].data[62].symbol;
  document.getElementById("change24-63").innerHTML =
    results[0].data[62].percent_change_24h;
  document.getElementById("change7d-63").innerHTML =
    results[0].data[62].percent_change_7d;
  document.getElementById("change1h-63").innerHTML =
    results[0].data[62].percent_change_1h;
  if (document.getElementById("change1h-63").textContent >= 0) {
    document.getElementById("change1h-63").className = "positive";
  } else {
    document.getElementById("change1h-63").className = "negative";
  }
  if (document.getElementById("change24-63").textContent >= 0) {
    document.getElementById("change24-63").className = "positive";
  } else {
    document.getElementById("change24-63").className = "negative";
  }
  if (document.getElementById("change7d-63").textContent >= 0) {
    document.getElementById("change7d-63").className = "positive";
  } else {
    document.getElementById("change7d-63").className = "negative";
  }

  let icon63 = results[0].data[62].symbol;
  let icon63LowCaps = icon63.toLowerCase();
  let link63 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon63LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-63").innerHTML = link63;

  document.getElementById("price-64").innerHTML =
    "$" + results[0].data[63].price_usd;
  document.getElementById("rank-64").innerHTML = results[0].data[63].rank;
  document.getElementById("name-64").innerHTML = results[0].data[63].nameid;
  document.getElementById("symbol-64").innerHTML = results[0].data[63].symbol;
  document.getElementById("change24-64").innerHTML =
    results[0].data[63].percent_change_24h;
  document.getElementById("change7d-64").innerHTML =
    results[0].data[63].percent_change_7d;
  document.getElementById("change1h-64").innerHTML =
    results[0].data[63].percent_change_1h;
  if (document.getElementById("change1h-64").textContent >= 0) {
    document.getElementById("change1h-64").className = "positive";
  } else {
    document.getElementById("change1h-64").className = "negative";
  }
  if (document.getElementById("change24-64").textContent >= 0) {
    document.getElementById("change24-64").className = "positive";
  } else {
    document.getElementById("change24-64").className = "negative";
  }
  if (document.getElementById("change7d-64").textContent >= 0) {
    document.getElementById("change7d-64").className = "positive";
  } else {
    document.getElementById("change7d-64").className = "negative";
  }

  let icon64 = results[0].data[63].symbol;
  let icon64LowCaps = icon64.toLowerCase();
  let link64 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon64LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-64").innerHTML = link64;

  document.getElementById("price-65").innerHTML =
    "$" + results[0].data[64].price_usd;
  document.getElementById("rank-65").innerHTML = results[0].data[64].rank;
  document.getElementById("name-65").innerHTML = results[0].data[64].nameid;
  document.getElementById("symbol-65").innerHTML = results[0].data[64].symbol;
  document.getElementById("change24-65").innerHTML =
    results[0].data[64].percent_change_24h;
  document.getElementById("change7d-65").innerHTML =
    results[0].data[64].percent_change_7d;
  document.getElementById("change1h-65").innerHTML =
    results[0].data[64].percent_change_1h;
  if (document.getElementById("change1h-65").textContent >= 0) {
    document.getElementById("change1h-65").className = "positive";
  } else {
    document.getElementById("change1h-65").className = "negative";
  }
  if (document.getElementById("change24-65").textContent >= 0) {
    document.getElementById("change24-65").className = "positive";
  } else {
    document.getElementById("change24-65").className = "negative";
  }
  if (document.getElementById("change7d-65").textContent >= 0) {
    document.getElementById("change7d-65").className = "positive";
  } else {
    document.getElementById("change7d-65").className = "negative";
  }

  let icon65 = results[0].data[64].symbol;
  let icon65LowCaps = icon65.toLowerCase();
  let link65 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon65LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-65").innerHTML = link65;

  document.getElementById("price-66").innerHTML =
    "$" + results[0].data[65].price_usd;
  document.getElementById("rank-66").innerHTML = results[0].data[65].rank;
  document.getElementById("name-66").innerHTML = results[0].data[65].nameid;
  document.getElementById("symbol-66").innerHTML = results[0].data[65].symbol;
  document.getElementById("change24-66").innerHTML =
    results[0].data[65].percent_change_24h;
  document.getElementById("change7d-66").innerHTML =
    results[0].data[65].percent_change_7d;
  document.getElementById("change1h-66").innerHTML =
    results[0].data[65].percent_change_1h;
  if (document.getElementById("change1h-66").textContent >= 0) {
    document.getElementById("change1h-66").className = "positive";
  } else {
    document.getElementById("change1h-66").className = "negative";
  }
  if (document.getElementById("change24-66").textContent >= 0) {
    document.getElementById("change24-66").className = "positive";
  } else {
    document.getElementById("change24-66").className = "negative";
  }
  if (document.getElementById("change7d-66").textContent >= 0) {
    document.getElementById("change7d-66").className = "positive";
  } else {
    document.getElementById("change7d-66").className = "negative";
  }

  let icon66 = results[0].data[65].symbol;
  let icon66LowCaps = icon66.toLowerCase();
  let link66 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon66LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-66").innerHTML = link66;

  document.getElementById("price-67").innerHTML =
    "$" + results[0].data[66].price_usd;
  document.getElementById("rank-67").innerHTML = results[0].data[66].rank;
  document.getElementById("name-67").innerHTML = results[0].data[66].nameid;
  document.getElementById("symbol-67").innerHTML = results[0].data[66].symbol;
  document.getElementById("change24-67").innerHTML =
    results[0].data[66].percent_change_24h;
  document.getElementById("change7d-67").innerHTML =
    results[0].data[66].percent_change_7d;
  document.getElementById("change1h-67").innerHTML =
    results[0].data[66].percent_change_1h;
  if (document.getElementById("change1h-67").textContent >= 0) {
    document.getElementById("change1h-67").className = "positive";
  } else {
    document.getElementById("change1h-67").className = "negative";
  }
  if (document.getElementById("change24-67").textContent >= 0) {
    document.getElementById("change24-67").className = "positive";
  } else {
    document.getElementById("change24-67").className = "negative";
  }
  if (document.getElementById("change7d-67").textContent >= 0) {
    document.getElementById("change7d-67").className = "positive";
  } else {
    document.getElementById("change7d-67").className = "negative";
  }

  let icon67 = results[0].data[66].symbol;
  let icon67LowCaps = icon67.toLowerCase();
  let link67 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon67LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-67").innerHTML = link67;

  document.getElementById("price-68").innerHTML =
    "$" + results[0].data[67].price_usd;
  document.getElementById("rank-68").innerHTML = results[0].data[67].rank;
  document.getElementById("name-68").innerHTML = results[0].data[67].nameid;
  document.getElementById("symbol-68").innerHTML = results[0].data[67].symbol;
  document.getElementById("change24-68").innerHTML =
    results[0].data[67].percent_change_24h;
  document.getElementById("change7d-68").innerHTML =
    results[0].data[67].percent_change_7d;
  document.getElementById("change1h-68").innerHTML =
    results[0].data[67].percent_change_1h;
  if (document.getElementById("change1h-68").textContent >= 0) {
    document.getElementById("change1h-68").className = "positive";
  } else {
    document.getElementById("change1h-68").className = "negative";
  }
  if (document.getElementById("change24-68").textContent >= 0) {
    document.getElementById("change24-68").className = "positive";
  } else {
    document.getElementById("change24-68").className = "negative";
  }
  if (document.getElementById("change7d-68").textContent >= 0) {
    document.getElementById("change7d-68").className = "positive";
  } else {
    document.getElementById("change7d-68").className = "negative";
  }

  let icon68 = results[0].data[67].symbol;
  let icon68LowCaps = icon68.toLowerCase();
  let link68 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon68LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-68").innerHTML = link68;

  document.getElementById("price-69").innerHTML =
    "$" + results[0].data[68].price_usd;
  document.getElementById("rank-69").innerHTML = results[0].data[68].rank;
  document.getElementById("name-69").innerHTML = results[0].data[68].nameid;
  document.getElementById("symbol-69").innerHTML = results[0].data[68].symbol;
  document.getElementById("change24-69").innerHTML =
    results[0].data[68].percent_change_24h;
  document.getElementById("change7d-69").innerHTML =
    results[0].data[68].percent_change_7d;
  document.getElementById("change1h-69").innerHTML =
    results[0].data[68].percent_change_1h;
  if (document.getElementById("change1h-69").textContent >= 0) {
    document.getElementById("change1h-69").className = "positive";
  } else {
    document.getElementById("change1h-69").className = "negative";
  }
  if (document.getElementById("change24-69").textContent >= 0) {
    document.getElementById("change24-69").className = "positive";
  } else {
    document.getElementById("change24-69").className = "negative";
  }
  if (document.getElementById("change7d-69").textContent >= 0) {
    document.getElementById("change7d-69").className = "positive";
  } else {
    document.getElementById("change7d-69").className = "negative";
  }

  let icon69 = results[0].data[68].symbol;
  let icon69LowCaps = icon69.toLowerCase();
  let link69 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon69LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-69").innerHTML = link69;

  document.getElementById("price-70").innerHTML =
    "$" + results[0].data[69].price_usd;
  document.getElementById("rank-70").innerHTML = results[0].data[69].rank;
  document.getElementById("name-70").innerHTML = results[0].data[69].nameid;
  document.getElementById("symbol-70").innerHTML = results[0].data[69].symbol;
  document.getElementById("change24-70").innerHTML =
    results[0].data[69].percent_change_24h;
  document.getElementById("change7d-70").innerHTML =
    results[0].data[69].percent_change_7d;
  document.getElementById("change1h-70").innerHTML =
    results[0].data[69].percent_change_1h;
  if (document.getElementById("change1h-70").textContent >= 0) {
    document.getElementById("change1h-70").className = "positive";
  } else {
    document.getElementById("change1h-70").className = "negative";
  }
  if (document.getElementById("change24-70").textContent >= 0) {
    document.getElementById("change24-70").className = "positive";
  } else {
    document.getElementById("change24-70").className = "negative";
  }
  if (document.getElementById("change7d-70").textContent >= 0) {
    document.getElementById("change7d-70").className = "positive";
  } else {
    document.getElementById("change7d-70").className = "negative";
  }

  let icon70 = results[0].data[69].symbol;
  let icon70LowCaps = icon70.toLowerCase();
  let link70 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon70LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-70").innerHTML = link70;

  document.getElementById("price-71").innerHTML =
    "$" + results[0].data[70].price_usd;
  document.getElementById("rank-71").innerHTML = results[0].data[70].rank;
  document.getElementById("name-71").innerHTML = results[0].data[70].nameid;
  document.getElementById("symbol-71").innerHTML = results[0].data[70].symbol;
  document.getElementById("change24-71").innerHTML =
    results[0].data[70].percent_change_24h;
  document.getElementById("change7d-71").innerHTML =
    results[0].data[70].percent_change_7d;
  document.getElementById("change1h-71").innerHTML =
    results[0].data[70].percent_change_1h;
  if (document.getElementById("change1h-71").textContent >= 0) {
    document.getElementById("change1h-71").className = "positive";
  } else {
    document.getElementById("change1h-71").className = "negative";
  }
  if (document.getElementById("change24-71").textContent >= 0) {
    document.getElementById("change24-71").className = "positive";
  } else {
    document.getElementById("change24-71").className = "negative";
  }
  if (document.getElementById("change7d-71").textContent >= 0) {
    document.getElementById("change7d-71").className = "positive";
  } else {
    document.getElementById("change7d-71").className = "negative";
  }

  let icon71 = results[0].data[70].symbol;
  let icon71LowCaps = icon71.toLowerCase();
  let link71 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon71LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-71").innerHTML = link71;

  document.getElementById("price-72").innerHTML =
    "$" + results[0].data[71].price_usd;
  document.getElementById("rank-72").innerHTML = results[0].data[71].rank;
  document.getElementById("name-72").innerHTML = results[0].data[71].nameid;
  document.getElementById("symbol-72").innerHTML = results[0].data[71].symbol;
  document.getElementById("change24-72").innerHTML =
    results[0].data[71].percent_change_24h;
  document.getElementById("change7d-72").innerHTML =
    results[0].data[71].percent_change_7d;
  document.getElementById("change1h-72").innerHTML =
    results[0].data[71].percent_change_1h;
  if (document.getElementById("change1h-72").textContent >= 0) {
    document.getElementById("change1h-72").className = "positive";
  } else {
    document.getElementById("change1h-72").className = "negative";
  }
  if (document.getElementById("change24-72").textContent >= 0) {
    document.getElementById("change24-72").className = "positive";
  } else {
    document.getElementById("change24-72").className = "negative";
  }
  if (document.getElementById("change7d-72").textContent >= 0) {
    document.getElementById("change7d-72").className = "positive";
  } else {
    document.getElementById("change7d-72").className = "negative";
  }

  let icon72 = results[0].data[71].symbol;
  let icon72LowCaps = icon72.toLowerCase();
  let link72 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon72LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-72").innerHTML = link72;

  document.getElementById("price-73").innerHTML =
    "$" + results[0].data[72].price_usd;
  document.getElementById("rank-73").innerHTML = results[0].data[72].rank;
  document.getElementById("name-73").innerHTML = results[0].data[72].nameid;
  document.getElementById("symbol-73").innerHTML = results[0].data[72].symbol;
  document.getElementById("change24-73").innerHTML =
    results[0].data[72].percent_change_24h;
  document.getElementById("change7d-73").innerHTML =
    results[0].data[72].percent_change_7d;
  document.getElementById("change1h-73").innerHTML =
    results[0].data[72].percent_change_1h;
  if (document.getElementById("change1h-73").textContent >= 0) {
    document.getElementById("change1h-73").className = "positive";
  } else {
    document.getElementById("change1h-73").className = "negative";
  }
  if (document.getElementById("change24-73").textContent >= 0) {
    document.getElementById("change24-73").className = "positive";
  } else {
    document.getElementById("change24-73").className = "negative";
  }
  if (document.getElementById("change7d-73").textContent >= 0) {
    document.getElementById("change7d-73").className = "positive";
  } else {
    document.getElementById("change7d-73").className = "negative";
  }

  let icon73 = results[0].data[72].symbol;
  let icon73LowCaps = icon73.toLowerCase();
  let link73 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon73LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-73").innerHTML = link73;

  document.getElementById("price-74").innerHTML =
    "$" + results[0].data[73].price_usd;
  document.getElementById("rank-74").innerHTML = results[0].data[73].rank;
  document.getElementById("name-74").innerHTML = results[0].data[73].nameid;
  document.getElementById("symbol-74").innerHTML = results[0].data[73].symbol;
  document.getElementById("change24-74").innerHTML =
    results[0].data[73].percent_change_24h;
  document.getElementById("change7d-74").innerHTML =
    results[0].data[73].percent_change_7d;
  document.getElementById("change1h-74").innerHTML =
    results[0].data[73].percent_change_1h;
  if (document.getElementById("change1h-74").textContent >= 0) {
    document.getElementById("change1h-74").className = "positive";
  } else {
    document.getElementById("change1h-74").className = "negative";
  }
  if (document.getElementById("change24-74").textContent >= 0) {
    document.getElementById("change24-74").className = "positive";
  } else {
    document.getElementById("change24-74").className = "negative";
  }
  if (document.getElementById("change7d-74").textContent >= 0) {
    document.getElementById("change7d-74").className = "positive";
  } else {
    document.getElementById("change7d-74").className = "negative";
  }

  let icon74 = results[0].data[73].symbol;
  let icon74LowCaps = icon74.toLowerCase();
  let link74 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon74LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-74").innerHTML = link74;

  document.getElementById("price-75").innerHTML =
    "$" + results[0].data[74].price_usd;
  document.getElementById("rank-75").innerHTML = results[0].data[74].rank;
  document.getElementById("name-75").innerHTML = results[0].data[74].nameid;
  document.getElementById("symbol-75").innerHTML = results[0].data[74].symbol;
  document.getElementById("change24-75").innerHTML =
    results[0].data[74].percent_change_24h;
  document.getElementById("change7d-75").innerHTML =
    results[0].data[74].percent_change_7d;
  document.getElementById("change1h-75").innerHTML =
    results[0].data[74].percent_change_1h;
  if (document.getElementById("change1h-75").textContent >= 0) {
    document.getElementById("change1h-75").className = "positive";
  } else {
    document.getElementById("change1h-75").className = "negative";
  }
  if (document.getElementById("change24-75").textContent >= 0) {
    document.getElementById("change24-75").className = "positive";
  } else {
    document.getElementById("change24-75").className = "negative";
  }
  if (document.getElementById("change7d-75").textContent >= 0) {
    document.getElementById("change7d-75").className = "positive";
  } else {
    document.getElementById("change7d-75").className = "negative";
  }

  let icon75 = results[0].data[74].symbol;
  let icon75LowCaps = icon75.toLowerCase();
  let link75 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon75LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-75").innerHTML = link75;

  document.getElementById("price-76").innerHTML =
    "$" + results[0].data[75].price_usd;
  document.getElementById("rank-76").innerHTML = results[0].data[75].rank;
  document.getElementById("name-76").innerHTML = results[0].data[75].nameid;
  document.getElementById("symbol-76").innerHTML = results[0].data[75].symbol;
  document.getElementById("change24-76").innerHTML =
    results[0].data[75].percent_change_24h;
  document.getElementById("change7d-76").innerHTML =
    results[0].data[75].percent_change_7d;
  document.getElementById("change1h-76").innerHTML =
    results[0].data[75].percent_change_1h;
  if (document.getElementById("change1h-76").textContent >= 0) {
    document.getElementById("change1h-76").className = "positive";
  } else {
    document.getElementById("change1h-76").className = "negative";
  }
  if (document.getElementById("change24-76").textContent >= 0) {
    document.getElementById("change24-76").className = "positive";
  } else {
    document.getElementById("change24-76").className = "negative";
  }
  if (document.getElementById("change7d-76").textContent >= 0) {
    document.getElementById("change7d-76").className = "positive";
  } else {
    document.getElementById("change7d-76").className = "negative";
  }

  let icon76 = results[0].data[75].symbol;
  let icon76LowCaps = icon76.toLowerCase();
  let link76 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon76LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-76").innerHTML = link76;

  document.getElementById("price-77").innerHTML =
    "$" + results[0].data[76].price_usd;
  document.getElementById("rank-77").innerHTML = results[0].data[76].rank;
  document.getElementById("name-77").innerHTML = results[0].data[76].nameid;
  document.getElementById("symbol-77").innerHTML = results[0].data[76].symbol;
  document.getElementById("change24-77").innerHTML =
    results[0].data[76].percent_change_24h;
  document.getElementById("change7d-77").innerHTML =
    results[0].data[76].percent_change_7d;
  document.getElementById("change1h-77").innerHTML =
    results[0].data[76].percent_change_1h;
  if (document.getElementById("change1h-77").textContent >= 0) {
    document.getElementById("change1h-77").className = "positive";
  } else {
    document.getElementById("change1h-77").className = "negative";
  }
  if (document.getElementById("change24-77").textContent >= 0) {
    document.getElementById("change24-77").className = "positive";
  } else {
    document.getElementById("change24-77").className = "negative";
  }
  if (document.getElementById("change7d-77").textContent >= 0) {
    document.getElementById("change7d-77").className = "positive";
  } else {
    document.getElementById("change7d-77").className = "negative";
  }

  let icon77 = results[0].data[76].symbol;
  let icon77LowCaps = icon77.toLowerCase();
  let link77 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon77LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-77").innerHTML = link77;

  document.getElementById("price-78").innerHTML =
    "$" + results[0].data[77].price_usd;
  document.getElementById("rank-78").innerHTML = results[0].data[77].rank;
  document.getElementById("name-78").innerHTML = results[0].data[77].nameid;
  document.getElementById("symbol-78").innerHTML = results[0].data[77].symbol;
  document.getElementById("change24-78").innerHTML =
    results[0].data[77].percent_change_24h;
  document.getElementById("change7d-78").innerHTML =
    results[0].data[77].percent_change_7d;
  document.getElementById("change1h-78").innerHTML =
    results[0].data[77].percent_change_1h;
  if (document.getElementById("change1h-78").textContent >= 0) {
    document.getElementById("change1h-78").className = "positive";
  } else {
    document.getElementById("change1h-78").className = "negative";
  }
  if (document.getElementById("change24-78").textContent >= 0) {
    document.getElementById("change24-78").className = "positive";
  } else {
    document.getElementById("change24-78").className = "negative";
  }
  if (document.getElementById("change7d-78").textContent >= 0) {
    document.getElementById("change7d-78").className = "positive";
  } else {
    document.getElementById("change7d-78").className = "negative";
  }

  let icon78 = results[0].data[77].symbol;
  let icon78LowCaps = icon78.toLowerCase();
  let link78 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon78LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-78").innerHTML = link78;

  document.getElementById("price-79").innerHTML =
    "$" + results[0].data[78].price_usd;
  document.getElementById("rank-79").innerHTML = results[0].data[78].rank;
  document.getElementById("name-79").innerHTML = results[0].data[78].nameid;
  document.getElementById("symbol-79").innerHTML = results[0].data[78].symbol;
  document.getElementById("change24-79").innerHTML =
    results[0].data[78].percent_change_24h;
  document.getElementById("change7d-79").innerHTML =
    results[0].data[78].percent_change_7d;
  document.getElementById("change1h-79").innerHTML =
    results[0].data[78].percent_change_1h;
  if (document.getElementById("change1h-79").textContent >= 0) {
    document.getElementById("change1h-79").className = "positive";
  } else {
    document.getElementById("change1h-79").className = "negative";
  }
  if (document.getElementById("change24-79").textContent >= 0) {
    document.getElementById("change24-79").className = "positive";
  } else {
    document.getElementById("change24-79").className = "negative";
  }
  if (document.getElementById("change7d-79").textContent >= 0) {
    document.getElementById("change7d-79").className = "positive";
  } else {
    document.getElementById("change7d-79").className = "negative";
  }

  let icon79 = results[0].data[78].symbol;
  let icon79LowCaps = icon79.toLowerCase();
  let link79 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon79LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-79").innerHTML = link79;

  document.getElementById("price-80").innerHTML =
    "$" + results[0].data[79].price_usd;
  document.getElementById("rank-80").innerHTML = results[0].data[79].rank;
  document.getElementById("name-80").innerHTML = results[0].data[79].nameid;
  document.getElementById("symbol-80").innerHTML = results[0].data[79].symbol;
  document.getElementById("change24-80").innerHTML =
    results[0].data[79].percent_change_24h;
  document.getElementById("change7d-80").innerHTML =
    results[0].data[79].percent_change_7d;
  document.getElementById("change1h-80").innerHTML =
    results[0].data[79].percent_change_1h;
  if (document.getElementById("change1h-80").textContent >= 0) {
    document.getElementById("change1h-80").className = "positive";
  } else {
    document.getElementById("change1h-80").className = "negative";
  }
  if (document.getElementById("change24-80").textContent >= 0) {
    document.getElementById("change24-80").className = "positive";
  } else {
    document.getElementById("change24-80").className = "negative";
  }
  if (document.getElementById("change7d-80").textContent >= 0) {
    document.getElementById("change7d-80").className = "positive";
  } else {
    document.getElementById("change7d-80").className = "negative";
  }

  let icon80 = results[0].data[79].symbol;
  let icon80LowCaps = icon80.toLowerCase();
  let link80 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon80LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-80").innerHTML = link80;

  document.getElementById("price-81").innerHTML =
    "$" + results[0].data[80].price_usd;
  document.getElementById("rank-81").innerHTML = results[0].data[80].rank;
  document.getElementById("name-81").innerHTML = results[0].data[80].nameid;
  document.getElementById("symbol-81").innerHTML = results[0].data[80].symbol;
  document.getElementById("change24-81").innerHTML =
    results[0].data[80].percent_change_24h;
  document.getElementById("change7d-81").innerHTML =
    results[0].data[80].percent_change_7d;
  document.getElementById("change1h-81").innerHTML =
    results[0].data[80].percent_change_1h;
  if (document.getElementById("change1h-81").textContent >= 0) {
    document.getElementById("change1h-81").className = "positive";
  } else {
    document.getElementById("change1h-81").className = "negative";
  }
  if (document.getElementById("change24-81").textContent >= 0) {
    document.getElementById("change24-81").className = "positive";
  } else {
    document.getElementById("change24-81").className = "negative";
  }
  if (document.getElementById("change7d-81").textContent >= 0) {
    document.getElementById("change7d-81").className = "positive";
  } else {
    document.getElementById("change7d-81").className = "negative";
  }

  let icon81 = results[0].data[80].symbol;
  let icon81LowCaps = icon81.toLowerCase();
  let link81 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon81LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-81").innerHTML = link81;

  document.getElementById("price-82").innerHTML =
    "$" + results[0].data[80].price_usd;
  document.getElementById("rank-82").innerHTML = results[0].data[81].rank;
  document.getElementById("name-82").innerHTML = results[0].data[81].nameid;
  document.getElementById("symbol-82").innerHTML = results[0].data[81].symbol;
  document.getElementById("change24-82").innerHTML =
    results[0].data[81].percent_change_24h;
  document.getElementById("change7d-82").innerHTML =
    results[0].data[81].percent_change_7d;
  document.getElementById("change1h-82").innerHTML =
    results[0].data[81].percent_change_1h;
  if (document.getElementById("change1h-82").textContent >= 0) {
    document.getElementById("change1h-82").className = "positive";
  } else {
    document.getElementById("change1h-82").className = "negative";
  }
  if (document.getElementById("change24-82").textContent >= 0) {
    document.getElementById("change24-82").className = "positive";
  } else {
    document.getElementById("change24-82").className = "negative";
  }
  if (document.getElementById("change7d-82").textContent >= 0) {
    document.getElementById("change7d-82").className = "positive";
  } else {
    document.getElementById("change7d-82").className = "negative";
  }

  let icon82 = results[0].data[81].symbol;
  let icon82LowCaps = icon82.toLowerCase();
  let link82 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon82LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-82").innerHTML = link82;

  document.getElementById("price-83").innerHTML =
    "$" + results[0].data[82].price_usd;
  document.getElementById("rank-83").innerHTML = results[0].data[82].rank;
  document.getElementById("name-83").innerHTML = results[0].data[82].nameid;
  document.getElementById("symbol-83").innerHTML = results[0].data[82].symbol;
  document.getElementById("change24-83").innerHTML =
    results[0].data[82].percent_change_24h;
  document.getElementById("change7d-83").innerHTML =
    results[0].data[82].percent_change_7d;
  document.getElementById("change1h-83").innerHTML =
    results[0].data[82].percent_change_1h;
  if (document.getElementById("change1h-83").textContent >= 0) {
    document.getElementById("change1h-83").className = "positive";
  } else {
    document.getElementById("change1h-83").className = "negative";
  }
  if (document.getElementById("change24-83").textContent >= 0) {
    document.getElementById("change24-83").className = "positive";
  } else {
    document.getElementById("change24-83").className = "negative";
  }
  if (document.getElementById("change7d-83").textContent >= 0) {
    document.getElementById("change7d-83").className = "positive";
  } else {
    document.getElementById("change7d-83").className = "negative";
  }

  let icon83 = results[0].data[82].symbol;
  let icon83LowCaps = icon83.toLowerCase();
  let link83 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon83LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-83").innerHTML = link83;

  document.getElementById("price-84").innerHTML =
    "$" + results[0].data[80].price_usd;
  document.getElementById("rank-84").innerHTML = results[0].data[83].rank;
  document.getElementById("name-84").innerHTML = results[0].data[83].nameid;
  document.getElementById("symbol-84").innerHTML = results[0].data[83].symbol;
  document.getElementById("change24-84").innerHTML =
    results[0].data[83].percent_change_24h;
  document.getElementById("change7d-84").innerHTML =
    results[0].data[83].percent_change_7d;
  document.getElementById("change1h-84").innerHTML =
    results[0].data[83].percent_change_1h;
  if (document.getElementById("change1h-84").textContent >= 0) {
    document.getElementById("change1h-84").className = "positive";
  } else {
    document.getElementById("change1h-84").className = "negative";
  }
  if (document.getElementById("change24-84").textContent >= 0) {
    document.getElementById("change24-84").className = "positive";
  } else {
    document.getElementById("change24-84").className = "negative";
  }
  if (document.getElementById("change7d-84").textContent >= 0) {
    document.getElementById("change7d-84").className = "positive";
  } else {
    document.getElementById("change7d-84").className = "negative";
  }

  let icon84 = results[0].data[83].symbol;
  let icon84LowCaps = icon84.toLowerCase();
  let link84 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon84LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-84").innerHTML = link84;

  document.getElementById("price-85").innerHTML =
    "$" + results[0].data[84].price_usd;
  document.getElementById("rank-85").innerHTML = results[0].data[84].rank;
  document.getElementById("name-85").innerHTML = results[0].data[84].nameid;
  document.getElementById("symbol-85").innerHTML = results[0].data[84].symbol;
  document.getElementById("change24-85").innerHTML =
    results[0].data[84].percent_change_24h;
  document.getElementById("change7d-85").innerHTML =
    results[0].data[84].percent_change_7d;
  document.getElementById("change1h-85").innerHTML =
    results[0].data[84].percent_change_1h;
  if (document.getElementById("change1h-85").textContent >= 0) {
    document.getElementById("change1h-85").className = "positive";
  } else {
    document.getElementById("change1h-85").className = "negative";
  }
  if (document.getElementById("change24-85").textContent >= 0) {
    document.getElementById("change24-85").className = "positive";
  } else {
    document.getElementById("change24-85").className = "negative";
  }
  if (document.getElementById("change7d-85").textContent >= 0) {
    document.getElementById("change7d-85").className = "positive";
  } else {
    document.getElementById("change7d-85").className = "negative";
  }

  let icon85 = results[0].data[84].symbol;
  let icon85LowCaps = icon85.toLowerCase();
  let link85 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon85LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-85").innerHTML = link85;

  document.getElementById("price-86").innerHTML =
    "$" + results[0].data[85].price_usd;
  document.getElementById("rank-86").innerHTML = results[0].data[85].rank;
  document.getElementById("name-86").innerHTML = results[0].data[85].nameid;
  document.getElementById("symbol-86").innerHTML = results[0].data[85].symbol;
  document.getElementById("change24-86").innerHTML =
    results[0].data[85].percent_change_24h;
  document.getElementById("change7d-86").innerHTML =
    results[0].data[85].percent_change_7d;
  document.getElementById("change1h-86").innerHTML =
    results[0].data[85].percent_change_1h;
  if (document.getElementById("change1h-86").textContent >= 0) {
    document.getElementById("change1h-86").className = "positive";
  } else {
    document.getElementById("change1h-86").className = "negative";
  }
  if (document.getElementById("change24-86").textContent >= 0) {
    document.getElementById("change24-86").className = "positive";
  } else {
    document.getElementById("change24-86").className = "negative";
  }
  if (document.getElementById("change7d-86").textContent >= 0) {
    document.getElementById("change7d-86").className = "positive";
  } else {
    document.getElementById("change7d-86").className = "negative";
  }

  let icon86 = results[0].data[85].symbol;
  let icon86LowCaps = icon86.toLowerCase();
  let link86 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon86LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-86").innerHTML = link86;

  document.getElementById("price-87").innerHTML =
    "$" + results[0].data[86].price_usd;
  document.getElementById("rank-87").innerHTML = results[0].data[86].rank;
  document.getElementById("name-87").innerHTML = results[0].data[86].nameid;
  document.getElementById("symbol-87").innerHTML = results[0].data[86].symbol;
  document.getElementById("change24-87").innerHTML =
    results[0].data[86].percent_change_24h;
  document.getElementById("change7d-87").innerHTML =
    results[0].data[86].percent_change_7d;
  document.getElementById("change1h-87").innerHTML =
    results[0].data[86].percent_change_1h;
  if (document.getElementById("change1h-87").textContent >= 0) {
    document.getElementById("change1h-87").className = "positive";
  } else {
    document.getElementById("change1h-87").className = "negative";
  }
  if (document.getElementById("change24-87").textContent >= 0) {
    document.getElementById("change24-87").className = "positive";
  } else {
    document.getElementById("change24-87").className = "negative";
  }
  if (document.getElementById("change7d-87").textContent >= 0) {
    document.getElementById("change7d-87").className = "positive";
  } else {
    document.getElementById("change7d-87").className = "negative";
  }

  let icon87 = results[0].data[86].symbol;
  let icon87LowCaps = icon87.toLowerCase();
  let link87 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon87LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-87").innerHTML = link87;

  document.getElementById("price-88").innerHTML =
    "$" + results[0].data[87].price_usd;
  document.getElementById("rank-88").innerHTML = results[0].data[87].rank;
  document.getElementById("name-88").innerHTML = results[0].data[87].nameid;
  document.getElementById("symbol-88").innerHTML = results[0].data[87].symbol;
  document.getElementById("change24-88").innerHTML =
    results[0].data[87].percent_change_24h;
  document.getElementById("change7d-88").innerHTML =
    results[0].data[87].percent_change_7d;
  document.getElementById("change1h-88").innerHTML =
    results[0].data[87].percent_change_1h;
  if (document.getElementById("change1h-88").textContent >= 0) {
    document.getElementById("change1h-88").className = "positive";
  } else {
    document.getElementById("change1h-88").className = "negative";
  }
  if (document.getElementById("change24-88").textContent >= 0) {
    document.getElementById("change24-88").className = "positive";
  } else {
    document.getElementById("change24-88").className = "negative";
  }
  if (document.getElementById("change7d-88").textContent >= 0) {
    document.getElementById("change7d-88").className = "positive";
  } else {
    document.getElementById("change7d-88").className = "negative";
  }

  let icon88 = results[0].data[87].symbol;
  let icon88LowCaps = icon88.toLowerCase();
  let link88 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon88LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-88").innerHTML = link88;

  document.getElementById("price-89").innerHTML =
    "$" + results[0].data[88].price_usd;
  document.getElementById("rank-89").innerHTML = results[0].data[88].rank;
  document.getElementById("name-89").innerHTML = results[0].data[88].nameid;
  document.getElementById("symbol-89").innerHTML = results[0].data[88].symbol;
  document.getElementById("change24-89").innerHTML =
    results[0].data[88].percent_change_24h;
  document.getElementById("change7d-89").innerHTML =
    results[0].data[88].percent_change_7d;
  document.getElementById("change1h-89").innerHTML =
    results[0].data[88].percent_change_1h;
  if (document.getElementById("change1h-89").textContent >= 0) {
    document.getElementById("change1h-89").className = "positive";
  } else {
    document.getElementById("change1h-89").className = "negative";
  }
  if (document.getElementById("change24-89").textContent >= 0) {
    document.getElementById("change24-89").className = "positive";
  } else {
    document.getElementById("change24-89").className = "negative";
  }
  if (document.getElementById("change7d-89").textContent >= 0) {
    document.getElementById("change7d-89").className = "positive";
  } else {
    document.getElementById("change7d-89").className = "negative";
  }

  let icon89 = results[0].data[88].symbol;
  let icon89LowCaps = icon89.toLowerCase();
  let link89 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon89LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-89").innerHTML = link89;

  document.getElementById("price-90").innerHTML =
    "$" + results[0].data[89].price_usd;
  document.getElementById("rank-90").innerHTML = results[0].data[89].rank;
  document.getElementById("name-90").innerHTML = results[0].data[89].nameid;
  document.getElementById("symbol-90").innerHTML = results[0].data[89].symbol;
  document.getElementById("change24-90").innerHTML =
    results[0].data[89].percent_change_24h;
  document.getElementById("change7d-90").innerHTML =
    results[0].data[89].percent_change_7d;
  document.getElementById("change1h-90").innerHTML =
    results[0].data[89].percent_change_1h;
  if (document.getElementById("change1h-90").textContent >= 0) {
    document.getElementById("change1h-90").className = "positive";
  } else {
    document.getElementById("change1h-90").className = "negative";
  }
  if (document.getElementById("change24-90").textContent >= 0) {
    document.getElementById("change24-90").className = "positive";
  } else {
    document.getElementById("change24-90").className = "negative";
  }
  if (document.getElementById("change7d-90").textContent >= 0) {
    document.getElementById("change7d-90").className = "positive";
  } else {
    document.getElementById("change7d-90").className = "negative";
  }

  let icon90 = results[0].data[89].symbol;
  let icon90LowCaps = icon90.toLowerCase();
  let link90 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon90LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-90").innerHTML = link90;

  document.getElementById("price-91").innerHTML =
    "$" + results[0].data[90].price_usd;
  document.getElementById("rank-91").innerHTML = results[0].data[90].rank;
  document.getElementById("name-91").innerHTML = results[0].data[90].nameid;
  document.getElementById("symbol-91").innerHTML = results[0].data[90].symbol;
  document.getElementById("change24-91").innerHTML =
    results[0].data[90].percent_change_24h;
  document.getElementById("change7d-91").innerHTML =
    results[0].data[90].percent_change_7d;
  document.getElementById("change1h-91").innerHTML =
    results[0].data[90].percent_change_1h;
  if (document.getElementById("change1h-91").textContent >= 0) {
    document.getElementById("change1h-91").className = "positive";
  } else {
    document.getElementById("change1h-91").className = "negative";
  }
  if (document.getElementById("change24-91").textContent >= 0) {
    document.getElementById("change24-91").className = "positive";
  } else {
    document.getElementById("change24-91").className = "negative";
  }
  if (document.getElementById("change7d-91").textContent >= 0) {
    document.getElementById("change7d-91").className = "positive";
  } else {
    document.getElementById("change7d-91").className = "negative";
  }

  let icon91 = results[0].data[90].symbol;
  let icon91LowCaps = icon91.toLowerCase();
  let link91 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon91LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-91").innerHTML = link91;

  document.getElementById("price-92").innerHTML =
    "$" + results[0].data[91].price_usd;
  document.getElementById("rank-92").innerHTML = results[0].data[91].rank;
  document.getElementById("name-92").innerHTML = results[0].data[91].nameid;
  document.getElementById("symbol-92").innerHTML = results[0].data[91].symbol;
  document.getElementById("change24-92").innerHTML =
    results[0].data[91].percent_change_24h;
  document.getElementById("change7d-92").innerHTML =
    results[0].data[91].percent_change_7d;
  document.getElementById("change1h-92").innerHTML =
    results[0].data[91].percent_change_1h;
  if (document.getElementById("change1h-92").textContent >= 0) {
    document.getElementById("change1h-92").className = "positive";
  } else {
    document.getElementById("change1h-92").className = "negative";
  }
  if (document.getElementById("change24-92").textContent >= 0) {
    document.getElementById("change24-92").className = "positive";
  } else {
    document.getElementById("change24-92").className = "negative";
  }
  if (document.getElementById("change7d-92").textContent >= 0) {
    document.getElementById("change7d-92").className = "positive";
  } else {
    document.getElementById("change7d-92").className = "negative";
  }

  let icon92 = results[0].data[91].symbol;
  let icon92LowCaps = icon92.toLowerCase();
  let link92 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon92LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-92").innerHTML = link92;

  document.getElementById("price-93").innerHTML =
    "$" + results[0].data[92].price_usd;
  document.getElementById("rank-93").innerHTML = results[0].data[92].rank;
  document.getElementById("name-93").innerHTML = results[0].data[92].nameid;
  document.getElementById("symbol-93").innerHTML = results[0].data[92].symbol;
  document.getElementById("change24-93").innerHTML =
    results[0].data[92].percent_change_24h;
  document.getElementById("change7d-93").innerHTML =
    results[0].data[92].percent_change_7d;
  document.getElementById("change1h-93").innerHTML =
    results[0].data[92].percent_change_1h;
  if (document.getElementById("change1h-93").textContent >= 0) {
    document.getElementById("change1h-93").className = "positive";
  } else {
    document.getElementById("change1h-93").className = "negative";
  }
  if (document.getElementById("change24-93").textContent >= 0) {
    document.getElementById("change24-93").className = "positive";
  } else {
    document.getElementById("change24-93").className = "negative";
  }
  if (document.getElementById("change7d-93").textContent >= 0) {
    document.getElementById("change7d-93").className = "positive";
  } else {
    document.getElementById("change7d-93").className = "negative";
  }

  let icon93 = results[0].data[92].symbol;
  let icon93LowCaps = icon93.toLowerCase();
  let link93 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon93LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-93").innerHTML = link93;

  document.getElementById("price-94").innerHTML =
    "$" + results[0].data[93].price_usd;
  document.getElementById("rank-94").innerHTML = results[0].data[93].rank;
  document.getElementById("name-94").innerHTML = results[0].data[93].nameid;
  document.getElementById("symbol-94").innerHTML = results[0].data[93].symbol;
  document.getElementById("change24-94").innerHTML =
    results[0].data[93].percent_change_24h;
  document.getElementById("change7d-94").innerHTML =
    results[0].data[93].percent_change_7d;
  document.getElementById("change1h-94").innerHTML =
    results[0].data[93].percent_change_1h;
  if (document.getElementById("change1h-94").textContent >= 0) {
    document.getElementById("change1h-94").className = "positive";
  } else {
    document.getElementById("change1h-94").className = "negative";
  }
  if (document.getElementById("change24-94").textContent >= 0) {
    document.getElementById("change24-94").className = "positive";
  } else {
    document.getElementById("change24-94").className = "negative";
  }
  if (document.getElementById("change7d-94").textContent >= 0) {
    document.getElementById("change7d-94").className = "positive";
  } else {
    document.getElementById("change7d-94").className = "negative";
  }

  let icon94 = results[0].data[93].symbol;
  let icon94LowCaps = icon94.toLowerCase();
  let link94 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon94LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-94").innerHTML = link94;

  document.getElementById("price-95").innerHTML =
    "$" + results[0].data[94].price_usd;
  document.getElementById("rank-95").innerHTML = results[0].data[94].rank;
  document.getElementById("name-95").innerHTML = results[0].data[94].nameid;
  document.getElementById("symbol-95").innerHTML = results[0].data[94].symbol;
  document.getElementById("change24-95").innerHTML =
    results[0].data[94].percent_change_24h;
  document.getElementById("change7d-95").innerHTML =
    results[0].data[94].percent_change_7d;
  document.getElementById("change1h-95").innerHTML =
    results[0].data[94].percent_change_1h;
  if (document.getElementById("change1h-95").textContent >= 0) {
    document.getElementById("change1h-95").className = "positive";
  } else {
    document.getElementById("change1h-95").className = "negative";
  }
  if (document.getElementById("change24-95").textContent >= 0) {
    document.getElementById("change24-95").className = "positive";
  } else {
    document.getElementById("change24-95").className = "negative";
  }
  if (document.getElementById("change7d-95").textContent >= 0) {
    document.getElementById("change7d-95").className = "positive";
  } else {
    document.getElementById("change7d-95").className = "negative";
  }

  let icon95 = results[0].data[94].symbol;
  let icon95LowCaps = icon95.toLowerCase();
  let link95 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon95LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-95").innerHTML = link95;

  document.getElementById("price-96").innerHTML =
    "$" + results[0].data[80].price_usd;
  document.getElementById("rank-96").innerHTML = results[0].data[95].rank;
  document.getElementById("name-96").innerHTML = results[0].data[95].nameid;
  document.getElementById("symbol-96").innerHTML = results[0].data[95].symbol;
  document.getElementById("change24-96").innerHTML =
    results[0].data[95].percent_change_24h;
  document.getElementById("change7d-96").innerHTML =
    results[0].data[95].percent_change_7d;
  document.getElementById("change1h-96").innerHTML =
    results[0].data[95].percent_change_1h;
  if (document.getElementById("change1h-96").textContent >= 0) {
    document.getElementById("change1h-96").className = "positive";
  } else {
    document.getElementById("change1h-96").className = "negative";
  }
  if (document.getElementById("change24-96").textContent >= 0) {
    document.getElementById("change24-96").className = "positive";
  } else {
    document.getElementById("change24-96").className = "negative";
  }
  if (document.getElementById("change7d-96").textContent >= 0) {
    document.getElementById("change7d-96").className = "positive";
  } else {
    document.getElementById("change7d-96").className = "negative";
  }

  let icon96 = results[0].data[95].symbol;
  let icon96LowCaps = icon96.toLowerCase();
  let link96 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon96LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-96").innerHTML = link96;

  document.getElementById("price-97").innerHTML =
    "$" + results[0].data[96].price_usd;
  document.getElementById("rank-97").innerHTML = results[0].data[96].rank;
  document.getElementById("name-97").innerHTML = results[0].data[96].nameid;
  document.getElementById("symbol-97").innerHTML = results[0].data[96].symbol;
  document.getElementById("change24-97").innerHTML =
    results[0].data[96].percent_change_24h;
  document.getElementById("change7d-97").innerHTML =
    results[0].data[96].percent_change_7d;
  document.getElementById("change1h-97").innerHTML =
    results[0].data[96].percent_change_1h;
  if (document.getElementById("change1h-97").textContent >= 0) {
    document.getElementById("change1h-97").className = "positive";
  } else {
    document.getElementById("change1h-97").className = "negative";
  }
  if (document.getElementById("change24-97").textContent >= 0) {
    document.getElementById("change24-97").className = "positive";
  } else {
    document.getElementById("change24-97").className = "negative";
  }
  if (document.getElementById("change7d-97").textContent >= 0) {
    document.getElementById("change7d-97").className = "positive";
  } else {
    document.getElementById("change7d-97").className = "negative";
  }

  let icon97 = results[0].data[96].symbol;
  let icon97LowCaps = icon97.toLowerCase();
  let link97 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon97LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-97").innerHTML = link97;

  document.getElementById("price-98").innerHTML =
    "$" + results[0].data[97].price_usd;
  document.getElementById("rank-98").innerHTML = results[0].data[97].rank;
  document.getElementById("name-98").innerHTML = results[0].data[97].nameid;
  document.getElementById("symbol-98").innerHTML = results[0].data[97].symbol;
  document.getElementById("change24-98").innerHTML =
    results[0].data[97].percent_change_24h;
  document.getElementById("change7d-98").innerHTML =
    results[0].data[97].percent_change_7d;
  document.getElementById("change1h-98").innerHTML =
    results[0].data[97].percent_change_1h;
  if (document.getElementById("change1h-98").textContent >= 0) {
    document.getElementById("change1h-98").className = "positive";
  } else {
    document.getElementById("change1h-98").className = "negative";
  }
  if (document.getElementById("change24-98").textContent >= 0) {
    document.getElementById("change24-98").className = "positive";
  } else {
    document.getElementById("change24-98").className = "negative";
  }
  if (document.getElementById("change7d-98").textContent >= 0) {
    document.getElementById("change7d-98").className = "positive";
  } else {
    document.getElementById("change7d-98").className = "negative";
  }

  let icon98 = results[0].data[97].symbol;
  let icon98LowCaps = icon98.toLowerCase();
  let link98 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon98LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-98").innerHTML = link98;

  document.getElementById("price-99").innerHTML =
    "$" + results[0].data[98].price_usd;
  document.getElementById("rank-99").innerHTML = results[0].data[98].rank;
  document.getElementById("name-99").innerHTML = results[0].data[98].nameid;
  document.getElementById("symbol-99").innerHTML = results[0].data[98].symbol;
  document.getElementById("change24-99").innerHTML =
    results[0].data[98].percent_change_24h;
  document.getElementById("change7d-99").innerHTML =
    results[0].data[98].percent_change_7d;
  document.getElementById("change1h-99").innerHTML =
    results[0].data[98].percent_change_1h;
  if (document.getElementById("change1h-99").textContent >= 0) {
    document.getElementById("change1h-99").className = "positive";
  } else {
    document.getElementById("change1h-99").className = "negative";
  }
  if (document.getElementById("change24-99").textContent >= 0) {
    document.getElementById("change24-99").className = "positive";
  } else {
    document.getElementById("change24-99").className = "negative";
  }
  if (document.getElementById("change7d-99").textContent >= 0) {
    document.getElementById("change7d-99").className = "positive";
  } else {
    document.getElementById("change7d-99").className = "negative";
  }

  let icon99 = results[0].data[98].symbol;
  let icon99LowCaps = icon99.toLowerCase();
  let link99 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon99LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-99").innerHTML = link99;

  document.getElementById("price-100").innerHTML =
    "$" + results[0].data[99].price_usd;
  document.getElementById("rank-100").innerHTML = results[0].data[99].rank;
  document.getElementById("name-100").innerHTML = results[0].data[99].nameid;
  document.getElementById("symbol-100").innerHTML = results[0].data[99].symbol;
  document.getElementById("change24-100").innerHTML =
    results[0].data[99].percent_change_24h;
  document.getElementById("change7d-100").innerHTML =
    results[0].data[99].percent_change_7d;
  document.getElementById("change1h-100").innerHTML =
    results[0].data[99].percent_change_1h;
  if (document.getElementById("change1h-100").textContent >= 0) {
    document.getElementById("change1h-100").className = "positive";
  } else {
    document.getElementById("change1h-100").className = "negative";
  }
  if (document.getElementById("change24-100").textContent >= 0) {
    document.getElementById("change24-100").className = "positive";
  } else {
    document.getElementById("change24-100").className = "negative";
  }
  if (document.getElementById("change7d-100").textContent >= 0) {
    document.getElementById("change7d-100").className = "positive";
  } else {
    document.getElementById("change7d-100").className = "negative";
  }

  let icon100 = results[0].data[99].symbol;
  let icon100LowCaps = icon100.toLowerCase();
  let link100 =
    '<img src="cryptocurrency-icons-master/32/color/' +
    icon100LowCaps +
    '.png" width="20" heigth="20"/>';
  document.getElementById("icon-100").innerHTML = link100;
});

// FETCH EURO //

Promise.all([
  fetch("https://api.coinlore.net/api/tickers/").then((response) =>
    response.json()
  ),
]).then((results) => {
  const host = "api.frankfurter.app";
  fetch(`https://${host}/latest?amount=1&from=USD&to=EUR`)
    .then((resp) => resp.json())
    .then((data) => {
      let cash = data.rates.EUR;

      let eur1 = results[0].data[0].price_usd * cash;
      let eur1dec = eur1.toFixed(2);
      document.getElementById("eur-1").innerHTML = "€" + eur1dec;

      let eur2 = results[0].data[1].price_usd * cash;
      let eur2dec = eur2.toFixed(2);
      document.getElementById("eur-2").innerHTML = "€" + eur2dec;

      let eur3 = results[0].data[2].price_usd * cash;
      let eur3dec = eur3.toFixed(2);
      document.getElementById("eur-3").innerHTML = "€" + eur3dec;

      let eur4 = results[0].data[3].price_usd * cash;
      let eur4dec = eur4.toFixed(2);
      document.getElementById("eur-4").innerHTML = "€" + eur4dec;

      let eur5 = results[0].data[4].price_usd * cash;
      let eur5dec = eur5.toFixed(2);
      document.getElementById("eur-5").innerHTML = "€" + eur5dec;

      let eur6 = results[0].data[5].price_usd * cash;
      let eur6dec = eur6.toFixed(2);
      document.getElementById("eur-6").innerHTML = "€" + eur6dec;

      let eur7 = results[0].data[6].price_usd * cash;
      let eur7dec = eur7.toFixed(2);
      document.getElementById("eur-7").innerHTML = "€" + eur7dec;

      let eur8 = results[0].data[7].price_usd * cash;
      let eur8dec = eur8.toFixed(2);
      document.getElementById("eur-8").innerHTML = "€" + eur8dec;

      let eur9 = results[0].data[8].price_usd * cash;
      let eur9dec = eur9.toFixed(2);
      document.getElementById("eur-9").innerHTML = "€" + eur9dec;

      let eur10 = results[0].data[9].price_usd * cash;
      let eur10dec = eur10.toFixed(2);
      document.getElementById("eur-10").innerHTML = "€" + eur10dec;

      let eur11 = results[0].data[10].price_usd * cash;
      let eur11dec = eur11.toFixed(2);
      document.getElementById("eur-11").innerHTML = "€" + eur11dec;

      let eur12 = results[0].data[11].price_usd * cash;
      let eur12dec = eur12.toFixed(2);
      document.getElementById("eur-12").innerHTML = "€" + eur12dec;

      let eur13 = results[0].data[12].price_usd * cash;
      let eur13dec = eur13.toFixed(2);
      document.getElementById("eur-13").innerHTML = "€" + eur13dec;

      let eur14 = results[0].data[13].price_usd * cash;
      let eur14dec = eur14.toFixed(2);
      document.getElementById("eur-14").innerHTML = "€" + eur14dec;

      let eur15 = results[0].data[14].price_usd * cash;
      let eur15dec = eur15.toFixed(2);
      document.getElementById("eur-15").innerHTML = "€" + eur15dec;

      let eur16 = results[0].data[15].price_usd * cash;
      let eur16dec = eur16.toFixed(2);
      document.getElementById("eur-16").innerHTML = "€" + eur16dec;

      let eur17 = results[0].data[16].price_usd * cash;
      let eur17dec = eur17.toFixed(2);
      document.getElementById("eur-17").innerHTML = "€" + eur17dec;

      let eur18 = results[0].data[17].price_usd * cash;
      let eur18dec = eur18.toFixed(2);
      document.getElementById("eur-18").innerHTML = "€" + eur18dec;

      let eur19 = results[0].data[18].price_usd * cash;
      let eur19dec = eur19.toFixed(2);
      document.getElementById("eur-19").innerHTML = "€" + eur19dec;

      let eur20 = results[0].data[19].price_usd * cash;
      let eur20dec = eur20.toFixed(2);
      document.getElementById("eur-20").innerHTML = "€" + eur20dec;

      let eur21 = results[0].data[20].price_usd * cash;
      let eur21dec = eur21.toFixed(2);
      document.getElementById("eur-21").innerHTML = "€" + eur21dec;

      let eur22 = results[0].data[21].price_usd * cash;
      let eur22dec = eur22.toFixed(2);
      document.getElementById("eur-22").innerHTML = "€" + eur22dec;

      let eur23 = results[0].data[22].price_usd * cash;
      let eur23dec = eur23.toFixed(2);
      document.getElementById("eur-23").innerHTML = "€" + eur23dec;

      let eur24 = results[0].data[23].price_usd * cash;
      let eur24dec = eur24.toFixed(2);
      document.getElementById("eur-24").innerHTML = "€" + eur24dec;

      let eur25 = results[0].data[24].price_usd * cash;
      let eur25dec = eur25.toFixed(2);
      document.getElementById("eur-25").innerHTML = "€" + eur25dec;

      let eur26 = results[0].data[25].price_usd * cash;
      let eur26dec = eur26.toFixed(2);
      document.getElementById("eur-26").innerHTML = "€" + eur26dec;

      let eur27 = results[0].data[26].price_usd * cash;
      let eur27dec = eur27.toFixed(2);
      document.getElementById("eur-27").innerHTML = "€" + eur27dec;

      let eur28 = results[0].data[27].price_usd * cash;
      let eur28dec = eur28.toFixed(2);
      document.getElementById("eur-28").innerHTML = "€" + eur28dec;

      let eur29 = results[0].data[28].price_usd * cash;
      let eur29dec = eur29.toFixed(2);
      document.getElementById("eur-29").innerHTML = "€" + eur29dec;

      let eur30 = results[0].data[29].price_usd * cash;
      let eur30dec = eur30.toFixed(2);
      document.getElementById("eur-30").innerHTML = "€" + eur30dec;

      let eur31 = results[0].data[30].price_usd * cash;
      let eur31dec = eur31.toFixed(2);
      document.getElementById("eur-31").innerHTML = "€" + eur31dec;

      let eur32 = results[0].data[31].price_usd * cash;
      let eur32dec = eur32.toFixed(2);
      document.getElementById("eur-32").innerHTML = "€" + eur32dec;

      let eur33 = results[0].data[32].price_usd * cash;
      let eur33dec = eur33.toFixed(2);
      document.getElementById("eur-33").innerHTML = "€" + eur33dec;

      let eur34 = results[0].data[33].price_usd * cash;
      let eur34dec = eur34.toFixed(2);
      document.getElementById("eur-34").innerHTML = "€" + eur34dec;

      let eur35 = results[0].data[34].price_usd * cash;
      let eur35dec = eur35.toFixed(2);
      document.getElementById("eur-35").innerHTML = "€" + eur35dec;

      let eur36 = results[0].data[35].price_usd * cash;
      let eur36dec = eur36.toFixed(2);
      document.getElementById("eur-36").innerHTML = "€" + eur36dec;

      let eur37 = results[0].data[36].price_usd * cash;
      let eur37dec = eur37.toFixed(2);
      document.getElementById("eur-37").innerHTML = "€" + eur37dec;

      let eur38 = results[0].data[37].price_usd * cash;
      let eur38dec = eur38.toFixed(2);
      document.getElementById("eur-38").innerHTML = "€" + eur38dec;

      let eur39 = results[0].data[38].price_usd * cash;
      let eur39dec = eur39.toFixed(2);
      document.getElementById("eur-39").innerHTML = "€" + eur39dec;

      let eur40 = results[0].data[39].price_usd * cash;
      let eur40dec = eur40.toFixed(2);
      document.getElementById("eur-40").innerHTML = "€" + eur40dec;

      let eur41 = results[0].data[40].price_usd * cash;
      let eur41dec = eur41.toFixed(2);
      document.getElementById("eur-41").innerHTML = "€" + eur41dec;

      let eur42 = results[0].data[41].price_usd * cash;
      let eur42dec = eur42.toFixed(2);
      document.getElementById("eur-42").innerHTML = "€" + eur42dec;

      let eur43 = results[0].data[42].price_usd * cash;
      let eur43dec = eur43.toFixed(2);
      document.getElementById("eur-43").innerHTML = "€" + eur43dec;

      let eur44 = results[0].data[43].price_usd * cash;
      let eur44dec = eur44.toFixed(2);
      document.getElementById("eur-44").innerHTML = "€" + eur44dec;

      let eur45 = results[0].data[44].price_usd * cash;
      let eur45dec = eur45.toFixed(2);
      document.getElementById("eur-45").innerHTML = "€" + eur45dec;

      let eur46 = results[0].data[45].price_usd * cash;
      let eur46dec = eur46.toFixed(2);
      document.getElementById("eur-46").innerHTML = "€" + eur46dec;

      let eur47 = results[0].data[46].price_usd * cash;
      let eur47dec = eur47.toFixed(2);
      document.getElementById("eur-47").innerHTML = "€" + eur47dec;

      let eur48 = results[0].data[47].price_usd * cash;
      let eur48dec = eur48.toFixed(2);
      document.getElementById("eur-48").innerHTML = "€" + eur48dec;

      let eur49 = results[0].data[48].price_usd * cash;
      let eur49dec = eur49.toFixed(2);
      document.getElementById("eur-49").innerHTML = "€" + eur49dec;

      let eur50 = results[0].data[49].price_usd * cash;
      let eur50dec = eur50.toFixed(2);
      document.getElementById("eur-50").innerHTML = "€" + eur50dec;

      let eur51 = results[0].data[50].price_usd * cash;
      let eur51dec = eur51.toFixed(2);
      document.getElementById("eur-51").innerHTML = "€" + eur51dec;

      let eur52 = results[0].data[51].price_usd * cash;
      let eur52dec = eur52.toFixed(2);
      document.getElementById("eur-52").innerHTML = "€" + eur52dec;

      let eur53 = results[0].data[52].price_usd * cash;
      let eur53dec = eur53.toFixed(2);
      document.getElementById("eur-53").innerHTML = "€" + eur53dec;

      let eur54 = results[0].data[53].price_usd * cash;
      let eur54dec = eur54.toFixed(2);
      document.getElementById("eur-54").innerHTML = "€" + eur54dec;

      let eur55 = results[0].data[54].price_usd * cash;
      let eur55dec = eur55.toFixed(2);
      document.getElementById("eur-55").innerHTML = "€" + eur55dec;

      let eur56 = results[0].data[55].price_usd * cash;
      let eur56dec = eur56.toFixed(2);
      document.getElementById("eur-56").innerHTML = "€" + eur56dec;

      let eur57 = results[0].data[56].price_usd * cash;
      let eur57dec = eur57.toFixed(2);
      document.getElementById("eur-57").innerHTML = "€" + eur57dec;

      let eur58 = results[0].data[57].price_usd * cash;
      let eur58dec = eur58.toFixed(2);
      document.getElementById("eur-58").innerHTML = "€" + eur58dec;

      let eur59 = results[0].data[58].price_usd * cash;
      let eur59dec = eur59.toFixed(2);
      document.getElementById("eur-59").innerHTML = "€" + eur59dec;

      let eur60 = results[0].data[59].price_usd * cash;
      let eur60dec = eur60.toFixed(2);
      document.getElementById("eur-60").innerHTML = "€" + eur60dec;

      let eur61 = results[0].data[60].price_usd * cash;
      let eur61dec = eur61.toFixed(2);
      document.getElementById("eur-61").innerHTML = "€" + eur61dec;

      let eur62 = results[0].data[61].price_usd * cash;
      let eur62dec = eur62.toFixed(2);
      document.getElementById("eur-62").innerHTML = "€" + eur62dec;

      let eur63 = results[0].data[62].price_usd * cash;
      let eur63dec = eur63.toFixed(2);
      document.getElementById("eur-63").innerHTML = "€" + eur63dec;

      let eur64 = results[0].data[63].price_usd * cash;
      let eur64dec = eur64.toFixed(2);
      document.getElementById("eur-64").innerHTML = "€" + eur64dec;

      let eur65 = results[0].data[64].price_usd * cash;
      let eur65dec = eur65.toFixed(2);
      document.getElementById("eur-65").innerHTML = "€" + eur65dec;

      let eur66 = results[0].data[65].price_usd * cash;
      let eur66dec = eur66.toFixed(2);
      document.getElementById("eur-66").innerHTML = "€" + eur66dec;

      let eur67 = results[0].data[66].price_usd * cash;
      let eur67dec = eur67.toFixed(2);
      document.getElementById("eur-67").innerHTML = "€" + eur67dec;

      let eur68 = results[0].data[67].price_usd * cash;
      let eur68dec = eur68.toFixed(2);
      document.getElementById("eur-68").innerHTML = "€" + eur68dec;

      let eur69 = results[0].data[68].price_usd * cash;
      let eur69dec = eur69.toFixed(2);
      document.getElementById("eur-69").innerHTML = "€" + eur69dec;

      let eur70 = results[0].data[69].price_usd * cash;
      let eur70dec = eur70.toFixed(2);
      document.getElementById("eur-70").innerHTML = "€" + eur70dec;

      let eur71 = results[0].data[70].price_usd * cash;
      let eur71dec = eur71.toFixed(2);
      document.getElementById("eur-71").innerHTML = "€" + eur71dec;

      let eur72 = results[0].data[71].price_usd * cash;
      let eur72dec = eur72.toFixed(2);
      document.getElementById("eur-72").innerHTML = "€" + eur72dec;

      let eur73 = results[0].data[72].price_usd * cash;
      let eur73dec = eur73.toFixed(2);
      document.getElementById("eur-73").innerHTML = "€" + eur73dec;

      let eur74 = results[0].data[73].price_usd * cash;
      let eur74dec = eur74.toFixed(2);
      document.getElementById("eur-74").innerHTML = "€" + eur74dec;

      let eur75 = results[0].data[74].price_usd * cash;
      let eur75dec = eur75.toFixed(2);
      document.getElementById("eur-75").innerHTML = "€" + eur75dec;

      let eur76 = results[0].data[75].price_usd * cash;
      let eur76dec = eur76.toFixed(2);
      document.getElementById("eur-76").innerHTML = "€" + eur76dec;

      let eur77 = results[0].data[76].price_usd * cash;
      let eur77dec = eur77.toFixed(2);
      document.getElementById("eur-77").innerHTML = "€" + eur77dec;

      let eur78 = results[0].data[77].price_usd * cash;
      let eur78dec = eur78.toFixed(2);
      document.getElementById("eur-78").innerHTML = "€" + eur78dec;

      let eur79 = results[0].data[78].price_usd * cash;
      let eur79dec = eur79.toFixed(2);
      document.getElementById("eur-79").innerHTML = "€" + eur79dec;

      let eur80 = results[0].data[79].price_usd * cash;
      let eur80dec = eur80.toFixed(2);
      document.getElementById("eur-80").innerHTML = "€" + eur80dec;

      let eur81 = results[0].data[80].price_usd * cash;
      let eur81dec = eur81.toFixed(2);
      document.getElementById("eur-81").innerHTML = "€" + eur81dec;

      let eur82 = results[0].data[81].price_usd * cash;
      let eur82dec = eur82.toFixed(2);
      document.getElementById("eur-82").innerHTML = "€" + eur82dec;

      let eur83 = results[0].data[82].price_usd * cash;
      let eur83dec = eur83.toFixed(2);
      document.getElementById("eur-83").innerHTML = "€" + eur83dec;

      let eur84 = results[0].data[83].price_usd * cash;
      let eur84dec = eur84.toFixed(2);
      document.getElementById("eur-84").innerHTML = "€" + eur84dec;

      let eur85 = results[0].data[84].price_usd * cash;
      let eur85dec = eur85.toFixed(2);
      document.getElementById("eur-85").innerHTML = "€" + eur85dec;

      let eur86 = results[0].data[85].price_usd * cash;
      let eur86dec = eur86.toFixed(2);
      document.getElementById("eur-86").innerHTML = "€" + eur86dec;

      let eur87 = results[0].data[86].price_usd * cash;
      let eur87dec = eur87.toFixed(2);
      document.getElementById("eur-87").innerHTML = "€" + eur87dec;

      let eur88 = results[0].data[87].price_usd * cash;
      let eur88dec = eur88.toFixed(2);
      document.getElementById("eur-88").innerHTML = "€" + eur88dec;

      let eur89 = results[0].data[88].price_usd * cash;
      let eur89dec = eur89.toFixed(2);
      document.getElementById("eur-89").innerHTML = "€" + eur89dec;

      let eur90 = results[0].data[89].price_usd * cash;
      let eur90dec = eur90.toFixed(2);
      document.getElementById("eur-90").innerHTML = "€" + eur90dec;

      let eur91 = results[0].data[90].price_usd * cash;
      let eur91dec = eur91.toFixed(2);
      document.getElementById("eur-91").innerHTML = "€" + eur91dec;

      let eur92 = results[0].data[91].price_usd * cash;
      let eur92dec = eur92.toFixed(2);
      document.getElementById("eur-92").innerHTML = "€" + eur92dec;

      let eur93 = results[0].data[92].price_usd * cash;
      let eur93dec = eur93.toFixed(2);
      document.getElementById("eur-93").innerHTML = "€" + eur93dec;

      let eur94 = results[0].data[93].price_usd * cash;
      let eur94dec = eur94.toFixed(2);
      document.getElementById("eur-94").innerHTML = "€" + eur94dec;

      let eur95 = results[0].data[94].price_usd * cash;
      let eur95dec = eur95.toFixed(2);
      document.getElementById("eur-95").innerHTML = "€" + eur95dec;

      let eur96 = results[0].data[95].price_usd * cash;
      let eur96dec = eur96.toFixed(2);
      document.getElementById("eur-96").innerHTML = "€" + eur96dec;

      let eur97 = results[0].data[96].price_usd * cash;
      let eur97dec = eur97.toFixed(2);
      document.getElementById("eur-97").innerHTML = "€" + eur97dec;

      let eur98 = results[0].data[97].price_usd * cash;
      let eur98dec = eur98.toFixed(2);
      document.getElementById("eur-98").innerHTML = "€" + eur98dec;

      let eur99 = results[0].data[98].price_usd * cash;
      let eur99dec = eur99.toFixed(2);
      document.getElementById("eur-99").innerHTML = "€" + eur99dec;

      let eur100 = results[0].data[99].price_usd * cash;
      let eur100dec = eur100.toFixed(2);
      document.getElementById("eur-100").innerHTML = "€" + eur100dec;
    });
});

// FETCH WINNERS & LOSERS // NEWS

Promise.all([
  fetch("https://api.coinlore.net/api/tickers/").then((response) =>
    response.json()
  ),
]).then((results) => {
  let twentyFourCoins = [];
  let twentyFourWinners = [];
  let oneHourCoins = [];
  let oneHourWinners = [];
  let sevenDayCoins = [];
  let sevenDayWinners = [];

  for (let n = 0; n < results[0].data.length; n++) {
    let twentyFourString = results[0].data[n].percent_change_24h;
    let twentyFourNumber = parseFloat(twentyFourString);
    let twentyFourObject = {};
    twentyFourObject["name"] = results[0].data[n].name;
    twentyFourObject["twentyFourH"] = twentyFourNumber;
    twentyFourCoins.push(twentyFourObject);
    twentyFourWinners.push(twentyFourNumber);

    let oneHourString = results[0].data[n].percent_change_1h;
    let oneHourNumber = parseFloat(oneHourString);
    let oneHourObject = {};
    oneHourObject["name"] = results[0].data[n].name;
    oneHourObject["oneH"] = oneHourNumber;
    oneHourCoins.push(oneHourObject);
    oneHourWinners.push(oneHourNumber);

    let sevenDayString = results[0].data[n].percent_change_7d;
    let sevenDayNumber = parseFloat(sevenDayString);
    let sevenDayObject = {};
    sevenDayObject["name"] = results[0].data[n].name;
    sevenDayObject["sevenDay"] = sevenDayNumber;
    sevenDayCoins.push(sevenDayObject);
    sevenDayWinners.push(sevenDayNumber);

    // console.log(twentyFourCoins[n].twentyFourH);
  }
  // console.log(twentyFourCoins);
  // console.log(twentyFourWinners);
  let winner = Math.max(...twentyFourWinners);
  let loser = Math.min(...twentyFourWinners);
  let winnerObject = twentyFourCoins.find((o) => o.twentyFourH === winner);
  let loserObject = twentyFourCoins.find((o) => o.twentyFourH === loser);

  let oneHourWinner = Math.max(...oneHourWinners);
  let oneHourLoser = Math.min(...oneHourWinners);
  let oneHourWinnerObject = oneHourCoins.find((o) => o.oneH === oneHourWinner);
  let oneHourLoserObject = oneHourCoins.find((o) => o.oneH === oneHourLoser);

  let sevenDayWinner = Math.max(...sevenDayWinners);
  let sevenDayLoser = Math.min(...sevenDayWinners);
  let sevenDayWinnerObject = sevenDayCoins.find(
    (o) => o.sevenDay === sevenDayWinner
  );
  let sevenDayLoserObject = sevenDayCoins.find(
    (o) => o.sevenDay === sevenDayLoser
  );

  let actualWinner =
    "<i class='fas fa-trophy'></i>" +
    " 1h winner: " +
    oneHourWinnerObject.name +
    " " +
    oneHourWinnerObject.oneH +
    " % " +
    "<i class='fas fa-trophy'></i>" +
    " 24h winner: " +
    winnerObject.name +
    " " +
    winnerObject.twentyFourH +
    " % " +
    "<i class='fas fa-trophy'></i>" +
    " 7 day winner: " +
    sevenDayWinnerObject.name +
    " " +
    sevenDayWinnerObject.sevenDay +
    " %";

  let actualLoser =
    "<i class='fas fa-poop'></i>" +
    " 1h loser: " +
    oneHourLoserObject.name +
    " " +
    oneHourLoserObject.oneH +
    " % " +
    "<i class='fas fa-poop'></i>" +
    " 24h loser: " +
    loserObject.name +
    " " +
    loserObject.twentyFourH +
    " % " +
    "<i class='fas fa-poop'></i>" +
    " 7 day loser: " +
    sevenDayLoserObject.name +
    " " +
    sevenDayLoserObject.sevenDay +
    " %";

  document.querySelector("#marquee-up").innerHTML = actualWinner;
  document.querySelector("#marquee-down").innerHTML = actualLoser;
});

Promise.all([
  fetch("https://api.coinlore.net/api/exchanges/").then((response) =>
    response.json()
  ),
]).then((results) => {
  document.querySelector("#exc1-id").innerHTML = results[0][487].name_id;
  document.querySelector("#exc1-country").innerHTML = results[0][487].country;
  document.querySelector("#exc1-site").innerHTML = results[0][487].url;

  document.querySelector("#exc2-id").innerHTML = results[0][5].name_id;
  document.querySelector("#exc2-country").innerHTML = results[0][5].country;
  document.querySelector("#exc2-site").innerHTML = results[0][5].url;

  document.querySelector("#exc3-id").innerHTML = results[0][637].name_id;
  document.querySelector("#exc3-country").innerHTML = results[0][637].country;
  document.querySelector("#exc3-site").innerHTML = results[0][637].url;

  document.querySelector("#exc4-id").innerHTML = results[0][547].name_id;
  document.querySelector("#exc4-country").innerHTML = results[0][547].country;
  document.querySelector("#exc4-site").innerHTML = results[0][547].url;

  document.querySelector("#exc5-id").innerHTML = results[0][171].name_id;
  document.querySelector("#exc5-country").innerHTML = results[0][171].country;
  document.querySelector("#exc5-site").innerHTML = results[0][171].url;

  document.querySelector("#exc6-id").innerHTML = results[0][501].name_id;
  document.querySelector("#exc6-country").innerHTML = results[0][501].country;
  document.querySelector("#exc6-site").innerHTML = results[0][501].url;

  document.querySelector("#exc7-id").innerHTML = results[0][187].name_id;
  document.querySelector("#exc7-country").innerHTML = results[0][187].country;
  document.querySelector("#exc7-site").innerHTML = results[0][187].url;

  document.querySelector("#exc8-id").innerHTML = results[0][260].name_id;
  document.querySelector("#exc8-country").innerHTML = results[0][260].country;
  document.querySelector("#exc8-site").innerHTML = results[0][260].url;

  document.querySelector("#exc9-id").innerHTML = results[0][669].name_id;
  document.querySelector("#exc9-country").innerHTML = results[0][669].country;
  document.querySelector("#exc9-site").innerHTML = results[0][669].url;

  document.querySelector("#exc10-id").innerHTML = results[0][595].name_id;
  document.querySelector("#exc10-country").innerHTML = results[0][595].country;
  document.querySelector("#exc10-site").innerHTML = results[0][595].url;

  document.querySelector("#exc11-id").innerHTML = results[0][49].name_id;
  document.querySelector("#exc11-country").innerHTML = results[0][49].country;
  document.querySelector("#exc11-site").innerHTML = results[0][49].url;

  document.querySelector("#exc12-id").innerHTML = results[0][66].name_id;
  document.querySelector("#exc12-country").innerHTML = results[0][66].country;
  document.querySelector("#exc12-site").innerHTML = results[0][66].url;

  document.querySelector("#exc13-id").innerHTML = results[0][623].name_id;
  document.querySelector("#exc13-country").innerHTML = results[0][623].country;
  document.querySelector("#exc13-site").innerHTML = results[0][623].url;

  document.querySelector("#exc14-id").innerHTML = results[0][571].name_id;
  document.querySelector("#exc14-country").innerHTML = results[0][571].country;
  document.querySelector("#exc14-site").innerHTML = results[0][571].url;

  document.querySelector("#exc15-id").innerHTML = results[0][190].name_id;
  document.querySelector("#exc15-country").innerHTML = results[0][190].country;
  document.querySelector("#exc15-site").innerHTML = results[0][190].url;

  document.querySelector("#exc16-id").innerHTML = results[0][469].name_id;
  document.querySelector("#exc16-country").innerHTML = results[0][469].country;
  document.querySelector("#exc16-site").innerHTML = results[0][469].url;

  document.querySelector("#exc17-id").innerHTML = results[0][230].name_id;
  document.querySelector("#exc17-country").innerHTML = results[0][230].country;
  document.querySelector("#exc17-site").innerHTML = results[0][230].url;

  document.querySelector("#exc18-id").innerHTML = results[0][244].name_id;
  document.querySelector("#exc18-country").innerHTML = results[0][244].country;
  document.querySelector("#exc18-site").innerHTML = results[0][244].url;

  document.querySelector("#exc19-id").innerHTML = results[0][546].name_id;
  document.querySelector("#exc19-country").innerHTML = results[0][546].country;
  document.querySelector("#exc19-site").innerHTML = results[0][546].url;

  document.querySelector("#exc20-id").innerHTML = results[0][56].name_id;
  document.querySelector("#exc20-country").innerHTML = results[0][56].country;
  document.querySelector("#exc20-site").innerHTML = results[0][56].url;
});

// CHART 1 // CHART 1 //
Promise.all([
  fetch("https://api.coinlore.net/api/tickers/").then((response) =>
    response.json()
  ),
]).then((results) => {
  let oneHourCoins = [];

  for (let n = 0; n < results[0].data.length; n++) {
    let oneHourString = results[0].data[n].percent_change_1h;
    let oneHourNumber = parseFloat(oneHourString);

    let oneHourObject = {};
    oneHourObject["oneH"] = oneHourNumber;

    oneHourCoins.push(oneHourObject);
  }

  var ctx = document.getElementById("my-chart-1h").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        results[0].data[0].symbol,
        results[0].data[1].symbol,
        results[0].data[2].symbol,
        results[0].data[3].symbol,
        results[0].data[4].symbol,
        results[0].data[5].symbol,
        results[0].data[6].symbol,
        results[0].data[7].symbol,
        results[0].data[8].symbol,
        results[0].data[9].symbol,
        results[0].data[10].symbol,
        results[0].data[11].symbol,
        results[0].data[12].symbol,
        results[0].data[13].symbol,
        results[0].data[14].symbol,
        results[0].data[15].symbol,
        results[0].data[16].symbol,
        results[0].data[17].symbol,
        results[0].data[18].symbol,
        results[0].data[19].symbol,
        results[0].data[20].symbol,
        results[0].data[21].symbol,
        results[0].data[22].symbol,
        results[0].data[23].symbol,
        results[0].data[24].symbol,
      ],
      datasets: [
        {
          label: "rank 1 - 25 // 1 hour % change",
          borderColor: "rgba(0, 0, 0, 0.1)",
          data: [
            oneHourCoins[0].oneH,
            oneHourCoins[1].oneH,
            oneHourCoins[2].oneH,
            oneHourCoins[3].oneH,
            oneHourCoins[4].oneH,
            oneHourCoins[5].oneH,
            oneHourCoins[6].oneH,
            oneHourCoins[7].oneH,
            oneHourCoins[8].oneH,
            oneHourCoins[9].oneH,
            oneHourCoins[10].oneH,
            oneHourCoins[11].oneH,
            oneHourCoins[12].oneH,
            oneHourCoins[13].oneH,
            oneHourCoins[14].oneH,
            oneHourCoins[15].oneH,
            oneHourCoins[16].oneH,
            oneHourCoins[17].oneH,
            oneHourCoins[18].oneH,
            oneHourCoins[19].oneH,
            oneHourCoins[20].oneH,
            oneHourCoins[21].oneH,
            oneHourCoins[22].oneH,
            oneHourCoins[23].oneH,
            oneHourCoins[24].oneH,
          ],
          backgroundColor: [
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
          ],
          borderColor: [
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  if (sessionStorage.getItem("update") === "") {
    changeBar();
  }
  if (sessionStorage.getItem("update") === "line") {
    changeLine();
  }
  if (sessionStorage.getItem("update") === "bar") {
    changeBar();
  }
  if (sessionStorage.getItem("update") === "bubble") {
    changeBubble();
  }
  if (sessionStorage.getItem("update") === "donut") {
    changeDonut();
  }

  let line = document.getElementById("line-chart");
  let bar = document.getElementById("bar-chart");
  let bubble = document.getElementById("bubble-chart");
  let donut = document.getElementById("donut-chart");

  line.addEventListener("click", changeLine);
  bar.addEventListener("click", changeBar);
  bubble.addEventListener("click", changeBubble);
  donut.addEventListener("click", changeDonut);

  function changeLine() {
    sessionStorage.setItem("update", "line");
    let updatetype = "line";
    myChart.config.type = updatetype;
    myChart.update();
  }

  function changeBar() {
    sessionStorage.setItem("update", "bar");
    let updatetype = "bar";
    myChart.config.type = updatetype;
    myChart.update();
  }

  function changeBubble() {
    sessionStorage.setItem("update", "bubble");
    let updatetype = "bubble";
    myChart.config.type = updatetype;
    myChart.update();
  }
  function changeDonut() {
    sessionStorage.setItem("update", "donut");
    let updatetype = "doughnut";
    myChart.config.type = updatetype;
    myChart.update();
  }
});

// CHART 2 // CHART 2 //
Promise.all([
  fetch("https://api.coinlore.net/api/tickers/").then((response) =>
    response.json()
  ),
]).then((results) => {
  let oneHourCoins = [];

  for (let n = 0; n < results[0].data.length; n++) {
    let oneHourString = results[0].data[n].percent_change_24h;
    let oneHourNumber = parseFloat(oneHourString);

    let oneHourObject = {};
    oneHourObject["oneH"] = oneHourNumber;

    oneHourCoins.push(oneHourObject);
  }

  var ctx = document.getElementById("my-chart-24h").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        results[0].data[0].symbol,
        results[0].data[1].symbol,
        results[0].data[2].symbol,
        results[0].data[3].symbol,
        results[0].data[4].symbol,
        results[0].data[5].symbol,
        results[0].data[6].symbol,
        results[0].data[7].symbol,
        results[0].data[8].symbol,
        results[0].data[9].symbol,
        results[0].data[10].symbol,
        results[0].data[11].symbol,
        results[0].data[12].symbol,
        results[0].data[13].symbol,
        results[0].data[14].symbol,
        results[0].data[15].symbol,
        results[0].data[16].symbol,
        results[0].data[17].symbol,
        results[0].data[18].symbol,
        results[0].data[19].symbol,
        results[0].data[20].symbol,
        results[0].data[21].symbol,
        results[0].data[22].symbol,
        results[0].data[23].symbol,
        results[0].data[24].symbol,
      ],
      datasets: [
        {
          label: "rank 1 - 25 // 24 hour % change",
          borderColor: "rgba(0, 0, 0, 0.1)",
          data: [
            oneHourCoins[0].oneH,
            oneHourCoins[1].oneH,
            oneHourCoins[2].oneH,
            oneHourCoins[3].oneH,
            oneHourCoins[4].oneH,
            oneHourCoins[5].oneH,
            oneHourCoins[6].oneH,
            oneHourCoins[7].oneH,
            oneHourCoins[8].oneH,
            oneHourCoins[9].oneH,
            oneHourCoins[10].oneH,
            oneHourCoins[11].oneH,
            oneHourCoins[12].oneH,
            oneHourCoins[13].oneH,
            oneHourCoins[14].oneH,
            oneHourCoins[15].oneH,
            oneHourCoins[16].oneH,
            oneHourCoins[17].oneH,
            oneHourCoins[18].oneH,
            oneHourCoins[19].oneH,
            oneHourCoins[20].oneH,
            oneHourCoins[21].oneH,
            oneHourCoins[22].oneH,
            oneHourCoins[23].oneH,
            oneHourCoins[24].oneH,
          ],
          backgroundColor: [
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
          ],
          borderColor: [
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  if (sessionStorage.getItem("update") === "") {
    changeBar();
  }
  if (sessionStorage.getItem("update") === "line") {
    changeLine();
  }
  if (sessionStorage.getItem("update") === "bar") {
    changeBar();
  }
  if (sessionStorage.getItem("update") === "bubble") {
    changeBubble();
  }
  if (sessionStorage.getItem("update") === "donut") {
    changeDonut();
  }

  let line = document.getElementById("line-chart");
  let bar = document.getElementById("bar-chart");
  let bubble = document.getElementById("bubble-chart");
  let donut = document.getElementById("donut-chart");

  line.addEventListener("click", changeLine);
  bar.addEventListener("click", changeBar);
  bubble.addEventListener("click", changeBubble);
  donut.addEventListener("click", changeDonut);

  function changeLine() {
    sessionStorage.setItem("update", "line");
    let updatetype = "line";
    myChart.config.type = updatetype;
    myChart.update();
  }

  function changeBar() {
    sessionStorage.setItem("update", "bar");
    let updatetype = "bar";
    myChart.config.type = updatetype;
    myChart.update();
  }

  function changeBubble() {
    sessionStorage.setItem("update", "bubble");
    let updatetype = "bubble";
    myChart.config.type = updatetype;
    myChart.update();
  }
  function changeDonut() {
    sessionStorage.setItem("update", "donut");
    let updatetype = "doughnut";
    myChart.config.type = updatetype;
    myChart.update();
  }
});

// CHART 3 // CHART 3 //
Promise.all([
  fetch("https://api.coinlore.net/api/tickers/").then((response) =>
    response.json()
  ),
]).then((results) => {
  let oneHourCoins = [];

  for (let n = 0; n < results[0].data.length; n++) {
    let oneHourString = results[0].data[n].percent_change_7d;
    let oneHourNumber = parseFloat(oneHourString);

    let oneHourObject = {};
    oneHourObject["oneH"] = oneHourNumber;

    oneHourCoins.push(oneHourObject);
  }

  var ctx = document.getElementById("my-chart-7d").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        results[0].data[0].symbol,
        results[0].data[1].symbol,
        results[0].data[2].symbol,
        results[0].data[3].symbol,
        results[0].data[4].symbol,
        results[0].data[5].symbol,
        results[0].data[6].symbol,
        results[0].data[7].symbol,
        results[0].data[8].symbol,
        results[0].data[9].symbol,
        results[0].data[10].symbol,
        results[0].data[11].symbol,
        results[0].data[12].symbol,
        results[0].data[13].symbol,
        results[0].data[14].symbol,
        results[0].data[15].symbol,
        results[0].data[16].symbol,
        results[0].data[17].symbol,
        results[0].data[18].symbol,
        results[0].data[19].symbol,
        results[0].data[20].symbol,
        results[0].data[21].symbol,
        results[0].data[22].symbol,
        results[0].data[23].symbol,
        results[0].data[24].symbol,
      ],
      datasets: [
        {
          label: " rank 1 - 25 // 7 day % change",
          borderColor: "rgba(0, 0, 0, 0.1)",
          data: [
            oneHourCoins[0].oneH,
            oneHourCoins[1].oneH,
            oneHourCoins[2].oneH,
            oneHourCoins[3].oneH,
            oneHourCoins[4].oneH,
            oneHourCoins[5].oneH,
            oneHourCoins[6].oneH,
            oneHourCoins[7].oneH,
            oneHourCoins[8].oneH,
            oneHourCoins[9].oneH,
            oneHourCoins[10].oneH,
            oneHourCoins[11].oneH,
            oneHourCoins[12].oneH,
            oneHourCoins[13].oneH,
            oneHourCoins[14].oneH,
            oneHourCoins[15].oneH,
            oneHourCoins[16].oneH,
            oneHourCoins[17].oneH,
            oneHourCoins[18].oneH,
            oneHourCoins[19].oneH,
            oneHourCoins[20].oneH,
            oneHourCoins[21].oneH,
            oneHourCoins[22].oneH,
            oneHourCoins[23].oneH,
            oneHourCoins[24].oneH,
          ],
          backgroundColor: [
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
          ],
          borderColor: [
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  if (sessionStorage.getItem("update") === "") {
    changeBar();
  }
  if (sessionStorage.getItem("update") === "line") {
    changeLine();
  }
  if (sessionStorage.getItem("update") === "bar") {
    changeBar();
  }
  if (sessionStorage.getItem("update") === "bubble") {
    changeBubble();
  }
  if (sessionStorage.getItem("update") === "donut") {
    changeDonut();
  }

  let line = document.getElementById("line-chart");
  let bar = document.getElementById("bar-chart");
  let bubble = document.getElementById("bubble-chart");
  let donut = document.getElementById("donut-chart");

  line.addEventListener("click", changeLine);
  bar.addEventListener("click", changeBar);
  bubble.addEventListener("click", changeBubble);
  donut.addEventListener("click", changeDonut);

  function changeLine() {
    sessionStorage.setItem("update", "line");
    let updatetype = "line";
    myChart.config.type = updatetype;
    myChart.update();
  }

  function changeBar() {
    sessionStorage.setItem("update", "bar");
    let updatetype = "bar";
    myChart.config.type = updatetype;
    myChart.update();
  }

  function changeBubble() {
    sessionStorage.setItem("update", "bubble");
    let updatetype = "bubble";
    myChart.config.type = updatetype;
    myChart.update();
  }
  function changeDonut() {
    sessionStorage.setItem("update", "donut");
    let updatetype = "doughnut";
    myChart.config.type = updatetype;
    myChart.update();
  }
});

// CHART 4 // CHART 4 //
Promise.all([
  fetch("https://api.coinlore.net/api/tickers/").then((response) =>
    response.json()
  ),
]).then((results) => {
  let oneHourCoins = [];

  for (let n = 0; n < results[0].data.length; n++) {
    let oneHourString = results[0].data[n].percent_change_1h;
    let oneHourNumber = parseFloat(oneHourString);

    let oneHourObject = {};
    oneHourObject["oneH"] = oneHourNumber;

    oneHourCoins.push(oneHourObject);
  }

  var ctx = document.getElementById("my-chart-1h-bottom").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        results[0].data[25].symbol,
        results[0].data[26].symbol,
        results[0].data[27].symbol,
        results[0].data[28].symbol,
        results[0].data[29].symbol,
        results[0].data[30].symbol,
        results[0].data[31].symbol,
        results[0].data[32].symbol,
        results[0].data[33].symbol,
        results[0].data[34].symbol,
        results[0].data[35].symbol,
        results[0].data[36].symbol,
        results[0].data[37].symbol,
        results[0].data[38].symbol,
        results[0].data[39].symbol,
        results[0].data[40].symbol,
        results[0].data[41].symbol,
        results[0].data[42].symbol,
        results[0].data[43].symbol,
        results[0].data[44].symbol,
        results[0].data[45].symbol,
        results[0].data[46].symbol,
        results[0].data[47].symbol,
        results[0].data[48].symbol,
        results[0].data[49].symbol,
      ],
      datasets: [
        {
          label: "rank 26 - 50 // 1 hour % change",
          borderColor: "rgba(0, 0, 0, 0.1)",
          data: [
            oneHourCoins[25].oneH,
            oneHourCoins[26].oneH,
            oneHourCoins[27].oneH,
            oneHourCoins[28].oneH,
            oneHourCoins[29].oneH,
            oneHourCoins[30].oneH,
            oneHourCoins[31].oneH,
            oneHourCoins[32].oneH,
            oneHourCoins[33].oneH,
            oneHourCoins[34].oneH,
            oneHourCoins[35].oneH,
            oneHourCoins[36].oneH,
            oneHourCoins[37].oneH,
            oneHourCoins[38].oneH,
            oneHourCoins[39].oneH,
            oneHourCoins[40].oneH,
            oneHourCoins[41].oneH,
            oneHourCoins[42].oneH,
            oneHourCoins[43].oneH,
            oneHourCoins[44].oneH,
            oneHourCoins[45].oneH,
            oneHourCoins[46].oneH,
            oneHourCoins[47].oneH,
            oneHourCoins[48].oneH,
            oneHourCoins[49].oneH,
          ],
          backgroundColor: [
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
          ],
          borderColor: [
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  if (sessionStorage.getItem("update") === "") {
    changeBar();
  }
  if (sessionStorage.getItem("update") === "line") {
    changeLine();
  }
  if (sessionStorage.getItem("update") === "bar") {
    changeBar();
  }
  if (sessionStorage.getItem("update") === "bubble") {
    changeBubble();
  }
  if (sessionStorage.getItem("update") === "donut") {
    changeDonut();
  }

  let line = document.getElementById("line-chart");
  let bar = document.getElementById("bar-chart");
  let bubble = document.getElementById("bubble-chart");
  let donut = document.getElementById("donut-chart");

  line.addEventListener("click", changeLine);
  bar.addEventListener("click", changeBar);
  bubble.addEventListener("click", changeBubble);
  donut.addEventListener("click", changeDonut);

  function changeLine() {
    sessionStorage.setItem("update", "line");
    let updatetype = "line";
    myChart.config.type = updatetype;
    myChart.update();
  }

  function changeBar() {
    sessionStorage.setItem("update", "bar");
    let updatetype = "bar";
    myChart.config.type = updatetype;
    myChart.update();
  }

  function changeBubble() {
    sessionStorage.setItem("update", "bubble");
    let updatetype = "bubble";
    myChart.config.type = updatetype;
    myChart.update();
  }
  function changeDonut() {
    sessionStorage.setItem("update", "donut");
    let updatetype = "doughnut";
    myChart.config.type = updatetype;
    myChart.update();
  }
});

// CHART 5 // CHART 5 //
Promise.all([
  fetch("https://api.coinlore.net/api/tickers/").then((response) =>
    response.json()
  ),
]).then((results) => {
  let oneHourCoins = [];

  for (let n = 0; n < results[0].data.length; n++) {
    let oneHourString = results[0].data[n].percent_change_24h;
    let oneHourNumber = parseFloat(oneHourString);

    let oneHourObject = {};
    oneHourObject["oneH"] = oneHourNumber;

    oneHourCoins.push(oneHourObject);
  }

  var ctx = document.getElementById("my-chart-24h-bottom").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        results[0].data[25].symbol,
        results[0].data[26].symbol,
        results[0].data[27].symbol,
        results[0].data[28].symbol,
        results[0].data[29].symbol,
        results[0].data[30].symbol,
        results[0].data[31].symbol,
        results[0].data[32].symbol,
        results[0].data[33].symbol,
        results[0].data[34].symbol,
        results[0].data[35].symbol,
        results[0].data[36].symbol,
        results[0].data[37].symbol,
        results[0].data[38].symbol,
        results[0].data[39].symbol,
        results[0].data[40].symbol,
        results[0].data[41].symbol,
        results[0].data[42].symbol,
        results[0].data[43].symbol,
        results[0].data[44].symbol,
        results[0].data[45].symbol,
        results[0].data[46].symbol,
        results[0].data[47].symbol,
        results[0].data[48].symbol,
        results[0].data[49].symbol,
      ],
      datasets: [
        {
          label: "rank 26 - 50 // 24 hour % change",
          borderColor: "rgba(0, 0, 0, 0.1)",
          data: [
            oneHourCoins[25].oneH,
            oneHourCoins[26].oneH,
            oneHourCoins[27].oneH,
            oneHourCoins[28].oneH,
            oneHourCoins[29].oneH,
            oneHourCoins[30].oneH,
            oneHourCoins[31].oneH,
            oneHourCoins[32].oneH,
            oneHourCoins[33].oneH,
            oneHourCoins[34].oneH,
            oneHourCoins[35].oneH,
            oneHourCoins[36].oneH,
            oneHourCoins[37].oneH,
            oneHourCoins[38].oneH,
            oneHourCoins[39].oneH,
            oneHourCoins[40].oneH,
            oneHourCoins[41].oneH,
            oneHourCoins[42].oneH,
            oneHourCoins[43].oneH,
            oneHourCoins[44].oneH,
            oneHourCoins[45].oneH,
            oneHourCoins[46].oneH,
            oneHourCoins[47].oneH,
            oneHourCoins[48].oneH,
            oneHourCoins[49].oneH,
          ],
          backgroundColor: [
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
          ],
          borderColor: [
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  if (sessionStorage.getItem("update") === "") {
    changeBar();
  }
  if (sessionStorage.getItem("update") === "line") {
    changeLine();
  }
  if (sessionStorage.getItem("update") === "bar") {
    changeBar();
  }
  if (sessionStorage.getItem("update") === "bubble") {
    changeBubble();
  }
  if (sessionStorage.getItem("update") === "donut") {
    changeDonut();
  }

  let line = document.getElementById("line-chart");
  let bar = document.getElementById("bar-chart");
  let bubble = document.getElementById("bubble-chart");
  let donut = document.getElementById("donut-chart");

  line.addEventListener("click", changeLine);
  bar.addEventListener("click", changeBar);
  bubble.addEventListener("click", changeBubble);
  donut.addEventListener("click", changeDonut);

  function changeLine() {
    sessionStorage.setItem("update", "line");
    let updatetype = "line";
    myChart.config.type = updatetype;
    myChart.update();
  }

  function changeBar() {
    sessionStorage.setItem("update", "bar");
    let updatetype = "bar";
    myChart.config.type = updatetype;
    myChart.update();
  }

  function changeBubble() {
    sessionStorage.setItem("update", "bubble");
    let updatetype = "bubble";
    myChart.config.type = updatetype;
    myChart.update();
  }
  function changeDonut() {
    sessionStorage.setItem("update", "donut");
    let updatetype = "doughnut";
    myChart.config.type = updatetype;
    myChart.update();
  }
});

// CHART 6 // CHART 6 //
Promise.all([
  fetch("https://api.coinlore.net/api/tickers/").then((response) =>
    response.json()
  ),
]).then((results) => {
  let oneHourCoins = [];

  for (let n = 0; n < results[0].data.length; n++) {
    let oneHourString = results[0].data[n].percent_change_7d;
    let oneHourNumber = parseFloat(oneHourString);

    let oneHourObject = {};
    oneHourObject["oneH"] = oneHourNumber;

    oneHourCoins.push(oneHourObject);
  }

  var ctx = document.getElementById("my-chart-7d-bottom").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        results[0].data[25].symbol,
        results[0].data[26].symbol,
        results[0].data[27].symbol,
        results[0].data[28].symbol,
        results[0].data[29].symbol,
        results[0].data[30].symbol,
        results[0].data[31].symbol,
        results[0].data[32].symbol,
        results[0].data[33].symbol,
        results[0].data[34].symbol,
        results[0].data[35].symbol,
        results[0].data[36].symbol,
        results[0].data[37].symbol,
        results[0].data[38].symbol,
        results[0].data[39].symbol,
        results[0].data[40].symbol,
        results[0].data[41].symbol,
        results[0].data[42].symbol,
        results[0].data[43].symbol,
        results[0].data[44].symbol,
        results[0].data[45].symbol,
        results[0].data[46].symbol,
        results[0].data[47].symbol,
        results[0].data[48].symbol,
        results[0].data[49].symbol,
      ],
      datasets: [
        {
          label: "rank 26 - 50 // 7 day % change",
          borderColor: "rgba(0, 0, 0, 0.1)",
          data: [
            oneHourCoins[25].oneH,
            oneHourCoins[26].oneH,
            oneHourCoins[27].oneH,
            oneHourCoins[28].oneH,
            oneHourCoins[29].oneH,
            oneHourCoins[30].oneH,
            oneHourCoins[31].oneH,
            oneHourCoins[32].oneH,
            oneHourCoins[33].oneH,
            oneHourCoins[34].oneH,
            oneHourCoins[35].oneH,
            oneHourCoins[36].oneH,
            oneHourCoins[37].oneH,
            oneHourCoins[38].oneH,
            oneHourCoins[39].oneH,
            oneHourCoins[40].oneH,
            oneHourCoins[41].oneH,
            oneHourCoins[42].oneH,
            oneHourCoins[43].oneH,
            oneHourCoins[44].oneH,
            oneHourCoins[45].oneH,
            oneHourCoins[46].oneH,
            oneHourCoins[47].oneH,
            oneHourCoins[48].oneH,
            oneHourCoins[49].oneH,
          ],
          backgroundColor: [
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
          ],
          borderColor: [
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  if (sessionStorage.getItem("update") === "") {
    changeBar();
  }
  if (sessionStorage.getItem("update") === "line") {
    changeLine();
  }
  if (sessionStorage.getItem("update") === "bar") {
    changeBar();
  }
  if (sessionStorage.getItem("update") === "bubble") {
    changeBubble();
  }
  if (sessionStorage.getItem("update") === "donut") {
    changeDonut();
  }

  let line = document.getElementById("line-chart");
  let bar = document.getElementById("bar-chart");
  let bubble = document.getElementById("bubble-chart");
  let donut = document.getElementById("donut-chart");

  line.addEventListener("click", changeLine);
  bar.addEventListener("click", changeBar);
  bubble.addEventListener("click", changeBubble);
  donut.addEventListener("click", changeDonut);

  function changeLine() {
    sessionStorage.setItem("update", "line");
    let updatetype = "line";
    myChart.config.type = updatetype;
    myChart.update();
  }

  function changeBar() {
    sessionStorage.setItem("update", "bar");
    let updatetype = "bar";
    myChart.config.type = updatetype;
    myChart.update();
  }

  function changeBubble() {
    sessionStorage.setItem("update", "bubble");
    let updatetype = "bubble";
    myChart.config.type = updatetype;
    myChart.update();
  }
  function changeDonut() {
    sessionStorage.setItem("update", "donut");
    let updatetype = "doughnut";
    myChart.config.type = updatetype;
    myChart.update();
  }
});

// CHART - 76-100 24h // CHART 6 //
Promise.all([
  fetch("https://api.coinlore.net/api/tickers/").then((response) =>
    response.json()
  ),
]).then((results) => {
  let oneHourCoins = [];

  for (let n = 0; n < results[0].data.length; n++) {
    let oneHourString = results[0].data[n].percent_change_24h;
    let oneHourNumber = parseFloat(oneHourString);

    let oneHourObject = {};
    oneHourObject["oneH"] = oneHourNumber;

    oneHourCoins.push(oneHourObject);
  }

  var ctx = document.getElementById("my-chart-24h-bottom-50").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        results[0].data[75].symbol,
        results[0].data[76].symbol,
        results[0].data[77].symbol,
        results[0].data[78].symbol,
        results[0].data[79].symbol,
        results[0].data[80].symbol,
        results[0].data[81].symbol,
        results[0].data[82].symbol,
        results[0].data[83].symbol,
        results[0].data[84].symbol,
        results[0].data[85].symbol,
        results[0].data[86].symbol,
        results[0].data[87].symbol,
        results[0].data[88].symbol,
        results[0].data[89].symbol,
        results[0].data[90].symbol,
        results[0].data[91].symbol,
        results[0].data[92].symbol,
        results[0].data[93].symbol,
        results[0].data[94].symbol,
        results[0].data[95].symbol,
        results[0].data[96].symbol,
        results[0].data[97].symbol,
        results[0].data[98].symbol,
        results[0].data[99].symbol,
      ],
      datasets: [
        {
          label: "rank 76 - 100 // 24 hour % change",
          borderColor: "rgba(0, 0, 0, 0.1)",
          data: [
            oneHourCoins[75].oneH,
            oneHourCoins[76].oneH,
            oneHourCoins[77].oneH,
            oneHourCoins[78].oneH,
            oneHourCoins[79].oneH,
            oneHourCoins[80].oneH,
            oneHourCoins[81].oneH,
            oneHourCoins[82].oneH,
            oneHourCoins[83].oneH,
            oneHourCoins[84].oneH,
            oneHourCoins[85].oneH,
            oneHourCoins[86].oneH,
            oneHourCoins[87].oneH,
            oneHourCoins[88].oneH,
            oneHourCoins[89].oneH,
            oneHourCoins[90].oneH,
            oneHourCoins[91].oneH,
            oneHourCoins[92].oneH,
            oneHourCoins[93].oneH,
            oneHourCoins[94].oneH,
            oneHourCoins[95].oneH,
            oneHourCoins[96].oneH,
            oneHourCoins[97].oneH,
            oneHourCoins[98].oneH,
            oneHourCoins[99].oneH,
          ],
          backgroundColor: [
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
          ],
          borderColor: [
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  if (sessionStorage.getItem("update") === "") {
    changeBar();
  }
  if (sessionStorage.getItem("update") === "line") {
    changeLine();
  }
  if (sessionStorage.getItem("update") === "bar") {
    changeBar();
  }
  if (sessionStorage.getItem("update") === "bubble") {
    changeBubble();
  }
  if (sessionStorage.getItem("update") === "donut") {
    changeDonut();
  }

  let line = document.getElementById("line-chart");
  let bar = document.getElementById("bar-chart");
  let bubble = document.getElementById("bubble-chart");
  let donut = document.getElementById("donut-chart");

  line.addEventListener("click", changeLine);
  bar.addEventListener("click", changeBar);
  bubble.addEventListener("click", changeBubble);
  donut.addEventListener("click", changeDonut);

  function changeLine() {
    sessionStorage.setItem("update", "line");
    let updatetype = "line";
    myChart.config.type = updatetype;
    myChart.update();
  }

  function changeBar() {
    sessionStorage.setItem("update", "bar");
    let updatetype = "bar";
    myChart.config.type = updatetype;
    myChart.update();
  }

  function changeBubble() {
    sessionStorage.setItem("update", "bubble");
    let updatetype = "bubble";
    myChart.config.type = updatetype;
    myChart.update();
  }
  function changeDonut() {
    sessionStorage.setItem("update", "donut");
    let updatetype = "doughnut";
    myChart.config.type = updatetype;
    myChart.update();
  }
});

// CHART - 76-100 1 h // CHART 6 //
Promise.all([
  fetch("https://api.coinlore.net/api/tickers/").then((response) =>
    response.json()
  ),
]).then((results) => {
  let oneHourCoins = [];

  for (let n = 0; n < results[0].data.length; n++) {
    let oneHourString = results[0].data[n].percent_change_1h;
    let oneHourNumber = parseFloat(oneHourString);

    let oneHourObject = {};
    oneHourObject["oneH"] = oneHourNumber;

    oneHourCoins.push(oneHourObject);
  }

  var ctx = document.getElementById("my-chart-1h-bottom-50").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        results[0].data[75].symbol,
        results[0].data[76].symbol,
        results[0].data[77].symbol,
        results[0].data[78].symbol,
        results[0].data[79].symbol,
        results[0].data[80].symbol,
        results[0].data[81].symbol,
        results[0].data[82].symbol,
        results[0].data[83].symbol,
        results[0].data[84].symbol,
        results[0].data[85].symbol,
        results[0].data[86].symbol,
        results[0].data[87].symbol,
        results[0].data[88].symbol,
        results[0].data[89].symbol,
        results[0].data[90].symbol,
        results[0].data[91].symbol,
        results[0].data[92].symbol,
        results[0].data[93].symbol,
        results[0].data[94].symbol,
        results[0].data[95].symbol,
        results[0].data[96].symbol,
        results[0].data[97].symbol,
        results[0].data[98].symbol,
        results[0].data[99].symbol,
      ],
      datasets: [
        {
          label: "rank 76 - 100 // 1 hour % change",
          borderColor: "rgba(0, 0, 0, 0.1)",
          data: [
            oneHourCoins[75].oneH,
            oneHourCoins[76].oneH,
            oneHourCoins[77].oneH,
            oneHourCoins[78].oneH,
            oneHourCoins[79].oneH,
            oneHourCoins[80].oneH,
            oneHourCoins[81].oneH,
            oneHourCoins[82].oneH,
            oneHourCoins[83].oneH,
            oneHourCoins[84].oneH,
            oneHourCoins[85].oneH,
            oneHourCoins[86].oneH,
            oneHourCoins[87].oneH,
            oneHourCoins[88].oneH,
            oneHourCoins[89].oneH,
            oneHourCoins[90].oneH,
            oneHourCoins[91].oneH,
            oneHourCoins[92].oneH,
            oneHourCoins[93].oneH,
            oneHourCoins[94].oneH,
            oneHourCoins[95].oneH,
            oneHourCoins[96].oneH,
            oneHourCoins[97].oneH,
            oneHourCoins[98].oneH,
            oneHourCoins[99].oneH,
          ],
          backgroundColor: [
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
          ],
          borderColor: [
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  if (sessionStorage.getItem("update") === "") {
    changeBar();
  }
  if (sessionStorage.getItem("update") === "line") {
    changeLine();
  }
  if (sessionStorage.getItem("update") === "bar") {
    changeBar();
  }
  if (sessionStorage.getItem("update") === "bubble") {
    changeBubble();
  }
  if (sessionStorage.getItem("update") === "donut") {
    changeDonut();
  }

  let line = document.getElementById("line-chart");
  let bar = document.getElementById("bar-chart");
  let bubble = document.getElementById("bubble-chart");
  let donut = document.getElementById("donut-chart");

  line.addEventListener("click", changeLine);
  bar.addEventListener("click", changeBar);
  bubble.addEventListener("click", changeBubble);
  donut.addEventListener("click", changeDonut);

  function changeLine() {
    sessionStorage.setItem("update", "line");
    let updatetype = "line";
    myChart.config.type = updatetype;
    myChart.update();
  }

  function changeBar() {
    sessionStorage.setItem("update", "bar");
    let updatetype = "bar";
    myChart.config.type = updatetype;
    myChart.update();
  }

  function changeBubble() {
    sessionStorage.setItem("update", "bubble");
    let updatetype = "bubble";
    myChart.config.type = updatetype;
    myChart.update();
  }
  function changeDonut() {
    sessionStorage.setItem("update", "donut");
    let updatetype = "doughnut";
    myChart.config.type = updatetype;
    myChart.update();
  }
});

// CHART - 51-75 1 h // CHART  //
Promise.all([
  fetch("https://api.coinlore.net/api/tickers/").then((response) =>
    response.json()
  ),
]).then((results) => {
  let oneHourCoins = [];

  for (let n = 0; n < results[0].data.length; n++) {
    let oneHourString = results[0].data[n].percent_change_1h;
    let oneHourNumber = parseFloat(oneHourString);

    let oneHourObject = {};
    oneHourObject["oneH"] = oneHourNumber;

    oneHourCoins.push(oneHourObject);
  }

  var ctx = document.getElementById("my-chart-1h-50").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        results[0].data[51].symbol,
        results[0].data[51].symbol,
        results[0].data[52].symbol,
        results[0].data[53].symbol,
        results[0].data[54].symbol,
        results[0].data[55].symbol,
        results[0].data[56].symbol,
        results[0].data[57].symbol,
        results[0].data[58].symbol,
        results[0].data[59].symbol,
        results[0].data[60].symbol,
        results[0].data[61].symbol,
        results[0].data[62].symbol,
        results[0].data[63].symbol,
        results[0].data[64].symbol,
        results[0].data[65].symbol,
        results[0].data[66].symbol,
        results[0].data[67].symbol,
        results[0].data[68].symbol,
        results[0].data[69].symbol,
        results[0].data[70].symbol,
        results[0].data[71].symbol,
        results[0].data[72].symbol,
        results[0].data[73].symbol,
        results[0].data[74].symbol,
      ],
      datasets: [
        {
          label: "rank 51 - 75 // 1 hour % change",
          borderColor: "rgba(0, 0, 0, 0.1)",
          data: [
            oneHourCoins[75].oneH,
            oneHourCoins[76].oneH,
            oneHourCoins[77].oneH,
            oneHourCoins[78].oneH,
            oneHourCoins[79].oneH,
            oneHourCoins[80].oneH,
            oneHourCoins[81].oneH,
            oneHourCoins[82].oneH,
            oneHourCoins[83].oneH,
            oneHourCoins[84].oneH,
            oneHourCoins[85].oneH,
            oneHourCoins[86].oneH,
            oneHourCoins[87].oneH,
            oneHourCoins[88].oneH,
            oneHourCoins[89].oneH,
            oneHourCoins[90].oneH,
            oneHourCoins[91].oneH,
            oneHourCoins[92].oneH,
            oneHourCoins[93].oneH,
            oneHourCoins[94].oneH,
            oneHourCoins[95].oneH,
            oneHourCoins[96].oneH,
            oneHourCoins[97].oneH,
            oneHourCoins[98].oneH,
            oneHourCoins[99].oneH,
          ],
          backgroundColor: [
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
          ],
          borderColor: [
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  if (sessionStorage.getItem("update") === "") {
    changeBar();
  }
  if (sessionStorage.getItem("update") === "line") {
    changeLine();
  }
  if (sessionStorage.getItem("update") === "bar") {
    changeBar();
  }
  if (sessionStorage.getItem("update") === "bubble") {
    changeBubble();
  }
  if (sessionStorage.getItem("update") === "donut") {
    changeDonut();
  }

  let line = document.getElementById("line-chart");
  let bar = document.getElementById("bar-chart");
  let bubble = document.getElementById("bubble-chart");
  let donut = document.getElementById("donut-chart");

  line.addEventListener("click", changeLine);
  bar.addEventListener("click", changeBar);
  bubble.addEventListener("click", changeBubble);
  donut.addEventListener("click", changeDonut);

  function changeLine() {
    sessionStorage.setItem("update", "line");
    let updatetype = "line";
    myChart.config.type = updatetype;
    myChart.update();
  }

  function changeBar() {
    sessionStorage.setItem("update", "bar");
    let updatetype = "bar";
    myChart.config.type = updatetype;
    myChart.update();
  }

  function changeBubble() {
    sessionStorage.setItem("update", "bubble");
    let updatetype = "bubble";
    myChart.config.type = updatetype;
    myChart.update();
  }
  function changeDonut() {
    sessionStorage.setItem("update", "donut");
    let updatetype = "doughnut";
    myChart.config.type = updatetype;
    myChart.update();
  }
});

// CHART - 51-75 24 h // CHART  //
Promise.all([
  fetch("https://api.coinlore.net/api/tickers/").then((response) =>
    response.json()
  ),
]).then((results) => {
  let oneHourCoins = [];

  for (let n = 0; n < results[0].data.length; n++) {
    let oneHourString = results[0].data[n].percent_change_24h;
    let oneHourNumber = parseFloat(oneHourString);

    let oneHourObject = {};
    oneHourObject["oneH"] = oneHourNumber;

    oneHourCoins.push(oneHourObject);
  }

  var ctx = document.getElementById("my-chart-24h-50").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        results[0].data[51].symbol,
        results[0].data[51].symbol,
        results[0].data[52].symbol,
        results[0].data[53].symbol,
        results[0].data[54].symbol,
        results[0].data[55].symbol,
        results[0].data[56].symbol,
        results[0].data[57].symbol,
        results[0].data[58].symbol,
        results[0].data[59].symbol,
        results[0].data[60].symbol,
        results[0].data[61].symbol,
        results[0].data[62].symbol,
        results[0].data[63].symbol,
        results[0].data[64].symbol,
        results[0].data[65].symbol,
        results[0].data[66].symbol,
        results[0].data[67].symbol,
        results[0].data[68].symbol,
        results[0].data[69].symbol,
        results[0].data[70].symbol,
        results[0].data[71].symbol,
        results[0].data[72].symbol,
        results[0].data[73].symbol,
        results[0].data[74].symbol,
      ],
      datasets: [
        {
          label: "rank 51 - 75 // 24 hour % change",
          borderColor: "rgba(0, 0, 0, 0.1)",
          data: [
            oneHourCoins[75].oneH,
            oneHourCoins[76].oneH,
            oneHourCoins[77].oneH,
            oneHourCoins[78].oneH,
            oneHourCoins[79].oneH,
            oneHourCoins[80].oneH,
            oneHourCoins[81].oneH,
            oneHourCoins[82].oneH,
            oneHourCoins[83].oneH,
            oneHourCoins[84].oneH,
            oneHourCoins[85].oneH,
            oneHourCoins[86].oneH,
            oneHourCoins[87].oneH,
            oneHourCoins[88].oneH,
            oneHourCoins[89].oneH,
            oneHourCoins[90].oneH,
            oneHourCoins[91].oneH,
            oneHourCoins[92].oneH,
            oneHourCoins[93].oneH,
            oneHourCoins[94].oneH,
            oneHourCoins[95].oneH,
            oneHourCoins[96].oneH,
            oneHourCoins[97].oneH,
            oneHourCoins[98].oneH,
            oneHourCoins[99].oneH,
          ],
          backgroundColor: [
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
          ],
          borderColor: [
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  if (sessionStorage.getItem("update") === "") {
    changeBar();
  }
  if (sessionStorage.getItem("update") === "line") {
    changeLine();
  }
  if (sessionStorage.getItem("update") === "bar") {
    changeBar();
  }
  if (sessionStorage.getItem("update") === "bubble") {
    changeBubble();
  }
  if (sessionStorage.getItem("update") === "donut") {
    changeDonut();
  }

  let line = document.getElementById("line-chart");
  let bar = document.getElementById("bar-chart");
  let bubble = document.getElementById("bubble-chart");
  let donut = document.getElementById("donut-chart");

  line.addEventListener("click", changeLine);
  bar.addEventListener("click", changeBar);
  bubble.addEventListener("click", changeBubble);
  donut.addEventListener("click", changeDonut);

  function changeLine() {
    sessionStorage.setItem("update", "line");
    let updatetype = "line";
    myChart.config.type = updatetype;
    myChart.update();
  }

  function changeBar() {
    sessionStorage.setItem("update", "bar");
    let updatetype = "bar";
    myChart.config.type = updatetype;
    myChart.update();
  }

  function changeBubble() {
    sessionStorage.setItem("update", "bubble");
    let updatetype = "bubble";
    myChart.config.type = updatetype;
    myChart.update();
  }
  function changeDonut() {
    sessionStorage.setItem("update", "donut");
    let updatetype = "doughnut";
    myChart.config.type = updatetype;
    myChart.update();
  }
});

// CHART - 51-75 1 h // CHART  //
Promise.all([
  fetch("https://api.coinlore.net/api/tickers/").then((response) =>
    response.json()
  ),
]).then((results) => {
  let oneHourCoins = [];

  for (let n = 0; n < results[0].data.length; n++) {
    let oneHourString = results[0].data[n].percent_change_7d;
    let oneHourNumber = parseFloat(oneHourString);

    let oneHourObject = {};
    oneHourObject["oneH"] = oneHourNumber;

    oneHourCoins.push(oneHourObject);
  }

  var ctx = document.getElementById("my-chart-7d-50").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        results[0].data[51].symbol,
        results[0].data[51].symbol,
        results[0].data[52].symbol,
        results[0].data[53].symbol,
        results[0].data[54].symbol,
        results[0].data[55].symbol,
        results[0].data[56].symbol,
        results[0].data[57].symbol,
        results[0].data[58].symbol,
        results[0].data[59].symbol,
        results[0].data[60].symbol,
        results[0].data[61].symbol,
        results[0].data[62].symbol,
        results[0].data[63].symbol,
        results[0].data[64].symbol,
        results[0].data[65].symbol,
        results[0].data[66].symbol,
        results[0].data[67].symbol,
        results[0].data[68].symbol,
        results[0].data[69].symbol,
        results[0].data[70].symbol,
        results[0].data[71].symbol,
        results[0].data[72].symbol,
        results[0].data[73].symbol,
        results[0].data[74].symbol,
      ],
      datasets: [
        {
          label: "rank 51 - 75 // 7 day % change",
          borderColor: "rgba(0, 0, 0, 0.1)",
          data: [
            oneHourCoins[75].oneH,
            oneHourCoins[76].oneH,
            oneHourCoins[77].oneH,
            oneHourCoins[78].oneH,
            oneHourCoins[79].oneH,
            oneHourCoins[80].oneH,
            oneHourCoins[81].oneH,
            oneHourCoins[82].oneH,
            oneHourCoins[83].oneH,
            oneHourCoins[84].oneH,
            oneHourCoins[85].oneH,
            oneHourCoins[86].oneH,
            oneHourCoins[87].oneH,
            oneHourCoins[88].oneH,
            oneHourCoins[89].oneH,
            oneHourCoins[90].oneH,
            oneHourCoins[91].oneH,
            oneHourCoins[92].oneH,
            oneHourCoins[93].oneH,
            oneHourCoins[94].oneH,
            oneHourCoins[95].oneH,
            oneHourCoins[96].oneH,
            oneHourCoins[97].oneH,
            oneHourCoins[98].oneH,
            oneHourCoins[99].oneH,
          ],
          backgroundColor: [
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
          ],
          borderColor: [
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  if (sessionStorage.getItem("update") === "") {
    changeBar();
  }
  if (sessionStorage.getItem("update") === "line") {
    changeLine();
  }
  if (sessionStorage.getItem("update") === "bar") {
    changeBar();
  }
  if (sessionStorage.getItem("update") === "bubble") {
    changeBubble();
  }
  if (sessionStorage.getItem("update") === "donut") {
    changeDonut();
  }

  let line = document.getElementById("line-chart");
  let bar = document.getElementById("bar-chart");
  let bubble = document.getElementById("bubble-chart");
  let donut = document.getElementById("donut-chart");

  line.addEventListener("click", changeLine);
  bar.addEventListener("click", changeBar);
  bubble.addEventListener("click", changeBubble);
  donut.addEventListener("click", changeDonut);

  function changeLine() {
    sessionStorage.setItem("update", "line");
    let updatetype = "line";
    myChart.config.type = updatetype;
    myChart.update();
  }

  function changeBar() {
    sessionStorage.setItem("update", "bar");
    let updatetype = "bar";
    myChart.config.type = updatetype;
    myChart.update();
  }

  function changeBubble() {
    sessionStorage.setItem("update", "bubble");
    let updatetype = "bubble";
    myChart.config.type = updatetype;
    myChart.update();
  }
  function changeDonut() {
    sessionStorage.setItem("update", "donut");
    let updatetype = "doughnut";
    myChart.config.type = updatetype;
    myChart.update();
  }
});

// CHART 7 - 76-100 7day // CHART 6 //
Promise.all([
  fetch("https://api.coinlore.net/api/tickers/").then((response) =>
    response.json()
  ),
]).then((results) => {
  let oneHourCoins = [];

  for (let n = 0; n < results[0].data.length; n++) {
    let oneHourString = results[0].data[n].percent_change_7d;
    let oneHourNumber = parseFloat(oneHourString);

    let oneHourObject = {};
    oneHourObject["oneH"] = oneHourNumber;

    oneHourCoins.push(oneHourObject);
  }

  var ctx = document.getElementById("my-chart-7d-bottom-50").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        results[0].data[75].symbol,
        results[0].data[76].symbol,
        results[0].data[77].symbol,
        results[0].data[78].symbol,
        results[0].data[79].symbol,
        results[0].data[80].symbol,
        results[0].data[81].symbol,
        results[0].data[82].symbol,
        results[0].data[83].symbol,
        results[0].data[84].symbol,
        results[0].data[85].symbol,
        results[0].data[86].symbol,
        results[0].data[87].symbol,
        results[0].data[88].symbol,
        results[0].data[89].symbol,
        results[0].data[90].symbol,
        results[0].data[91].symbol,
        results[0].data[92].symbol,
        results[0].data[93].symbol,
        results[0].data[94].symbol,
        results[0].data[95].symbol,
        results[0].data[96].symbol,
        results[0].data[97].symbol,
        results[0].data[98].symbol,
        results[0].data[99].symbol,
      ],
      datasets: [
        {
          label: "rank 76 - 100 // 7 day % change",
          borderColor: "rgba(0, 0, 0, 0.1)",
          data: [
            oneHourCoins[75].oneH,
            oneHourCoins[76].oneH,
            oneHourCoins[77].oneH,
            oneHourCoins[78].oneH,
            oneHourCoins[79].oneH,
            oneHourCoins[80].oneH,
            oneHourCoins[81].oneH,
            oneHourCoins[82].oneH,
            oneHourCoins[83].oneH,
            oneHourCoins[84].oneH,
            oneHourCoins[85].oneH,
            oneHourCoins[86].oneH,
            oneHourCoins[87].oneH,
            oneHourCoins[88].oneH,
            oneHourCoins[89].oneH,
            oneHourCoins[90].oneH,
            oneHourCoins[91].oneH,
            oneHourCoins[92].oneH,
            oneHourCoins[93].oneH,
            oneHourCoins[94].oneH,
            oneHourCoins[95].oneH,
            oneHourCoins[96].oneH,
            oneHourCoins[97].oneH,
            oneHourCoins[98].oneH,
            oneHourCoins[99].oneH,
          ],
          backgroundColor: [
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
          ],
          borderColor: [
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  if (sessionStorage.getItem("update") === "") {
    changeBar();
  }
  if (sessionStorage.getItem("update") === "line") {
    changeLine();
  }
  if (sessionStorage.getItem("update") === "bar") {
    changeBar();
  }
  if (sessionStorage.getItem("update") === "bubble") {
    changeBubble();
  }
  if (sessionStorage.getItem("update") === "donut") {
    changeDonut();
  }

  let line = document.getElementById("line-chart");
  let bar = document.getElementById("bar-chart");
  let bubble = document.getElementById("bubble-chart");
  let donut = document.getElementById("donut-chart");

  line.addEventListener("click", changeLine);
  bar.addEventListener("click", changeBar);
  bubble.addEventListener("click", changeBubble);
  donut.addEventListener("click", changeDonut);

  function changeLine() {
    sessionStorage.setItem("update", "line");
    let updatetype = "line";
    myChart.config.type = updatetype;
    myChart.update();
  }

  function changeBar() {
    sessionStorage.setItem("update", "bar");
    let updatetype = "bar";
    myChart.config.type = updatetype;
    myChart.update();
  }

  function changeBubble() {
    sessionStorage.setItem("update", "bubble");
    let updatetype = "bubble";
    myChart.config.type = updatetype;
    myChart.update();
  }
  function changeDonut() {
    sessionStorage.setItem("update", "donut");
    let updatetype = "doughnut";
    myChart.config.type = updatetype;
    myChart.update();
  }
});

// CHART 7.1  // CHART 7.1  //
Promise.all([
  fetch("https://api.coinlore.net/api/tickers/").then((response) =>
    response.json()
  ),
]).then((results) => {
  let oneHourCoins = [];

  for (let n = 0; n < results[0].data.length; n++) {
    let oneHourString = results[0].data[n].price_usd;
    let oneHourNumber = parseFloat(oneHourString);

    let oneHourObject = {};
    oneHourObject["oneH"] = oneHourNumber;

    oneHourCoins.push(oneHourObject);
  }

  var ctx = document.getElementById("my-chart-first").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        results[0].data[0].symbol,
        results[0].data[1].symbol,
        results[0].data[2].symbol,
        results[0].data[3].symbol,
        results[0].data[4].symbol,
        results[0].data[5].symbol,
        results[0].data[6].symbol,
        results[0].data[7].symbol,
        results[0].data[8].symbol,
        results[0].data[9].symbol,
        results[0].data[10].symbol,
        results[0].data[11].symbol,
        results[0].data[12].symbol,
        results[0].data[13].symbol,
        results[0].data[14].symbol,
        results[0].data[15].symbol,
        results[0].data[16].symbol,
        results[0].data[17].symbol,
        results[0].data[18].symbol,
        results[0].data[19].symbol,
        results[0].data[20].symbol,
        results[0].data[21].symbol,
        results[0].data[22].symbol,
        results[0].data[23].symbol,
        results[0].data[24].symbol,
      ],
      datasets: [
        {
          label: "rank 1 - 25 // price usd",
          borderColor: "rgba(0, 0, 0, 0.1)",
          data: [
            oneHourCoins[0].oneH,
            oneHourCoins[1].oneH,
            oneHourCoins[2].oneH,
            oneHourCoins[3].oneH,
            oneHourCoins[4].oneH,
            oneHourCoins[5].oneH,
            oneHourCoins[6].oneH,
            oneHourCoins[7].oneH,
            oneHourCoins[8].oneH,
            oneHourCoins[9].oneH,
            oneHourCoins[10].oneH,
            oneHourCoins[11].oneH,
            oneHourCoins[12].oneH,
            oneHourCoins[13].oneH,
            oneHourCoins[14].oneH,
            oneHourCoins[15].oneH,
            oneHourCoins[16].oneH,
            oneHourCoins[17].oneH,
            oneHourCoins[18].oneH,
            oneHourCoins[19].oneH,
            oneHourCoins[20].oneH,
            oneHourCoins[21].oneH,
            oneHourCoins[22].oneH,
            oneHourCoins[23].oneH,
            oneHourCoins[24].oneH,
          ],
          backgroundColor: [
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
          ],
          borderColor: [
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  if (sessionStorage.getItem("update") === "") {
    changeBar();
  }
  if (sessionStorage.getItem("update") === "line") {
    changeLine();
  }
  if (sessionStorage.getItem("update") === "bar") {
    changeBar();
  }
  if (sessionStorage.getItem("update") === "bubble") {
    changeBubble();
  }
  if (sessionStorage.getItem("update") === "donut") {
    changeDonut();
  }

  let line = document.getElementById("line-chart");
  let bar = document.getElementById("bar-chart");
  let bubble = document.getElementById("bubble-chart");
  let donut = document.getElementById("donut-chart");

  line.addEventListener("click", changeLine);
  bar.addEventListener("click", changeBar);
  bubble.addEventListener("click", changeBubble);
  donut.addEventListener("click", changeDonut);

  function changeLine() {
    sessionStorage.setItem("update", "line");
    let updatetype = "line";
    myChart.config.type = updatetype;
    myChart.update();
  }

  function changeBar() {
    sessionStorage.setItem("update", "bar");
    let updatetype = "bar";
    myChart.config.type = updatetype;
    myChart.update();
  }

  function changeBubble() {
    sessionStorage.setItem("update", "bubble");
    let updatetype = "bubble";
    myChart.config.type = updatetype;
    myChart.update();
  }
  function changeDonut() {
    sessionStorage.setItem("update", "donut");
    let updatetype = "doughnut";
    myChart.config.type = updatetype;
    myChart.update();
  }
});

// CHART 7  // CHART 7  //
Promise.all([
  fetch("https://api.coinlore.net/api/tickers/").then((response) =>
    response.json()
  ),
]).then((results) => {
  let oneHourCoins = [];

  for (let n = 0; n < results[0].data.length; n++) {
    let oneHourString = results[0].data[n].price_usd;
    let oneHourNumber = parseFloat(oneHourString);

    let oneHourObject = {};
    oneHourObject["oneH"] = oneHourNumber;

    oneHourCoins.push(oneHourObject);
  }

  var ctx = document.getElementById("my-chart-25").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        results[0].data[25].symbol,
        results[0].data[26].symbol,
        results[0].data[27].symbol,
        results[0].data[28].symbol,
        results[0].data[29].symbol,
        results[0].data[30].symbol,
        results[0].data[31].symbol,
        results[0].data[32].symbol,
        results[0].data[33].symbol,
        results[0].data[34].symbol,
        results[0].data[35].symbol,
        results[0].data[36].symbol,
        results[0].data[37].symbol,
        results[0].data[38].symbol,
        results[0].data[39].symbol,
        results[0].data[40].symbol,
        results[0].data[41].symbol,
        results[0].data[42].symbol,
        results[0].data[43].symbol,
        results[0].data[44].symbol,
        results[0].data[45].symbol,
        results[0].data[46].symbol,
        results[0].data[47].symbol,
        results[0].data[48].symbol,
        results[0].data[49].symbol,
      ],
      datasets: [
        {
          label: "rank 26 - 50 // price usd",
          borderColor: "rgba(0, 0, 0, 0.1)",
          data: [
            oneHourCoins[25].oneH,
            oneHourCoins[26].oneH,
            oneHourCoins[27].oneH,
            oneHourCoins[28].oneH,
            oneHourCoins[29].oneH,
            oneHourCoins[30].oneH,
            oneHourCoins[31].oneH,
            oneHourCoins[32].oneH,
            oneHourCoins[33].oneH,
            oneHourCoins[34].oneH,
            oneHourCoins[35].oneH,
            oneHourCoins[36].oneH,
            oneHourCoins[37].oneH,
            oneHourCoins[38].oneH,
            oneHourCoins[39].oneH,
            oneHourCoins[40].oneH,
            oneHourCoins[41].oneH,
            oneHourCoins[42].oneH,
            oneHourCoins[43].oneH,
            oneHourCoins[44].oneH,
            oneHourCoins[45].oneH,
            oneHourCoins[46].oneH,
            oneHourCoins[47].oneH,
            oneHourCoins[48].oneH,
            oneHourCoins[49].oneH,
          ],
          backgroundColor: [
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
          ],
          borderColor: [
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  if (sessionStorage.getItem("update") === "") {
    changeBar();
  }
  if (sessionStorage.getItem("update") === "line") {
    changeLine();
  }
  if (sessionStorage.getItem("update") === "bar") {
    changeBar();
  }
  if (sessionStorage.getItem("update") === "bubble") {
    changeBubble();
  }
  if (sessionStorage.getItem("update") === "donut") {
    changeDonut();
  }

  let line = document.getElementById("line-chart");
  let bar = document.getElementById("bar-chart");
  let bubble = document.getElementById("bubble-chart");
  let donut = document.getElementById("donut-chart");

  line.addEventListener("click", changeLine);
  bar.addEventListener("click", changeBar);
  bubble.addEventListener("click", changeBubble);
  donut.addEventListener("click", changeDonut);

  function changeLine() {
    sessionStorage.setItem("update", "line");
    let updatetype = "line";
    myChart.config.type = updatetype;
    myChart.update();
  }

  function changeBar() {
    sessionStorage.setItem("update", "bar");
    let updatetype = "bar";
    myChart.config.type = updatetype;
    myChart.update();
  }

  function changeBubble() {
    sessionStorage.setItem("update", "bubble");
    let updatetype = "bubble";
    myChart.config.type = updatetype;
    myChart.update();
  }
  function changeDonut() {
    sessionStorage.setItem("update", "donut");
    let updatetype = "doughnut";
    myChart.config.type = updatetype;
    myChart.update();
  }
});

// CHART 8  // CHART 8  //
Promise.all([
  fetch("https://api.coinlore.net/api/tickers/").then((response) =>
    response.json()
  ),
]).then((results) => {
  let oneHourCoins = [];

  for (let n = 0; n < results[0].data.length; n++) {
    let oneHourString = results[0].data[n].price_usd;
    let oneHourNumber = parseFloat(oneHourString);

    let oneHourObject = {};
    oneHourObject["oneH"] = oneHourNumber;

    oneHourCoins.push(oneHourObject);
  }

  var ctx = document.getElementById("my-chart-49").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        results[0].data[50].symbol,
        results[0].data[51].symbol,
        results[0].data[52].symbol,
        results[0].data[53].symbol,
        results[0].data[54].symbol,
        results[0].data[55].symbol,
        results[0].data[56].symbol,
        results[0].data[57].symbol,
        results[0].data[58].symbol,
        results[0].data[59].symbol,
        results[0].data[60].symbol,
        results[0].data[61].symbol,
        results[0].data[62].symbol,
        results[0].data[63].symbol,
        results[0].data[64].symbol,
        results[0].data[65].symbol,
        results[0].data[66].symbol,
        results[0].data[67].symbol,
        results[0].data[68].symbol,
        results[0].data[69].symbol,
        results[0].data[70].symbol,
        results[0].data[71].symbol,
        results[0].data[72].symbol,
        results[0].data[73].symbol,
        results[0].data[74].symbol,
      ],
      datasets: [
        {
          label: "rank 51 - 75 // price usd",
          borderColor: "rgba(0, 0, 0, 0.1)",
          data: [
            oneHourCoins[50].oneH,
            oneHourCoins[51].oneH,
            oneHourCoins[52].oneH,
            oneHourCoins[53].oneH,
            oneHourCoins[54].oneH,
            oneHourCoins[55].oneH,
            oneHourCoins[56].oneH,
            oneHourCoins[57].oneH,
            oneHourCoins[58].oneH,
            oneHourCoins[59].oneH,
            oneHourCoins[60].oneH,
            oneHourCoins[61].oneH,
            oneHourCoins[62].oneH,
            oneHourCoins[63].oneH,
            oneHourCoins[64].oneH,
            oneHourCoins[65].oneH,
            oneHourCoins[66].oneH,
            oneHourCoins[67].oneH,
            oneHourCoins[68].oneH,
            oneHourCoins[69].oneH,
            oneHourCoins[70].oneH,
            oneHourCoins[71].oneH,
            oneHourCoins[72].oneH,
            oneHourCoins[73].oneH,
            oneHourCoins[74].oneH,
          ],
          backgroundColor: [
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
          ],
          borderColor: [
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  if (sessionStorage.getItem("update") === "") {
    changeBar();
  }
  if (sessionStorage.getItem("update") === "line") {
    changeLine();
  }
  if (sessionStorage.getItem("update") === "bar") {
    changeBar();
  }
  if (sessionStorage.getItem("update") === "bubble") {
    changeBubble();
  }
  if (sessionStorage.getItem("update") === "donut") {
    changeDonut();
  }

  let line = document.getElementById("line-chart");
  let bar = document.getElementById("bar-chart");
  let bubble = document.getElementById("bubble-chart");
  let donut = document.getElementById("donut-chart");

  line.addEventListener("click", changeLine);
  bar.addEventListener("click", changeBar);
  bubble.addEventListener("click", changeBubble);
  donut.addEventListener("click", changeDonut);

  function changeLine() {
    sessionStorage.setItem("update", "line");
    let updatetype = "line";
    myChart.config.type = updatetype;
    myChart.update();
  }

  function changeBar() {
    sessionStorage.setItem("update", "bar");
    let updatetype = "bar";
    myChart.config.type = updatetype;
    myChart.update();
  }

  function changeBubble() {
    sessionStorage.setItem("update", "bubble");
    let updatetype = "bubble";
    myChart.config.type = updatetype;
    myChart.update();
  }
  function changeDonut() {
    sessionStorage.setItem("update", "donut");
    let updatetype = "doughnut";
    myChart.config.type = updatetype;
    myChart.update();
  }
});
// CHART 9  // CHART 9  //
Promise.all([
  fetch("https://api.coinlore.net/api/tickers/").then((response) =>
    response.json()
  ),
]).then((results) => {
  let oneHourCoins = [];

  for (let n = 0; n < results[0].data.length; n++) {
    let oneHourString = results[0].data[n].price_usd;
    let oneHourNumber = parseFloat(oneHourString);

    let oneHourObject = {};
    oneHourObject["oneH"] = oneHourNumber;

    oneHourCoins.push(oneHourObject);
  }

  var ctx = document.getElementById("my-chart-71").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        results[0].data[75].symbol,
        results[0].data[76].symbol,
        results[0].data[77].symbol,
        results[0].data[78].symbol,
        results[0].data[79].symbol,
        results[0].data[80].symbol,
        results[0].data[81].symbol,
        results[0].data[82].symbol,
        results[0].data[83].symbol,
        results[0].data[84].symbol,
        results[0].data[85].symbol,
        results[0].data[86].symbol,
        results[0].data[87].symbol,
        results[0].data[88].symbol,
        results[0].data[89].symbol,
        results[0].data[90].symbol,
        results[0].data[91].symbol,
        results[0].data[92].symbol,
        results[0].data[93].symbol,
        results[0].data[94].symbol,
        results[0].data[95].symbol,
        results[0].data[96].symbol,
        results[0].data[97].symbol,
        results[0].data[98].symbol,
        results[0].data[99].symbol,
      ],
      datasets: [
        {
          label: "rank 76 - 100 // price usd",
          borderColor: "rgba(0, 0, 0, 0.1)",
          data: [
            oneHourCoins[75].oneH,
            oneHourCoins[76].oneH,
            oneHourCoins[77].oneH,
            oneHourCoins[78].oneH,
            oneHourCoins[79].oneH,
            oneHourCoins[80].oneH,
            oneHourCoins[81].oneH,
            oneHourCoins[82].oneH,
            oneHourCoins[83].oneH,
            oneHourCoins[84].oneH,
            oneHourCoins[85].oneH,
            oneHourCoins[86].oneH,
            oneHourCoins[87].oneH,
            oneHourCoins[88].oneH,
            oneHourCoins[89].oneH,
            oneHourCoins[90].oneH,
            oneHourCoins[91].oneH,
            oneHourCoins[92].oneH,
            oneHourCoins[93].oneH,
            oneHourCoins[94].oneH,
            oneHourCoins[95].oneH,
            oneHourCoins[96].oneH,
            oneHourCoins[97].oneH,
            oneHourCoins[98].oneH,
            oneHourCoins[99].oneH,
          ],
          backgroundColor: [
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
          ],
          borderColor: [
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  if (sessionStorage.getItem("update") === "") {
    changeBar();
  }
  if (sessionStorage.getItem("update") === "line") {
    changeLine();
  }
  if (sessionStorage.getItem("update") === "bar") {
    changeBar();
  }
  if (sessionStorage.getItem("update") === "bubble") {
    changeBubble();
  }
  if (sessionStorage.getItem("update") === "donut") {
    changeDonut();
  }

  let line = document.getElementById("line-chart");
  let bar = document.getElementById("bar-chart");
  let bubble = document.getElementById("bubble-chart");
  let donut = document.getElementById("donut-chart");

  line.addEventListener("click", changeLine);
  bar.addEventListener("click", changeBar);
  bubble.addEventListener("click", changeBubble);
  donut.addEventListener("click", changeDonut);

  function changeLine() {
    sessionStorage.setItem("update", "line");
    let updatetype = "line";
    myChart.config.type = updatetype;
    myChart.update();
  }

  function changeBar() {
    sessionStorage.setItem("update", "bar");
    let updatetype = "bar";
    myChart.config.type = updatetype;
    myChart.update();
  }

  function changeBubble() {
    sessionStorage.setItem("update", "bubble");
    let updatetype = "bubble";
    myChart.config.type = updatetype;
    myChart.update();
  }
  function changeDonut() {
    sessionStorage.setItem("update", "donut");
    let updatetype = "doughnut";
    myChart.config.type = updatetype;
    myChart.update();
  }
});

// CHART MARKET CAP 1 //
Promise.all([
  fetch("https://api.coinlore.net/api/tickers/").then((response) =>
    response.json()
  ),
]).then((results) => {
  let oneHourCoins = [];

  for (let n = 0; n < results[0].data.length; n++) {
    let oneHourString = results[0].data[n].market_cap_usd;
    let oneHourNumber = parseFloat(oneHourString);

    let oneHourObject = {};
    oneHourObject["oneH"] = oneHourNumber;

    oneHourCoins.push(oneHourObject);
  }

  var ctx = document.getElementById("my-chart-market").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        results[0].data[0].symbol,
        results[0].data[1].symbol,
        results[0].data[2].symbol,
        results[0].data[3].symbol,
        results[0].data[4].symbol,
        results[0].data[5].symbol,
        results[0].data[6].symbol,
        results[0].data[7].symbol,
        results[0].data[8].symbol,
        results[0].data[9].symbol,
        results[0].data[10].symbol,
        results[0].data[11].symbol,
        results[0].data[12].symbol,
        results[0].data[13].symbol,
        results[0].data[14].symbol,
        results[0].data[15].symbol,
        results[0].data[16].symbol,
        results[0].data[17].symbol,
        results[0].data[18].symbol,
        results[0].data[19].symbol,
        results[0].data[20].symbol,
        results[0].data[21].symbol,
        results[0].data[22].symbol,
        results[0].data[23].symbol,
        results[0].data[24].symbol,
      ],
      datasets: [
        {
          label: "market cap usd // rank 1 - 25",
          borderColor: "rgba(0, 0, 0, 0.1)",
          data: [
            oneHourCoins[0].oneH,
            oneHourCoins[1].oneH,
            oneHourCoins[2].oneH,
            oneHourCoins[3].oneH,
            oneHourCoins[4].oneH,
            oneHourCoins[5].oneH,
            oneHourCoins[6].oneH,
            oneHourCoins[7].oneH,
            oneHourCoins[8].oneH,
            oneHourCoins[9].oneH,
            oneHourCoins[10].oneH,
            oneHourCoins[11].oneH,
            oneHourCoins[12].oneH,
            oneHourCoins[13].oneH,
            oneHourCoins[14].oneH,
            oneHourCoins[15].oneH,
            oneHourCoins[16].oneH,
            oneHourCoins[17].oneH,
            oneHourCoins[18].oneH,
            oneHourCoins[19].oneH,
            oneHourCoins[20].oneH,
            oneHourCoins[21].oneH,
            oneHourCoins[22].oneH,
            oneHourCoins[23].oneH,
            oneHourCoins[24].oneH,
          ],
          backgroundColor: [
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
          ],
          borderColor: [
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  if (sessionStorage.getItem("update") === "") {
    changeBar();
  }
  if (sessionStorage.getItem("update") === "line") {
    changeLine();
  }
  if (sessionStorage.getItem("update") === "bar") {
    changeBar();
  }
  if (sessionStorage.getItem("update") === "bubble") {
    changeBubble();
  }
  if (sessionStorage.getItem("update") === "donut") {
    changeDonut();
  }

  let line = document.getElementById("line-chart");
  let bar = document.getElementById("bar-chart");
  let bubble = document.getElementById("bubble-chart");
  let donut = document.getElementById("donut-chart");

  line.addEventListener("click", changeLine);
  bar.addEventListener("click", changeBar);
  bubble.addEventListener("click", changeBubble);
  donut.addEventListener("click", changeDonut);

  function changeLine() {
    sessionStorage.setItem("update", "line");
    let updatetype = "line";
    myChart.config.type = updatetype;
    myChart.update();
  }

  function changeBar() {
    sessionStorage.setItem("update", "bar");
    let updatetype = "bar";
    myChart.config.type = updatetype;
    myChart.update();
  }

  function changeBubble() {
    sessionStorage.setItem("update", "bubble");
    let updatetype = "bubble";
    myChart.config.type = updatetype;
    myChart.update();
  }
  function changeDonut() {
    sessionStorage.setItem("update", "donut");
    let updatetype = "doughnut";
    myChart.config.type = updatetype;
    myChart.update();
  }
});

// CHART MARKET CAP 2 //
Promise.all([
  fetch("https://api.coinlore.net/api/tickers/").then((response) =>
    response.json()
  ),
]).then((results) => {
  let oneHourCoins = [];

  for (let n = 0; n < results[0].data.length; n++) {
    let oneHourString = results[0].data[n].market_cap_usd;
    let oneHourNumber = parseFloat(oneHourString);

    let oneHourObject = {};
    oneHourObject["oneH"] = oneHourNumber;

    oneHourCoins.push(oneHourObject);
  }

  var ctx = document.getElementById("my-chart-market-2").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        results[0].data[25].symbol,
        results[0].data[26].symbol,
        results[0].data[27].symbol,
        results[0].data[28].symbol,
        results[0].data[29].symbol,
        results[0].data[30].symbol,
        results[0].data[31].symbol,
        results[0].data[32].symbol,
        results[0].data[33].symbol,
        results[0].data[34].symbol,
        results[0].data[35].symbol,
        results[0].data[36].symbol,
        results[0].data[37].symbol,
        results[0].data[38].symbol,
        results[0].data[39].symbol,
        results[0].data[40].symbol,
        results[0].data[41].symbol,
        results[0].data[42].symbol,
        results[0].data[43].symbol,
        results[0].data[44].symbol,
        results[0].data[45].symbol,
        results[0].data[46].symbol,
        results[0].data[47].symbol,
        results[0].data[48].symbol,
        results[0].data[49].symbol,
      ],
      datasets: [
        {
          label: "market cap usd // rank 26 - 50",
          borderColor: "rgba(0, 0, 0, 0.1)",
          data: [
            oneHourCoins[25].oneH,
            oneHourCoins[26].oneH,
            oneHourCoins[27].oneH,
            oneHourCoins[28].oneH,
            oneHourCoins[29].oneH,
            oneHourCoins[30].oneH,
            oneHourCoins[31].oneH,
            oneHourCoins[32].oneH,
            oneHourCoins[33].oneH,
            oneHourCoins[34].oneH,
            oneHourCoins[35].oneH,
            oneHourCoins[36].oneH,
            oneHourCoins[37].oneH,
            oneHourCoins[38].oneH,
            oneHourCoins[39].oneH,
            oneHourCoins[40].oneH,
            oneHourCoins[41].oneH,
            oneHourCoins[42].oneH,
            oneHourCoins[43].oneH,
            oneHourCoins[44].oneH,
            oneHourCoins[45].oneH,
            oneHourCoins[46].oneH,
            oneHourCoins[47].oneH,
            oneHourCoins[48].oneH,
            oneHourCoins[49].oneH,
          ],
          backgroundColor: [
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
          ],
          borderColor: [
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  if (sessionStorage.getItem("update") === "") {
    changeBar();
  }
  if (sessionStorage.getItem("update") === "line") {
    changeLine();
  }
  if (sessionStorage.getItem("update") === "bar") {
    changeBar();
  }
  if (sessionStorage.getItem("update") === "bubble") {
    changeBubble();
  }
  if (sessionStorage.getItem("update") === "donut") {
    changeDonut();
  }

  let line = document.getElementById("line-chart");
  let bar = document.getElementById("bar-chart");
  let bubble = document.getElementById("bubble-chart");
  let donut = document.getElementById("donut-chart");

  line.addEventListener("click", changeLine);
  bar.addEventListener("click", changeBar);
  bubble.addEventListener("click", changeBubble);
  donut.addEventListener("click", changeDonut);

  function changeLine() {
    sessionStorage.setItem("update", "line");
    let updatetype = "line";
    myChart.config.type = updatetype;
    myChart.update();
  }

  function changeBar() {
    sessionStorage.setItem("update", "bar");
    let updatetype = "bar";
    myChart.config.type = updatetype;
    myChart.update();
  }

  function changeBubble() {
    sessionStorage.setItem("update", "bubble");
    let updatetype = "bubble";
    myChart.config.type = updatetype;
    myChart.update();
  }
  function changeDonut() {
    sessionStorage.setItem("update", "donut");
    let updatetype = "doughnut";
    myChart.config.type = updatetype;
    myChart.update();
  }
});

// CHART MARKET CAP 1 //
Promise.all([
  fetch("https://api.coinlore.net/api/tickers/").then((response) =>
    response.json()
  ),
]).then((results) => {
  let oneHourCoins = [];

  for (let n = 0; n < results[0].data.length; n++) {
    let oneHourString = results[0].data[n].market_cap_usd;
    let oneHourNumber = parseFloat(oneHourString);

    let oneHourObject = {};
    oneHourObject["oneH"] = oneHourNumber;

    oneHourCoins.push(oneHourObject);
  }

  var ctx = document.getElementById("my-chart-market-3").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        results[0].data[50].symbol,
        results[0].data[51].symbol,
        results[0].data[52].symbol,
        results[0].data[53].symbol,
        results[0].data[54].symbol,
        results[0].data[55].symbol,
        results[0].data[56].symbol,
        results[0].data[57].symbol,
        results[0].data[58].symbol,
        results[0].data[59].symbol,
        results[0].data[60].symbol,
        results[0].data[61].symbol,
        results[0].data[62].symbol,
        results[0].data[63].symbol,
        results[0].data[64].symbol,
        results[0].data[65].symbol,
        results[0].data[66].symbol,
        results[0].data[67].symbol,
        results[0].data[68].symbol,
        results[0].data[69].symbol,
        results[0].data[70].symbol,
        results[0].data[71].symbol,
        results[0].data[72].symbol,
        results[0].data[73].symbol,
        results[0].data[74].symbol,
      ],
      datasets: [
        {
          label: "market cap usd // rank 51 - 75",
          borderColor: "rgba(0, 0, 0, 0.1)",
          data: [
            oneHourCoins[50].oneH,
            oneHourCoins[51].oneH,
            oneHourCoins[52].oneH,
            oneHourCoins[53].oneH,
            oneHourCoins[54].oneH,
            oneHourCoins[55].oneH,
            oneHourCoins[56].oneH,
            oneHourCoins[57].oneH,
            oneHourCoins[58].oneH,
            oneHourCoins[59].oneH,
            oneHourCoins[60].oneH,
            oneHourCoins[61].oneH,
            oneHourCoins[62].oneH,
            oneHourCoins[63].oneH,
            oneHourCoins[64].oneH,
            oneHourCoins[65].oneH,
            oneHourCoins[66].oneH,
            oneHourCoins[67].oneH,
            oneHourCoins[68].oneH,
            oneHourCoins[69].oneH,
            oneHourCoins[70].oneH,
            oneHourCoins[71].oneH,
            oneHourCoins[72].oneH,
            oneHourCoins[73].oneH,
            oneHourCoins[74].oneH,
          ],
          backgroundColor: [
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
          ],
          borderColor: [
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  if (sessionStorage.getItem("update") === "") {
    changeBar();
  }
  if (sessionStorage.getItem("update") === "line") {
    changeLine();
  }
  if (sessionStorage.getItem("update") === "bar") {
    changeBar();
  }
  if (sessionStorage.getItem("update") === "bubble") {
    changeBubble();
  }
  if (sessionStorage.getItem("update") === "donut") {
    changeDonut();
  }

  let line = document.getElementById("line-chart");
  let bar = document.getElementById("bar-chart");
  let bubble = document.getElementById("bubble-chart");
  let donut = document.getElementById("donut-chart");

  line.addEventListener("click", changeLine);
  bar.addEventListener("click", changeBar);
  bubble.addEventListener("click", changeBubble);
  donut.addEventListener("click", changeDonut);

  function changeLine() {
    sessionStorage.setItem("update", "line");
    let updatetype = "line";
    myChart.config.type = updatetype;
    myChart.update();
  }

  function changeBar() {
    sessionStorage.setItem("update", "bar");
    let updatetype = "bar";
    myChart.config.type = updatetype;
    myChart.update();
  }

  function changeBubble() {
    sessionStorage.setItem("update", "bubble");
    let updatetype = "bubble";
    myChart.config.type = updatetype;
    myChart.update();
  }
  function changeDonut() {
    sessionStorage.setItem("update", "donut");
    let updatetype = "doughnut";
    myChart.config.type = updatetype;
    myChart.update();
  }
});

// CHART MARKET CAP 4 //
Promise.all([
  fetch("https://api.coinlore.net/api/tickers/").then((response) =>
    response.json()
  ),
]).then((results) => {
  let oneHourCoins = [];

  for (let n = 0; n < results[0].data.length; n++) {
    let oneHourString = results[0].data[n].market_cap_usd;
    let oneHourNumber = parseFloat(oneHourString);

    let oneHourObject = {};
    oneHourObject["oneH"] = oneHourNumber;

    oneHourCoins.push(oneHourObject);
  }

  var ctx = document.getElementById("my-chart-market-4").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        results[0].data[75].symbol,
        results[0].data[76].symbol,
        results[0].data[77].symbol,
        results[0].data[78].symbol,
        results[0].data[79].symbol,
        results[0].data[80].symbol,
        results[0].data[81].symbol,
        results[0].data[82].symbol,
        results[0].data[83].symbol,
        results[0].data[84].symbol,
        results[0].data[85].symbol,
        results[0].data[86].symbol,
        results[0].data[87].symbol,
        results[0].data[88].symbol,
        results[0].data[89].symbol,
        results[0].data[90].symbol,
        results[0].data[91].symbol,
        results[0].data[92].symbol,
        results[0].data[93].symbol,
        results[0].data[94].symbol,
        results[0].data[95].symbol,
        results[0].data[96].symbol,
        results[0].data[97].symbol,
        results[0].data[98].symbol,
        results[0].data[99].symbol,
      ],
      datasets: [
        {
          label: "market cap usd // rank 76 - 100",
          borderColor: "rgba(0, 0, 0, 0.1)",
          data: [
            oneHourCoins[75].oneH,
            oneHourCoins[76].oneH,
            oneHourCoins[77].oneH,
            oneHourCoins[78].oneH,
            oneHourCoins[79].oneH,
            oneHourCoins[80].oneH,
            oneHourCoins[81].oneH,
            oneHourCoins[82].oneH,
            oneHourCoins[83].oneH,
            oneHourCoins[84].oneH,
            oneHourCoins[85].oneH,
            oneHourCoins[86].oneH,
            oneHourCoins[87].oneH,
            oneHourCoins[88].oneH,
            oneHourCoins[89].oneH,
            oneHourCoins[90].oneH,
            oneHourCoins[91].oneH,
            oneHourCoins[92].oneH,
            oneHourCoins[93].oneH,
            oneHourCoins[94].oneH,
            oneHourCoins[95].oneH,
            oneHourCoins[96].oneH,
            oneHourCoins[97].oneH,
            oneHourCoins[98].oneH,
            oneHourCoins[99].oneH,
          ],
          backgroundColor: [
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
          ],
          borderColor: [
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
            "rgba(00, 00, 255, 0.8)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  if (sessionStorage.getItem("update") === "") {
    changeBar();
  }
  if (sessionStorage.getItem("update") === "line") {
    changeLine();
  }
  if (sessionStorage.getItem("update") === "bar") {
    changeBar();
  }
  if (sessionStorage.getItem("update") === "bubble") {
    changeBubble();
  }
  if (sessionStorage.getItem("update") === "donut") {
    changeDonut();
  }

  let line = document.getElementById("line-chart");
  let bar = document.getElementById("bar-chart");
  let bubble = document.getElementById("bubble-chart");
  let donut = document.getElementById("donut-chart");

  line.addEventListener("click", changeLine);
  bar.addEventListener("click", changeBar);
  bubble.addEventListener("click", changeBubble);
  donut.addEventListener("click", changeDonut);

  function changeLine() {
    sessionStorage.setItem("update", "line");
    let updatetype = "line";
    myChart.config.type = updatetype;
    myChart.update();
  }

  function changeBar() {
    sessionStorage.setItem("update", "bar");
    let updatetype = "bar";
    myChart.config.type = updatetype;
    myChart.update();
  }

  function changeBubble() {
    sessionStorage.setItem("update", "bubble");
    let updatetype = "bubble";
    myChart.config.type = updatetype;
    myChart.update();
  }
  function changeDonut() {
    sessionStorage.setItem("update", "donut");
    let updatetype = "doughnut";
    myChart.config.type = updatetype;
    myChart.update();
  }
});

// KANYE REST // KANYE REST //
Promise.all([
  fetch("https://api.kanye.rest/").then((response) => response.json()),
]).then((results) => {
  let quote = results[0].quote;

  let quoteKanye = '"' + quote + '"' + " - Kanye West";

  document.querySelector("#kanye-rest").innerHTML = quoteKanye;
});

// // NAVBAR OPEN/CLOSE // NAVBAR OPEN/CLOSE //

// function openNav() {
//   document.getElementById("myNav").style.height = "9%";
// }
// function openNav2() {
//   document.getElementById("myNav2").style.height = "9%";
// }

// function closeNav() {
//   document.getElementById("myNav").style.height = "0%";
// }
// function closeNav2() {
//   document.getElementById("myNav2").style.height = "0%";
// }

// let openButton = document.querySelector("#openButton");
// let closeButton = document.querySelector("#closeButton");

// openButton.addEventListener("click", openNav);
// closeButton.addEventListener("click", closeNav);

Promise.all([
  fetch(
    "https://api.nomics.com/v1/currencies/ticker?key=98ac7bc65d9c09b7f88f1d5e307c785a69f9fbdb&ids=BTC&interval=1d,30d&convert=EUR&per-page=100&page=1,2"
  ).then((response) => response.json()),
]).then((results) => {});

// FETCH GLOBAL

Promise.all([
  fetch(" https://api.coinlore.net/api/global/").then((response) =>
    response.json()
  ),
]).then((results) => {
  let count = results[0][0].coins_count;
  let markets = results[0][0].active_markets;
  let mcap = results[0][0].total_mcap;
  let btcDom = results[0][0].btc_d;
  let ethDom = results[0][0].eth_d;
  let vol24 = results[0][0].total_volume;

  let coincount =
    // "<i class='fas fa-coins'>" +
    " cryptocurrencies: " +
    count +
    // "<i class='fas fa-shopping-cart'>" +
    " active markets: " +
    markets +
    // "<i class='fas fa-landmark'>" +
    " market cap: $" +
    mcap +
    // "<i class='fas fa-signal'>" +
    " 24h vol: $" +
    vol24 +
    // "<i class='fas fa-chart-pie'>" +
    " BTC dominance: " +
    btcDom +
    "%" +
    // "<i class='fas fa-chart-pie'>" +
    " ETH dominance: " +
    ethDom +
    "% </p>";

  document.querySelector("#marquee-global").innerHTML = coincount;
});
