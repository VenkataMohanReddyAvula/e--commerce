document.addEventListener("DOMContentLoaded", () => {
  const buyButtons = document.querySelectorAll(".buy");
  buyButtons.forEach(button => {
    button.addEventListener("click", () => {
      const productCard = button.closest(".content");
      const productName = productCard.querySelector("h3")?.textContent || "Product";
      const price = productCard.querySelector("h6")?.textContent || "N/A";
      alert(`You selected to buy: ${productName}\nPrice: ${price}`);
      productCard.style.border = "3px solid lime";
      const audio = new Audio("https://actions.google.com/sounds/v1/cartoon/pop.ogg");
      audio.play();
    });

    button.addEventListener("dblclick", () => {
      alert("Double clicked! Adding item to wishlist...");
    });
  });

  const searchInput = document.querySelector(".input");
  const searchButton = document.querySelector(".font");

  if (searchInput && searchButton) {
    searchButton.addEventListener("click", () => {
      const query = searchInput.value.trim();
      if (!query) {
        alert("Please enter a product or brand to search.");
        searchInput.style.border = "2px solid red";
      } else {
        alert(`Searching for: "${query}"`);
        searchInput.style.border = "2px solid green";
      }
    });

    searchInput.addEventListener("input", () => {
      searchInput.style.border = "1px solid black";
    });
  }

  const navLinks = document.querySelectorAll(".navbar a");
  navLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const text = link.textContent.trim();
      if (text !== "") {
        alert(`You clicked: ${text}`);
      }
    });
  });

  const socialIcons = document.querySelectorAll(".footer i");
  socialIcons.forEach(icon => {
    icon.addEventListener("click", () => {
      alert(`Opening: ${icon.className.replace(/fa[^ ]+ /g, "").trim().toUpperCase()}`);
    });
  });

  const emailLink = document.querySelector("footer a[href^='mailto']");
  const addressBlock = document.querySelector("footer address");

  if (emailLink) {
    emailLink.addEventListener("click", e => {
      alert("Composing email to the developer...");
    });
  }

  if (addressBlock) {
    addressBlock.addEventListener("click", () => {
      alert("Contact details:\nPhone: 6304264468\nLocation: Kanigiri, Andhra Pradesh");
    });
  }

  const marquee = document.querySelector("marquee");
  if (marquee) {
    marquee.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const productCards = document.querySelectorAll(".content");
  productCards.forEach(card => {
    card.addEventListener("mouseover", () => {
      card.style.transform = "scale(1.02)";
    });
    card.addEventListener("mouseout", () => {
      card.style.transform = "scale(1)";
    });
  });
});
