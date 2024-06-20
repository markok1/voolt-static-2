document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth < 768) {
    document.querySelector(".burger-menu").addEventListener("click", function () {
      document.querySelector(".nav-menu").classList.add("nav-active");
      document.querySelector(".burger-menu").style.display = "none";
      document.querySelector(".close-menu").style.display = "block";
    });

    document.querySelector(".close-menu").addEventListener("click", function () {
      document.querySelector(".nav-menu").classList.remove("nav-active");
      document.querySelector(".burger-menu").style.display = "block";
      document.querySelector(".close-menu").style.display = "none";
    });
  }

  //faq
  document.querySelectorAll(".qa-item").forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      if (item.classList.contains("opened")) {
        item.classList.remove("opened");
        item.querySelector(".answer").style.maxHeight = "0px";
      } else {
        document.querySelectorAll(".qa-item").forEach(function (qa) {
          qa.classList.remove("opened");
          qa.querySelector(".answer").style.maxHeight = "0px";
        });
        item.classList.add("opened");
        var heightinside = item.querySelector(".answer p").offsetHeight + 50;
        item.querySelector(".answer").style.maxHeight = heightinside + "px";
      }
    });
  });

  const sectionTestimonial = '.testimonials2'; // you can use class name as '.my-section'

  // Use querySelector to find the section
  const testimonials = document.querySelector(sectionTestimonial);

  // Check if the section exists and log the result
  if (testimonials) {
  new Glider(document.querySelector(".testimonial-holder"), {
    slidesToScroll: 1,
    slidesToShow: 3,
    draggable: true,
    scrollLock: true,
    rewind: true,
    dots: ".dots",
    responsive: [
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 3,
        },
      },
    ],
  });
};
  

  const sectionGallery = '.gallery1'; // you can use class name as '.my-section'

  // Use querySelector to find the section
  const gallery = document.querySelector(sectionGallery);

  // Check if the section exists and log the result
  if (gallery) {
  new Glider(document.querySelector(".single-slider"), {
    slidesToScroll: 1,
    slidesToShow: 4,
    draggable: true,
    scrollLock: true,

    arrows: {
      prev: "#main-prev",
      next: "#main-next",
    },

    responsive: [
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 4,
        },
      },
    ],
  });
  }
});
