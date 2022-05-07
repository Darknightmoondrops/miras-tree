//==================== select place (right or left) ============
function checkPlace(n) {

    if (n == 2) {
        document.getElementById('left-side').value = "جایگاه راست";
        document.getElementById('right-side').value = ""
        console.log("m");
    }
    if (n == 1) {
        document.getElementById('left-side').value = "";
        document.getElementById('right-side').value = "جایگاه چپ"
        console.log("n");
    }
}

//==================== END select place (right or left) ============