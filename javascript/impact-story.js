$(".credits-label").click(function(){
    $(".credits-content").toggleClass("active");
    $(".credits-label .fa-plus").toggleClass("hidden");
    $(".credits-label .fa-minus").toggleClass("hidden");
})


$(document).ready(function() {
	$(".header-section-image").attr("src", $(".EOB-country-story").css("background-image").replaceAll('url("', "").replaceAll('")', ''));
	$(".title-section").html($(".country-title").html());
  // If the selected country has no flag, the section should be hidden
  if ($(".country-name-flag .flag").attr("style").indexOf("''") < 0) {
  	$(".country").html($(".country-name-flag").html());
  } else {
    $(".country").html('');
  }
	$(".header-section .caption-text").html($(".country-image-summary").html());
    $(".figcaption .author").html($(".photo-by").html());
    $(".country-story-content").html($(".country-main-content").html());
    $(".country-main-content").children().appendTo(".country-content-body");
    $("#link_back").click(function () {
        window.history.back();
    })
    $('.rr-summary').html($('.country-image-summary').html());
    $(".Reports_EOB-country-story").hide();
    $(".credits-content").html($(".photo-by").html());
    if ($(".photo-by").is(':empty')) { $(".credits").hide() }
})




// header parallax 

const parallaxTL = gsap.timeline({
    scrollTrigger: {
      trigger: '.header-sections',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });
  parallaxTL.fromTo(
    '.header-sections img',
    { y: '-50%' },
    { y: '0%', ease: 'none' }
  );
