document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".button");
    const cartValue = document.getElementById("cart-value");
    let cartItems = {};

    // Map of item IDs to their names
    const itemNames = {
        book1: "This was our pact",
        book2: "The famous five",
        book3: "Matilda",
        book4: "Harry Potter",
        book5: "For Young Readers",
        book6: "Wimpy Kid - DIY",
        game1: "Dart Board",
        game2: "Connect 4",
        game3: "Jenga",
        game4: "Monopoly",
        craft1: "Bookmarks",
        craft2: "Birthday card",
        craft3: "Stuffed toys",
        craft4: "Dream catcher drawing"
    };

    // Function to update cart value
    function updateCartValue() {
        let totalItems = Object.values(cartItems).reduce((acc, val) => acc + val, 0);
        cartValue.textContent = totalItems;
    }

    // Function to handle add to cart button click
    function addToCart(itemId) {
        if (cartItems[itemId]) {
            cartItems[itemId]++;
        } else {
            cartItems[itemId] = 1;
        }
        updateCartValue();
    }

    // Event listener for add to cart buttons
    addToCartButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const itemId = this.id;
            addToCart(itemId);
        });
    });

    // Event listener for cart text click
    document.getElementById("cart").addEventListener("click", function () {
        let orderDetailsConsole = "Order Details:";
        console.log(orderDetailsConsole);
        for (const item in cartItems) {
            orderDetailsConsole += `\nItem name: ${itemNames[item]} - Quantity: ${cartItems[item]}`;
            console.log(`Item name: ${itemNames[item]} - Quantity: ${cartItems[item]}`);
        }
        const totalPrice = calculateTotalPrice();
        orderDetailsConsole += `\nThe total amount is: $${totalPrice.toFixed(2)}`;
        console.log(`The total amount is: $${totalPrice.toFixed(2)}`);
    
        let orderDetails = "Order Details: ";
        for (const item in cartItems) {
            orderDetails += `${itemNames[item]}: ${cartItems[item]} `;
        }
        orderDetails += `Total Price: $${totalPrice.toFixed(2)}`;
    
        const whatsappLink = `https://api.whatsapp.com/send?phone=919000000000&text=${encodeURIComponent(orderDetails)}`;
        window.open(whatsappLink, "_blank");
    });
    
    // Function to calculate total price
    function calculateTotalPrice() {
        let totalPrice = 0;
        for (const item in cartItems) {
            switch (item) {
                case "book1":
                    totalPrice += 7.49 * cartItems[item];
                    break;
                case "book2":
                    totalPrice += 4.59 * cartItems[item];
                    break;
                case "book3":
                    totalPrice += 6.80 * cartItems[item];
                    break;
                case "book4":
                    totalPrice += 10 * cartItems[item];
                    break;
                case "book5":
                    totalPrice += 7.29 * cartItems[item];
                    break;
                case "book6":
                    totalPrice += 4.99 * cartItems[item];
                    break;
                case "game1":
                    totalPrice += 17.49 * cartItems[item];
                    break;
                case "game2":
                    totalPrice += 19.99 * cartItems[item];
                    break;
                case "game3":
                    totalPrice += 20.99 * cartItems[item];
                    break;
                case "game4":
                    totalPrice += 19.49 * cartItems[item];
                    break;
                case "craft1":
                    totalPrice += 12.49 * cartItems[item];
                    break;
                case "craft2":
                    totalPrice += 19.99 * cartItems[item];
                    break;
                case "craft3":
                    totalPrice += 15.99 * cartItems[item];
                    break;
                case "craft4":
                    totalPrice += 18.49 * cartItems[item];
                    break;
                default:
                    console.log("Invalid item id");
            }
        }
        return totalPrice;
    }
});
