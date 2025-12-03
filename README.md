# Project Assignment: Building a Product List

In this project, you will combine HTML, CSS, and JavaScript to create an interactive list application. You will be practicing **DOM manipulation**, **Arrays**, **Objects**, and **Loops**.

**Prerequisites:** Ensure your `index.html`, `styles.css`, and `script.js` are all in the same folder and linked correctly.

---

## Phase 1: Capturing User Input (Assignment 1)
Your first goal is to make sure JavaScript can "see" what the user types into the text box and prepare a place to put that information on the screen.

### 1. Fix the ID Selector
Open `script.js` and look at the `addProduct` function.
* **The Problem:** The starter code tries to grab an element with the ID `"input"`.
* **The Task:** Check your `index.html` file. Find the `<input>` tag inside the form. What is its actual `id`? Update the JavaScript to match the HTML ID.

### 2. Create a New Element
We need to create a new HTML element (a `div`) dynamically using JavaScript. This `div` will eventually hold the text of the product we add.
* **Concept:** `document.createElement()`
* **Resource:** [W3Schools - Create Element](https://www.w3schools.com/jsref/met_document_createelement.asp)

### 3. Select the Output Container
You have a place on your HTML page waiting to show the list, but you need to grab it in JavaScript.
* **The Task:** Create a variable that selects the `div` with the ID of `output`. You will use this variable later to attach your new elements.

---

## Phase 2: The Challenge (Validation)
*Optional but recommended.*

Before moving forward, check if the user actually typed something. We don't want to add empty items to our list!
* **The Task:** Write an `if` statement.
* **Condition:** Check if the value you captured in Phase 1 is strictly equal (`===`) to an empty string `""`.
* **Action:** If it is empty, trigger an `alert("Please enter a product")` and `return false` to stop the function.

---

## Phase 3: Storing Data (Assignment 2)
Now that we have the data, we need to save it into our application's memory (the Array).

### 1. Create the Object
The code provided creates a variable: `let newProduct = { input };`.
* **Explanation:** This takes the value you captured earlier and wraps it inside an object.

### 2. Push to Array
You have an empty array at the top of your file called `productArray`. You need to add the `newProduct` object into this array.
* **Concept:** Array `push()` method.
* **Resource:** [W3Schools - Array Push](https://www.w3schools.com/jsref/jsref_push.asp)
* **Test:** Use `console.log(productArray)` to verify your items are being saved when you click the button.

---

## Phase 4: Displaying the Data (Assignment 3)
This is the final step. We need to take the data from the array and show it on the web page.

### 1. The Loop
Create a `for` loop that iterates through your `productArray`.
* **Length:** The loop should run as many times as there are items in the array (`array.length`).

### 2. Reset the Input
Inside the function (before or after the loop), clear the text box so the user can type a new product easily.
* **Hint:** Set the `.value` of your input element to an empty string `""`.

### 3. Reveal the Output Box
In your CSS, the `#output` div is hidden (`display: none`).
* **The Task:** In your JavaScript, access the output container's style and change the display property to `"block"`.

### 4. Inject Content & Append
Inside your loop, you need to put the text into the `div` you created in Phase 1, and then put that `div` onto the page.
* **Set Content:** Use `.textContent` or `.innerHTML`. You need to grab the current item from the array using the index `[i]` and access its property.
    * *Example pattern:* `` `${productArray[i].input}` ``
* **Append:** Use the `appendChild` method to attach your created `div` to the `output` container.
    * **Resource:** [W3Schools - AppendChild](https://www.w3schools.com/jsref/met_node_appendchild.asp)

---

### Troubleshooting Tips
1.  **Nothing happens when I click:** Check your console (F12 > Console) for red error messages.
2.  **It says "Undefined":** Check that your variable names match exactly (capitalization matters!).
3.  **The page refreshes:** Ensure `return false;` is at the very end of your function.
