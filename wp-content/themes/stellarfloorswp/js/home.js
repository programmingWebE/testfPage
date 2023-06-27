/*
Template Name: TRIME. - Creative Comin Soon OnePage HTML Template
Author: GuroThemes
Author URI: https://themeforest.net/user/gurothemes
Version: 1.0
*/
/*
TABLE OF CONTENTS:

1.PRELOADER
2.INITIALIZATION
3.FUNCTION TEXT ROTATOR
4.FUNCTION TIME COUNTER
5.FUNCTION NOTIFY
6.FUNCTION CAROUSEL
7.FUNCTION SKILLBAR
8.FUNCTION PROGRESS COUNTERS
9.FUNCTION FULLPAGE
10.FUNCTIONS PARTICLE VARIABLES
	1.Default
	2.Nasa
	3.Bubble
	4.Snow
11.FUNCTION LIGHTBOX
12.FUNCTION ADD ONWHEEL LISTENER
*/
/* --------------------------------
	PRELOADEER
-------------------------------- */
jQuery(function($) {
    $(window).on("load", function() {
        setTimeout(function() {
            console.log('test')
            $('.preloader2').addClass('is-load');
        }, 3000);
    });
    /* --------------------------------
    	INITIALIZATION
    -------------------------------- */
    var sub_nav_li;
    "use strict"
    sub_nav_li = $('nav ul li[data-menuanchor="services"] .sub-nav li');
    $(window).on("load", function() {
        setTimeout(function() {
            page();
            textRotator();
            practicleBubble();
        }, 1000);
    });
    /* --------------------------------
    	FUNCTION TEXT ROTATOR
    -------------------------------- */
    function textRotator(params) {
        var morphistAnim = $(".name-title").Morphext({
            // ANIMATION TYPE. YOU CAN GET ANIMATION NAMES FROM ANIMATION.CSS
            animation: "flipInX",
            // TEXT SEPARATOR
            separator: ",",
            // THE DELAY BETWEEN CHANGING WORDS
            speed: 2000,
            complete: function() {
                //			$(".name-title").Morphext().stop();
                //$(".name-title").Morphext().animate();
            }
        });
    };
    /* --------------------------------
    	FUNCTION TIME COUNTER
    -------------------------------- */
    /* --------------------------------
    	FUNCTION NOTIFY
    -------------------------------- */
    function notify(params) {
        $("#notifyMe").notifyMe();
    };
    /* --------------------------------
    	FUNCTION SKILLBAR
    -------------------------------- */
    function skillBar(params) {
        $('.skill-item').each(function() {
            $(this).find('.skill-bar').animate({
                width: $(this).attr('data-skill')
            }, 4000);
        });
        $('.skill-item .skill-percent').each(function() {
            var $this = $(this),
                span = $this.find('span'),
                countTo = $this.attr('data-count');
            $({ countNum: span.text() }).animate({
                countNum: countTo
            }, {
                duration: 4000,
                easing: 'linear',
                step: function() {
                    span.text(Math.floor(this.countNum));
                },
                complete: function() {
                    span.text(this.countNum);
                }
            });
        });
    };
    /* --------------------------------
    	FUNCTION PROGRESS COUNTERS
    -------------------------------- */
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
    	FUNCTION FULLPAGE
    -------------------------------- */
    function page(params) {
        /* navigation initialization */
        setTimeout(function() {
            $('.top_menu').addClass('animated fadeIn');
        }, 1000);
        /* navigation btn initialization
        	$('.menu-btn').on("click", function() {
        	$(this).toggleClass('menu-btn-open');
        	$('.wrapper').toggleClass('toggle-wrapp');
        	setTimeout(function() {
        		$('nav ul').toggleClass('toggle-nav');
        	}, 200);

        });

        */
        /* fullpage load */
        setTimeout(function() {
            var fDown = $('.bg-title, .pre-title'),
                fUp = $('.descrip, .list, .owl-carousel, .skill-block, .counters-block '),
                fIn = $('.title, .name-title, .social-section, .contact-inf, .contact-form, .news-form, .counter-section-mobile'),
                carouselCtr = $('.owl-next, .owl-prev');
            $('#fullpage').fullpage({
                anchors: ['home', 'about', 'services', 'portfolio', 'news', 'contacts', 'skills'],
                menu: 'nav',
                scrollOverflow: true,
                controlArrows: false,
                scrollingSpeed: 700,
                normalScrollElements: '.open_menu',
                navigation: true,
                navigationPosition: 'right',
                navigationTooltips: ['1', '2', '3', '4', '5', '6'],
                paddingTop: '80px',
                paddingBottom: '50px',
                afterLoad: function(anchorLink, index) {
                    var loadedSection = $(this);
                    if (index == 2 || 3) {
                        $('.wrapper').addClass('is-scroll2');
                        $('.morphext').removeClass('.animated fadeIn')
                        $('.name-title').removeClass('.animated flipInX')
                    }
                    /* transform page after scrolling */
                    if (index == 2 || 3 || 4 || 5) {
                        $('.wrapper').addClass('is-scroll');
                        //setTimeout(sayHi, 0);
                        textRotator();
                    }
                    if (index == 2) {
                        counters();
                    }
                    console.log(anchorLink);
                    if (anchorLink == 'about') {
                        // $('.sub-nav').css({'display':'none', 'visibility':'hidden'});
                        counters();
                    } else if (anchorLink == 'services') {
                        sub_nav_li.removeClass('active');
                        sub_nav_li.eq($('.coverflow .flipster__item--current').index()).addClass('active');
                    } else {
                        // $('.sub-nav').css({'display':'none', 'visibility':'hidden'});
                        $('.skill-bar').css('width', '0');
                        $('.counter-item span').each(function() {
                            var $this = $(this);
                            $({ countNum: $this.text() }).animate({
                                countNum: '0'
                            }, {
                                duration: 1,
                                step: function() {
                                    $this.text(Math.floor(this.countNum));
                                },
                                complete: function() {
                                    $this.text(this.countNum);
                                }
                            });
                        });
                    }
                    if (index == 1) {
                        $('.wrapper').removeClass('is-scroll');
                    }
                    if (loadedSection) {
                        var l = $(this);
                        l.find(fDown).addClass('animated fadeInDown');
                        l.find(fUp).addClass('animated fadeInUp');
                        l.find(fIn).addClass('animated fadeIn');
                        setTimeout(function() {
                            l.find(carouselCtr).addClass('animated fadeIn');
                        }, 1000);
                    };
                },
                onLeave: function(index, nextIndex, direction) {
                    var leavingSection = $(this);
                    if (leavingSection) {
                        var l = $(this);
                        l.find(fDown).addClass('fadeOutUp');
                        l.find(fUp).addClass('fadeOutDown');
                        l.find(fIn).addClass(' fadeOut');
                        l.find(carouselCtr).addClass(' fadeOut');
                        setTimeout(function() {
                            l.find(fDown).removeClass('animated fadeInDown fadeOutUp');
                            l.find(fUp).removeClass('animated fadeInUp fadeOutDown');
                            l.find(fIn).removeClass('animated fadeIn fadeOut');
                            l.find(carouselCtr).removeClass('animated fadeIn fadeOut');
                        }, 1000);
                    };
                }
            });
        }, 1000);
    };
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
});
