$(function() {
  console.log("%c.: Website by Weichie.com :.", "color: #33bddb;");

  /** Show redirect banner */
  const isRedirected = getParameterByName('oldsite');
  if(isRedirected) {
    $('.redirect__notification').show();
  }

  /** Product Slider Block */
  $('.product__slider').each(function() {
    const slidesToShow = $(this).data('slides');
    const autoSlide = $(this).data('auto');
    $(this).slick({
      infinite: true,
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
      autoplay: autoSlide,
      autoplaySpeed: 3000,
      slide: '.product__slider__item',
      prevArrow: $('.nav__product.prev'),
      nextArrow: $('.nav__product.next'),
      responsive: [
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  })

  /** Product Thumb Slider */
  $('.simple__card__slider').each(function(i) {
    $(this).slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      slide: '.simple__card__slide',
      prevArrow: $(`#prev-for-${i}`),
      nextArrow: $(`#next-for-${i}`),
    });
  })

  $('.test-next').on('click', function(e) {
    e.preventDefault();
    $(this).parent().slick('slickNext');
  });
  $('.test-prev').on('click', function(e) {
    e.preventDefault();
    $(this).parent().slick('slickPrev');
  });

  /** Product Thumb Slider */
  $('.product__slider__slide').each(function(i) {
    console.log($(`#prev-an-${i}`));
    $(this).slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false,
      slide: '.product__slider-cover',
      prevArrow: $(`#prev-an-${i}`),
      nextArrow: $(`#next-an-${i}`),
    });
  });

  /** Disable dragging on an image to drag parent slider */
  $('.product__slider__slide').on('touchstart touchmove mousemove mouseenter', function(e) {
    $('.product__slider').slick('slickSetOption', 'swipe', false, false);
  });

  $('.product__slider__slide').on('touchend mouseover mouseout', function(e) {
    $('.product__slider').slick('slickSetOption', 'swipe', true, false);
  });

  /** Partner Slider Block */
  $('.partner__slider').each(function() {
    const slidesToShow = $(this).data('slides');
    const autoSlide = $(this).data('auto');

    $(this).slick({
      infinite: true,
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
      autoplay: autoSlide,
      autoplaySpeed: 3000,
      slide: '.partner__slider__item',
      prevArrow: $('.nav__partner.prev'),
      nextArrow: $('.nav__partner.next'),
      responsive: [
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });
  })

  /**
   * Main Product Slider
   */
  $('.main__product__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    slide: '.main__product__image',
    prevArrow: '<svg class="slick-arrow prev" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>',
    nextArrow: '<svg class="slick-arrow next" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>'
  });

  $('.main__product__thumbs').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    slide: '.thumb__slide__item',
    arrows: true,
    swipeToSlide: true,
    prevArrow: '<svg class="slick-arrow prev" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>',
    nextArrow: '<svg class="slick-arrow next" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>'
  })

  /** Main Product Modal */
  $('.main__product__image').on('click', function() {
    const activeSlide = $(this).data('slide');
    $('.product__modal__overlay').fadeIn();

    $('.modal__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: activeSlide,
      arrows: true,
      slide: '.modal__slider__image',
      prevArrow: '<svg class="slick-arrow prev" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>',
      nextArrow: '<svg class="slick-arrow next" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>'
    });
  })

  $('.product__modal__overlay').on('click', function (e) {
    if (e.target !== this) return;
    $(this).fadeOut();
    $('.modal__slider').slick('unslick');
  });

  $('.main__product__thumbs img').on('click', function() {
    $('.main__product__thumbs img').removeClass('active');
    $(this).addClass('active');
    $('.main__product__slider').slick('slickGoTo', $(this).data('slide'));
  });

  /** FAQ Section */
  $('.faq__list strong').on('click', function() {
    $('.answer').not($('#' + $(this).data('for'))).slideUp();
    $('.faq__list strong').not($(this)).removeClass('active');
    $(this).toggleClass('active');
    $('#' + $(this).data('for')).slideToggle();
  })

  /**
   * Read more/less collection info
   
  $('#readMoreIntro').on('click', function() {
    $('.hidesmall').hide();
    $('.hidelarge').fadeIn();

    $('html, body').animate({
        scrollTop: $("#footer_description").offset().top
    }, 1000);
});
    
  });
  $('#readLessIntro').on('click', function() {
    $('.hidelarge').hide();
    $('.hidesmall').fadeIn();
  });

  $('.footer-block__details-content a').each(function() {
    const string = $(this).text().trim().toLowerCase();
    if(string === 'contact') {
      $(this).addClass('js-show-contact');
    }
  })*/

  /**
   * Contact Modal
   */
  $('.js-show-contact').on('click', function(e) {
    e.preventDefault();
    $('.modal__overlay').fadeIn();
  });

  $('.modal__overlay, .modal__invoice__overlay').on('click', function (e) {
    if (e.target !== this) return;

    $(this).fadeOut();
  });
  $('.close__modal').on('click', function(e) {
    e.preventDefault();
    $('.modal__overlay').fadeOut();
  })

  /** BTW Switch */
  if(getCookie('showbtw') === 'true') {
    $('#checkbtw, #checkbtwproduct').prop( "checked", true );
  }

  $('#checkbtw, #checkbtwproduct').on('change', function() {
    const checked = $(this).is(':checked');
    if(checked) {
      setCookie('showbtw', 'true', 30);
      $('#checkbtw, #checkbtwproduct').prop( "checked", true );
    } else {
      setCookie('showbtw', 'false', 30);
      $('#checkbtw, #checkbtwproduct').prop( "checked", false );
    }
    swapPriceDisplay();
  });

  /**
   * BTW request on cart page
   */
  $('#vat_reg_no').on('keyup', function(e) {
    const val = $(this).val();
    if(val !== '') {
      $('#checkout').hide();
      $('#requestinvoice').show();
    } else {
      $('#checkout').show();
      $('#requestinvoice').hide();
    }
  });

  $('#requestinvoice').on('click', function(e) {
    e.preventDefault();
    $('#invoiceModal').fadeIn();
    $('#email').focus();
  });

  $('.show-info').on('click', function() {
    if($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('#vat_info, #vat_reg_no').hide();
    } else {
      $(this).addClass('active');
      $('#vat_info, #vat_reg_no').fadeIn();
    }
  });

  $('#submit_cart').on('click', function(e) {
    e.preventDefault();
    $('.input-group input').removeClass('error')
    let items = [];
    let vat = $('#vat_reg_no').val();

    $('.cart-item').each(function() {
      items.push($(this).data('cart'));
    })

    let formdata = {
      vat: vat,
      items: items,
      email: $('#email').val(),
      country: $('#country').val(),
      firstname: $('#firstname').val(),
      name: $('#name').val(),
      entreprise: $('#entreprise').val(),
      address: $('#address').val(),
      apt: $('#apt').val(),
      zip: $('#zip').val(),
      city: $('#city').val(),
    }

    $.post("https://app.hercules-merchandise.fr/mailer.php", formdata, function (data) {
      if (!data.errors) {
        $('.modal__form').hide();
        $('.modal__success').show();
        $('.cart__footer').addClass('completed');
        setTimeout(() => {
          $('.btn__clear').trigger('click');
        }, 3000);
      } else {
        data.errors.map(e => {
          $(`#${e}`).addClass('error');
        });
      }
    }, 'json');
  })

  /**
   * Change dynamic variant ID
   */
  $('.quantity__list input[type=radio]').each(function() {
    if($(this).prop('checked')) {
      $('#product__variant__id').val($(this).data('value'));
    }
  });

  $('.quantity__list input[type=radio]').on('change', function() {
    $('#product__variant__id').val($(this).data('value'));
  });

  /** BTW Price Display */
  swapPriceDisplay();

  document.addEventListener('builderLoaded', function(){
    if(window.ProductPicker) {
      $('.quantity__list, .product__actions').hide(); // thise items are display none in css
    } else {
      $('.quantity__list, .product__actions').show(); // thise items are display none in css
    }
  });

  // setTimeout(function() {
  //   if(window.ProductPicker) {
  //     $('.quantity__list, .product__actions').hide(); // thise items are display none in css
  //   } else {
  //     $('.quantity__list, .product__actions').show(); // thise items are display none in css
  //   }
  // }, 4000);

  $('body').on('stepUpdate', function() {
    setTimeout(() => {
      swapPriceDisplay();
    }, 50);
  });

  /** Product sharing */
  $('a.share').click(function(e){
		e.preventDefault();
		var href    = $(this).attr('href');
		var network = $(this).attr('data-network');

		var networks = {
			facebook : { width : 600, height : 300 },
			twitter  : { width : 600, height : 254 },
			linkedin : { width : 600, height : 473 }
		};

		var popup = function(network){
			var options = 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,';
			window.open(href, '', options+'height='+networks[network].height+',width='+networks[network].width);
		}

		popup(network);
	});

  /** Link to FAQ */
  $('.product__left__info a').on('click', function(e) {
    if($(this).attr('href').charAt(0) == '#') {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 100
      }, 700);

      const isShowing = $($(this).attr('href')).find('strong').hasClass('active');
      if(!isShowing) {
        $($(this).attr('href')).find('strong').trigger('click');
      }
    }
  })
});


