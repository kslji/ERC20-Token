const Kabir = artifacts.require("Kabir");
const KabirSale = artifacts.require("KabirSale");
module.exports = function(deployer) {
  deployer.deploy(Kabir,1000000).then(function(){
    //Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return  deployer.deploy(KabirSale , Kabir.address  , tokenPrice);
  });
};
