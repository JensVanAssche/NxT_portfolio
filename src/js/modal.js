const all_modals = document.querySelectorAll(".modal");
const showcases = document.querySelectorAll(".showcase-element");
const showcase_projectnames = document.querySelectorAll(".projectname");
const cancel_btns = document.querySelectorAll(".cancel_btn");
const image_path = "src/images/";
const modal_ids = [];

// afbeeldingen per modal
const piquestImages = ["pp9.jpeg","pp10.jpeg","pp11.jpeg"];
const d3projectImages = ["pp4.jpg","pp5.jpg","pp2.png"];
const avprojectImages = ["pp6.jpeg","pp7.jpeg","pp8.jpeg"];
const webprojectImages = ["pp4.jpg","pp5.jpg","pp2.png"];
const multimediaImages = ["pp9.jpeg","pp10.jpeg","pp11.jpeg"];
const d3vfxprojectImages = ["pp6.jpeg","pp7.jpeg","pp8.jpeg"];
const uxtoolImages = ["pp3.jpeg","pp4.jpg","project-photo-3.jpeg"];
const uitoolImages = ["pp9.jpeg","pp10.jpeg","pp11.jpeg"];
const snoozyImages = ["pp3.jpeg","pp4.jpg","project-photo-3.jpeg"];

// showcase ids
document.getElementById('piquest').addEventListener("click", function() {
  modalCarousel(setModalVisible(event.currentTarget.id), false, piquestImages);
});

document.getElementById('3dproject').addEventListener("click", function(event) {
  modalCarousel(setModalVisible(event.currentTarget.id), false, d3projectImages);
});

document.getElementById('avproject').addEventListener("click", function(event) {
  modalCarousel(setModalVisible(event.currentTarget.id), false, avprojectImages);
});

document.getElementById('webproject').addEventListener("click", function(event) {
  modalCarousel(setModalVisible(event.currentTarget.id), false, webprojectImages);
});

document.getElementById('multimedia').addEventListener("click", function(event) {
  modalCarousel(setModalVisible(event.currentTarget.id), false, multimediaImages);
});

document.getElementById('3dvfxproject').addEventListener("click", function(event) {
  modalCarousel(setModalVisible(event.currentTarget.id), false, d3vfxprojectImages);
});

document.getElementById('coolvideo').addEventListener("click", function(event) {
  modalCarousel(setModalVisible(event.currentTarget.id), true);
});

document.getElementById('uxtool').addEventListener("click", function(event) {
  modalCarousel(setModalVisible(event.currentTarget.id), false, uxtoolImages);
});

document.getElementById('uitool').addEventListener("click", function(event) {
  modalCarousel(setModalVisible(event.currentTarget.id), false, uitoolImages);
});

document.getElementById('snoozy').addEventListener("click", function(event) {
  modalCarousel(setModalVisible(event.currentTarget.id), false, snoozyImages);
});

function setModalVisible(id) {
  let modalName = "modal_" + id;
  let modal = document.getElementById(modalName)
  modal.style.display = "flex";
  $('body').css('overflow', 'hidden');
  let image_box_name = "#" + modalName + " > .modal-image-box";
  return image_box_name;
}


// carousel van afbeeldingen in modal
function modalCarousel(image_box_name, video, imageArray) {
  let modal_image_box = document.querySelector(image_box_name);
  let circles_box = modal_image_box.querySelectorAll(".circle");

  if(video == false) {
    modal_image_box.style.backgroundImage = 'url('+image_path+imageArray[0]+')';

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
            modal_image_box.style.backgroundImage = 'url('+image_path+imageArray[0]+')';
            break;
          case 1:
            modal_image_box.style.backgroundImage = 'url('+image_path+imageArray[1]+')';
            break;
          case 2:
            modal_image_box.style.backgroundImage = 'url('+image_path+imageArray[2]+')';
            break;
          default:
            modal_image_box.style.backgroundImage = 'url('+image_path+imageArray[0]+')';
            break;
        }
      });
    });
  }
  else {
    modal_image_box.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/SzHf7UJ1h0w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    console.log("test");
  }
}


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