/** ======================
 * SCROLL FUNCTION
======================= */
$(document).on('scroll', () => {
	const fromTop = $(document).scrollTop() | 0;
	// const viewportHeight = $(window).height() | 0;
	// const fromBottom = fromTop + viewportHeight;

  /** Fixed Header bar */
  const headerHeight = $('#shopify-section-header').height();
  if(fromTop >= headerHeight) {
    $('.header__fixed').addClass('active');
  } else {
    $('.header__fixed').removeClass('active');
  }

  if($(window).width() < 980 && fromTop > 0) {
    $('.header, .menu-drawer__navigation-container').addClass('small');
    $('.header__branding').removeClass('has-slogan');
    $('.header__heading-slogan').hide();
  } else {
    $('.header, .menu-drawer__navigation-container').removeClass('small');
    $('.header__branding').addClass('has-slogan');
    $('.header__heading-slogan').show();
  }

});

/** ======================
 * HELPER FUNCTIONS
======================= */
function swapPriceDisplay() {
  const showBtw = getCookie('showbtw');

/*  $('.btw__price').each(function() {
    if(showBtw === 'false') {
      $(this).find('.btw__display__price').html($(this).data('btw'));
      $('.btw__text.btw__tax__excluded').hide();
      $('.btw__text.btw__tax__included').show();
    } else {
      $(this).find('.btw__display__price').html($(this).data('price'));
      $('.btw__text.btw__tax__included').hide();
     $('.btw__text.btw__tax__excluded').show();
    }
  })*/

if ($('#btw__piece__price').length) {
  const text = (showBtw === 'true') ? $('#btw__piece__price span').data('priceselect') : $('#btw__piece__price span').data('priceselect');
  const formattedPrice = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(text);
  $('#btw__piece__price span').text(`${formattedPrice} Ex-VAT`);
}

$('.btw__swap').each(function() {
  let price;
  if(showBtw === 'false') {
    price = $(this).data('btw');
    console.log('in btw');
  } else {
    price = $(this).data('btw');
    console.log('in price');
  }
  const formattedPrice = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(price);
  $(this).text(`${formattedPrice} Ex-VAT`);
});


  $('.pp-price').each(function() {
    let newPrice = $(this).attr('data-price');

    if(!isNaN(newPrice)) {
      const spanEle = `<span class="pp-savings">${$(this).find('.pp-savings').text()}</span>`;

      if(showBtw === 'false') {
        newPrice = $(this).attr('data-price-btw');
         console.log('in btw2');
      } else {
        newPrice = $(this).attr('data-price-btw');
         console.log('in btw2');
      }

      $(this).html(`${spanEle} ${new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(newPrice)} Ex-VAT`);
    }
  })
}

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function setCookie(cname, cvalue, exdays) {
	const d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	const expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;SameSite=Strict";
}

