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
        .clone(true, true)
        .addClass("cloneditem-" + i)
        .appendTo($(this));
    }
  });

  // edit padding of section

  let sections = document.querySelectorAll("section");
  let navheight = document.querySelectorAll("nav")[0].clientHeight;
  navheight -= 1;
  sections.forEach((sec) => {
    sec.style.paddingTop = navheight + "px";
  });

  //interactivity fo carousel items

  let descriptions = document.querySelectorAll(".card-img-overlay");
  console.log(descriptions.length);
  descriptions.forEach((des) => {
    des.addEventListener(
      "mouseover",
      function () {
        des.classList.add("active");
        des.previousElementSibling.classList.add("active");
      },
      false
    );
    des.addEventListener(
      "mouseout",
      function () {
        des.classList.remove("active");
        des.previousElementSibling.classList.remove("active");
      },
      false
    );
  });
});
