var cancel_btns = document.querySelectorAll(".cancel_btn");
var all_modals = document.querySelectorAll(".modal");
var select_modals_btns = document.querySelectorAll(".showcase-element");
var all_modal_image_boxes = document.querySelectorAll(".modal-image-box");

///// IMAGES /////

var images_modals = [
  ["pp3.jpeg","pp4.jpg","project-photo-3.jpeg"],
  ["pp4.jpg","pp5.jpg","pp2.png"],
  ["pp6.jpeg","pp7.jpeg","pp8.jpeg"],
  ["pp9.jpeg","pp10.jpeg","pp11.jpeg"],
];

var image_path = "src/images/";

// standaard achtergrond per modal
all_modal_image_boxes[0].style.backgroundImage = 'url('+image_path+images_modals[0][0]+')';
all_modal_image_boxes[1].style.backgroundImage = 'url('+image_path+images_modals[1][0]+')';
all_modal_image_boxes[2].style.backgroundImage = 'url('+image_path+images_modals[2][0]+')';
all_modal_image_boxes[3].style.backgroundImage = 'url('+image_path+images_modals[3][0]+')';

// when cancel clicked
cancel_btns.forEach(function(button, index) {
  button.addEventListener("click", function() {
    cancelClicked(index);
    $('body').css('overflow', 'visible');
  });
});

function cancelClicked(index) {
  all_modals[index].style.display = "none";
}


// onclick project van showcase modal laten zien
select_modals_btns.forEach(function(element, index) {
  element.addEventListener("click", function() {
    try {
      all_modals[index].style.display = "flex";
    }
    catch(err) {
      console.log("Modal van dit project is nog niet gemaakt");
    }
    $('body').css('overflow', 'hidden');
  });
});

all_modal_image_boxes.forEach(function(modal_image_box, modal_box_index) {
  var circles_box = modal_image_box.querySelectorAll(".circle");

  circles_box.forEach(function(circle_box, index) {
    circle_box.addEventListener("click", function() {
      circles_box.forEach(function(element) {
        if (element.classList.contains('circle_active')) {
          element.classList.remove('circle_active');
        }
      });
      circle_box.classList.add("circle_active");

      switch(index) {
        case 0:
          modal_image_box.style.backgroundImage = 'url('+image_path+images_modals[modal_box_index][0]+')';
          break;
        case 1:
          modal_image_box.style.backgroundImage = 'url('+image_path+images_modals[modal_box_index][1]+')';
          break;
        case 2:
          modal_image_box.style.backgroundImage = 'url('+image_path+images_modals[modal_box_index][2]+')';
          break;
        default:
          modal_image_box.style.backgroundImage = 'url('+image_path+images_modals[modal_box_index][0]+')';
          break;
      }
    });
  });
});
