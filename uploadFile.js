
$('#uploadfile').on("change", function () {
    const lastName = document.getElementById('email').value

    // NEEDS TO BE CHANGE IN ORDER TO WORK
    var file = this.files[0];
    var fr = new FileReader();
    fr.fileName = file.name
    fr.onload = function (e) {

        e.target.result
        e.preventDefault();
        html = '<input type="hidden" name="data" value="' + e.target.result.replace(/^.*,/, '') + '" >';
        html += '<input type="hidden" name="mimetype" value="' + e.target.result.match(/^.*(?=;)/)[0] + '" >';
        html += '<input type="hidden" name="filename" value="' + lastName + '#' + e.target.fileName + '" >';
        $("#data").empty().append(html);
        console.log(lastName)
        document.getElementById('form').action = 'https://script.google.com/macros/s/AKfycbzoTcWYv-KHTkJ1Y-mhjXNSI7K_dJCm8drDe3DBUCQ1RgZU_1VN/exec'

    }
    fr.readAsDataURL(file);

});
