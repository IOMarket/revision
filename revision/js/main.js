// HELPER JS FUNCTIONS
/* author Christopher Blum - based on the idea of Remy Sharp, http://remysharp.com/2009/01/26/element-in-view-event-plugin/- forked from http://github.com/zuk/jquery.inview/ */
!function(t){function e(){var e,i,n={height:d.innerHeight,width:d.innerWidth};return n.height||(e=a.compatMode,(e||!t.support.boxModel)&&(i="CSS1Compat"===e?f:a.body,n={height:i.clientHeight,width:i.clientWidth})),n}function i(){return{top:d.pageYOffset||f.scrollTop||a.body.scrollTop,left:d.pageXOffset||f.scrollLeft||a.body.scrollLeft}}function n(){var n,l=[],a=0;if(t.each(r,function(t,e){var i=e.data.selector,n=e.$element;l.push(i?n.find(i):n)}),n=l.length)for(o=o||e(),h=h||i();n>a;a++)if(t.contains(f,l[a][0])){var d,c,p,s=t(l[a]),u={height:s.height(),width:s.width()},g=s.offset(),v=s.data("inview");if(!h||!o)return;g.top+u.height>h.top&&g.top<h.top+o.height&&g.left+u.width>h.left&&g.left<h.left+o.width?(d=h.left>g.left?"right":h.left+o.width<g.left+u.width?"left":"both",c=h.top>g.top?"bottom":h.top+o.height<g.top+u.height?"top":"both",p=d+"-"+c,v&&v===p||s.data("inview",p).trigger("inview",[!0,d,c])):v&&s.data("inview",!1).trigger("inview",[!1])}}var o,h,l,r={},a=document,d=window,f=a.documentElement,c=t.expando;t.event.special.inview={add:function(e){r[e.guid+"-"+this[c]]={data:e,$element:t(this)},l||t.isEmptyObject(r)||(l=setInterval(n,250))},remove:function(e){try{delete r[e.guid+"-"+this[c]]}catch(i){}t.isEmptyObject(r)&&(clearInterval(l),l=null)}},t(d).bind("scroll resize scrollstop",function(){o=h=null}),!f.addEventListener&&f.attachEvent&&f.attachEvent("onfocusin",function(){h=null})}(jQuery);
/* equalHeightColumns.js 1.2, https://github.com/PaulSpr/jQuery-Equal-Height-Columns */
!function(e){e.fn.equalHeightColumns=function(t){defaults={minWidth:-1,maxWidth:99999,setHeightOn:"min-height",defaultVal:0,equalizeRows:!1,checkHeight:"height"};var i=e(this);t=e.extend({},defaults,t);var n=function(){var n=e(window).width(),a=Array();if(t.minWidth<n&&t.maxWidth>n){var s=0,o=0,d=0;i.css(t.setHeightOn,t.defaultVal),i.each(function(){if(t.equalizeRows){var i=e(this).position().top;i!=d&&(a.length>0&&(e(a).css(t.setHeightOn,o),o=0,a=[]),d=e(this).position().top),a.push(this)}s=e(this)[t.checkHeight](),s>o&&(o=s)}),t.equalizeRows?e(a).css(t.setHeightOn,o):i.css(t.setHeightOn,o)}else i.css(t.setHeightOn,t.defaultVal)};n(),e(window).resize(n),i.find("img").load(n),"undefined"!=typeof t.afterLoading&&i.find(t.afterLoading).load(n),"undefined"!=typeof t.afterTimeout&&setTimeout(function(){n(),"undefined"!=typeof t.afterLoading&&i.find(t.afterLoading).load(n)},t.afterTimeout)}}(jQuery);
/*! Lazy Load 1.9.5 - MIT license - Copyright 2010-2015 Mika Tuupola */
!function(e,t,i,o){var n=e(t);e.fn.lazyload=function(r){function f(){var t=0;l.each(function(){var i=e(this);if(!h.skip_invisible||i.is(":visible"))if(e.abovethetop(this,h)||e.leftofbegin(this,h));else if(e.belowthefold(this,h)||e.rightoffold(this,h)){if(++t>h.failure_limit)return!1}else i.trigger("appear"),t=0})}var a,l=this,h={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:t,data_attribute:"original",skip_invisible:!1,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return r&&(o!==r.failurelimit&&(r.failure_limit=r.failurelimit,delete r.failurelimit),o!==r.effectspeed&&(r.effect_speed=r.effectspeed,delete r.effectspeed),e.extend(h,r)),a=h.container===o||h.container===t?n:e(h.container),0===h.event.indexOf("scroll")&&a.bind(h.event,function(){return f()}),this.each(function(){var t=this,i=e(t);t.loaded=!1,(i.attr("src")===o||i.attr("src")===!1)&&i.is("img")&&i.attr("src",h.placeholder),i.one("appear",function(){if(!this.loaded){if(h.appear){var o=l.length;h.appear.call(t,o,h)}e("<img />").bind("load",function(){var o=i.attr("data-"+h.data_attribute);i.hide(),i.is("img")?i.attr("src",o):i.css("background-image","url('"+o+"')"),i[h.effect](h.effect_speed),t.loaded=!0;var n=e.grep(l,function(e){return!e.loaded});if(l=e(n),h.load){var r=l.length;h.load.call(t,r,h)}}).attr("src",i.attr("data-"+h.data_attribute))}}),0!==h.event.indexOf("scroll")&&i.bind(h.event,function(){t.loaded||i.trigger("appear")})}),n.bind("resize",function(){f()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&n.bind("pageshow",function(t){t.originalEvent&&t.originalEvent.persisted&&l.each(function(){e(this).trigger("appear")})}),e(i).ready(function(){f()}),this},e.belowthefold=function(i,r){var f;return f=r.container===o||r.container===t?(t.innerHeight?t.innerHeight:n.height())+n.scrollTop():e(r.container).offset().top+e(r.container).height(),f<=e(i).offset().top-r.threshold},e.rightoffold=function(i,r){var f;return f=r.container===o||r.container===t?n.width()+n.scrollLeft():e(r.container).offset().left+e(r.container).width(),f<=e(i).offset().left-r.threshold},e.abovethetop=function(i,r){var f;return f=r.container===o||r.container===t?n.scrollTop():e(r.container).offset().top,f>=e(i).offset().top+r.threshold+e(i).height()},e.leftofbegin=function(i,r){var f;return f=r.container===o||r.container===t?n.scrollLeft():e(r.container).offset().left,f>=e(i).offset().left+r.threshold+e(i).width()},e.inviewport=function(t,i){return!(e.rightoffold(t,i)||e.leftofbegin(t,i)||e.belowthefold(t,i)||e.abovethetop(t,i))},e.extend(e.expr[":"],{"below-the-fold":function(t){return e.belowthefold(t,{threshold:0})},"above-the-top":function(t){return!e.belowthefold(t,{threshold:0})},"right-of-screen":function(t){return e.rightoffold(t,{threshold:0})},"left-of-screen":function(t){return!e.rightoffold(t,{threshold:0})},"in-viewport":function(t){return e.inviewport(t,{threshold:0})},"above-the-fold":function(t){return!e.belowthefold(t,{threshold:0})},"right-of-fold":function(t){return e.rightoffold(t,{threshold:0})},"left-of-fold":function(t){return!e.rightoffold(t,{threshold:0})}})}(jQuery,window,document);
/** PgwModal - Version 2.0 Copyright 2014, Jonathan M. Piat http://pgwjs.com - http://pagawa.com Released under the GNU GPLv3 license - http://opensource.org/licenses/gpl-3.0*/
!function(o){o.pgwModal=function(n){var t={},e={mainClassName:"pgwModal",backdropClassName:"pgwModalBackdrop",maxWidth:500,titleBar:!0,closable:!0,closeOnEscape:!0,closeOnBackgroundClick:!0,closeContent:'<span class="pm-icon"></span>',loadingContent:"Loading in progress...",errorContent:"An error has occured. Please try again in a few moments."};if("undefined"!=typeof window.pgwModalObject&&(t=window.pgwModalObject),"object"==typeof n&&!n.pushContent){if(!n.url&&!n.target&&!n.content)throw new Error('PgwModal - There is no content to display, please provide a config parameter : "url", "target" or "content"');t.config={},t.config=o.extend({},e,n),window.pgwModalObject=t}var a=function(){var n='<div id="pgwModalBackdrop"></div><div id="pgwModal"><div class="pm-container"><div class="pm-body"><span class="pm-close"></span><div class="pm-title"></div><div class="pm-content"></div></div></div></div>';return o("body").append(n),o(document).trigger("PgwModal::Create"),!0},i=function(){return o("#pgwModal .pm-title, #pgwModal .pm-content").html(""),o("#pgwModal .pm-close").html("").unbind("click"),!0},d=function(){return angular.element("body").injector().invoke(function(o){var n=angular.element($("#pgwModal .pm-content")).scope();o($("#pgwModal .pm-content"))(n),n.$digest()}),!0},c=function(n){return o("#pgwModal .pm-content").html(n),t.config.angular&&d(),l(),o(document).trigger("PgwModal::PushContent"),!0},l=function(){o("#pgwModal, #pgwModalBackdrop").show();var n=o(window).height(),t=o("#pgwModal .pm-body").height(),e=Math.round((n-t)/3);return 0>=e&&(e=0),o("#pgwModal .pm-body").css("margin-top",e),!0},r=function(){return t.config.modalData},g=function(){var n=o('<div style="width:50px;height:50px;overflow:auto"><div></div></div>').appendTo("body"),t=n.children();if("function"!=typeof t.innerWidth)return 0;var e=t.innerWidth()-t.height(90).innerWidth();return n.remove(),e},p=function(){return o("body").hasClass("pgwModalOpen")},s=function(){o("#pgwModal, #pgwModalBackdrop").removeClass().hide(),o("body").css("padding-right","").removeClass("pgwModalOpen"),i(),o(window).unbind("resize.PgwModal"),o(document).unbind("keyup.PgwModal"),o("#pgwModal").unbind("click.PgwModalBackdrop");try{delete window.pgwModalObject}catch(n){window.pgwModalObject=void 0}return o(document).trigger("PgwModal::Close"),!0},w=function(){if(0==o("#pgwModal").length?a():i(),o("#pgwModal").removeClass().addClass(t.config.mainClassName),o("#pgwModalBackdrop").removeClass().addClass(t.config.backdropClassName),t.config.closable?o("#pgwModal .pm-close").html(t.config.closeContent).click(function(){s()}).show():o("#pgwModal .pm-close").html("").unbind("click").hide(),t.config.titleBar?o("#pgwModal .pm-title").show():o("#pgwModal .pm-title").hide(),t.config.title&&o("#pgwModal .pm-title").text(t.config.title),t.config.maxWidth&&o("#pgwModal .pm-body").css("max-width",t.config.maxWidth),t.config.url){t.config.loadingContent&&o("#pgwModal .pm-content").html(t.config.loadingContent);var e={url:n.url,success:function(o){c(o)},error:function(){o("#pgwModal .pm-content").html(t.config.errorContent)}};t.config.ajaxOptions&&(e=o.extend({},e,t.config.ajaxOptions)),o.ajax(e)}else t.config.target?c(o(t.config.target).html()):t.config.content&&c(t.config.content);t.config.closeOnEscape&&t.config.closable&&o(document).bind("keyup.PgwModal",function(o){27==o.keyCode&&s()}),t.config.closeOnBackgroundClick&&t.config.closable&&o("#pgwModal").bind("click.PgwModalBackdrop",function(n){var t=o(n.target).hasClass("pm-container"),e=o(n.target).attr("id");(t||"pgwModal"==e)&&s()}),o("body").addClass("pgwModalOpen");var d=g();return d>0&&o("body").css("padding-right",d),o(window).bind("resize.PgwModal",function(){l()}),o(document).trigger("PgwModal::Open"),!0};return"string"==typeof n&&"close"==n?s():"string"==typeof n&&"reposition"==n?l():"string"==typeof n&&"getData"==n?r():"string"==typeof n&&"isOpen"==n?p():"object"==typeof n&&n.pushContent?c(n.pushContent):"object"==typeof n?w():void 0}}(window.Zepto||window.jQuery);
/** classie v1.0.1**/
!function(s){"use strict";function e(s){return new RegExp("(^|\\s+)"+s+"(\\s+|$)")}function n(s,e){var n=t(s,e)?c:a;n(s,e)}var t,a,c;"classList"in document.documentElement?(t=function(s,e){return s.classList.contains(e)},a=function(s,e){s.classList.add(e)},c=function(s,e){s.classList.remove(e)}):(t=function(s,n){return e(n).test(s.className)},a=function(s,e){t(s,e)||(s.className=s.className+" "+e)},c=function(s,n){s.className=s.className.replace(e(n)," ")});var o={hasClass:t,addClass:a,removeClass:c,toggleClass:n,has:t,add:a,remove:c,toggle:n};"function"==typeof define&&define.amd?define(o):"object"==typeof exports?module.exports=o:s.classie=o}(window);
/*Fitvid http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/ */
(function(e){"use strict";e.fn.fitVids=function(t){var n={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var r=document.head||document.getElementsByTagName("head")[0];var i=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}";var s=document.createElement("div");s.innerHTML='<p>x</p><style id="fit-vids-style">'+i+"</style>";r.appendChild(s.childNodes[1])}if(t){e.extend(n,t)}return this.each(function(){var t=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];if(n.customSelector){t.push(n.customSelector)}var r=".fitvidsignore";if(n.ignore){r=r+", "+n.ignore}var i=e(this).find(t.join(","));i=i.not("object object");i=i.not(r);i.each(function(){var t=e(this);if(t.parents(r).length>0){return}if(this.tagName.toLowerCase()==="embed"&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length){return}if(!t.css("height")&&!t.css("width")&&(isNaN(t.attr("height"))||isNaN(t.attr("width")))){t.attr("height",9);t.attr("width",16)}var n=this.tagName.toLowerCase()==="object"||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height(),i=!isNaN(parseInt(t.attr("width"),10))?parseInt(t.attr("width"),10):t.width(),s=n/i;if(!t.attr("id")){var o="fitvid"+Math.floor(Math.random()*999999);t.attr("id",o)}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",s*100+"%");t.removeAttr("height").removeAttr("width")})})}})(window.jQuery||window.Zepto)

