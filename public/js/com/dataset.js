var url = "https://sheets.googleapis.com/v4/spreadsheets/1bafTzBf62qEk72hBN7l1pSxgdYapzlMnZxvvPVmudVc/values/'시트1'?valueInputOption=USER_ENTERED";
var param = {"key":"AIzaSyAdvMK0V-SuuDKa6PYuqg3Xz33JR4Pwg-4"};

$.ajax({
    url: url,
    method:"POST",
    data: [
        {
            "range": "'시트1'!A2:B1000",
            "majorDimension": "ROWS",
            "values": [ [ "강석민", "34" ], [ "강미리", "26" ] ]
        }
    ],
    dataType:"json",
    cache: false,
    async:true
    , success: function (data, status, xhr) {
        console.log(data);
    }, error: function (jqXHR, textStatus, errorThrown) {
        console.log(arguments);
    }
});