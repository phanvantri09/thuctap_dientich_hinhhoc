function circel() {
    var r_cicel = document.forms["circel_js"]["r_cicel"].value;

    var cv_circel = 2 * r_cicel * Math.PI;
    var s_circel = Math.pow(r_cicel, 2) * Math.PI;
    document.getElementById("cv_circel").innerHTML = cv_circel;
    document.getElementById("s_circel").innerHTML = s_circel;
}

function square() {
    var canh_square = document.forms["square_js"]["canh_square"].value;

    var cv_square = canh_square * 4;
    var s_square = Math.pow(canh_square, 2);
    document.getElementById("cv_square").innerHTML = cv_square;
    document.getElementById("s_square").innerHTML = s_square;
}

function triangle() {

    let canh1_triangle = +document.getElementById("canh1_triangle").value;
    let canh2_triangle = +document.getElementById("canh2_triangle").value;
    let canh3_triangle = +document.getElementById("canh3_triangle").value;
    let p, h, S;

    let CV = canh1_triangle + canh2_triangle + canh3_triangle;

    if (canh1_triangle < canh2_triangle + canh3_triangle && canh2_triangle < canh3_triangle + canh1_triangle && canh3_triangle < canh2_triangle + canh1_triangle) {
        document.getElementById("cv_triangle").innerHTML = CV;
        if (Math.sqrt(Math.pow(canh1_triangle, 2) + Math.pow(canh2_triangle, 2)) == canh3_triangle) {
            document.getElementById("typetriangle").innerHTML = "tam giác Vuông";
            S = (canh2_triangle * canh1_triangle) / 2;
            document.getElementById("s_triangle").innerHTML = S;
        } else if (Math.sqrt(Math.pow(canh1_triangle, 2) + Math.pow(canh3_triangle, 2)) == canh2_triangle) {
            document.getElementById("typetriangle").innerHTML = "tam giác Vuông";
            S = (canh1_triangle * canh3_triangle) / 2;
            document.getElementById("s_triangle").innerHTML = S;
        } else if (Math.sqrt(Math.pow(canh3_triangle, 2) + Math.pow(canh2_triangle, 2)) == canh1_triangle) {
            document.getElementById("typetriangle").innerHTML = "tam giác Vuông";
            S = (canh3_triangle * canh2_triangle) / 2;
            document.getElementById("s_triangle").innerHTML = S;
        } else if (canh1_triangle != canh2_triangle && canh3_triangle != canh2_triangle && canh3_triangle != canh1_triangle) {
            document.getElementById("typetriangle").innerHTML = "tam giác thường";
            p = (canh3_triangle + canh2_triangle + canh1_triangle) / 2;
            h = 2 * (Math.sqrt(p * (p - canh1_triangle) * (p - canh2_triangle) * (p - canh3_triangle))) / canh3_triangle;
            S = (canh3_triangle * h) / 2;
            document.getElementById("s_triangle").innerHTML = S;
        } else if (canh1_triangle == canh2_triangle && canh2_triangle == canh3_triangle) {
            document.getElementById("typetriangle").innerHTML = "tam giác đều";
            h = canh2_triangle * Math.sqrt(3) / 2;
            S = (canh1_triangle * h) / 2;
            document.getElementById("s_triangle").innerHTML = S;
        } else if (canh1_triangle == canh2_triangle) {
            document.getElementById("typetriangle").innerHTML = "tam giác cân";
            h = Math.sqrt((Math.pow(canh1_triangle, 2)) - (Math.pow((canh3_triangle / 2), 2)));
            S = (canh3_triangle * h) / 2;
            document.getElementById("s_triangle").innerHTML = S;
        } else if (canh3_triangle == canh1_triangle) {
            document.getElementById("typetriangle").innerHTML = "tam giác cân";
            h = Math.sqrt((Math.pow(canh1_triangle, 2)) - (Math.pow((canh2_triangle / 2), 2)));
            S = (canh2_triangle * h) / 2;
            document.getElementById("s_triangle").innerHTML = S;
        } else if (canh3_triangle == canh2_triangle) {
            document.getElementById("typetriangle").innerHTML = "tam giác cân";
            h = Math.sqrt((Math.pow(canh2_triangle, 2)) - (Math.pow((canh1_triangle / 2), 2)));
            S = (canh1_triangle * h) / 2;
            document.getElementById("s_triangle").innerHTML = S;
        }

    } else
        document.getElementById("typetriangle").innerHTML = "ko phải 3 cạnh của tam giác";

}

function trapezoid() {
    let canhtrai = +document.getElementById("canhtrai_trapezoid").value;
    let canhphai = +document.getElementById("canhphai_trapezoid").value;
    let daylon = +document.getElementById("daylon_trapezoid").value;
    let daybe = +document.getElementById("daybe_trapezoid").value;
    let chieucao = +document.getElementById("chieucao_trapezoid").value;

    let CV = canhphai + canhtrai + daybe + daylon;
    let S = chieucao * (daybe + daylon) / 2;
    // let S =
    //     ((daylon + daybe) * Math.sqrt(2 * (Math.pow(canhphai, 2) * Math.pow(canhtrai, 2) +
    //         Math.pow(canhphai, 2) * Math.pow(daylon - daybe, 2) + Math.pow(canhtrai, 2) * Math.pow(daylon - daybe, 2) - (Math.pow(canhphai, 4) + Math.pow(canhtrai, 4) +
    //             (Math.pow(daylon - daybe), 4))))) / (4 * (daylon - daybe));
    if (canhphai == canhtrai) {
        document.getElementById("typetrapezoid").innerHTML = "hình thang cân";
    }
    if (chieucao == canhtrai || chieucao == canhphai) {
        document.getElementById("typetrapezoid").innerHTML = "hình thang vuông";
    }
    if (chieucao > canhphai && chieucao > canhtrai) {
        document.getElementById("typetrapezoid").innerHTML = "không phải hình thang, vui lòng nhập lại";
    }
    if (daylon < daybe) {
        document.getElementById("typetrapezoid").innerHTML = "hình thang vuôngcui lòng nhập lại độ dài cho các đáy";
    }
    document.getElementById("cv_trapezoid").innerHTML = CV;
    document.getElementById("s_trapezoid").innerHTML = S;
}