const qrcode = require('qrcode-terminal');
const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");

const opeMsg = "Hello!👋 My name is Lexa👩, *ALPHACCUL* personal assistant. Please select a number to begin. \n\n[1] About Us \n[2] Membership  \n[3] Accounts \n[4] Branches \n[5] Other Services \n[6] Contact Us";
const ope2Msg = "Please select a number. \n\n[1] About Us \n[2] Membership  \n[3] Accounts \n[4] Branches \n[5] Other Services \n[6] Contact Us";
const abtMsg = "The Alpha Cooperative Credit Union Ltd is a savings and credit-oriented💵 Cooperative owned and managed by members and operate on the OFADA, MINFII, COBAAC and PolCCUL (Polygon Cooperative Credit Union League Limited) regulations. \n\nIts main objective is to provide reliable and financial services that meet short/long term expectations of members.";
const memMsg = "To be a member of ALPHACCUL: \n\nFill the Membership application form \nPay an entrance fee of 2000frs \nShare of 25,000frs which is refundable upon withdrawal of membership. \nBuilding fee of 5,000frs \nSolidarity fund of 20,000frs. \nPhotocopy of National Identity Card. \nSubmit two passport size photographs";
const accMsg = "Select a number to know more about each account type. \n\n[1]Savings \n[2] Deposit \n[3] Salary \n[4] Daily Savings \n[5] Minor \n[6] Group \n[7] Student";
const savAccMsg = "Savings Account \n\nMoney saved into this account earns annual interest and equally gives members enough security to benefit from loans";
const depAccMsg = "Deposit Account \n\nThis is an emergency or business account as deposits can be withdrawn without notification. \n\nThis account yields no interest";
const salAccMsg = "Salary Account  \n\nCivil servants and private workers receive their salaries through this account. Benefits include: \n\nOverdraft \nSchool fees loan  \nMoney Transfer \nOthers loans";
const daiAccMsg = "Daily Savings Account \n\nMostly for small traders who pay a little charge based on the amount saved within the month. \n\Increace your chances of getting loans with a very low interest rate with the daily savings account";
const MinAccMsg = "Minor Account \n\nThis account prepares you for the education, medical care and others for your children. \n\n Withdrawals are not chargeable and savings earns interest at the end of the year";
const grpAccMsg = "Grount Account \n\nGroups can open an account which will generate interest on their savings with free and fast withdrawals and the options to collect loans";
const stuAccMsg = "Student Account \n\nYou will have access to internship placement, school fee loans and deposit and withdrawals without charges.\n\n Save from 1,000FCFA into your account";
const braMsg = "Please choose a city or town \n\n[1] Bamenda \n[2] Buea \n[3] Douala \n[4] Yaounde \n[5] Dschang";
const bdaBraMsg = "Bamenda (Operational Head Office) \n\Commercial Avenue, Bamenda  \n+237 666-978-162\n666-978-162 \n666-978-162";
const bueBraMsg = "Buea Branch (Administrative Head Office) \n\nBuea Molyko stadium \n+237 666-978-162\n666-978-162\n666-978-162";
const DlaBraMsg = "Douala Branch Office \n\nRong point Deido \n+237 666-978-162\n666-978-162\n666-978-162";
const ydeBraMsg = "Yaounde Branch Office \n\nBiyemassi adjacent Boulangerie Francais \n+237 666-978-162\n666-978-162\n666-978-162";
const dscBraMsg = "Dschang Branch Office \n\nUniversity of Dschang \n+237 666-978-162\n666-978-162\n666-978-162";
const othMsg = "Our other services and benefits include: \n\nPreference Shares \nTerm Deposit \nMoney Transfer \nFinancial Consultancy \nStanding Order \nNjangi Financing \nPayment of ENEO Bills \nAnd Lots More";
const conMsg ="Get to us via the following; \n\nEmail: alphaccul@gmail.com \nTel: (+237) 666-978-162";
const errorMsg = "Invalid option";
//const endMsg = "Would you like to know anything else? \n\n[1] YES \n[2] NO";
const extMsg = "Alright. \nHope I was able to address your worries. \nFeel free to come back and ask me anything";
const mainMenu = "\n\n[M] Main Menu"

