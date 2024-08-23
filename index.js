let height = document.getElementById("height");
let width = document.getElementById("width");
calculate = () => {
    let h = window.innerHeight;
    let w = window.innerWidth;
    height.innerText = "Your screen height = "+ h;
    width.innerText = "Your screen width = "+ w;
};
window.onload = calculate;
window.onresize = calculate;
