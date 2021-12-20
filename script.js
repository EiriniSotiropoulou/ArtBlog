let items = document.querySelectorAll(".carousel .carousel-item");

items.forEach((el) => {
  const minPerSlide = 4;
  let next = el.nextElementSibling;
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});

// items.forEach((el) => {
//   if (!el.classList.contains("active")) {
//     el.classList.add("opacity");
//   } else {
//     el.classList.add("d-flex");
//   }
// });

// hide show article content on hover
let descriptions = document.querySelectorAll(".card-img-overlay");

descriptions.forEach((des) => {
  des.addEventListener(
    "mouseover",
    function () {
      des.classList.add("active");
    },
    false
  );
  des.addEventListener(
    "mouseout",
    function () {
      des.classList.remove("active");
    },
    false
  );
});

// edit padding of section

let sections = document.querySelectorAll("section");
let navheight = document.querySelectorAll("nav")[0].clientHeight;
navheight-=1;
sections.forEach((sec) => {
  if (sec.getAttribute("id") != "blog") {
    sec.style.paddingTop = navheight + "px";
  }
});
