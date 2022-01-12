$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });
  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

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

  ///timeline script
  let initScroll = 321;
  let timelineItems = document.querySelectorAll(".containerTime");
  timelineItems.forEach((item, index) => {
    console.log(item, initScroll + index * 150, window.scrollY);
    if (this.scrollY < initScroll + index * 150) {
      item.style.opacity = 100;
    }
  });
});
