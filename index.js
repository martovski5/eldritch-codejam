function getStage1() {
  function getImageBlue(min, max) {
    const random = Math.floor(Math.random() * (max - min)) + min;
    return (
      '<img src="assets/MythicCards/blue/blue' +
      random +
      '.png" border="0" width="150" height="200" />'
    );
  }

  function getImageBrown(min, max) {
    const random = Math.floor(Math.random() * (max - min)) + min;
    return (
      '<img src="assets/MythicCards/brown/brown' +
      random +
      '.png" border="0" width="150" height="200" />'
    );
  }

  function getImageGreen(min, max) {
    const random = Math.floor(Math.random() * (max - min)) + min;
    return (
      '<img src="assets/MythicCards/green/green' +
      random +
      '.png" border="0" width="150" height="200" />'
    );
  }

  document.getElementById("image1").innerHTML = getImageGreen(1, 18);
  document.getElementById("image2").innerHTML = getImageBrown(1, 21);
  document.getElementById("image3").innerHTML = getImageBrown(1, 21);
  document.getElementById("image4").innerHTML = getImageBlue(1, 12);

  let hiddenStage2 = document.querySelector(".stage2");
  hiddenStage2.style.display = "none";
  let descr = document.querySelector(".descr_stage");
  descr.style.display = "block";
}

function getStage2() {
  function getImageBlue(min, max) {
    const random = Math.floor(Math.random() * (max - min)) + min;
    return (
      '<img src="assets/MythicCards/blue/blue' +
      random +
      '.png" border="0" width="150" height="200" />'
    );
  }

  function getImageBrown(min, max) {
    const random = Math.floor(Math.random() * (max - min)) + min;
    return (
      '<img src="assets/MythicCards/brown/brown' +
      random +
      '.png" border="0" width="150" height="200" />'
    );
  }

  function getImageGreen(min, max) {
    const random = Math.floor(Math.random() * (max - min)) + min;
    return (
      '<img src="assets/MythicCards/green/green' +
      random +
      '.png" border="0" width="150" height="200" />'
    );
  }

  document.getElementById("image1").innerHTML = getImageGreen(1, 18);
  document.getElementById("image2").innerHTML = getImageGreen(1, 18);
  document.getElementById("image3").innerHTML = getImageBrown(1, 21);
  document.getElementById("image4").innerHTML = getImageBrown(1, 21);
  document.getElementById("image5").innerHTML = getImageBrown(1, 21);
  document.getElementById("image6").innerHTML = getImageBlue(1, 12);

  let hiddenStage2 = document.querySelector(".stage2");
  hiddenStage2.style.display = "block";
  let hiddenStage3 = document.querySelector(".stage3");
  hiddenStage2.style.display = "block";

  let descr = document.querySelector(".descr_stage");
  descr.style.display = "block";
}

function getStage3() {
  function getImageBrown(min, max) {
    const random = Math.floor(Math.random() * (max - min)) + min;
    return (
      '<img src="assets/MythicCards/brown/brown' +
      random +
      '.png" border="0" width="150" height="200" />'
    );
  }

  function getImageGreen(min, max) {
    const random = Math.floor(Math.random() * (max - min)) + min;
    return (
      '<img src="assets/MythicCards/green/green' +
      random +
      '.png" border="0" width="150" height="200" />'
    );
  }

  document.getElementById("image1").innerHTML = getImageGreen(1, 18);
  document.getElementById("image2").innerHTML = getImageGreen(1, 18);
  document.getElementById("image3").innerHTML = getImageBrown(1, 21);
  document.getElementById("image4").innerHTML = getImageBrown(1, 21);
  document.getElementById("image5").innerHTML = getImageBrown(1, 21);
  document.getElementById("image6").innerHTML = getImageBrown(1, 21);

  let hiddenStage2 = document.querySelector(".stage2");
  hiddenStage2.style.display = "block";
  let hiddenStage3 = document.querySelector(".stage3");
  hiddenStage2.style.display = "block";

  let descr = document.querySelector(".descr_stage");
  descr.style.display = "block";
}

let stage1 = document.querySelector(".btn1");
let stage2 = document.querySelector(".btn2");
let stage3 = document.querySelector(".btn3");
stage1.addEventListener("click", getStage1);
stage2.addEventListener("click", getStage2);
stage3.addEventListener("click", getStage3);
