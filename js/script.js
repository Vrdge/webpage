$(window).scroll(function () {
  let wScroll = $(this).scrollTop();
  const logosecond = document.querySelector(".spn");
  const logofirst = document.querySelector(".h3");
  
  if (wScroll >= $(window).height() / 2) {
    anime({
      targets: ".header_inner",
      backgroundColor: "#FFDBAC",
      transition: "0.7s ease",
      duration: 0.7,
    });

    $(logofirst).css({ color: "#252525", transition: "0.7 ease" });
    $(logosecond).css({ color: "#8E3200", transition: "0.7 ease" });

    $(".ifif").css({ color: "black", transition: "0.7 ease" });
  } else {
    anime({
      targets: ".header_inner",
      backgroundColor: "rgba(0,0,0,0.0)",

      transition: "0.7s ease",
      duration: 0.7,
    });

    $(logofirst).css({ color: "white", transition: "0.7 ease" });
    $(logosecond).css({ color: "white", transition: "0.7 ease" });
    $(".ifif").css({ color: "white", transition: "0.7 ease" });
  }
});

let condition = true;
const rotate_back = () => {
  anime({
    targets: ".stick1",
    rotate: -180,
    easing: "easeInOutQuad",
    direction: "alternate",
    duration: 1000,
    opacity: 1,
    color: "white",
    loop: false,
  });
  anime({
    targets: ".stick2",
    rotate: -180,
    easing: "easeInOutQuad",
    direction: "alternate",
    duration: 1000,
    translateX: 0,
    translateY: 0,
    color: "white",
    loop: false,
  });
  anime({
    targets: ".stick3",
    rotate: -180,
    easing: "easeInOutQuad",
    direction: "alternate",
    duration: 1000,
    translateY: 0,
    translateX: 0,
    color: "white",
    loop: false,
  });
  anime({
    targets: "menu_small_icon",
    rotate: -90,
    easing: "easeInOutQuad",
    direction: "alternate",
    duration: 1000,
    loop: false,
  });
};
const rotate = () => {
  anime({
    targets: ".stick1",
    rotate: 215,
    easing: "easeInOutQuad",
    direction: "alternate",
    duration: 1000,
    display: "none",
    opacity: 0,
    color: "black",
    loop: false,
  });
  anime({
    targets: ".stick2",
    rotate: 45,
    easing: "easeInOutQuad",
    direction: "alternate",
    duration: 1000,
    translateX: -8,
    translateY: -8,
    color: "black",
    loop: false,
  });
  anime({
    targets: ".stick3",
    rotate: 135,
    easing: "easeInOutQuad",
    direction: "alternate",
    duration: 1000,
    translateY: 20,
    translateX: -20,
    color: "black",
    loop: false,
  });
  anime({
    targets: "menu_small_icon",
    rotate: 90,
    easing: "easeInOutQuad",
    direction: "alternate",
    duration: 1000,
    loop: false,
  });
};
const forward = () => {
  anime({
    targets: ".menu-small",
    translateX: ["-100%", "0"],
    easing: "easeInOutQuad",
    direction: "alternate",
    duration: 1000,
    loop: false,
  });
  condition = false;
};
const backward = () => {
  anime({
    targets: ".menu-small",
    translateX: ["0", "-100%"],
    easing: "easeInOutQuad",
    direction: "alternate",
    duration: 1000,
    loop: false,
  });
  condition = true;
};
$(".menu_small_icon").click(function () {
  if (condition) {
    forward();
    rotate();
  } else {
    backward();
    rotate_back();
  }
});
let start = 0;
let end = 0;
$(".container").on("touchstart", function (event) {
  start = event.originalEvent.touches[0].pageX;
});
$(".container").on("touchend", function (event) {
  end = event.originalEvent.changedTouches[0].pageX;
  if (end - start >= 100 && condition) {
    forward();
  } else if (start - end >= 100 && !condition) {
    backward();
  }
});
  

function myFunction(x) {
  switch (x) {
    case x.matches:
      $(".item_image").css({ width: "12em" });
    default:  
      break
  }
}

let x = window.matchMedia("(max-width: 700px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changesz
