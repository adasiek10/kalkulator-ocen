const submit = document.getElementById("submit");
const in1 = document.getElementById("input1");
const in2 = document.getElementById("input2");
const out1 = document.getElementById("procent")
const out2 = document.getElementById("grade");


submit.onclick = function () {

    twoje = Number(in1.value);

    max = Number(in2.value);

    if (max < 0 || max == 0 || twoje < 0 || twoje > max) {
        alert("Wpisz poprawne wartości");
    }
    else {
        procenty = Math.round((twoje / max) * 100);
        out1.textContent = procenty + "%";

        if (procenty < 31) {
            out2.textContent = "Ocena: 1";
        }
        else if (procenty < 51) {
            out2.textContent = "Ocena: 2";
        }
        else if (procenty < 75) {
            out2.textContent = "Ocena: 3";
        }
        else if (procenty < 91) {
            out2.textContent = "Ocena: 4";
        }
        else if (procenty < 100) {
            out2.textContent = "Ocena: 5";
        }
        else if (procenty < 101) {
            out2.textContent = "Ocena: 5 albo 6 - zależy";
        }
        else {
            alert("Sprawdź, czy wpisane przez ciebie liczby są prawidłowe!");
        }
    }

}
