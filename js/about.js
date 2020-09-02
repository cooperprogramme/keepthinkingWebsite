// FLOOR PLAN STICKY (display/hide)

window.addEventListener('scroll', function() {
    if(window.scrollY > 800) {
        document.getElementById("floorPlan").style.display="none";
    }
    else {
        document.getElementById("floorPlan").style.display="block";
      }
    
    // 1.1 Discover

    if(window.scrollY > 800) {
        document.getElementById("discover1").style.display="block";
    }
    else {
        document.getElementById("discover1").style.display="none";
      }
    if(window.scrollY > 1600) {
        document.getElementById("discover1").style.display="none";
    }

    // 1.2 Discover

    if(window.scrollY > 1600) {
        document.getElementById("discover2").style.display="block";
    }
    else {
        document.getElementById("discover2").style.display="none";
      }
    if(window.scrollY > 2400) {
        document.getElementById("discover2").style.display="none";
    }

    // 1.3 Discover

    if(window.scrollY > 2400) {
        document.getElementById("discover3").style.display="block";
    }
    else {
        document.getElementById("discover3").style.display="none";
        }
    if(window.scrollY > 3400) {
        document.getElementById("discover3").style.display="none";
    }

    // 2.1 User Experience

    if(window.scrollY > 3400) {
        document.getElementById("userExperience1").style.display="block";
    }
    else {
        document.getElementById("userExperience1").style.display="none";
        }
    if(window.scrollY > 4400) {
        document.getElementById("userExperience1").style.display="none";
    }

    // 2.2 User Experience

    if(window.scrollY > 4400) {
        document.getElementById("userExperience2").style.display="block";
    }
    else {
        document.getElementById("userExperience2").style.display="none";
        }
    if(window.scrollY > 5200) {
        document.getElementById("userExperience2").style.display="none";
    }

    // 2.3 User Experience

    if(window.scrollY > 5200) {
        document.getElementById("userExperience3").style.display="block";
    }
    else {
        document.getElementById("userExperience3").style.display="none";
        }
    if(window.scrollY > 6000) {
        document.getElementById("userExperience3").style.display="none";
    }

    // 2.4 User Experience

    if(window.scrollY > 6000) {
        document.getElementById("userExperience4").style.display="block";
    }
    else {
        document.getElementById("userExperience4").style.display="none";
        }
    if(window.scrollY > 7200) {
        document.getElementById("userExperience4").style.display="none";
    }

    // 3.1 User Interface

    if(window.scrollY > 7200) {
        document.getElementById("userInterface1").style.display="block";
    }
    else {
        document.getElementById("userInterface1").style.display="none";
        }
    if(window.scrollY > 8000) {
        document.getElementById("userInterface1").style.display="none";
    }

    // 3.2 User Interface

    if(window.scrollY > 8000) {
        document.getElementById("userInterface2").style.display="block";
    }
    else {
        document.getElementById("userInterface2").style.display="none";
        }
    if(window.scrollY > 9000) {
        document.getElementById("userInterface2").style.display="none";
    }

    // 3.3 User Interface

    if(window.scrollY > 9000) {
        document.getElementById("userInterface3").style.display="block";
    }
    else {
        document.getElementById("userInterface3").style.display="none";
        }
    if(window.scrollY > 9800) {
        document.getElementById("userInterface3").style.display="none";
    }

    // 3.4 User Interface

    if(window.scrollY > 9800) {
        document.getElementById("userInterface4").style.display="block";
    }
    else {
        document.getElementById("userInterface4").style.display="none";
        }
    if(window.scrollY > 10700) {
        document.getElementById("userInterface4").style.display="none";
    }

    // 4.1 Development

    if(window.scrollY > 10700) {
        document.getElementById("development1").style.display="block";
    }
    else {
        document.getElementById("development1").style.display="none";
        }
    if(window.scrollY > 11600) {
        document.getElementById("development1").style.display="none";
    }

    // 4.2 Development

    if(window.scrollY > 11600) {
        document.getElementById("development2").style.display="block";
    }
    else {
        document.getElementById("development2").style.display="none";
        }
    if(window.scrollY > 12500) {
        document.getElementById("development2").style.display="none";
    }

    // 4.3 Development

    if(window.scrollY > 12500) {
        document.getElementById("development3").style.display="block";
    }
    else {
        document.getElementById("development3").style.display="none";
        }
    if(window.scrollY > 13400) {
        document.getElementById("development3").style.display="none";
    }

    // 4.4 Development

    if(window.scrollY > 13400) {
        document.getElementById("development4").style.display="block";
    }
    else {
        document.getElementById("development4").style.display="none";
        }
    if(window.scrollY > 14300) {
        document.getElementById("development4").style.display="none";
    }

    // 5.1 Launch

    if(window.scrollY > 14300) {
        document.getElementById("launch1").style.display="block";
    }
    else {
        document.getElementById("launch1").style.display="none";
        }
    if(window.scrollY > 15200) {
        document.getElementById("launch1").style.display="none";
    }

    // 5.2 Launch

    if(window.scrollY > 15200) {
        document.getElementById("launch2").style.display="block";
    }
    else {
        document.getElementById("launch2").style.display="none";
        }
    if(window.scrollY > 16200) {
        document.getElementById("launch2").style.display="none";
    }

    // 5.3 Launch

    if(window.scrollY > 16200) {
        document.getElementById("launch3").style.display="block";
    }
    else {
        document.getElementById("launch3").style.display="none";
        }
});

// PROFILE ACCORDIONS

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

var acc = document.getElementsByClassName("users-accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("users-active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}