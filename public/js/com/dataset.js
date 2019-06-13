var url = "https://script.google.com/macros/s/AKfycbxFLRUSJa67WlyNlge1V5d7F_RbtmQlIaa28dIFEkQCvbKIQVyN/exec";
var param = {"key":"AIzaSyAdvMK0V-SuuDKa6PYuqg3Xz33JR4Pwg-4"};
var data = "/public/test.json";

$.ajax({
    url: url,
    method:"POST",
    data:{
        "A":"aaa",
        "B":"bbb"
    },
    dataType:"json",
    cache: false,
    async:true
    , success: function (data, status, xhr) {
        console.log(data);
        alert("success");
    }, error: function (jqXHR, textStatus, errorThrown) {
        console.log(arguments);
    }
});