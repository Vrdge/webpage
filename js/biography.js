
// $(window).scroll(function () {
//     var wScroll = $(this).scrollTop();
//     const header_inner = document.querySelector(".header_inner")
//     const logosecond  = document.querySelector('.spn')
//     const logofirst = document.querySelector("h3")
//     const menu_burger = document.querySelectorAll(".menu-burger")
//     const menu_small_item = document.querySelector(".menu_small_item")

//     if (wScroll >= ($(window).height() / 2)) {
//         header_inner.style.background = "#FFDBAC";
//         header_inner.style.backdropFilter = "blur(5px)";
//         header_inner.style.webkitBackdropFilter = "blur(5px)";
//         header_inner.style.transition = "0.7s ease"
//         logosecond.transition = "1s ease" 
//         logosecond.style.color = "#8E3200"
//         logofirst.style.color = "#252525"
//         menu_burger.style.color = "black"

//     } else {
//         header_inner.style.opacity = "1";
//         header_inner.style.background = "none";
//         header_inner.style.backdropFilter = "none";
//         header_inner.style.webkitBackdropFilter = "none";
//         header_inner.style.transition = "0.7s ease"
//         logosecond.transition = "1s ease" 
//         logosecond.style.color = "white"
//         logofirst.style.color = "white"
//         menu_burger.style.color = "white"



//     }

// });




let condition = true;
        const rotate_back = () =>{
            anime({
                targets: '.stick1',
                rotate: -180,
                easing: "easeInOutQuad",
                direction: 'alternate',
                duration: 1000,
                opacity:1,
                color:"white",
                loop: false
                
            })
            anime({
                targets: '.stick2',
                rotate: -180,
                easing: "easeInOutQuad",
                direction: 'alternate',
                duration: 1000,
                translateX:0,
                translateY: 0,
                color:"white",
                loop: false
            })
            anime({
                targets: '.stick3',
                rotate: -180,
                easing: "easeInOutQuad",
                direction: 'alternate',
                duration: 1000,
                translateY:0,
                translateX:0,
                color:"white",
                loop: false
            })
            anime({
                targets:'menu_small_icon',
                rotate:-90,
                easing: "easeInOutQuad",
                direction: 'alternate',
                duration: 1000,
                loop: false
            })
        }
        const rotate = () => {
            anime({
                targets: '.stick1',
                rotate: 215,
                easing: "easeInOutQuad",
                direction: 'alternate',
                duration: 1000,
                display:'none',
                opacity:0,
                color:"black",
                loop: false
            })
            anime({
                targets: '.stick2',
                rotate: 45,
                easing: "easeInOutQuad",
                direction: 'alternate',
                duration: 1000,
                translateX:-8,
                translateY: -8,
                color:"black",
                loop: false
            })
            anime({
                targets: '.stick3',
                rotate: 135,
                easing: "easeInOutQuad",
                direction: 'alternate',
                duration: 1000,
                translateY: 20,
                translateX:-20,
                color:"black",
                loop: false
            })
            anime({
                targets:'menu_small_icon',
                rotate:90,
                easing: "easeInOutQuad",
                direction: 'alternate',
                duration: 1000,
                loop: false
            })
        }
        const forward = () => {
            anime({
                targets: '.menu-small',
                translateX: ['-100%', '0'],
                easing: 'easeInOutQuad',
                direction: 'alternate',
                duration: 1000, 
                loop: false
            })
            condition = false
        }
        const backward = () => {
            anime({
                targets: '.menu-small',
                translateX: ['0', '-100%'],
                easing: 'easeInOutQuad',
                direction: 'alternate',
                duration: 1000,
                loop: false
            })
            condition = true
        }
        $('.menu_small_icon').click(function () {
            if (condition) {
                forward()
                rotate()
            } else {
                backward()
                rotate_back()
            }
        }

        )
        let start = 0;
        let end = 0
        $(".container").on("touchstart", function (event) {
            start = event.originalEvent.touches[0].pageX
        })
        $('.container').on('touchend', function (event) {
            end = event.originalEvent.changedTouches[0].pageX;
            if (end - start >= 100 && condition) {
                forward()
            } else if (start - end >= 100 && !condition) {
                backward()
            }
        })
