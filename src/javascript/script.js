document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("modal");
  var modalImg = document.getElementById("modalImage");
  var captionText = document.getElementById("caption");
  var closeBtn = document.getElementsByClassName("close")[0];
  var zoomedIn = false;
  var scrollPosition = 0;

  var projectImages = document.querySelectorAll(".project-image");

  projectImages.forEach(function (image) {
    image.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
      zoomedIn = false;
      modalImg.style.transform = "scale(1)";
      scrollPosition = 0;
      modalImg.style.top = "0px";
      captionText.style.top = "0px";
      document.body.classList.add("no-scroll");
    });
  });

  closeBtn.onclick = function () {
    modal.style.display = "none";
    document.body.classList.remove("no-scroll");
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      document.body.classList.remove("no-scroll");
    }
  };

  modalImg.addEventListener("click", function () {
    if (!zoomedIn) {
      modalImg.style.transform = "scale(2)";
      modalImg.classList.add("zoomed");
      zoomedIn = true;
    } else {
      modalImg.style.transform = "scale(1)";
      modalImg.classList.remove("zoomed");
      zoomedIn = false;
      modalImg.style.top = "0px";
      captionText.style.top = "0px";
    }
  });

  modalImg.addEventListener("wheel", function (event) {
    if (modal) {
      event.preventDefault();

      scrollPosition -= event.deltaY; //mouse
      modalImg.style.top = `${scrollPosition}px`;

      //lengeda
      captionText.style.top = `${scrollPosition}px`;
    }
  });
});
