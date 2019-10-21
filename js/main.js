// Animate smooth scrool
$('#view-work').on('click', function() {
    const images = $('#images').position().top

    $('html, body').animate({
        scrollTop: images
    },
        900
    );

});
$('#view-contact').on('click', function() {
    const contact = $('#contact').position().top

    $('html, body').animate({
        scrollTop: contact
    },
        2100
    );

});

//View Top
$('#view-menu').on('click', function() {
    const menu = $('#landing').position().top

    $('html, body').animate({
        scrollTop: menu
    },
        1000
    );

});