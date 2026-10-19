const project2 =
    document.getElementById("project2");

const project2Modal =
    document.getElementById("project2Modal");

const project2Close =
    document.getElementById("project2Close");

const project2Overlay =
    document.getElementById("project2Overlay");


function openProject2() {

    project2Modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeProject2() {

    project2Modal.classList.remove("active");

    document.body.style.overflow = "";
}


project2.addEventListener(
    "click",
    openProject2
);


project2Close.addEventListener(
    "click",
    closeProject2
);


project2Overlay.addEventListener(
    "click",
    closeProject2
);


document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeProject2();

        }

    }
);