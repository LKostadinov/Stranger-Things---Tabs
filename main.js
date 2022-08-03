"use strict";

function tabSwitch() {
  const firstTab = document.querySelector(".first-tab");
  const secondTab = document.querySelector(".second-tab");
  const thirdTab = document.querySelector(".third-tab");
  const fourthTab = document.querySelector(".fourth-tab");
  const infoOne = document.querySelector(".info-one");
  const infoTwo = document.querySelector(".info-two");
  const infoThree = document.querySelector(".info-three");
  const infoFour = document.querySelector(".info-four");
  const s1 = document.querySelector(".s1");
  const s2 = document.querySelector(".s2");
  const s3 = document.querySelector(".s3");
  const s4 = document.querySelector(".s4");

  firstTab.addEventListener("click", function () {
    infoOne.classList.add("open");
    s1.classList.add("open");

    if (
      infoTwo.classList.contains("open") ||
      infoThree.classList.contains("open") ||
      infoFour.classList.contains("open")
    ) {
      infoOne.classList.add("open");
      infoTwo.classList.remove("open");
      infoThree.classList.remove("open");
      infoFour.classList.remove("open");
    }

    if (
      s2.classList.contains("open") ||
      s3.classList.contains("open") ||
      s4.classList.contains("open")
    ) {
      s1.classList.add("open");
      s2.classList.remove("open");
      s3.classList.remove("open");
      s4.classList.remove("open");
    }
  });

  secondTab.addEventListener("click", function () {
    infoTwo.classList.add("open");
    s2.classList.add("open");

    if (
      infoOne.classList.contains("open") ||
      infoThree.classList.contains("open") ||
      infoFour.classList.contains("open")
    ) {
      infoTwo.classList.add("open");
      infoOne.classList.remove("open");
      infoThree.classList.remove("open");
      infoFour.classList.remove("open");
    }

    if (
      s1.classList.contains("open") ||
      s3.classList.contains("open") ||
      s4.classList.contains("open")
    ) {
      s2.classList.add("open");
      s1.classList.remove("open");
      s3.classList.remove("open");
      s4.classList.remove("open");
    }
  });

  thirdTab.addEventListener("click", function () {
    infoThree.classList.add("open");
    s3.classList.add("open");

    if (
      infoOne.classList.contains("open") ||
      infoTwo.classList.contains("open") ||
      infoFour.classList.contains("open")
    ) {
      infoThree.classList.add("open");
      infoOne.classList.remove("open");
      infoTwo.classList.remove("open");
      infoFour.classList.remove("open");
    }

    if (
      s1.classList.contains("open") ||
      s2.classList.contains("open") ||
      s4.classList.contains("open")
    ) {
      s3.classList.add("open");
      s1.classList.remove("open");
      s2.classList.remove("open");
      s4.classList.remove("open");
    }
  });

  fourthTab.addEventListener("click", function () {
    infoFour.classList.add("open");
    s4.classList.add("open");

    if (
      infoOne.classList.contains("open") ||
      infoTwo.classList.contains("open") ||
      infoThree.classList.contains("open")
    ) {
      infoFour.classList.add("open");
      infoOne.classList.remove("open");
      infoTwo.classList.remove("open");
      infoThree.classList.remove("open");
    }

    if (
      s1.classList.contains("open") ||
      s2.classList.contains("open") ||
      s3.classList.contains("open")
    ) {
      s4.classList.add("open");
      s1.classList.remove("open");
      s2.classList.remove("open");
      s3.classList.remove("open");
    }
  });
}

// tabSwitch();

function activeTabs() {
  const tabWrapper = document.querySelector(".tabs");

  tabWrapper.addEventListener("click", function (event) {
    const target = event.target;
    const isTab = target.classList.contains("tab");
    const currentActiveElement = this.querySelector(".active");
    const currentDescription = document.querySelector(".description.open");
    const currentImage = document.querySelector(".image.open");

    if (isTab) {
      const isActive = target.classList.contains("active");

      if (!isActive) {
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
    }
  });
}

activeTabs();
