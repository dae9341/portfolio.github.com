var setUrl = "https://script.google.com/macros/s/AKfycbxFLRUSJa67WlyNlge1V5d7F_RbtmQlIaa28dIFEkQCvbKIQVyN/exec";
var loadUrl = "https://sheets.googleapis.com/v4/spreadsheets/1bafTzBf62qEk72hBN7l1pSxgdYapzlMnZxvvPVmudVc/values/시트1";
var param = {"key":"AIzaSyAdvMK0V-SuuDKa6PYuqg3Xz33JR4Pwg-4"};

function dataSet(data){
    $.ajax({
        url: setUrl,
        method:"GET",
        data:data,
        dataType:"json",
        cache: false,
        async:true
        , success: function (data, status, xhr) {
            console.log(data);
            alert("success");
        }, error: function (jqXHR, textStatus, errorThrown) {
            console.log(arguments);
            alert("error");
        }
    });
}

function dataLoad(){
    $.ajax({
        url: loadUrl,
        method:"GET",
        data: param,
        dataType:"json",
        cache: false,
        async:true
        , success: function (data, status, xhr) {
            console.log(data);

        }, error: function (jqXHR, textStatus, errorThrown) {
            console.log(arguments);
        }
    });

}