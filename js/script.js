// Question 1
const cat = {
    complain: function () {
        console.log("Meow!")
    }
}

cat.complain();

// Question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4

const subheading = document.getElementsByTagName("h3");

for (let i = 0; i < subheading.length; i++) {
    subheading[i].classList.add("subheading");
}

// Question 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}

// Question 6



// Question 7
// Question 8
