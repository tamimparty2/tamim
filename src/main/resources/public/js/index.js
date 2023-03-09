let canSaveDate = false;
var heroBg = document.querySelector(".hero-bg");
var heroBgOverlay = document.querySelector(".hero-bg-overlay");

let first = document.querySelector("#first");
let second = document.querySelector("#second");
let third = document.querySelector("#third");

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

let src = "./images/hero-photo.jpg";
let image = new Image();
image.addEventListener("load", function () {
  heroBg.style.backgroundImage = "url(" + src + ")";
  showWriteup("normal");
});
image.src = src;

function showWriteup(direction) {
  anime
    .timeline({
      easing: "easeOutExpo",
      direction: direction,
    })
    .add({
      targets: ".svg",
      scale: [0, 1],
      opacity: 1,
      duration: 600,
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
      duration: 600,
      easing: "easeOutSine",
    })
    .add({
      targets: ".ml11 .letter",
      opacity: [0, 1],
      duration: 600,
      delay: (el, i) => 54 * (i + 1),
    })
    .add({
      targets: ".ml12 .letter2",
      opacity: [0, 1],
      duration: 600,
      offset: "-=775",
      delay: (el, i) => 24 * (i + 1),
      complete: function (anim) {
        showImage(direction);
      },
    });
}

function showImage(direction) {
  anime({
    duration: 1100,
    easing: "easeOutExpo",
    begin: function (anim) {
      if (direction == "normal") {
        canSaveDate = false;
        showButton("normal");
      }
    },
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

        if (isMobileDevice) {
          bgSizeX = 85 + (5 * anim.progress) / 100;
          bgSizeY = 105 + (5 * anim.progress) / 100;
          bgPosX = -120 + (-20 * anim.progress) / 100;
          bgPosY = 0 - (20 * anim.progress) / 100;
        } else {
          bgSizeX = 80 + (5 * anim.progress) / 100;
          bgSizeY = 100 + (5 * anim.progress) / 100;
          bgPosX = -10 + (-20 * anim.progress) / 100;
          bgPosY = 0 - (20 * anim.progress) / 100;
        }

        if (calculatedRgba < 0.3) {
          calculatedRgba = 0.3;
        }
        heroBg.style.scale = ``;
        heroBgOverlay.style.backdropFilter = `blur(${calculatedBackdrop}px)`;
        heroBgOverlay.style.backgroundColor = `rgba(0, 0, 0, ${calculatedRgba})`;
        heroBg.style.backgroundSize = `${bgSizeX}vh ${bgSizeY}vh`;
        heroBg.style.backgroundPosition = `${bgPosX}px ${bgPosY}px`;
      } else {
        calculatedBackdrop = ((5 * anim.progress) / 100).toFixed(1);
        calculatedRgba = ((0.712 * anim.progress) / 100).toFixed(3);
        bgSizeX = 90 - (1 * anim.progress) / 100;
        bgSizeY = 110 - (1 * anim.progress) / 100;
        bgPosX = -140 - (-10 * anim.progress) / 100;
        bgPosY = -20 + (20 * anim.progress) / 100;

        heroBgOverlay.style.backgroundColor = `rgba(0, 0, 0, ${calculatedRgba})`;
        heroBgOverlay.style.backdropFilter = `blur(${calculatedBackdrop}px)`;
        // heroBg.style.backgroundSize = `${bgSizeX}vh ${bgSizeY}vh`;
        // heroBg.style.backgroundPosition = `${bgPosX}px ${bgPosY}px`;
      }
    },
    complete: function () {
      canSaveDate = true;
    },
  });
}

function showButton(direction) {
  anime({
    targets: "#btn-save",
    translateY: [10, 0],
    opacity: 1,
    duration: 1200,
    easing: "easeOutExpo",
    direction: direction,
  });
}

document.body.addEventListener("click", function (e) {
  let targetId = e.target.id;
  if (targetId == "btn-save") {
    if (canSaveDate) {
      showButton("reverse");
      showWriteup("reverse");
    }
  }
  else if(targetId == "to-third") {
    displaySecond("reverse");
  }
  else if(targetId == "save") {
    displayThird("reverse");
    
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


function displaySecond(direction) {
  anime
    .timeline({ easing: "easeOutExpo", direction: direction })
    .add({
      targets: "#first",
      opacity: [1, 0],
      duration: 1200,
      complete: function (anim) {
        first.style.display = "none";
        second.style.display = "block";
        if (direction == "reverse") {
          second.style.display = "none";
          third.style.display = "block"
          displayThird("normal");
        }
      },
    })
    .add({
      targets: "#second",
      opacity: [0, 1],
      duration: 1000,
      delay: 600,
    })
    .add({
      targets: ".svg-second",
      scale: [0, 1],
      opacity: 1,
      duration: 600,
      easing: "easeOutSine",
    })
    .add({
      targets: ".logo-second",
      translateX: [10, 0],
      opacity: [0, 1],
      duration: 600,
      easing: "easeOutSine",
    })
    .add({
      targets: "#body-second",
      opacity: [0, 1],
      translateY: [10, 0],
      duration: 1200
    });
}

function displayThird(direction) {
  anime
    .timeline({ easing: "easeOutExpo", direction: direction })
    .add({
      targets: "#third",
      opacity: [0, 1],
      duration: 1000,
      delay: 600,
      complete: function (anim) {
        if (direction == "reverse") {
          location.reload();
        }
      },
    })
    .add({
      targets: ".svg-third",
      scale: [0, 1],
      opacity: 1,
      duration: 600,
      easing: "easeOutSine",
    })
    .add({
      targets: ".logo-third",
      translateX: [10, 0],
      opacity: [0, 1],
      duration: 600,
      easing: "easeOutSine",
    })
    .add({
      targets: "#body-third",
      opacity: [0, 1],
      translateY: [10, 0],
      duration: 1200
    });

}
