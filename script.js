// 📌 Selecting the input field and all buttons
let input = document.getElementById("display");
let buttons = document.querySelectorAll("button");

// 🔥 Adding click event listener to all buttons
buttons.forEach((e) => {
    e.addEventListener("click", (event) => {
        if (event.target.id === "clear") {
            // 🧹 Clear the input field when "AC" is clicked
            input.value = "";
        } else if (event.target.id === "delete") {
            // ✂️ Remove the last character when "DEL" is clicked
            input.value = input.value.slice(0, -1);
        } else if (event.target.id === "equal") {
            // 🟰 Evaluate the expression when "=" is clicked
            try {
                input.value = eval(input.value); // ⚡️ Evaluating the expression
            } catch (error) {
                input.value = "Error"; // 🚨 Display "Error" if evaluation fails
            }
        } else {
            // 🖊️ Append the button's text to the input field
            input.value += event.target.innerText;
        }
    });
});

// ⌨️ Adding keyboard support for calculator functionality
document.addEventListener("keydown", function (event) {
    if (event.key >= "0" && event.key <= "9") {
        // 🔢 Allow number key inputs
        input.value += event.key;
    } else if ("+-/*".includes(event.key)) {
        // ➕➖➗✖️ Allow operators (+, -, /, *)
        input.value += event.key;
    } else if (event.key === "Enter") {
        // 🖱️ Evaluate expression when Enter key is pressed
        try {
            input.value = eval(input.value);
        } catch (error) {
            input.value = "Error"; // 🚨 Error handling
        }
    } else if (event.key === "Backspace") {
        // 🔙 Remove the last character when Backspace is pressed
        input.value = input.value.slice(0, -1);
    }
});
