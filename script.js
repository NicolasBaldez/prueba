

var swiper = new Swiper(".mySwiper-1",{
    slidesPerview:1,
    spaceBetween:30,
    loop:true,
    pagination: {el: ".swiper-pagination",clickable:true,}
    navigation:{
        nextE1:".swiper-button-next",
        prevE1:".swiper-button-prev"
    }
})

var swiper = new Swiper(".mySwiper-2", {
    slidesPerview: 4,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank:true
    navigation: {
        nextE1: ".swiper-button-next",
        prevE1: ".swiper-button-prev"
    }, 
    breakpoints: {
        0:{slidesPervView:1},
        520:{slidesPerView:2},
        950:{slidesPerView:3}
    }
});
