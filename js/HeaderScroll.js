$(window).scroll(function () {
    let wScroll = $(this).scrollTop();
    const logosecond = $('.spn')
    const logofirst = $(".h3");
    
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