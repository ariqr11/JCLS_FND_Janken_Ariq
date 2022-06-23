let img_array = [
    "gunting.png",
    "batu.png",
    "kertas.png"
]
let win = 0, draw = 0, lose = 0, score = 0;

let i = 0;
const gambar = () => {
    document.getElementById("komputer").src = img_array[i];
    if (i > img_array.length - 2) {
        i = 0;
    } else {
        i++;
    }
}

let gerak = setInterval(gambar, 100);
let randomIndex = 0;

const pilihan = (player) => {
    document.getElementById("hasil").innerHTML = "";
    document.getElementById("klasemen").innerHTML = "";
    clearInterval(gerak);
    if (player == 1) {
        let geraklagi = setInterval(gambar, 100)
        setTimeout(() => clearInterval(geraklagi), Math.random() * 1000);
        document.getElementById("pilihan").src = `${img_array[0]}`
    } else if (player == 2) {
        let geraklagi = setInterval(gambar, 100)
        setTimeout(() => clearInterval(geraklagi), Math.random() * 1000);
        document.getElementById("pilihan").src = `${img_array[1]}`
    } else if (player == 3) {
        let geraklagi = setInterval(gambar, 100)
        setTimeout(() => clearInterval(geraklagi), Math.random() * 1000);
        document.getElementById("pilihan").src = `${img_array[2]}`
    }
    setTimeout(() => randomIndex = img_array.findIndex((val) => document.getElementById("komputer").src.includes(val)), 1000);
    setTimeout(() => handleResult(), 1200);
    setTimeout(() => scoreBoard(), 1200);
}

const handleResult = () => {
    if ((document.getElementById("pilihan").src.includes(img_array[0]) && randomIndex == 2) || (document.getElementById("pilihan").src.includes(img_array[1]) && randomIndex == 0) || (document.getElementById("pilihan").src.includes(img_array[2]) && randomIndex == 1)) {
        document.getElementById("hasil").innerHTML = 'Player WIN ✅'
        win += 1;
        score += 25;
    } else if ((document.getElementById("pilihan").src.includes(img_array[0]) && randomIndex == 1) || (document.getElementById("pilihan").src.includes(img_array[1]) && randomIndex == 2) || (document.getElementById("pilihan").src.includes(img_array[2]) && randomIndex == 0)) {
        document.getElementById("hasil").innerHTML = 'Player LOSE ❌'
        lose += 1;
    } else if ((document.getElementById("pilihan").src.includes(img_array[0]) && randomIndex == 0) || (document.getElementById("pilihan").src.includes(img_array[1]) && randomIndex == 1) || (document.getElementById("pilihan").src.includes(img_array[2]) && randomIndex == 2)) {
        document.getElementById("hasil").innerHTML = 'Player DRAW 👍'
        draw += 1
    }
}

const scoreBoard = () => {
    document.getElementById("klasemen").innerHTML = `
    Result:<br>
    WIN : ${win}<br>
    DRAW : ${draw}<br>
    LOSE : ${lose}<br>
    SCORE : ${score}`
}
