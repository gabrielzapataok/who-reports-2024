$(document).ready(function() {
    if ($('.result-report-2024').length > 0) {
        // Fix scroll horizontal in mobile
        $('meta[name="viewport"]').attr('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no')
        // Allow fixed menu
        $(".main-site").css('overflow','initial')
        // Footer without margin
        $(".main-footer").css('margin','0')
        // Not breadcrumb
        $(".breadcrumb").css('display','none')
        // Menu who over menu result report fix
        $("[role='main']").css('z-index','202')      
    }
})