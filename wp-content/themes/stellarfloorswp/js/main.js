$ = jQuery;
/* --------------------------------
	PRELOADEER
-------------------------------- */
$(function($) {
    $(window).on("load", function() {
        setTimeout(function() {
            $('.prel').addClass('is-load');
        }, 3000);
    });
    $(".counter").each(function() {
        var count = $(this);
        var countTo = count.attr('data-count');
        // console.log(countTo);
        $({ countNum: count.text() }).animate({
            countNum: countTo,
        }, {
            duration: 3000,
            easing: 'linear',
            step: function() {
                count.text(Math.floor(this.countNum));
            },
            complete: function() {
                count.text(this.countNum);
            }
        });
    });
});
//adding the action to the button
$(document).on('click', '#moveUp', function() {
    fullpage_api.moveSectionUp();
});
$(function() {
    $(".sf-menu").superfish({
        delay: 200,
        speed: "fast",
        cssArrows: false
    }).after("<div id='mobile-menu'>").clone().appendTo("#mobile-menu");
    $("#mobile-menu").find("*").attr("style", "");
    $("#mobile-menu").children("ul").removeClass("sf-menu").parent().mmenu({
        extensions: ['widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black'],
        navbar: {
            title: "Меню"
        }
    });
    $(".toggle-mnu").click(function() {
        $(this).addClass("on");
    });
    var api = $("#mobile-menu").data("mmenu");
    api.bind("closed", function() {
        $(".toggle-mnu").removeClass("on");
    });
});
// Acc
$(document).on("mouseover", ".naccs .menu div", function() {
    var numberIndex = $(this).index();
    if (!$(this).is("show")) {
        $(".naccs .menu div").removeClass("show");
        $(".naccs ul li").removeClass("show");
        $(this).addClass("show");
        $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("show");
        var listItemHeight = $(".naccs ul").find("li:eq(" + numberIndex + ")").innerHeight();
        $(".naccs ul").height(listItemHeight + "px");
    }
});
// Swiper Holder
var swiperHolder = null;
var mediaQuerySize = 768;

function catalogSliderInit() {
    if (!swiperHolder) {
        swiperHolder = new Swiper(".case__holder", {
            slidesPerView: "auto",
            freeMode: true,
            allowTouchMove: true,
        });
    }
}

