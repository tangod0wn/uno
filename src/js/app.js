function showPage(topage, frompage) {
    var pageWidth = frompage.width();
    topage.css("left", pageWidth);
    topage.addClass("active-page");
    topage.add(frompage).animate({
        "left": "-=" + pageWidth + "px"
    }, 300).promise().done(function() {
        frompage.removeClass('active-page');
    });
}
var pageone = $("#pageone"),
    pagetwo = $("#pagetwo");
$("a").click(function(e) {
    // e.preventDefault();
    var frompage = $(this).parent(),
        topage = frompage.siblings();
    showPage(topage,frompage);
});