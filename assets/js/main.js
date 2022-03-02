$(document).ready(function () {
    // All tooltip develop
    $("[data-toggle=tooltip]").tooltip();

    // Custom file upload
    $(".custom-file-input").on("change", function () {
        const fileName = $(this).val().split("\\").pop();
        $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    });

    $(window).scroll(() => {
        // navbar
        if (window.scrollY >= 10) $(".navbar-fixed-jquery").addClass("active");
        else $(".navbar-fixed-jquery").removeClass("active");
    });
    if (window.scrollY >= 10) $(".navbar-fixed-jquery").addClass("active");
    else $(".navbar-fixed-jquery").removeClass("active");

    // Input styling
	const styleInput = $('.inputDIV input, .inputDIV textarea, .inputDIV select')
	styleInput.focus(function() {
		$(this).next('span').css('width', '100%')
	})
	styleInput.blur(function() {
		$(this).next('span').css('width', '0%')
	})

    // Registration Nav
    $('[data-reg-content]').click(function() {
        $(this).addClass('active')
        const regItem = $(this)

        $($(this).data('reg-content')).siblings().removeClass('active')
        $($(this).data('reg-content')).addClass('active')
        $('[data-reg-content]').filter(function() {
            if($(this).data('reg-content') === regItem.data('reg-content')) {
                $(this).addClass('active')
            }
        })
    })
});


// Auto scroller
try {
    let view = 5;
    if (window.innerWidth <= 768) {
        view = 2;
    } else {
        view = 5;
    }
    const swiper = new Swiper(".swiper-container", {
        // Optional parameters
        direction: "horizontal",
        loop: true,
        slidesPerView: view,
        spaceBetween: 20,
        autoplay: {
            delay: 1000,
            speed: 1,
            pauseOnMouseEnter: false,
        },
        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
        },
    });
} catch (err) {
    console.error(err);
}
