document.addEventListener("DOMContentLoaded", function () {
    const project2 = document.getElementById("project2");
    const project2Modal = document.getElementById("project2Modal");
    const project2Close = document.getElementById("project2Close");
    const project2Overlay = document.getElementById("project2Overlay");

    if (!project2 || !project2Modal || !project2Close || !project2Overlay) {
        console.error("Project 2 modal elements were not found.");
        return;
    }

    function openProject2() {
        project2Modal.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeProject2() {
        project2Modal.classList.remove("active");
        document.body.style.overflow = "";
    }

    project2.addEventListener("click", openProject2);
    project2Close.addEventListener("click", closeProject2);
    project2Overlay.addEventListener("click", closeProject2);

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && project2Modal.classList.contains("active")) {
            closeProject2();
        }
    });
});
