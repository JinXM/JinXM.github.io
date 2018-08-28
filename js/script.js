$(document).ready(function(){
  console.log("Alucard");
  console.log("Human, Earth, 90s");
  console.log("<记录一些生活琐碎>");

  wrapImageWithFancyBox();
  var cal = new CalHeatMap();
  cal.init({
    data: "datas.json"
  });
})

/**
 * Calendar Heat Map
 */
function setCalendarHeatMap() {

  var cal = new CalHeatMap();
  cal.init({
      //from 2017,0,1
      // start: new Date(2018, 08, 27),
      // data: datas,
      // domain: "month",
      // subDomain: "day",s
      // // subDomain: "x_day",
      // range: 12,
      // tooltip: true,
      // cellsize: 15,
      // cellpadding: 3,
      // domainGutter: 15,
      // cellSize: 10,
      // displayLegend: false
  });
};


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