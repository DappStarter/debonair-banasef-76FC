require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'good climb orange system bird ribbon remain equip hover argue sun slush'; 
let testAccounts = [
"0xea1b3e6ce1910385a599eb3c88b2493f7e0bbe7b01997591433c6e32a997637d",
"0xe7a133d92865a37b87e2ef167e1aed84a621307df04162f72a36177e066443a1",
"0xa014469fba0892b575a4dd14f4202c736ecd549d2fe89fc54568f24340f8017b",
"0x3f7e78c737e97c88b62c849a19aae06d41712d85145e62eecc74840f67d07696",
"0xcf0e07c839efe1a3cc83b2be7503862079094819e38cd8fcc4d99302120fec70",
"0x740e2cfc95e50cc586de4199b17d843421d1cf96906b6004d1e8781ef7063c21",
"0x043edc6361312d3bcc4f30df43347102ee298c6e2b089cfc187932e5aa3595e7",
"0x44e87fdb237a2e1f38dc806e484bf0b1bedf5f375eaa0129b2f9683d519434c7",
"0x6e1cfbd2e639d14b11a55ddf1e69be36a44a9750a16c3ba16b096f8320568fec",
"0x854ea8d084d7a88ae82479600ed385bac7578de5a701adcfbf90097b39fcc1f4"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