//MAIN CUSTOM JS --------

$(function() {

  if ($("#design").length) {
      $("#design").slider();
      $("#design").on("slide", function(slideEvt) {
          $("#designSliderVal").text(slideEvt.value);
      });
  }

  if ($("#usability").length) {
      $("#usability").slider();
      $("#usability").on("slide", function(slideEvt) {
          $("#usabilitySliderVal").text(slideEvt.value);
      });
  }

  if ($("#price").length) {
      $("#price").slider();
      $("#price").on("slide", function(slideEvt) {
          $("#priceSliderVal").text(slideEvt.value);
      });
  }

  if ($("#functions").length) {
      $("#functions").slider();
      $("#functions").on("slide", function(slideEvt) {
          $("#functionsSliderVal").text(slideEvt.value);
      });
  }
});




(function($) {
    'use strict';

    //PRELOADER
    function revLoader() {
        if ($("#revLoader").length) {
            $("#revLoader").fadeOut();
        }        
    }    

    //SLIDER     

    var flexslidersiteInit = function() {
    if(jQuery().flexslider) {
        jQuery('.home_flex_slider').each(function() {
            var slider = jQuery(this);
            slider.flexslider({
                animation: "slide",
                direction: "vertical",
                slideshow: false,
                animationSpeed: 600,
                prevText: '',
                nextText: '',
                start: function(slider) {
                   slider.removeClass('loading');
                }                   
            });
        }); 

        jQuery('.gallery-top-slider').each(function() {
            var slider = jQuery(this);
            slider.flexslider({
                animation: "fade",
                direction: "vertical",
                slideshow: false,
                animationSpeed: 600,
                prevText: '',
                nextText: '',
                start: function(slider) {
                   slider.removeClass('loading');
                }                   
            });          
      }); 

    }};

    //CAROUSELS
    var scoochcarouselInit = function() {
        if(jQuery().scooch) {
            jQuery('.m-scooch').each(function() {
                var carousel = jQuery(this);
                carousel.scooch();
            });            
        }
    }


    // DETECTION MOBILES
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    }

    //DETECTION WINDOWS WIDTH AND HEIGHT
    var windowWidth = window.innerWidth,
        windowHeight = $(window).height();

    //MOBILE MENU AND MEGAMENU
    function revMenuStyle() {
        $('.rev-navigation').each(function() {
            var menu = $(this),
                openMenu = menu.find('.open-menu'),
                menuList = menu.find('.navlist'),
                subMenu = menu.find('.sub-menu'),
                header = $('header.header'),
                windowWidth = window.innerWidth,
                windowHeight = $(window).height(),
                menuType = menu.data('menu-responsive');
            if (windowWidth < menuType) {
                openMenu.show();

                menuList.addClass('off-canvas').css('height', windowHeight - 52);
                if (menuList.find('.close-menu').length === 0) {
                    menuList.append('<li class="close-menu"><span><i class="mdi-navigation-close"></i></span></li>');
                }
                menuList.children('.menu-item-has-children').removeClass('item-plus');
                $('.admin-bar')
                    .find('.navlist')
                    .css('height', windowHeight - 84);
                if (windowWidth <= 782) {
                    $('.admin-bar')
                        .find('.navlist')
                        .css('height', windowHeight - 98);
                }
                $('.admin-bar')
                    .find('.rev-navigation')
                    .css('top', '32px');

                if (window.innerWidth <= 782) {
                    $('.admin-bar')
                        .find('.rev-navigation')
                        .css('top', '46px');
                }
                if (menu.find('.submenu-toggle').length === 0) {
                    $('.menu-item-has-children, .navList > .menu-item-language-current')
                        .children('a')
                        .after(
                            '<span class="submenu-toggle">\
                                    <i class="fa fa-angle-right"></i>\
                                </span>\
                            ');
                    menuList.on('click', '.submenu-toggle', function(evt) {
                        evt.preventDefault();
                        $(this)
                            .siblings('.sub-menu')
                            .addClass('sub-menu-active');
                    });
                }
                subMenu.each(function() {
                    var $this = $(this);
                    if ($this.find('.back-mb').length === 0) {
                        $this
                            .prepend(
                                '<li class="back-mb">\
                                        <a href="#">\
                                            Back\
                                        </a>\
                                    </li>\
                                ');
                    }
                    menu.on('click', '.back-mb a', function(evt) {
                        evt.preventDefault();
                        $(this)
                            .parent()
                            .parent()
                            .removeClass('sub-menu-active');
                    });
                });
                openMenu.on('click', function() {
                    menuList.addClass('off-canvas-active');
                    $(this).addClass('toggle-active');
                    $('body').append($('<div class="offsetnav-overlay"></div>').hide().fadeIn());
                });
                $('.close-menu, html').on('click', function() {
                    menuList.removeClass('off-canvas-active');
                    openMenu.removeClass('toggle-active');
                    $('.sub-menu').removeClass('sub-menu-active');
                    $('.offsetnav-overlay').remove();
                    header.removeClass('header-responsive');
                });
                menu.on('click', function(evt) {
                    evt.stopPropagation();
                });
            } else {
                openMenu.hide();
                header.removeClass('header-responsive');
                menuList
                    .removeClass('off-canvas')
                    .css('height', 'auto');
                menuList.children('.menu-item-has-children').addClass('item-plus');
                $('.back-mb, .submenu-toggle').remove();
            }
        });
    }


    //FOR VC FULL WIDTH ROW

    var re_sizebg = function(){
        'use strict';
        jQuery('.custom-row-width').each(function() {
        var ride = jQuery(this).data('bg-width');
        var ancenstor,parent;
        parent = jQuery(this).parent();
        if(ride=='container_width'){
          ancenstor = jQuery(this).parent().parent().parent();
        }
        else if(ride == 'window_width'){
          ancenstor = jQuery('html');
        }
        var al= parseInt( ancenstor.css('paddingLeft') );
        var ar= parseInt( ancenstor.css('paddingRight') )
        var w = al+ar + ancenstor.width();
        var bl = - ( parent.offset().left - ancenstor.offset().left );
        jQuery(this).css({'width': w,'margin-left': bl })
    });
    };    

    // READY FUNCTION
    $(document).ready(function() {

        //init mobile menu
        revMenuStyle();

        //add class if mobile browser
        if (isMobile.any()) {
            $('html').addClass('ismobile');
        }

        //add collapsible to top line menu
        if ($('.collapsenav').length) {
            $('.collapsenav').collapsible({
                accordion: false 
            });
        }         

        // Rate burst annimation
		$('.rating_burst').each(function() {
            $(this).bind('inview', function(event, visible) {
				if (visible) {
					$(this).addClass('activate');
					$(this).unbind('inview');
				}
        	});
        });

        // Lazy load images
        $("img.lazyimages").lazyload({
            effect: "fadeIn"
        });

        //search toggle in header
        $('.search-nav .search-toggle').click(function() {
            $(this).toggleClass('active');
            $('.search-nav .search-inner').toggleClass('fadein');
        });
        $('html, .search-nav .search-inner .close-toggle').click(function() {
            $('.search-nav .search-toggle').removeClass('active');
            $('.search-nav .search-inner').removeClass('fadein');
        });
        $('.search-nav').click(function(evt) {
            evt.stopPropagation();
        });

        //equal columns init
        $('.equal-columns').each(function() {
            $(this).find('.post-item').equalHeightColumns();
        });

        //animate rating bars
        $('.rate-bar-wrap').bind('inview', function(event, visible) {
            if (visible) {
                $('.rate-bar').each(function(){
                    $(this).find('.rate-bar-bar').animate({ width: $(this).attr('data-percent') }, 1500 );
                    $('.rate-bar-wrap').unbind('inview');
                });
            }
        }); 
        $('.user-rating-vals').bind('inview', function(event, visible) {
            if (visible) {
                $('.user-rating-breakdown-meter').each(function(){
                    $(this).find('.user-rating-breakdown-meter-progress').animate({ width: $(this).attr('data-percent') }, 1500 );
                    $('.user-rating-vals').unbind('inview');
                });
            }
        });               

        re_sizebg();

        //tiled gallery
        $('.tiled-gallery').each(function() {
            $(this).justifiedGallery({
                rowHeight : 200,
                lastRow : 'justify',
                margins : 10,
                captions : false,
            });
        });

        //images loaded
        var $imagesloaded = $('.post-media-image');
        $imagesloaded.each(function() {
            $imagesloaded.imagesLoaded( function() {
                $imagesloaded.addClass('loaded');
            });
        });

        //masonry init
        var $masonrysimple = $('.r-m-paged');
        $masonrysimple.each(function() {
            $masonrysimple.imagesLoaded( function() {
                $masonrysimple.addClass('loaded');
                $masonrysimple.masonry({
                    itemSelector: '.post-item',
                    columnWidth: '.post-item:not(.colmerge2)', 
                });                
            });
        }); 

        //masonry with infinite scroll
        var $masonryauto = $('.r-auto-paged');
		$masonryauto.each(function() {
			$masonryauto.infinitescroll({
				navSelector: ".rev-m-paged-nav",
				nextSelector: ".rev-m-paged-nav a",
				itemSelector: ".post-item",
				loading: {
					finishedMsg: '<em>That\'s all</em>',
					msgText: '',
					img: 'img/preload.gif',
				},        
			},
	
			function (newElements) {
				var $newElems = $(newElements).css({
					opacity: 0
				});
				$newElems.imagesLoaded(function () {
					$newElems.animate({
						opacity: 1
					});
					$masonryauto.masonry('appended', $newElems);
				});
			});
			
			$masonryauto.imagesLoaded(function () {
				$masonryauto.addClass('loaded');
				$masonryauto.masonry({
					itemSelector: '.post-item',
					columnWidth: '.post-item:not(.colmerge2)',  
				});    
			});			
			
		});                      
            
       
        //magnific popup for tiled gallery
        $('.rev-magnific').each(function() { // the containers for all your galleries
            $(this).magnificPopup({
                delegate: 'a', // the selector for gallery item
                type: 'image',
                gallery: {
                    enabled:true
                },
				image: {
    				titleSrc: function(item) {
  						return item.el.find('img').attr('alt');
  					}
  				}
            });
        });  

        //widget tabs
        $('.tabs-menu').delegate('li:not(.current)', 'click', function() {
            $(this).addClass('current').siblings().removeClass('current').parents('.widget-tabs').find('.tabs-item').hide().eq($(this).index()).fadeIn(700);
        })
        $('.tabs-menu li:first-child').trigger('click'); 
		
        //add datepicker
        if ($('.datepicker').length) {
            $('.datepicker').pickadate({
    			selectMonths: true, // Creates a dropdown to control month
    			selectYears: 15 // Creates a dropdown of 15 years to control year
  			});
        }	

        //add select
        if ($('.material-select').length) {
            $('.material-select').material_select();
        } 
		
		//add scrollfixed
        if ($('.scrollfixed').length) {
			var sheight = $('.rev-sidebar').height();
			var theight = $('.rev-sidebar').offset().top;
			var sidepoint = sheight + theight;
			var contheight = $('.main.main').height();
			var conttop = $('main.main').offset().top;
			var contbot = contheight + conttop;			
            $('.scrollfixed').pushpin({ top: sidepoint, bottom: contbot });
        } 
		
		//add pager
        if ($('.float-posts-nav .postNavigation').length) {
			var contheight = $('.main.main').height();
			var conttop = $('main.main').offset().top;
			var contbot = contheight + conttop;
            $('.float-posts-nav .postNavigation').pushpin({ top: conttop, bottom: contbot });
        } 				
		      	                         

    });

    // ON RESIZE INIT FUNCTIONS
    $(window).on('resize', function() {
        revMenuStyle();
        re_sizebg();
    });

    //ON WINDOW LOAD INIT FUNCTIONS
    $(window).load(function() {
        revLoader();
        flexslidersiteInit();
        scoochcarouselInit();
    });


})(jQuery);