var currentMessage = "";
//const imojies = "😁👋👆👍👩‍🏫💵";

const client = new Client({
    authStrategy: new LocalAuth(),
});

client.initialize();

client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
});

client.on('authenticated', () => {
    console.log('Authenticated');
})

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async message => {

    const getmessage = await message.getChat().then(chat => chat.fetchMessages({fromMe: true, limit: 1}));
   
    for (const msg of getmessage) {
        currentMessage = msg.body;
    }
  
    if (currentMessage === "" || message.body === "M" || message.body === "m") {
        client.sendMessage(message.from, opeMsg + mainMenu);
    } else if (currentMessage.endsWith("[5] Other Services \n[6] Contact Us" + mainMenu)) {
        if (message.body === '1') {
            client.sendMessage(message.from, abtMsg + mainMenu);
          //  client.sendMessage(message.from, endMsg + mainMenu);
        } else if (message.body === '2') {
            client.sendMessage(message.from, memMsg + mainMenu);
           // client.sendMessage(message.from, endMsg + mainMenu);
        } else if (message.body === '3') {
            client.sendMessage(message.from, accMsg + mainMenu);
        } else if (message.body === '4') {
            client.sendMessage(message.from, braMsg + mainMenu);
        } else if (message.body === '5') {
            client.sendMessage(message.from, othMsg + mainMenu);
           // client.sendMessage(message.from, endMsg + mainMenu);
        } else if (message.body === '6') {
            client.sendMessage(message.from, conMsg + mainMenu);
           // client.sendMessage(message.from, endMsg + mainMenu);
        } else {
            client.sendMessage(message.from, errorMsg);
            client.sendMessage(message.from, ope2Msg + mainMenu);
        }    
    } else if (currentMessage.startsWith("Select a number to know")) {
        if (message.body === '1') {
            client.sendMessage(message.from, savAccMsg + mainMenu);
           // client.sendMessage(message.from, endMsg + mainMenu);
        } else if (message.body === '2') {
            client.sendMessage(message.from, depAccMsg + mainMenu);
           // client.sendMessage(message.from, endMsg + mainMenu);
        } else if (message.body === '3') {
            client.sendMessage(message.from, salAccMsg + mainMenu);
           // client.sendMessage(message.from, endMsg + mainMenu);
        } else if (message.body === '4') {
            client.sendMessage(message.from, daiAccMsg + mainMenu);
           // client.sendMessage(message.from, endMsg + mainMenu);
        } else if (message.body === '5') {
            client.sendMessage(message.from, MinAccMsg + mainMenu);
           // client.sendMessage(message.from, endMsg + mainMenu);
        } else if (message.body === '6') {
            client.sendMessage(message.from, grpAccMsg + mainMenu);
           // client.sendMessage(message.from, endMsg + mainMenu);
        } else if (message.body === '7') {
            client.sendMessage(message.from, stuAccMsg + mainMenu);
          //  client.sendMessage(message.from, endMsg + mainMenu);
        } else {
            client.sendMessage(message.from, errorMsg);
            client.sendMessage(message.from, accMsg + mainMenu);
        } 
    } else if (currentMessage.startsWith("Please choose a city or town")) {
        if (message.body === '1') {
            client.sendMessage(message.from, bdaBraMsg + mainMenu);
           // client.sendMessage(message.from, endMsg + mainMenu);
        } else if (message.body === '2') {
            client.sendMessage(message.from, bueBraMsg + mainMenu);
           // client.sendMessage(message.from, endMsg + mainMenu);
        } else if (message.body === '3') {
            client.sendMessage(message.from, DlaBraMsg + mainMenu);
           // client.sendMessage(message.from, endMsg + mainMenu);
        } else if (message.body === '4') {
            client.sendMessage(message.from, ydeBraMsg + mainMenu);
           // client.sendMessage(message.from, endMsg + mainMenu);
        } else if (message.body === '5') {
            client.sendMessage(message.from, dscBraMsg + mainMenu);
           // client.sendMessage(message.from, endMsg + mainMenu);
        } else {
            client.sendMessage(message.from, errorMsg);
            client.sendMessage(message.from, braMsg + mainMenu);
        }     
    } else {
        client.sendMessage(message.from, ope2Msg + mainMenu);
    }
});