// ================== MOBILE NAVIGATION ==================

function openMenu() {
    document.getElementById("work").style.display="block";
    document.getElementById("news").style.display="block";
    document.getElementById("about").style.display="block";
    document.getElementById("contact").style.display="block";
    document.getElementById("backgroundMobile").style.display="block";
    document.getElementById("closeBurger").style.display="block";
}

function closeMenu() {
    document.getElementById("work").style.display="none";
    document.getElementById("news").style.display="none";
    document.getElementById("about").style.display="none";
    document.getElementById("contact").style.display="none";
    document.getElementById("backgroundMobile").style.display="none";
    document.getElementById("closeBurger").style.display="none";
}

function toggleFunction() {
    var x = document.getElementsByClassName("menu-link");
    x.classList.toggle('show');
}

// ================== NAVIGATION STICKY UP-SCROLL (NOT FOR HOMEPAGE) ==================

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar (EXCEPT for the homepage) */

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (!document.getElementById("nav"))
    return null;

  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}

// ================== FOOTER SUBSCRIBE POP-UP ==================


function openForm() {
    document.getElementById("subscribeForm").style.visibility="visible";
    document.getElementById("backgroundOverlay").style.visibility="visible";
}
function closeForm() {
    document.getElementById("subscribeForm").style.visibility="hidden";
    document.getElementById("backgroundOverlay").style.visibility="hidden";
}

// ================== CONTACT PAGE - FORM TEXTAREA (AUTO-RESIZE) ==================

var autoExpand = function (field) {

	// Reset field height
	field.style.height = 'inherit';

	// Get the computed styles for the element
	var computed = window.getComputedStyle(field);

	// Calculate the height
	var height = parseInt(computed.getPropertyValue('border-top-width'), 10)
	             + parseInt(computed.getPropertyValue('padding-top'), 10)
	             + field.scrollHeight
	             + parseInt(computed.getPropertyValue('padding-bottom'), 10)
	             + parseInt(computed.getPropertyValue('border-bottom-width'), 10);

	field.style.height = height + 'px';

};

document.addEventListener('input', function (event) {
	if (event.target.tagName.toLowerCase() !== 'textarea') return;
	autoExpand(event.target);
}, false);