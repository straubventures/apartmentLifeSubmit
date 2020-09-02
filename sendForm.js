const scriptURL = 'https://script.google.com/macros/s/AKfycbxMKJ8Uh3dbmyXlS1TpbduSCzkQFKRrL9leuEeooJyARNI3tuM9/exec'
// Google Apps Script for sending documents to Google Sheets
const form = document.forms['submit-to-google-sheet']

$('#form').on("submit", e => {
    // e.preventDefault()
    // BUG FOUND
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))

})