var x = '';

function a(id) {
    return document.getElementById(id);
}

function click_num(num) {
    x += num;
    a('result').value = x;
}

function delete_ac() {
    x = '';
    a('result').value = x;
}
// sử dụng eval
function result_ca() {
    a('result').value = eval(a('result').value);
}