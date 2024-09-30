document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("modal");
  var modalImg = document.getElementById("modalImage");
  var captionText = document.getElementById("caption");
  var closeBtn = document.getElementsByClassName("close")[0];

  var projectImages = document.querySelectorAll(".project-image");

  projectImages.forEach(function (image) {
    image.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    });
  });

  closeBtn.onclick = function () {
    modal.style.display = "none";
    modalImg.classList.remove("zoomed");
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      modalImg.classList.remove("zoomed");
    }
  };

  modalImg.addEventListener("click", function () {
    if (modalImg.classList.contains("zoomed")) {
      modalImg.classList.remove("zoomed");
    } else {
      modalImg.classList.add("zoomed");
    }
  });
});
