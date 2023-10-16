document.addEventListener("DOMContentLoaded", function () {
  // Select all buttons
  const links = document.querySelectorAll("button");
  // Loop through each button
  links.forEach((link) => {
    // Add a click event listener
    link.addEventListener("click", function (event) {
      // Prevent the default behavior of the click event
      event.preventDefault();
      // Show SweetAlert when the button is clicked
      Swal.fire({
        title: "Shopped", // The title of the SweetAlert
        icon: "success", // The icon of the SweetAlert
      });
      // Behavior to scroll to a specific location
      const hash = this.hash; // Get the hash value of the clicked button
      const targetOffset = document.querySelector(hash).offsetTop; // Get the offset top of the element with the corresponding hash
      window.scrollTo({
        top: targetOffset, // Set the top offset to scroll to
        behavior: "smooth", // Set the scrolling behavior to smooth
      });
    });
  });

  // Select all menu items
  const menuItems = document.querySelectorAll(".menu-items a");
  // Loop through each menu item
  menuItems.forEach((item) => {
    // Add a click event listener
    item.addEventListener("click", () => {
      // Uncheck the checkbox with the id 'checkbox' when a menu item is clicked
      document.getElementById("checkbox").checked = false;
    });
  });
});
