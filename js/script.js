$(document).ready(function(){
  console.log("Alucard");
  console.log("Human, Earth, 90s");
  console.log("<记录一些生活琐碎>");

  wrapImageWithFancyBox();
})

/**
 * Wrap images with fancybox support.
 */
function wrapImageWithFancyBox() {
    $('img').not('.sidebar-header img').not('#author-avatar img').not(".mdl-menu img").each(function() {

        var $image = $(this);
        var imageCaption = $image.attr('alt');
        var $imageWrapLink = $image.parent('a');

        $imageWrapLink.attr('data-fancybox', 'images');
        if (imageCaption) {
            $imageWrapLink.attr('data-caption', imageCaption);
        }

    });

    $().fancybox({
        selector : '[data-fancybox="images"]',
        thumbs : true,
        hash : false,
        loop : false,
    });

};