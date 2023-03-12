let canSaveDate = false;

var heroBg = document.querySelector(".hero-bg");
var heroBgOverlay = document.querySelector(".hero-bg-overlay");

let loading = document.querySelector("#loading");

let first = document.querySelector("#first");
let second = document.querySelector("#second");
let third = document.querySelector("#third");
let fourth = document.querySelector("#fourth");

let contentSecond = document.querySelector("#content-second");
let contentThird = document.querySelector("#content-third");
let contentFourth = document.querySelector("#content-fourth");
let contentThirdHelper = document.querySelector("#content-helper");

let firstName = document.querySelector("#first-name");
let lastName = document.querySelector("#last-name");
let email = document.querySelector("#email");
let phoneNumber = document.querySelector("#mobile-number");
let attendMode = document.querySelector("#attend-mode");
let state = document.querySelector("#state");
let date = document.querySelector("#first-date");
let assistance = document.querySelector("#assistance");
let image = document.getElementById("profile");
let testimony = document.querySelector("#assistance");

var textWrapper = document.querySelector(".ml11 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /([^\x00 ]|\w)/g,
  "<span class='letter' style='opacity: 0'>$&</span>"
);

var textWrapper2 = document.querySelector(".ml12 .letters2");
textWrapper2.innerHTML = textWrapper2.textContent.replace(
  /([^\x00]|\w)/g,
  "<span class='letter2' style='opacity: 0'>$&</span>"
);

function start() {
  anime({
    targets: ".svg-loading",
    height: [0, 40],
    width: [0, 40],
    loop: true,
    duration: 1000,
    direction: "alternate",
    delay: 500,
    easing: "easeOutSine",
  });
}

function displayFirst(direction, delay = 1200) {
  if (direction == "normal") {
    // fadeInFadeOut(loading, first);
  } else if (direction == "reverse") {
    delay = 100;
  }
  anime
    .timeline({
      easing: "easeOutExpo",
      direction: direction,
      duration: 400,
    })
    .add({
      targets: ".svg",
      scale: [0, 1],
      opacity: 1,
      delay: delay,
      easing: "easeOutSine",
      complete: function (anim) {
        if (direction == "reverse") {
          displaySecond("normal");
        }
      },
    })
    .add({
      targets: ".logo",
      translateX: [10, 0],
      opacity: [0, 1],
      easing: "easeOutSine",
    })
    .add({
      targets: ".ml11 .letter",
      opacity: [0, 1],
      delay: (el, i) => 54 * (i + 1),
    })
    .add({
      targets: ".ml12 .letter2",
      opacity: [0, 1],
      offset: "-=775",
      delay: (el, i) => 18 * (i + 1),
      complete: function (anim) {
        showImage(direction);
      },
    });
}

function showImage(direction) {
  anime({
    duration: 1100,
    easing: "easeOutExpo",
    begin: function (anim) {},
    update: function (anim) {
      let calculatedBackdrop;
      let calculatedRgba;
      let bgSizeX;
      let bgSizeY;
      let bgPosX;
      let bgPosY;
      if (direction == "normal") {
        calculatedBackdrop = (5 - (5 * anim.progress) / 100).toFixed(1);
        calculatedRgba = (0.712 - (0.712 * anim.progress) / 100).toFixed(3);
        let details = navigator.userAgent;
        let regexp = /android|iphone|kindle|ipad/i;
        let isMobileDevice = regexp.test(details);
        // let isMobileDevice = true;

        if (isMobileDevice) {
          bgSizeX = 145 + (2 * anim.progress) / 100;
          bgSizeY = 100 + (2 * anim.progress) / 100;
          bgPosX = -120 + (-5 * anim.progress) / 100;
          bgPosY = 0 - (10 * anim.progress) / 100;
        } else {
          bgSizeX = 80 + (5 * anim.progress) / 100;
          bgSizeY = 100 + (5 * anim.progress) / 100;
          bgPosX = -10 + (-2 * anim.progress) / 100;
          bgPosY = 0 - (4 * anim.progress) / 100;
        }

        if (calculatedRgba < 0.2) {
          calculatedRgba = 0.2;
        }
        heroBgOverlay.style.backdropFilter = `blur(${calculatedBackdrop}px)`;
        heroBgOverlay.style.backgroundColor = `rgba(0, 0, 0, ${calculatedRgba})`;
        heroBg.style.backgroundSize = `${bgSizeX}vw ${bgSizeY}vh`;
        heroBg.style.backgroundPosition = `${bgPosX}px ${bgPosY}px`;
      } else {
        calculatedBackdrop = ((2 * anim.progress) / 100).toFixed(1);
        calculatedRgba = ((0.712 * anim.progress) / 100).toFixed(3);
        bgSizeX = 140 - (2 * anim.progress) / 100;
        bgSizeY = 95- (2 * anim.progress) / 100;
        bgPosX = -120 - (-5 * anim.progress) / 100;
        bgPosY = -0 + (10 * anim.progress) / 100;

        heroBgOverlay.style.backgroundColor = `rgba(0, 0, 0, ${calculatedRgba})`;
        heroBgOverlay.style.backdropFilter = `blur(${calculatedBackdrop}px)`;
      }
    },
    complete: function (anim) {
      showButton("normal");
    },
  });
}

