const scriptURL = 'https://script.google.com/macros/s/AKfycbxMKJ8Uh3dbmyXlS1TpbduSCzkQFKRrL9leuEeooJyARNI3tuM9/exec'
const scriptURL2 = 'https://script.google.com/macros/s/AKfycbzoTcWYv-KHTkJ1Y-mhjXNSI7K_dJCm8drDe3DBUCQ1RgZU_1VN/exec'
// Google Apps Script for sending documents to Google Sheets
const form = document.forms['submit-to-google-sheet']

$('#form').on("submit", e => {

    e.preventDefault()
    document.getElementById('submit').value = "Please Wait..."
    // BUG FOUND
    console.log("working")

    //Send to doPost spreadsheet
    fetch(scriptURL, { method: 'POST', body: new FormData(form), mode: 'no-cors' })
        .then(response => console.log('Success!', response))
        .then(response => document.getElementById('submit').value = "Complete!")
        .catch(error => console.error('Error!', error.message));

    //Send picture to Google Drive
    fetch(scriptURL2, { method: 'POST', body: new FormData(form), mode: 'no-cors' })
        .then(response => console.log('Success!', response))
        .then(response => document.getElementById('submit').value = "Complete!")
        .then(response => clrForm())
        .then(response => window.location.href = 'https://www.nationalgoodneighborday.com/')
        .catch(error => console.error('Error!', error.message))





    // form.action = 'https://script.google.com/macros/s/AKfycbxMKJ8Uh3dbmyXlS1TpbduSCzkQFKRrL9leuEeooJyARNI3tuM9/exec';
    // form.method = "POST"
    // form.action = 'https://script.google.com/macros/s/AKfycbzoTcWYv-KHTkJ1Y-mhjXNSI7K_dJCm8drDe3DBUCQ1RgZU_1VN/exec';


})
