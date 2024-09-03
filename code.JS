
function switchTheme() {
    let style1 = document.getElementById('style1');
    let style2 = document.getElementById('style2');

    if (style1.disabled) {
        style1.disabled = false;
        style2.disabled = true;
    } else {
        style1.disabled = true;
        style2.disabled = false;
    }
}

let changeButton = document.querySelector(".change-theme");
changeButton.addEventListener('click', switchTheme);