function showButton(direction) {
  anime({
    targets: "#btn-save",
    translateY: [5, 0],
    opacity: 1,
    duration: 400,
    easing: "easeOutSine",
    direction: direction,
    complete: function (anim) {
      canSaveDate = true;
    },
  });
}

function displaySecond(direction, delay = 1000) {
  // fadeInFadeOut(loading, second);
  if (direction == "normal") {
    fadeInFadeOut(first, second);
    contentSecond.style.display = "block";
  } else if (direction == "reverse") {
    delay = 300;
  }
  anime
    .timeline({ easing: "easeOutSine", direction: direction, duration: 400 })
    .add({
      targets: ".svg-second",
      scale: [0, 1],
      opacity: 1,
      easing: "easeOutSine",
      delay: delay,
      complete: function () {
        if (direction == "reverse") {
          displayThird("normal");
        }
      },
    })
    .add({
      targets: ".logo-second",
      translateX: [10, 0],
      opacity: [0, 1],
      easing: "easeOutSine",
    })
    .add({
      targets: "#content-second",
      opacity: [0, 1],
      translateY: [5, 0],
    });
}

function displayThird(direction, delay = 1000) {
  if (direction == "normal") {
    fadeInFadeOut(second, third);
    contentThird.style.display = "block";
    state.innerHTML = "";
    state.innerHTML = `<option selected disabled value="0" style="color: rgb(100, 100, 100)">Select your state</option>`;
    STATES.forEach(function (item) {
      state.innerHTML += bindStates(item);
    });
  } else if (direction == "reverse") {
    delay = 300;
  }
  anime
    .timeline({ easing: "easeOutSine", direction: direction, duration: 400 })
    .add({
      targets: ".svg-third",
      scale: [0, 1],
      opacity: 1,
      easing: "easeOutSine",
      delay: delay,
      complete: function () {
        if (direction == "reverse") {
          displayFourth("normal");
        }
      },
    })
    .add({
      targets: ".logo-third",
      translateX: [10, 0],
      opacity: [0, 1],
      easing: "easeOutSine",
    })
    .add({
      targets: "#content-third",
      opacity: [0, 1],
      translateY: [5, 0],
    });
}

function displayFourth(direction, delay = 1000) {
  if (direction == "normal") {
    // fadeInFadeOut(loading, fourth);
    fadeInFadeOut(third, fourth);
    contentFourth.style.display = "block";
  } else {
    delay = 300;
  }
  anime
    .timeline({ easing: "easeOutSine", direction: direction, duration: 400 })
    .add({
      targets: ".svg-fourth",
      scale: [0, 1],
      opacity: 1,
      easing: "easeOutSine",
      delay: delay,
      complete: function () {
        if (direction == "reverse") {
        }
      },
    })
    .add({
      targets: ".logo-fourth",
      translateX: [10, 0],
      opacity: [0, 1],
      easing: "easeOutSine",
    })
    .add({
      targets: "#content-fourth",
      opacity: [0, 1],
      translateY: [5, 0],
    });
}

function fadeInFadeOut(fadeOut, fadeIn) {
  anime
    .timeline({
      easing: "easeOutSine",
      duration: 500,
    })
    .add({
      targets: fadeOut,
      opacity: [1, 0],
      complete: function (anim) {
        fadeOut.style.display = "none";
      },
    })
    .add({
      begin: function (anim) {
        fadeIn.style.display = "block";
      },
      delay: 200,
      targets: fadeIn,
      opacity: [0, 1],
    });
}

function validateInputs(inputs) {
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value == "") {
      console.log(inputs[i]);
      return false;
    }
  }
  return true;
}

function validateRadio(radios) {
  radios.forEach(function (item) {});
}

function validateSelect(selects) {
  selects.forEach(function (item) {
    if (item.value == "") {
    }
  });
}

function submitInvitation() {
  let invitationXhr = new XMLHttpRequest();
  invitationXhr.open("POST", "/weddingguest", true);
  invitationXhr.send();

  invitationXhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.response);
    }
  }
  
}

// displayFirst("normal");
displaySecond("normal");


document.body.addEventListener("click", function (e) {
  let targetId = e.target.id;
  if (targetId == "btn-save") {
    if (canSaveDate) {
      showButton("reverse");
      displayFirst("reverse");
      canSaveDate = false;
    }
  } else if (targetId == "to-third") {
    // if (validateInputs([firstName, lastName, email, phoneNumber])) {
    //   displaySecond("reverse");
    // }
    displaySecond("reverse");
  } else if (targetId == "to-fourth") {
    displayThird("reverse");
  }
  else if(targetId == "save") {
    submitInvitation();
  }
});

document.body.addEventListener("change", function (e) {
  let target = e.target;
  if (target.id == "upload_file") {
    image.src = URL.createObjectURL(target.files[0]);
  }
});

ScrollReveal().reveal(".left", { distance: "40px", origin: "left" });
ScrollReveal().reveal(".right", { distance: "40px", origin: "right" });
ScrollReveal().reveal(".opacity", { opacity: 0 });
ScrollReveal().reveal(".bottom", { distance: "40px", origin: "bottom" });
ScrollReveal().reveal(".bottom-img", {
  distance: "40px",
  origin: "bottom",
  opacity: 1,
  reset: false,
});
ScrollReveal().reveal(".top", { distance: "40px", origin: "top" });

function bindStates(state) {
  return `<option value="${state.stateId}">${state.stateName}</option>`;
}