function catalogSliderDestroy() {
    if (swiperHolder) {
        swiperHolder.destroy();
        swiperHolder = null;
    }
}
$(window).on('load resize', function() {
    let windowWidth = $(this).outerWidth();
    if ($('.cases-slider').length > 0 || $('.skills').length > 0) {
        if (windowWidth < mediaQuerySize) {
            catalogSliderInit()
        } else {
            catalogSliderDestroy()
        }
    }
});
// Swiper CASES
let swiperCASES = new Swiper(".case:not(.page--portfolio) .cases-slider", {
    slidesPerView: 2,
    spaceBetween: 25,
    loop: false,
    pagination: {
        el: ".cases-slider__pagination",
        clickable: true,
    },
    breakpoints: {
        300: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        561: {
            slidesPerView: 2,
            spaceBetween: 10,
            grid: {
                rows: 2,
                fill: 'row',
            },
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 25,
            grid: {
                rows: 2,
                fill: 'row',
            },
        },
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    navigation: {
        prevEl: '.cases-slider__prev',
        nextEl: '.cases-slider__next'
    },
});
$(window).on('load resize', function() {
    let windowWidth = $(this).outerWidth();
    if ($('.page--portfolio').length > 0) {
        if (windowWidth > mediaQuerySize) {
            pagePortfolioDestroy()
        } else {
            pagePortfolioInit();
        }
    }
});
var swiperPortfolio = new Swiper(".case.page--portfolio .cases-slider", {
    slidesPerView: 2,
    spaceBetween: 25,
    loop: false,
    pagination: {
        el: ".cases-slider__pagination",
        clickable: true,
    },
    breakpoints: {
        300: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        561: {
            slidesPerView: 2,
            spaceBetween: 10,
            grid: {
                rows: 2,
                fill: 'row',
            },
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 25,
            grid: {
                rows: 2,
                fill: 'row',
            },
        },
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    navigation: {
        prevEl: '.cases-slider__prev',
        nextEl: '.cases-slider__next'
    },
});

function pagePortfolioInit() {
    if (!swiperPortfolio) {
        swiperPortfolio = new Swiper(".case.page--portfolio .cases-slider", {
            slidesPerView: 2,
            spaceBetween: 25,
            loop: false,
            pagination: {
                el: ".cases-slider__pagination",
                clickable: true,
            },
            breakpoints: {
                300: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                561: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                    grid: {
                        rows: 2,
                        fill: 'row',
                    },
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 25,
                    grid: {
                        rows: 2,
                        fill: 'row',
                    },
                },
            },
            scrollbar: {
                el: ".swiper-scrollbar",
            },
            navigation: {
                prevEl: '.cases-slider__prev',
                nextEl: '.cases-slider__next'
            },
        });
    }
}

function pagePortfolioDestroy() {
    if (swiperPortfolio) {
        swiperPortfolio.destroy();
        swiperPortfolio = null;
    }
}
// Swiper FOTO
var swiper = new Swiper('.fotoslider__row', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        560: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        960: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
    pagination: {
        el: '.fotoslider__pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.fotoslider__next',
        prevEl: '.fotoslider__prev',
    },
});
// Swiper STOCK
var swiper4 = new Swiper(".stock-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".stock-slider__pagination",
        clickable: true,
    },
    navigation: {
        prevEl: '.stock-slider__prev',
        nextEl: '.stock-slider__next'
    },
});
// Swiper Testimonials
var swiper2 = new Swiper(".testimonials__items", {
    loop: false,
    autoHeight: true,
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    pagination: {
        el: ".testimonials__items-pagination",
        clickable: true,
    },
    navigation: {
        prevEl: '.testimonials__items-prev',
        nextEl: '.testimonials__items-next'
    },
});
var swiperMainPortfolio = new Swiper(".skills .cases-slider", {
    slidesPerView: 2,
    spaceBetween: 25,
    loop: false,
    pagination: {
        el: ".cases-slider__pagination",
        clickable: true,
    },
    // breakpoints: {
    //   300: {
    //     slidesPerView: 2,
    //     spaceBetween: 10,
    //   },
    // },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    navigation: {
        prevEl: '.cases-slider__prev',
        nextEl: '.cases-slider__next'
    },
});
// END TABS
// Swiper CASE
var swiper = new Swiper(".case-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    pagination: {
        el: ".case-slider__pagination",
        clickable: true,
    },
    navigation: {
        prevEl: '.case-slider__prev',
        nextEl: '.case-slider__next'
    },
});
// Slider page link
var swiper = new Swiper(".page-link__list", {
    watchSlidesProgress: true,
    slidesPerView: 4,
    loop: false,
    spaceBetween: 0,
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 3,
        },
        1023: {
            slidesPerView: 4,
        }
    },
    scrollbar: {
        el: ".page-link__bottom .swiper-scrollbar",
    },
    pagination: {
        el: ".page-link__pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".page-link__next",
        prevEl: ".page-link__prev",
    },
});
// Swiper FOTO
var swiper = new Swiper('.full_slider_1', {
    watchSlidesProgress: true,
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.full__pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.full__next',
        prevEl: '.full__prev',
    },
});
let searchBtn = document.querySelector('.search');
let searchBox = document.querySelector('.searchBox');
searchBtn.onclick = function() {
    searchBox.classList.add('active');
}
$(document).mouseup(function(e) {
    var container = $('.searchBox'); // Указываем у какого блока / класса убираем
    if (container.has(e.target).length === 0) {
        container.removeClass('active'); // Какой класс убираем
    }
});
// $('.list_portfolio').slick({
//         dots: false,
//         infinite: true,
//         speed: 300,
//         slidesToShow: 2,
//         infinite: true,
//         slidesToScroll: 1,
//         centerPadding: '15px',
//         centerMode: false,
//         asNavFor: '.list_portfolio',
//         prevArrow: $('.main_prev_1'),
//         nextArrow: $('.main_next_1'),
//         responsive: [{
//             breakpoint: 767,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 variableWidth: true,
//             }
//         }]
//     });
$('.tabs__caption li').on('click', function(e) {
    $('.list_portfolio').slick('refresh');
});
$("ul.tabs__caption").on("click", "li:not(.active)", function() {
    $(this).addClass("active").siblings().removeClass("active").closest("div.tabs").find("div.tabs__content").removeClass("active").eq($(this).index()).addClass("active");
});
// Маска ввода телефона
window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call(document.querySelectorAll('.tel'), function(input) {
        var keyCode;

        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g, function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5) this.value = ""
        }
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)
    });
});
// $('.fotoslider').slick({
//         dots: true,
//         infinite: true,
//         speed: 300,
//         slidesToShow: 3,
//         infinite: true,
//         slidesToScroll: 1,
//         centerPadding: '15px',
//         centerMode: false,
//         prevArrow: $('.main_prev_2'),
//         nextArrow: $('.main_next_2'),
//         responsive: [{
//             breakpoint: 767,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1,
//                 variableWidth: true,
//             }
//         }]
//     });
function counters(params) {
    $('.counter-item span').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        $({ countNum: $this.text() }).animate({
            countNum: countTo
        }, {
            duration: 4000,
            easing: 'linear',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
            }
        });
    });
};
/* --------------------------------
	FUNCTION ADD ONWHEEL LISTENER
-------------------------------- */
function add_onwheel_listener(params) {
    // example params
    // var params = [
    // 	[elem, onScrollOnFunction],
    // ];
    for (var i = 0; i < params.length; i++) {
        var the_elem = params[i][0];
        var the_func = params[i][1];
        if (the_elem.addEventListener) {
            if ('onwheel' in document) {
                // IE9+, FF17+
                the_elem.addEventListener("wheel", the_func);
            } else if ('onmousewheel' in document) {
                // СѓСЃС‚Р°СЂРµРІС€РёР№ РІР°СЂРёР°РЅС‚ СЃРѕР±С‹С‚РёСЏ
                the_elem.addEventListener("mousewheel", the_func);
            } else {
                // Firefox < 17
                the_elem.addEventListener("MozMousePixelScroll", the_func);
            }
        } else { // IE8-
            the_elem.attachEvent("onmousewheel", the_func);
        }
    }
}
window.onload = function() {
    rotateObjectsToMouse('.gradient-to-cursor', 0.1);
};

