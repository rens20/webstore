document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("button"); // function button 
  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      alert("Shopped");

      // behavior to scrool
      const hash = this.hash;
      const targetOffset = document.querySelector(hash).offsetTop;
      window.scrollTo({
        top: targetOffset,
        behavior: "smooth",
      });
    });
  });
 
  const menuItems = document.querySelectorAll(".menu-items a");
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      document.getElementById("checkbox").checked = false;
    });
  });
});
