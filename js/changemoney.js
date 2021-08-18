function changeMoney() {
    let input_money = +document.getElementById("input_money").value;
    let input_type = document.getElementById("input_type").value;
    let output_type = document.getElementById("output_type").value;
    let output_money;
    document.getElementById("loaitien").innerHTML = output_type;
    if (input_type == "vnd") {
        if (output_type == "vnd") {
            output_money = input_money;
            document.getElementById("output_money").innerHTML = output_money;
        } else if (output_type == "usd") {
            output_money = input_money * 22800;
            document.getElementById("output_money").innerHTML = output_money;
        } else if (output_type == "jpy") {
            output_money = input_money * 20888;
            document.getElementById("output_money").innerHTML = output_money;
        }
    }
    if (input_type == "usd") {
        if (output_type == "vnd") {
            output_money = input_money * 22800;
            document.getElementById("output_money").innerHTML = output_money;
        } else if (output_type == "usd") {
            output_money = input_money;
            document.getElementById("output_money").innerHTML = output_money;
        } else if (output_type == "jpy") {
            output_money = input_money * 109.3;
            document.getElementById("output_money").innerHTML = output_money;
        }
    }
    if (input_type == "jpy") {
        if (output_type == "vnd") {
            output_money = input_money * 20888;
            document.getElementById("output_money").innerHTML = output_money;
        } else if (output_type == "usd") {
            output_money = input_money / 109.3;
            document.getElementById("output_money").innerHTML = output_money;
        } else if (output_type == "jpy") {
            output_money = input_money;
            document.getElementById("output_money").innerHTML = output_money;
        }
    }
}