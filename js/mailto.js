
// Store the email address
const TO_ADDRESS = "orders@examplewebsite142.com";

// Store the selected product options
let selectedColor = "";
let selectedSize = "";

// Find the BUY IT NOW button
const buyButton = document.querySelector("#buy-now");

// Select Color
function selectColor(button) {
  document.querySelectorAll(".color-option").forEach(btn => {
    btn.classList.remove("active");
  });

  button.classList.add("active");
  selectedColor = button.textContent.trim();
}

// Select Size
function selectSize(button) {
  document.querySelectorAll(".size-option").forEach(btn => {
    btn.classList.remove("active");
  });

  button.classList.add("active");
  selectedSize = button.textContent.trim();
}

// Quantity Function
function changeQuantity(amount) {
  const quantityInput = document.querySelector("#quantity");
  const currentValue = parseInt(quantityInput.value, 10) || 1;

  quantityInput.value = Math.max(
    1,
    Math.min(99, currentValue + amount)
  );
}

// Build the mailto link
function buildMailto() {

  const productName = "Do Good Work Tee: I Be-Leaf in You PLANTeeShirt";
  const price = 850;
  const quantity = Number(document.querySelector("#quantity").value);

  // Validate selections
  if (!selectedColor || !selectedSize) {
    alert("Please select your color and size before ordering!");
    return;
  }

  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 99) {
    alert("Please enter a valid quantity!");
    return;
  }

  const total = price * quantity;

  const subject = "New PLANTeeShirts Order";

  const body =
    "Hello PLANTeeShirts Team,\n\n" +
    "I would like to place an order with the following details:\n\n" +
    "Product: " + productName + "\n" +
    "Color: " + selectedColor + "\n" +
    "Size: " + selectedSize + "\n" +
    "Quantity: " + quantity + "\n" +
    "Unit Price: PHP " + price.toFixed(2) + "\n" +
    "Total Price: PHP " + total.toFixed(2) + "\n\n" +
    "Please contact me regarding my order.\n\n" +
    "Thank you!";

  return (
    "mailto:" + TO_ADDRESS +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body)
  );
}

// Listen for the BUY IT NOW button click
buyButton.addEventListener("click", function() {

  const mailtoLink = buildMailto();

  if (mailtoLink) {
    window.location.href = mailtoLink;
  }

});
