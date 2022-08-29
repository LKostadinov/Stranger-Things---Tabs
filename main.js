"use strict";

function activeTabs() {
  const tabWrapper = document.querySelector(".tabs");

  tabWrapper.addEventListener("click", function (event) {
    const target = event.target;
    const isTab = target.classList.contains("tab");
    const isActive = target.classList.contains("active");
    const currentActiveElement = this.querySelector(".active");
    const currentDescription = document.querySelector(".description.open");
    const currentImage = document.querySelector(".image.open");

    if (isTab && !isActive) {
      const tabData = target.getAttribute("data-tab");
      const tabDescription = document.querySelector(
        `[data-description=${tabData}]`
      );
      const tabImage = document.querySelector(`[data-image=${tabData}]`);

      currentImage.classList.remove("open");
      tabImage.classList.add("open");

      currentActiveElement.classList.remove("active");
      target.classList.add("active");

      currentDescription.classList.remove("open");
      tabDescription.classList.add("open");
    }
  });
}

activeTabs();
