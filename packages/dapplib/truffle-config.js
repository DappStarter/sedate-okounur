require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clinic blue trip fan response pumpkin upgrade hover process metal giggle'; 
let testAccounts = [
"0xe71661b2fc0a7aa25095b4d74ab3d10c7f1b2544f769ecee4361ba0591170a27",
"0x739a48772d0af272fc7e9d27b1810b01921d86eadde2ffd87b86d62e31c15ea1",
"0x43ebc994d8a7940eccbce162bebbe0a32e401a05e76244fcc9e970c13ca99298",
"0x49ccbaa9d1d8842abaf619bbc1760fee64d628516a005eb7a20092d8e145235e",
"0x762ef9e0ff7b26f58a5bdc69a66ce65660e4748c36a81fe591b760ecda9f3f77",
"0x045847a448f303ecf482ef7bea1e5e2af533a1a7e1950f62c39343fa895aba34",
"0x8a151ce26dd6ca349db0b5e7080da41567948fefe6004b933378bcdf5b36fe33",
"0x0230cd063ab071aa331cf61491c7add589cc13e68213c4626b99deab20dee58f",
"0xb7a737bf4dd5958b81698f40e70b7a6ccfb1e5b6c7df6eeeb8dc3cda30fbbc4e",
"0x352e86f426d9c1ccaf6ec6ef1e8393cca5189d02cd7edeb8a299c9ab3ee0ced7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
