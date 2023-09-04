const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});




const divsToAnimate = document.querySelectorAll('.numbered-div');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-animation');
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(animateOnScroll, options);
divsToAnimate.forEach(div => observer.observe(div));







function redirectToForm() {
  window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSf1ncr7nWV8v-365vWHRg0Tn8g7b2T-jiU0YX7oOoJ02951Tw/viewform?usp=sf_link';
}


// for new landing page
const sections = document.querySelectorAll(".section-header, .section-content");

  function animateSections() {
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.classList.add("animate");
      }, index * 400); // Adjust delay time as needed
    });
  }

  // Call the animation function when the page is loaded
  window.addEventListener("load", animateSections);

  // Call the animation function when the user scrolls
  window.addEventListener("scroll", () => {
    animateSections();
  });


  // For new landing page. books we accept

  

  











  

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to handle the scroll event
  function handleScroll() {
    const points = document.querySelectorAll('.point');
    points.forEach(point => {
      if (isInViewport(point)) {
        point.style.opacity = 1;
        point.style.transform = 'translateX(0)';
      }
    });
  }
  
  // Add event listener for the scroll event
  window.addEventListener('scroll', handleScroll);
  
  // Check for visible points on initial load
  handleScroll();

  document.addEventListener("DOMContentLoaded", function() {
    const points = document.querySelectorAll(".point");
  
    function animatePoints() {
      points.forEach((point, index) => {
        setTimeout(() => {
          point.classList.add("animate");
        }, index * 300); // Adjust the delay as needed
      });
    }
  
    animatePoints();
  });
  

  
 

  document.addEventListener("DOMContentLoaded", function() {
    const donationTypeSelect = document.getElementById("donationType");
    const moneyFields = document.getElementById("moneyFields");
    const booksFields = document.getElementById("booksFields");

    // Function to show or hide the additional fields based on the selected donation type
    function handleDonationTypeChange() {
      const selectedType = donationTypeSelect.value;

      if (selectedType === "money") {
        moneyFields.style.display = "block";
        booksFields.style.display = "none";
      } else if (selectedType === "books") {
        moneyFields.style.display = "none";
        booksFields.style.display = "block";
      } else {
        moneyFields.style.display = "none";
        booksFields.style.display = "none";
      }
    }

    // Listen for changes in the donation type select field
    donationTypeSelect.addEventListener("change", handleDonationTypeChange);
  });



  // Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the form and popup elements
  const donationForm = document.getElementById("donationForm");
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("closePopup");

  // Add a submit event listener to the form
  donationForm.addEventListener("submit", function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Show the popup
    popup.style.display = "block";
  });

  // Add a click event listener to the closePopup button
  closePopup.addEventListener("click", function () {
    // Hide the popup
    popup.style.display = "none";
  });
});