function rotateObjectsToMouse(selector, speed) {
    var gradients = [];
    var elems = document.querySelectorAll(selector);
    for (var i = 0; i < elems.length; i++) {
        var elem = elems[i];
        gradients.push(new rotateObjectToMouse(elem, speed));
    }
    return gradients;
}

function rotateObjectToMouse(elem, speed) {
    var self = this;
    this.elem = elem;
    this.speed = speed;
    this.angle = 0;
    this.toAngle = 0;
    this.init = function() {
        if (!self.elem.classList.contains('inited')) {
            self.updatePosition();
            self.elem.addEventListener('mousemove', self.onMouseMove);
            self.loop();
            self.elem.classList.add('inited');
        }
    }
    this.loop = function() {
        self.angle = self.slerp(self.angle, self.toAngle, self.speed);
        self.updatePosition();
        requestAnimationFrame(function() {
            self.loop(self.speed);
        });
    };
    this.updatePosition = function() {
        self.elem.style.transform = 'translate(-50%, -50%) rotate(' + (self.angle) + 'rad)';
    }
    this.onMouseMove = function(e) {
        var mouseX = e.pageX,
            mouseY = e.pageY,
            angle = self.getAngle(mouseX, mouseY),
            maxSide = Math.max(self.elem.parentNode.offsetWidth, self.elem.parentNode.offsetHeight);
        self.elem.style.width = (maxSide * 1.5) + 'px';
        self.elem.style.height = (maxSide * 1.5) + 'px';
        self.toAngle = angle;
        //self.updatePosition();
    }
    this.slerp = function(start, end, p) {
        let a = end - start;
        return start + ((((a % (Math.PI * 2)) + Math.PI * 3) % (Math.PI * 2)) - Math.PI) * p;
    }
    this.getAngle = function(mouseX, mouseY) {
            var elemBounding = self.elem.parentNode.getBoundingClientRect(),
                elemCenterX = elemBounding.left + window.scrollX + self.elem.parentNode.offsetWidth / 2,
                elemCenterY = elemBounding.top + window.scrollY + self.elem.parentNode.offsetHeight / 2,
                angle = Math.atan2(elemCenterY - mouseY, elemCenterX - mouseX);
            console.log(document.body.scrollTop);
            return angle;
        }
        //Init
    this.init();
}
// скрыть показать текст
if ($('.swiper-job').length > 0) {
    let swiperJob = new Swiper(".swiper-job", {
        slidesPerView: 2,
        spaceBetween: 20,
        breakpoints: {
            960: {
                slidesPerView: 3
            },
        },
        scrollbar: {
            el: ".swiper-job .swiper-scrollbar",
        },
        autoplay: {
            delay: 1500,
        },
    });
}
if ($('.result__wrap').length > 0) {
    let swiperResult = new Swiper(".result__wrap", {
        slidesPerView: 4,
        spaceBetween: 30,
        breakpoints: {
            300: {
                slidesPerView: 1,
            },
            560: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            960: {
                slidesPerView: 4,
            },
        },
        scrollbar: {
            el: ".result__wrap .swiper-scrollbar",
        },
    });
}
$(document).ready(function() {
    let result = $('.result__block');
    if (result.length > 0) {
        result.each(function(index, item) {
            let items = $(item).find('.result__box');
            let lastElement = items.length;
            let halfElemt = Math.ceil(lastElement / 2);
            items.slice(0, halfElemt).wrapAll('<div class="result__holder"></div>')
            items.slice(halfElemt, lastElement).wrapAll('<div class="result__holder"></div>')
        })
    }
});
let swiperSlides = [...swiperCASES.slides];
const $mySwiper = $(".cases-slider:not(.swiper--portfolio)") // получаем jQuery element для нашего свайпер контейнера
$(document).on('click', '.case:not(.page--portfolio) .case__box', function(e) {
    const filterData = e.currentTarget.dataset.filter;
    const check = filterData;
    $('.case__box').removeClass('case__box--active');
    $mySwiper.fadeOut(200, () => { // плавно скрываем его и в коллбэк функции, которая выполнится после скрытия делаем фильтрацию и тд
        swiperCASES.removeAllSlides()
        const slides = swiperSlides.filter((item, index) => $(item)[0].dataset.filter == check || filterData == "all")
        swiperCASES.params.grid.rows = slides.length <= swiperCASES.params.slidesPerView ? 1 : 2
        swiperCASES.appendSlide(slides)
        swiperCASES.updateProgress();
        swiperCASES.updateSize();
        swiperCASES.updateSlides();
        swiperCASES.update();
        $mySwiper.fadeIn(200) // и плавно возвращаем обратно
        $(this).addClass('case__box--active');
    })
})
let swiperPortfolioSlides = [...swiperPortfolio.slides];
const $mySwiperPortfolio = $(".cases-slider.swiper--portfolio") // получаем jQuery element для нашего свайпер контейнера
$(document).on('click', '.case.page--portfolio .case__box', function(e) {
    if (window.innerWidth <= 992) {
        const filterData = e.currentTarget.dataset.filter;
        const check = filterData;
        console.log(filterData)
        $('.case__box').removeClass('case__box--active');
        $mySwiperPortfolio.fadeOut(200, () => { // плавно скрываем его и в коллбэк функции, которая выполнится после скрытия делаем фильтрацию и тд
            swiperPortfolio.removeAllSlides()
            const slides = swiperPortfolioSlides.filter((item, index) => $(item)[0].dataset.filter == check || filterData == "all")
            swiperPortfolio.params.grid.rows = slides.length <= swiperPortfolio.params.slidesPerView ? 1 : 2
            swiperPortfolio.appendSlide(slides)
            swiperPortfolio.updateProgress();
            swiperPortfolio.updateSize();
            swiperPortfolio.updateSlides();
            swiperPortfolio.update();
            $mySwiperPortfolio.fadeIn(200) // и плавно возвращаем обратно
            $(this).addClass('case__box--active');
        })
    } else {
        const filterData = e.currentTarget.dataset.filter;
        const check = filterData;
        $('.case__box').removeClass('case__box--active');
        $(this).addClass('case__box--active');
        $('.swiper-slide.cases-slider__slide').each(function(index, item) {
            if ($(item)[0].dataset.filter == check || filterData == "all") {
                $(item).show();
            } else {
                $(item).hide();
            }
        })
    }
})
$(document).on('click', '.popup__close', function(e) {
    e.preventDefault();
    $.magnificPopup.close();
});
$(document).on('mouseover', '.price-table .price-table__cell', function() {
    let count = $(this).data('id');
    if (count == undefined) return;
    $(this).addClass('active');
    let blocks = $(this).parents('.price-table').find($('.price-table__cell'));
    let sum = 0;
    console.log('blocks', blocks)
    blocks.each(function(index, item) {
        if ($(item).data('id') == count) {
            $(item).addClass('active');
            sum += $(item).outerHeight();
        }
    })
    sum = sum - 2;
   $('.price-table__cell.active')[0].style.setProperty('--value', sum + 'px');

})
$(document).on('mouseleave', '.price-table__cell', function() {
    $('.price-table__cell').removeClass('active');
})
$(document).ready(function() {
    if ($('.popup-modal').length > 0) {
        $('.popup-modal').magnificPopup({
            type: 'inline',
            mainClass: 'my-mfp-slide-bottom',
            preloader: false,
            modal: true
        });
    }
    $('.reviews__wrap').magnificPopup({
        delegate: 'a',
        type: 'image',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        }
    });
});
if ($('.popup__select').length > 0) {
    $('.popup__plan').select2({
        language: "ru",
    })
}
if ($('.consult').length > 0) {
    $('.popup__consult').select2({
        language: "ru",
        selectionCssClass: 'consult__wrap-select',
    }).on('change', function(e) {
        $('.popup__number span').text($(e.currentTarget).val())
    });
}
if ($('.blog__select').length > 0) {
    $('.blog__select').select2({
        language: "ru",
        selectionCssClass: 'blog__wrap-select',
        dropdownCssClass: 'blog__dropdown',
    });
}
$(document).mousedown(function(e) {
        if (!$('.popup__inner').is(e.target) && $('.popup__inner').has(e.target).length === 0) {;
            if ($('.popup__inner').length > 0) {
                $.magnificPopup.close();
            }
        };
    })
    // swiper filter
