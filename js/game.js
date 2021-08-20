// tạo tốc đọ của xe
var speedcar1 = 1002 + Math.floor(Math.random() * 1000);
var speedcar2 = 1005 + Math.floor(Math.random() * 1000);
var speedcar3 = 1007 + Math.floor(Math.random() * 1000);

$(document).ready(function() {
    //khi nhấn start thì bắt đầu
    $('#btnstart').click(function() {
        $('#car1').animate({
                left: 1020
            },
            speedcar1
        );
        $('#car2').animate({
                left: 1020
            },
            speedcar2
        );
        $('#car3').animate({
                left: 1020
            },
            speedcar3
        );
        // delay thay đổi giá trị thẻ b
        setTimeout(function() {
            speed();
        }, 1500);
    });
    //load lại trang web
    $('#btnclear').click(function() {
        location.reload();
    });

});
//kiếm tra speed để cho ra kết quả
function speed() {
    if (speedcar1 < speedcar2) {
        if (speedcar1 < speedcar3) {
            if (speedcar2 < speedcar3) {
                $("#kqcar1").replaceWith('<b style="color:dodgerblue; font-size:25px">Về thứ nhất</b>');
                $("#kqcar2").replaceWith('<b style="color:dodgerblue; font-size:25px">Về thứ nhì</b>');
                $("#kqcar3").replaceWith('<b style="color:dodgerblue; font-size:25px">Về thứ ba</b>');
            } else {
                $("#kqcar1").replaceWith('<b style="color:dodgerblue; font-size:25px">Về thứ nhất</b>');
                $("#kqcar2").replaceWith('<b style="color:dodgerblue; font-size:25px">Về thứ ba</b>');
                $("#kqcar3").replaceWith('<b style="color:dodgerblue; font-size:25px">Về thứ nhì</b>');
            }
        }
    }
    if (speedcar2 < speedcar1) {
        if (speedcar2 < speedcar3) {
            if (speedcar1 < speedcar3) {
                $("#kqcar1").replaceWith('<b style="color:dodgerblue; font-size:25px">Về thứ nhì</b>');
                $("#kqcar2").replaceWith('<b style="color:dodgerblue; font-size:25px">Về thứ nhất</b>');
                $("#kqcar3").replaceWith('<b style="color:dodgerblue; font-size:25px">Về thứ ba</b>');
            } else {
                $("#kqcar1").replaceWith('<b style="color:dodgerblue; font-size:25px">Về thứ ba</b>');
                $("#kqcar2").replaceWith('<b style="color:dodgerblue; font-size:25px">Về thứ nhất</b>');
                $("#kqcar3").replaceWith('<b style="color:dodgerblue; font-size:25px">Về thứ nhì</b>');
            }
        }
    }
    if (speedcar3 < speedcar2) {
        if (speedcar3 < speedcar1) {
            if (speedcar1 < speedcar2) {
                $("#kqcar1").replaceWith('<b style="color:dodgerblue; font-size:25px">thứ nhì</b>');
                $("#kqcar2").replaceWith('<b style="color:dodgerblue; font-size:25px">thứ ba</b>');
                $("#kqcar3").replaceWith('<b style="color:dodgerblue; font-size:25px">thứ nhất</b>');
            } else {
                $("#kqcar1").replaceWith('<b style="color:dodgerblue; font-size:25px">thứ ba</b>');
                $("#kqcar2").replaceWith('<b style="color:dodgerblue; font-size:25px">thứ nhì</b>');
                $("#kqcar3").replaceWith('<b style="color:dodgerblue; font-size:25px">thứ nhất</b>');
            }
        }
    }
}