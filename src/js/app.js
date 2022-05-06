App = {
  web3Provider: null,

  init: function () {
    console.log("App initialized...")
    return App.initWeb3();
  },

  initWeb3: function () {
    if (typeof web3 !== 'undefined') {
      App.web3Provider = ethereum.currentProvider;
      web3 = new Web3(ethereum.currentProvider);
    } else {
      // If no injected web3 instance is detected, fallback to Ganache.
      App.web3Provider = new web3.providers.HttpProvider('http://127.0.0.1:7545');
      web3 = new Web3(App.web3Provider);
    }
    return App.initContracts();
  },

  initContracts: function () {
    $.getJSON("KabirSale.json", function (kabirSale) {
      App.Contracts.kabirSale = TruffleContract(kabirSale);
      App.Contracts.KabirSale.setProvider(App.web3Provider);
      App.contracts.KabirSale.deployed().then(function (kabirSale) {
        console.log("Kabir Token Sale Address:", kabirSale.address);
      });
    });
  }
}

$(function () {
  $(window).load(function () {
    App.init();
  })
});