let isoCode = $('#EOB-country-profile-container').attr('data-profile-isocode');
let url = "https://www.who.int/api/multimedias/countries?$select=Title,whostatus,IsMemberstate,OfficialName,WhoCode,Code&$expand=WHORegion,Flag($select=Title,UrlName,Url,ThumbnailUrl,Extension)&$filter=Code%20eq%20%27" + isoCode + "%27%20and%20whostatus/any(x:x%20eq%20efb425be-c0b9-42d1-84b4-c3814fb5c18d)&$orderBy=Title%20asc&sf_culture=en&$top=1&$skip=0";

$.getJSON(url, function(data) {
    jQuery(".header-section-region").html(data.value[0].WHORegion.Title.toUpperCase());
    jQuery(".header-section-country").html(data.value[0].Title);
    jQuery(".header-section .flag").css('background-image','url('+data.value[0].Flag.Url+')');
}).fail(function (jqxhr, textStatus, error) {
    var err = textStatus + ", " + error;
    console.error("Request Failed: " + err);
});





// Obtener la URL de la imagen de fondo



$('.Reports_EOB-country-profile-story').hide()
$(".highlight-image img").attr("src",  $(".Reports_EOB-country-profile-story .EOB-country-profile-story").css("background-image").replace(/^url\(['"](.+)['"]\)$/, '$1'));
$(".impact-story-title").text($(".Reports_EOB-country-profile-story .profile-story-title").text());
$(".highlight-content a").attr("href",$(".country-profile-story .EOB-btn").attr("href"))
