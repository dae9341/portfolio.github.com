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

function dataLoad(dom){
    $.ajax({
        url: loadUrl,
        method:"GET",
        data: param,
        dataType:"json",
        cache: false,
        async:true
        , success: function (data, status, xhr) {

            console.log(data);
            $(dom).children().remove();
            var html = "";

            for(var i = 1; i<data.values.length; i++){
                html += "<div class='data1up' id='data"+i+"'>";
                for(var j = 0; j<data.values[i].length; j++){
                    html +="<span class='element"+j+"'>"+data.values[i][j]+"</span>";
                }
                html +="<span class='deleteEl' onclick='deleteData()'><img src='' alt='삭제'/> </span>";
                html+="</div>"
            }
            $(dom).append(html);
        }, error: function (jqXHR, textStatus, errorThrown) {
            console.log(arguments);
        }
    });

}

function addData() {

}

function dateSet(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    return yyyy+mm+dd;
}

function deleteData() {

}