var swiperHolder = null;
var mediaQuerySizeFilter = 767;

function filterSliderInit() {
    if (!swiperHolder) {
        swiperHolder = new Swiper(".filter__slider", {
            slidesPerView: "auto",
            freeMode: true,
            allowTouchMove: true,
        });
    }
}

function filterSliderDestroy() {
    if (swiperHolder) {
        swiperHolder.destroy();
        swiperHolder = null;
    }
}
$(window).on('load resize', function() {
    let windowWidth = $(this).outerWidth();
    if ($('.blog').length > 0) {
        if (windowWidth < mediaQuerySizeFilter) {
            filterSliderInit()
        } else {
            filterSliderDestroy()
        }
    }
});
var swiperAnimation = null;
var mediaQuerySizeswiperAnimation = 1023;

function AnimationSliderInit() {
    if (!swiperAnimation) {
        swiperAnimation = new Swiper(".mudboard__slider", {
            slidesPerView: 'auto',
            allowTouchMove: false,
            scrollbar: {
                el: '.swiper-scrollbar'
            },
            breakpoints: {
                300: {
                    slidesPerView: 1,
                    allowTouchMove: true,
                    spaceBetween: 0
                },
                561: {
                    slidesPerView: 2,
                    allowTouchMove: true,
                    spaceBetween: 20
                },
                1023: {
                    slidesPerView: 'auto',
                    allowTouchMove: false,
                },
            }
        });
    }
}

