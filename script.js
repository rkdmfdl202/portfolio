document.addEventListener("DOMContentLoaded", function () {
    function setupProjectModal(projectId, modalId, closeId, overlayId) {
        const project = document.getElementById(projectId);
        const modal = document.getElementById(modalId);
        const closeButton = document.getElementById(closeId);
        const overlay = document.getElementById(overlayId);

        if (!project || !modal || !closeButton || !overlay) {
            console.error(`${projectId} modal elements were not found.`);
            return;
        }

        function openModal() {
            modal.classList.add("active");
            document.body.style.overflow = "hidden";
        }

        function closeModal() {
            modal.classList.remove("active");
            document.body.style.overflow = "";
        }

        project.addEventListener("click", openModal);
        closeButton.addEventListener("click", closeModal);
        overlay.addEventListener("click", closeModal);

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape" && modal.classList.contains("active")) {
                closeModal();
            }
        });
    }

    setupProjectModal("project1", "project1Modal", "project1Close", "project1Overlay");
    setupProjectModal("project2", "project2Modal", "project2Close", "project2Overlay");
    setupProjectModal("project3", "project3Modal", "project3Close", "project3Overlay");
});
