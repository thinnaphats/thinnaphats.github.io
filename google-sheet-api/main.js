const {google} = require('googleapis');
const keys = require('./keys.json');
const wing = require('./data');

// https://nodejs.org
// https://code.visualstudio.com/
// https://developers.google.com/sheets/api/quickstart/nodejs
// console.developers.google.com
// https://developers.google.com/identity/protocols/oauth2/scopes

const client = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
);

client.authorize(function(err, tokens) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('Connected!');
        gsrun(client);
    }
});

async function gsrun(cl) {
    const gsapi = google.sheets({version: 'v4', auth: cl});

    let dataArray = wing;
    console.log(dataArray);
    const updateOptions = {
        spreadsheetId: '1MUoDhA7Nz3WHhhTN57kh6demGkbTBaRzSLLcrykCjps',
        range: 'A3:E100',
        valueInputOption: 'USER_ENTERED',
        resource: {values: dataArray}
    };

    let res = await gsapi.spreadsheets.values.update(updateOptions);

    // console.log(res);
}