$(document).ready(function () {
  $(".multi-item-carousel .carousel-item").each(function () {
    var itemToClone = $(this);

    for (var i = 1; i < 4; i++) {
      itemToClone = itemToClone.next();

      if (!itemToClone.length) {
        itemToClone = $(this).siblings(":first");
      }

      itemToClone
        .children(":first-child")
        .clone()
        .addClass("cloneditem-" + i)
        .appendTo($(this));
    }
  });
});

// edit padding of section

let sections = document.querySelectorAll("section");
let navheight = document.querySelectorAll("nav")[0].clientHeight;
navheight -= 1;
sections.forEach((sec) => {
  if (sec.getAttribute("id") != "blog") {
    sec.style.paddingTop = navheight + "px";
  }
});
