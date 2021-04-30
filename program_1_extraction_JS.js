var data = "J2ava Java4Script Ang5ular R1eact Nod6e";

function extract(data) {
    var str = data;
    var num = "";
    for (var i = 0; i < data.length; i++) {
        if (!isNaN(data[i]) && data[i] != " ") {
            num = (!num) ? `${data[i]}` : `${num},${data[i]}`;
            str = str.replace(data[i], "");
        }
    }
    console.log(num);
    console.log(str);
}

extract(data);