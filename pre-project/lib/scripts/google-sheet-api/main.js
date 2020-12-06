const {google} = require('googleapis');
const keys = require('./keys.json');

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
    const opt = {
        spreadsheetId: '1MUoDhA7Nz3WHhhTN57kh6demGkbTBaRzSLLcrykCjps',
        range: 'A2:B5'
    };

    let data = await gsapi.spreadsheets.values.get(opt);
    let dataArray = data.data.values;
    dataArray = dataArray.map(function(r) {
        while(r.length < 2) {
            r.push('');
        }
        return r;
    });

    console.log(dataArray);
    
    let newDataArray = dataArray.map(function(r) {
        r.push(r[0] + '-' + r[1]);
        return r;
    });

    const updateOptions = {
        spreadsheetId: '1MUoDhA7Nz3WHhhTN57kh6demGkbTBaRzSLLcrykCjps',
        range: 'E2',
        valueInputOption: 'USER_ENTERED',
        resource: {values: newDataArray}
    };

    let res = await gsapi.spreadsheets.values.update(updateOptions);

    // console.log(res);
}