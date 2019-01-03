var modal = document.getElementById('modal-1');
var modal_btn = document.getElementById('showcase-element-1');
var btn = document.getElementById("cancel_btn");

btn.onclick = function() {
  modal.style.display = "none";
  $('body').css('overflow', 'visible');
}

modal_btn.onclick = function() {
  modal.style.display = "flex";
  $('body').css('overflow', 'hidden');
}

let circle1 = document.getElementById("circle1");
let circle2 = document.getElementById("circle2");
let circle3 = document.getElementById("circle3");
let image_box_1 = document.getElementById("image-box-1")

circle1.addEventListener("click", function() {
  circle1.classList.add("circle_active");
  if (circle2.classList.contains('circle_active')) {
    circle2.classList.remove('circle_active');
  }
  if (circle3.classList.contains('circle_active')) {
    circle3.classList.remove('circle_active');
  }
  image_box_1.style.background = 'url("src/images/pp3.jpeg")';
  image_box_1.style.backgroundSize = 'cover';
});

circle2.addEventListener("click", function() {
  circle2.classList.add("circle_active");
  if (circle1.classList.contains('circle_active')) {
    circle1.classList.remove('circle_active');
  }
  if (circle3.classList.contains('circle_active')) {
    circle3.classList.remove('circle_active');
  }
  image_box_1.style.background = 'url("src/images/pp4.jpg")';
  image_box_1.style.backgroundSize = 'cover';
});

circle3.addEventListener("click", function() {
  circle3.classList.add("circle_active");
  if (circle1.classList.contains('circle_active')) {
    circle1.classList.remove('circle_active');
  }
  if (circle2.classList.contains('circle_active')) {
    circle2.classList.remove('circle_active');
  }
  image_box_1.style.background = 'url("src/images/project-photo-3.jpeg")';
  image_box_1.style.backgroundSize = 'cover';
});