function AnimationSliderDestroy() {
    if (swiperAnimation) {
        swiperAnimation.destroy();
        swiperAnimation = null;
    }
}
$(window).on('load resize', function() {
    let windowWidth = $(this).outerWidth();
    if ($('.mudboard').length > 0) {
        AnimationSliderInit();
        if (windowWidth > mediaQuerySizeswiperAnimation) {
            swiperAnimation.update();
        }
    }
});
$(document).on('click', '.read-more-trigger', function() {
    $(this).toggleClass('active');
    $('.text_hide').toggleClass('active');
    $('.spoiler_content').toggleClass('active');
    let elem = $('.read-more-trigger')
    if ($(this).hasClass('active')) {
        elem.text(elem.attr('data-hide'));
    } else {
        elem.text(elem.attr('data-show'));
    }
})
$(document).on('click', '.sf-mega .gradient-close', function() {
    let parent = $(this).parents('li');
    parent.removeClass('sfHover');
    parent.find('.sf-mega').hide();
})
$(document).on('click', '.skills .case__box', function(e) {
    const filterData = e.currentTarget.dataset.filter;
    const check = filterData;
    $('.case__box').removeClass('case__box--active');
    $(this).addClass('case__box--active');
    $('.swiper-slide.cases-slider__slide').each(function(index, item) {
        if ($(item)[0].dataset.filter == check || filterData == "all") {
            $(item).show();
        } else {
            $(item).hide();
        }
    })
    swiperMainPortfolio.updateProgress();
    swiperMainPortfolio.updateSize();
    swiperMainPortfolio.updateSlides();
    swiperMainPortfolio.update();
})
$(function() {
    var $statistik = $('.stats');
    if ($statistik.length) {
        var jqBar = $('.stats'); // селектор для вашего блока
        var jqBarStatus = true;
        var num1 = $('#st1-hidden').text();
        var num2 = $('#st2-hidden').text();
        var num3 = $('#st3-hidden').text();
        var num4 = $('#st4-hidden').text();
        $('#st1-hidden').remove();
        $('#st2-hidden').remove();
        $('#st3-hidden').remove();
        $('#st4-hidden').remove();
        $(window).scroll(function() {
            var scrollEvent = ($(window).scrollTop() > (jqBar.position().top - $(window).height()));
            if (scrollEvent && jqBarStatus) {
                jqBarStatus = false;
                var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
                jQuery('#st1').animateNumber({
                    number: Number(num1),
                    numberStep: comma_separator_number_step
                }, {
                    easing: 'swing',
                    duration: 4000
                });
                jQuery('#st2').animateNumber({
                    number: Number(num2),
                    numberStep: comma_separator_number_step
                }, {
                    easing: 'swing',
                    duration: 4000
                });
                $('#st3').animateNumber({
                    number: Number(num3),
                    numberStep: comma_separator_number_step
                }, {
                    easing: 'swing',
                    duration: 4000
                });
                jQuery('#st4').animateNumber({
                    number: Number(num4),
                    numberStep: comma_separator_number_step
                }, {
                    easing: 'swing',
                    duration: 4000
                });
            }
        });
    }
});
/* --------------------------------
	FUNCTIONS PARTICLE VARIABLES
-------------------------------- */
function practicleDefault(params) {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 25,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
};