function getCookie(cname) {
	const name = cname + "=";
	const decodedCookie = decodeURIComponent(document.cookie);
	const ca = decodedCookie.split(';');

	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') { c = c.substring(1); }
		if (c.indexOf(name) == 0) { return c.substring(name.length, c.length); }
	}
	return "";
}

document.querySelectorAll('[aria-hidden="true"]').forEach(function(hiddenElement) {
  hiddenElement.querySelectorAll('a, button, input, textarea, select, [tabindex]').forEach(function(focusableElement) {
    focusableElement.setAttribute('tabindex', '-1');
  });
});

// Passive event listeners
jQuery.event.special.touchstart = {
  setup: function( _, ns, handle ){
    this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
  }
};
jQuery.event.special.touchmove = {
  setup: function( _, ns, handle ){
    this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") });
  }
};
jQuery.event.special.wheel = {
  setup: function( _, ns, handle ){
    this.addEventListener("wheel", handle, { passive: true });
  }
};
jQuery.event.special.mousewheel = {
  setup: function( _, ns, handle ){
    this.addEventListener("mousewheel", handle, { passive: true });
  }
};


function fixAriaHiddenFocusableDescendants() {
    // Find all elements with aria-hidden="true"
    const hiddenElements = document.querySelectorAll('[aria-hidden="true"]');
    console.log("Running fixAriaHiddenFocusableDescendants");
    console.log(`Found ${hiddenElements.length} elements with aria-hidden="true"`);
    hiddenElements.forEach(element => {
        // Set the tabindex of the hidden element to -1
        element.setAttribute('tabindex', '-1');

        // Find all focusable descendants within the hidden element
        const focusableElements = element.querySelectorAll('a, button, [tabindex], input, select, textarea');

        focusableElements.forEach(focusableElement => {
            // Set the tabindex of the focusable descendant to -1
            focusableElement.setAttribute('tabindex', '-1');
            // Set aria-hidden to true for the focusable descendant
            focusableElement.setAttribute('aria-hidden', 'true');
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(fixAriaHiddenFocusableDescendants, 5000); // waits 5 seconds before running
});




