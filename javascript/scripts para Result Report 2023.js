


$(document).ready(function () {
  $(".header-section-image").attr("src", $(".EOB-country-story").css("background-image").replace(/url\(['"]?(.*?)['"]?\)/i, "$1"));
  $(".title-section").html($(".country-title").html());
  $(".country").html($(".country-name-flag").html());
  $(".header-section .caption-text").html($(".country-image-summary").html());
  $(".figcaption .author").html($(".photo-name").html());
  $(".country-story-content").html($(".country-main-content").html());
  // $(".key-contributions").appendTo(".key-contributions-content");
  // $(".references").appendTo(".references-content");
  $(".country-main-content").children().appendTo(".country-content-body");
  $("#link_return_outcome").attr("href", $(".outcome-list li").attr("data-outcome-url").replace("/country-story/", "/outcome/"));
  $(".Reports_EOB-country-story").hide()
})



// stivky text hidden
$(document).ready(function () {
  var hiddenTextSticky = $(".output-description");
  hiddenTextSticky.hide();
  $(window).scroll(function () {
    var stickyOffset = $(".row.sticky").offset().top;
    if ($(window).scrollTop() >= stickyOffset && $(window).width() > 800) {
      hiddenTextSticky.show();
    } else {
      hiddenTextSticky.hide();
    }
  });
});





var currentOutcome = {
  code: '1.1',
  title: 'Improved access to quality essential health services irrespective of gender, age or disability status',
  summary: 'This is the summary',
  overview: '%3cp%3eTogether+with+Member+States%2c+we+aim+to+strengthen+health+and+community+systems+to+progress+towards+achieving+universal+health+coverage%2c+whereby+all+people+and+communities+have+access+to+the+full+range+of+essential+services+across+the+life+course+through+a+strong+and+resilient%2c+people-centred+health+system%2c+without+suffering+from+financial+hardship.+%3c%2fp%3e%3cp%3eOn+this+journey%2c+we+prioritize+primary+health+care+as+the+entry+point+to+universal+health+coverage.+WHO%26rsquo%3bs+focus+is+on+accelerating+progress+through+global+leadership%2c+the+production+of+global+public+health+goods%2c+providing+differentiated+support+to+countries+and+ensuring+that+no+one+is+left+behind.%3c%2fp%3eThe+COVID-19+pandemic+has+exposed+the+reality+that+many+health+systems+are+not+adequately+equipped+or+organized+to+protect+the+health+of+populations+and+is+demonstrating+the+results+of+years+of+disinvestment+or+underinvestment+in+primary+health+care-oriented+health+systems',
  additionalContent: '%3cp%3eThis+is+the+additional+content%3c%2fp%3e'
};
$(".title-section").html(currentOutcome.title);
$(".overview-result-report").html(decodeURIComponent(currentOutcome.overview).replace(/\+/g, " "));
$(".adtional-content").html(decodeURIComponent(currentOutcome.additionalContent).replace(/\+/g, " "));









const myOutcomeList = $(".list-links");

const dataOutcomesList = [];
$('.outcome-list li').each(function () {
  const outComeTitle = $(this).text();
  const outComeURL = $(this).attr("data-outcome-url");
  const outComeCode = $(this).attr("data-outcome-code");
  dataOutcomesList.push({ outComeTitle, outComeURL, outComeCode });
});


dataOutcomesList.forEach(({ outComeTitle, outComeURL, outComeCode }) => {
  const $card = $(`

		<li>
			<a href="${outComeURL}" data-sf-ec-immutable="">
				<p class="text-grey my-0">
					<span class="number-highlight">${outComeCode}</span>
					${outComeTitle}
				</p>
				<i class="fas fa-angle-right text-orange"></i>
			</a>
		</li>
  `);

  myOutcomeList.append($card);
});






const myOutputList = $(".#change-output");

const dataOutputsList = [];
$('.output-list li').each(function () {
  const outputTitle = $(this).text();
  const outputURL = $(this).attr("data-output-url");
  const outputCode = $(this).attr("data-output-code");
  dataOutputsList.push({ outputTitle, outputURL, outputCode });
});


dataOutputsList.forEach(({ outputTitle, outputURL, outputCode }) => {
  const $card = $(`

		<li>
			<a href="${outputURL}" data-sf-ec-immutable="">
				<span class="text-grey my-0">
					<span class="number-highlight">${outputCode}</span>
					${outputTitle}
				</span>
				<i class="fas fa-angle-right text-orange"></i>
			</a>
		</li>
  `);

  myOutputList.append($card);
});
$('.output-list').hide();



// replace currentOutput content
var currentOutput = {
  code: '1.1.1',
  title: 'Countries enabled to provide high-quality, people-centred health services, based on primary health care strategies and comprehensive essential service packages',
  summary: 'This is the summary for 1.1.1',
  overview: 'This+is+the+overview+for+1.1.1',
  additionalContent: '%3cp%3eThis+is+the+additional+content+for+1.1.1%3c%2fp%3e',
  relatedOutcome: {
    id: 'ff8e0772-013d-4e84-a98e-5aa86ad92408',
    code: '1.1',
    title: 'Improved access to quality essential health services irrespective of gender, age or disability status'
  }
};


$(".header-sections .title-section").text(currentOutput.title);
$(".overview-result-report").html(decodeURIComponent(currentOutput.overview).replace(/\+/g, " "));
$(".additional-content").html(decodeURIComponent(currentOutput.additionalContent).replace(/\+/g, " "));
let currentOutcome = $(".current-outcome li");
$(".current-outcome-link a").attr("href", currentOutcome.attr("data-outcome-url").replace("/output/", "/outcome/"));
$(".current-outcome-link a").html("Outcome: " + currentOutcome.attr("data-outcome-code"));
$(".output-description").text(currentOutput.code + ' ' + currentOutput.title);
$(".output-code").text(currentOutput.code);





$(document).ready(function () {
  var list = $('.technical-products-container > li');
  var btn = $('.btn-read-more')
  btn.hide()
  if (list.length > 10) {
    list.slice(10).hide();
    btn.show()
  }
  btn.click(function () {
    list.slice(10).show();
    btn.hide()
  });
});




// Replace tickers content
const myTickers = $(".tickers ");
const dataTickers = [];
$(".Reports_EOB-budget-tickers-container .EOB-budget-ticker").each(function () {
  const value = $(this).find(".ticker-value").text()
  const amount = $(this).find(".ticker-amount").text()
  const unit = $(this).find(".ticker-unit").text()
  const title = $(this).find(".ticker-title").text()
  dataTickers.push({ value, amount, unit, title });
});
dataTickers.forEach(({ value, amount, unit, title }) => {
  const $ticker = $(`
  <div class="ticker flex flex-direction-column">
    <span class="ticker-number">${value}</span>
    <strong>${unit} ${amount}</strong>
    <p>${title}</p>
  </div>
`);
  myTickers.append($ticker);
});
$(".Reports_EOB-budget-tickers-container").hide()















// Explore more Outcomes
const gridCards = $(".more-outcomes-slick");
const data = [];
$('.EOB-outcome-achievement').each(function () {
  const title = $(this).find('.outcome-title').text();
  const image = $(this).css("background-image").replace(/url\(['"]?(.*?)['"]?\)/i, "$1");
  const url = $(this).attr("href");
  data.push({ title, image, url });
});
data.forEach(({ title, image, url }) => {
  const $card = $(`
    <a class="rr-card" href="${url}">
      <img class="header-card" src="${image}" alt="">
      <div class="px-20 py-20 relative flex-1">
        <h6 class="h6 title-section">${title}</h6>
        <span class="info-card"></span>
      </div>
      <div class="px-20 py-10 read-more">Read more<i class="fa fa-angle-right"></i></div>
    </a>
  `);
  gridCards.append($card);
});
$('.EOB-outcome-achievement').hide()





// Outputs cards celestes
const cardOutput = $(".output-card-result-report");
const dataCardOutput = [];
$('.output-list li').each(function () {
  const outputCode = $(this).attr("data-output-code");
  const outputTitle = $(this).text();
  const outputURL = $(this).attr("data-output-url").replace("/outcome/", "/output/");
  dataCardOutput.push({ outputCode, outputTitle, outputURL });
});
dataCardOutput.forEach(({ outputCode, outputTitle, outputURL }) => {
  const $card = $(`
		<a href="${outputURL}" class="cards-outcomes">
		    <div class="cards-outcomes-title">
		        <h6 class="h6 text-white title-section text-center py-20">${outputCode}</h6>
		    </div>
		    <div class="px-20 py-20 relative flex-1">
		        <span class="text-grey">${outputTitle}</span>
		    </div>
		    <div class="px-20 py-10 read-more">Read more</div>
		</a>
  `);
  cardOutput.append($card);
});
$('.output-list li').hide()






$(document).ready(function () {

  // Country stories cards
  let countrystories = $(".country-stories-outcome");
  let dataCountry = [];

  $('.EOB-country-story-card li').each(function () {
    const countryURL = $(this).find('.country-story').attr("href");
    const countryImage = $(this).find('.country-img').attr("src");
    const countryFlag = $(this).find('.country-flag').css("background-image").replace(/url\(['"]?(.*?)['"]?\)/i, "$1");
    const countryTitle = $(this).find('.country-title').text();
    const countryName = $(this).find('.country-name').text();
    dataCountry.push({ countryURL, countryImage, countryFlag, countryTitle, countryName });
  });


  dataCountry.forEach(({ countryURL, countryImage, countryFlag, countryTitle, countryName }) => {
    const $card = $(`
        <a href="${countryURL}" class="rr-card">
            <div class="cards-country">
                <img class="header-card" src="${countryImage}" alt="">
                <h6 class="h6 text-white title-section text-center">${countryName}</h6>
                <img class="flag-countries" src="${countryFlag}">
            </div>
            <div class="px-20 py-20 relative flex-1">
                <h6 class="h6 title-section">${countryTitle}</h6>
            </div>
            <div class="px-20 py-10 read-more">Read more</div>
        </a>
    `);
    countrystories.append($card);
  });

  $('.EOB-country-story-card').hide();

  // Change grid for slick
  if (dataCountry.length > 3) {
    console.log('Hay mas de 3 country stories');
    $(".country-stories-outcome").removeClass("grid-cards");
    $(".country-stories-outcome").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      speed: 300,
      prevArrow: '<button class="button-transparent prevArrow"><i class="fa fa-angle-left"></i></button>',
      nextArrow: '<button class="button-transparent nextArrow"><i class="fa fa-angle-right"></i></button>',
      autoplaySpeed: 2000,
      autoplay: true,
      responsive: [{
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
        }
      }, {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        }
      }]
    });
  } else {
    console.log('Hay menos de tres');
  }
})



// Imagen del header en pagina de outcomes
$(document).ready(function () {
  let titleOutcome = $('.header-sections .title-section').text()
  $('.EOB-outcome-achievement').each(function (i, e) {
    if ($(e).find('.outcome-title').text() == titleOutcome) {
      let currentOutcomeImage = $(e).css('background-image').replaceAll('url("', '').replaceAll('"', '')
      $(".header-sections .img-wrapper img").attr("src", currentOutcomeImage);
      return false;
    }
  })
})


$(document).ready(function () {
  if ($('body').has('.result-report-2024').length) {
    $('.main-footer').css('margin', 0);
  }
});



$(document).ready(function () {

  // Data number card
  const outcomeCodes = ['1.1', '1.2', '1.3', '2.1', '2.2', '2.3', '3.1', '3.2', '3.3', '4.1', '4.2', '4.3']
  $(".more-outcomes-slick .rr-card").each(function (i, e) {
    $(e).find('.info-card').text(outcomeCodes[i]);
  });

  // Remove current
  $(".more-outcomes-slick .rr-card").each(function (i, e) {
    if (currentOutcome.code == $(e).find('.info-card').text()) {
      $(e).remove()
      return false;
    }
  })

  // Change grid for slick
  $(".more-outcomes-slick").removeClass("grid-cards");
  $(".more-outcomes-slick").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    speed: 300,
    prevArrow: '<button class="button-transparent prevArrow"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="button-transparent nextArrow"><i class="fa fa-angle-right"></i></button>',
    autoplaySpeed: 2000,
    autoplay: true,
    responsive: [{
      breakpoint: 1080,
      settings: {
        slidesToShow: 2,
      }
    }, {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
      }
    }]
  });
});




/*
.dashboard-overview {border: 3px solid red;}.dashboard-base {border: 3px solid blue;}.dashboard-emergency {border: 3px solid chartreuse;}.all-dashboards {border: 3px solid violet;}
*/
$(document).ready(function () {
  const items = $('.menu-item');
  const line = $('.line');
  const itemSelected = $('.menu-item.selected');
  line.css('width', `${itemSelected.outerWidth()}px`);
  items.on('click', function () {
    items.removeClass('selected');
    $(this).addClass('selected');
    const itemPosition = $(this).position().left;
    line.css('transform', `translateX(${itemPosition}px)`);
    line.css('width', `${$(this).outerWidth()}px`);
  });
  $(".all-dashboards > .dashboard-overview ").show();
  $(".tab li").click(function () {
    $(".all-dashboards > div").removeClass("temporary-absolute-position");
    var id = $(this).attr("id");
    console.log(id)
    $(".all-dashboards > * ").hide();
    $(".all-dashboards").find($("." + id)).show();
  });
});












const myOutcomeList = $(".list-links");
const dataOutcomesList = [];


$('.outcome-list-container .outcome-list').first().find('li').each(function () {
  const outComeTitle = $(this).text();
  const outComeURL = $(this).attr("data-outcome-url");
  const outComeCode = $(this).attr("data-outcome-code");
  dataOutcomesList.push({ outComeTitle, outComeURL, outComeCode });
});


dataOutcomesList.forEach(({ outComeTitle, outComeURL, outComeCode }) => {
  const $card = $(`

  <li>
    <a href="${outComeURL}" data-sf-ec-immutable="">
      <span class="text-grey my-0">
        <span class="number-highlight">${outComeCode}</span>
        ${outComeTitle}
      </span>
      <i class="fas fa-angle-right text-orange"></i>
    </a>
  </li>
  `);

  myOutcomeList.append($card);
});
$('.outcome-list li').hide()



// Init header section
$(document).ready(function () {
  $(".header-section h1").html(currentOutcome.title);
  $('.EOB-outcome-achievement').each(function (i, e) {
    if ($(e).find('.outcome-title').text() == currentOutcome.title) {
      let currentOutcomeImage = $(e).css('background-image').replaceAll('url("', '').replaceAll('"', '')
      console.log(currentOutcomeImage);
      $(".header-section img").attr("src", currentOutcomeImage);
      return false;
    }
  })
})


$('.EOB-outcome-achievement').each(function (i, e) {
  var linkOutcome = $('<a>', {
    text: $(e).find('.outcome-title').text(),
    href: $(e).attr("src")
  });
  $('.mega-menu-outcomes .container').append(linkOutcome)
})



$(document).ready(() => {
    $(".header-section h1").html(currentOutcome.title);
    $(".overview-result-report").html(decodeURIComponent(currentOutcome.overview).replace(/\+/g, " "));
    $(".adtional-content").html(decodeURIComponent(currentOutcome.additionalContent).replace(/\+/g, " "));
    $('.outcome-code').text(currentOutcome.code);
    $(".outcome-description").text(currentOutcome.code + ' ' + currentOutcome.title);
    initializeIndicatorsByOutcome(currentOutcome.code);
    initializeViewBudgetButton();
})