window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.boxShadow = "0 1px 6px 0 rgb(32 33 36 / 28%)";
    } else {
        document.getElementById("navbar").style.boxShadow = "none";
    }
}