function practicleNasa(params) {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 100,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 1,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 4,
                    "size_min": 0.3,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 600
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": false,
                    "mode": "repulse"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 250,
                    "size": 0,
                    "duration": 2,
                    "opacity": 0,
                    "speed": 3
                },
                "repulse": {
                    "distance": 400,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
};

function practicleBubble(params) {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 6,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#1b1e34"
            },
            "shape": {
                "type": "polygon",
                "stroke": {
                    "width": 0,
                    "color": "#000"
                },
                "polygon": {
                    "nb_sides": 6
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 160,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 10,
                    "size_min": 40,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 200,
                "color": "#ffffff",
                "opacity": 1,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 8,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
};

function practicleSnow(params) {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 50,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#fff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 10,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 500,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "bottom",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": false,
                    "mode": "repulse"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 0.5
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 4,
                    "duration": 0.3,
                    "opacity": 1,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
};
$(window).on("load", function() {
    setTimeout(function() {
        practicleBubble();
    }, 1000);
});
$(document).ready(function() {
    console.log( $('.head__menu-top').outerHeight())
    if (window.matchMedia('(min-width: 768px)').matches) {
        $('#sidebar').theiaStickySidebar({
            additionalMarginTop: $('.head__menu-top').outerHeight()
        });
    }
    function fixHeader() {
      let heightHeader = 80;
      if (heightHeader < $(window).scrollTop()) {
        $(document.body).addClass('header-control');
      } else {
       $(document.body).removeClass('header-control');
      }
    }
    if ($('.home').length==0) {
        fixHeader();
    }

    $(window).scroll(function() {
        if ($('.home').length==0) {
            fixHeader()
        }
    });
    // $(document).on('wheel', function(e){
    //     if (e.originalEvent.wheelDelta >= 0) {
    //         console.log('Вверх');
    //     } else {
    //         console.log('Вниз');
    //     }
    // });

 
});

$(document).on('click', '.search-fixed', function() {
    $(document.body).addClass('search-open');
    $('.head__block input').focus();
})


$(document).mouseup(function(e) {
    var container = $('.head__menu'); // Указываем у какого блока / класса убираем
    if (container.has(e.target).length === 0) {
       $(document.body).removeClass('search-open');
    }
});


  var fileInput = $('.file-input');
  var droparea = $('.file-drop-area');

  // изменить внутренний текст
  fileInput.on('change', function() {
    var filesCount = $(this)[0].files.length;
    var textContainer = $(this).prev();

    if (filesCount > 0 ) {
        if (filesCount === 1) {
          // если выбран один файл, показать имя файла
          var fileName = $(this).val().split('\\').pop();
          textContainer.text(fileName);
        } else {
          // в противном случае показать количество файлов
          textContainer.text(filesCount + ' выбраных файла');
        }
    }
  });

  // Swiper  Read
let swiperRead = new Swiper(".read__slider", {
    slidesPerView: 3,
     grid: {
        rows: 2,
      },
    spaceBetween: 25,
    loop: false,
    pagination: {
        el: ".cases-slider__pagination",
        clickable: true,
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 0,
            grid: {
                rows: 2,
            },
        },
        768: {
           slidesPerView: 2,
           spaceBetween: 25,
           grid: {
             rows: 1,
          },
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 25,
            grid: {
                rows: 1,
            },
        },
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    navigation: {
        prevEl: '.cases-slider__prev',
        nextEl: '.cases-slider__next'
    },
});

var swiperAction = null;

function ActionSliderInit() {
    if (!swiperAction) {
        swiperAction = new Swiper(".action-slider", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: false,
    pagination: {
        el: ".cases-slider__pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
           slidesPerView: 2,
           spaceBetween: 25,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
    },
    navigation: {
        prevEl: '.cases-slider__prev',
        nextEl: '.cases-slider__next'
    },
});
    }
}

