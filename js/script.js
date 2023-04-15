$(document).ready(function () {
/*     $('.carousel__inner').slick({
      speed: 1200,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron left solid.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron right solid.svg"></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        }
      ] 
    }); */
  
  
  /* import { tns } from "./node_modules/tiny-slider/src/tiny-slider" */

  /*   const slider = tns ({
      container: '.carousel__inner',
      items: 1,
      slideBy: 'page',
      autoplay: false;
      controls: false;
      nav: false;
      controlsText: [
        '<icons/chevron left solid.png>',
        '<icons/chevron right solid.png>'
      ]
    }); */

  /* $('.carousel').carousel({
    interval: 2000
  })
  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });
  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  }); */

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });
  $('.catalog-item__link').each(function (i) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('.catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    });
  });
  $('.catalog-item__back').each(function (i) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('.catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    });
  });
  /*   function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('.catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    });
  };
  toggleSlide('catalog-item__link');
  toggleSlide('catalog-item__back'); */


  
  /*      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active)').siblings().removeClass('catalog__tab_active)')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    }); */

  //Modal
  $('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function () {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });
  $('.button_mini').on('click', function () {
    $('.overlay, #order').fadeIn('slow');
  });
 
  $('.button_mini').each(function (i) {
    $(this).on('click', function () {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    });
  });
  /*  $('#consultation-form').validate();
   $('#consultation form').validate(); */
  /* валидация форм */
  function valideForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true,
        }
      },
      messages: {
        name: {
          required: "Пожалуйста, введите свое имя",
          minlength: jQuery.validator.format("Введите {0} символа!")
        },
        phone: "Пожалуйста, введите свой номер телефона",
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Неправильно введен адрес почты"
        }
      }
    });
  }
  valideForms('#cosultation-form');
  valideForms('#consultation form');
  valideForms('#order form');
  /* $('#order form').validate();
   */
  $('input[name=phone]').mask("+44 (999) 999-9999");
 
  /* отправка данных на почту */
  $('form').submit(function (e) {
    e.preventDefault();
    /* валидация форм */
    if (!$(this).valid()) {
      return;
    }
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function () {
      $(this).find("input").val("");
      $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');
      $('form').trigger('reset');
    });
    return false;
  });
  /* smooth scroll and pageup*/
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });
  $("a[href^='#']").click(function() {
      const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });
});

      
/* $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
}); */
    
/* alert(123)
console.log('number')
confirm('18?') 
console.log(4+4)*/