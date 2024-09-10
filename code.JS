
function switchTheme() {
    let style1 = document.getElementById('style1');
    let style2 = document.getElementById('style2');

    //Check if style1 is currenty disaled, and if so, change to it
    if (style1.disabled) {
        style1.disabled = false; //enable style1
        style2.disabled = true; //disable style2
        localStorage.setItem('theme', 'style1'); 
    } 
    else {
        style1.disabled = true; //disable style1
        style2.disabled = false; //enable style2
        localStorage.setItem('theme', 'style2'); 
    }
}


window.onload = function() {
    let current_theme = localStorage.getItem('theme');
    let style1 = document.getElementById('style1');
    let style2 = document.getElementById('style2');

    if (current_theme === 'style2') {
        style1.disabled = true; //disable style1
        style2.disabled = false; //enable style2
    } 
    else {
        style1.disabled = false; //enable style1
        style2.disabled = true; //disable style2
    }
};

let ButtonStyleSwitch = document.querySelectorAll(".change-theme");
ButtonStyleSwitch.forEach(button => {
    button.addEventListener('click', switchTheme);
});
