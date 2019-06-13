var url = "https://sheets.googleapis.com/v4/spreadsheets/1bafTzBf62qEk72hBN7l1pSxgdYapzlMnZxvvPVmudVc/values/시트1";
var param = {"key":"AIzaSyAdvMK0V-SuuDKa6PYuqg3Xz33JR4Pwg-4"};

$.ajax({
    url: url,
    method:"GET",
    data: param,
    dataType:"json",
    cache: false,
    async:true
    , success: function (data, status, xhr) {
        console.log(data.values[0][0]);
    }, error: function (jqXHR, textStatus, errorThrown) {
        console.log(arguments);
    }
});