function ActionDestroy() {
    if (swiperAction) {
        swiperAction.destroy();
        swiperAction = null;
    }
}

$(window).on('load resize', function() {
    let windowWidth = $(this).outerWidth();
    if ($('.stock-block').length > 0) {
        if (windowWidth > 767) {
            ActionSliderInit()
        } else {
            ActionDestroy()
        }
    }
});


  var swiperResult = new Swiper('.result__slider', {  
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 6000,
  loop: true,
  swipe: false,
  allowTouchMove: false, // можно ещё отключить свайп
  autoplay: {
    delay: 0,
    disableOnInteraction: false // или сделать так, чтобы восстанавливался autoplay после взаимодействия
  }
});

  $(document).on('click', '.table__item', function() {
    $(".table__item").removeClass("active").eq($(this).index()).addClass("active");
    let index = $(this).index();
    $(".table__box").hide().eq(index).fadeIn()
  })

  $(document).on('click', '.price-table__details', function(e) {
    $('.price-table__tooltip').removeClass('open');
   let tooltip = $(this).parents('.price-table__wrap').find('.price-table__tooltip');
   tooltip.addClass('open');
});

  $(document).mouseup(function (e) {
    let container = $(".price-table__details");
    console.log(container.has(e.target).length)
    if (container.has(e.target).length === 0){
         container.parents('.price-table__wrap').find('.price-table__tooltip').removeClass('open');
    }
});


const projectplayer = document.querySelector('.result__video iframe');
const vimeoPlayer = new Vimeo.Player(projectplayer);
const playBtn = document.querySelector('.result__play');

playBtn.addEventListener('click', () => {
    vimeoPlayer.play();
})

vimeoPlayer.on('play', () => {
    playBtn.classList.add('hidden-play-btn');
})

vimeoPlayer.on('pause', () => {
    playBtn.classList.remove('hidden-play-btn');
})
