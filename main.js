function generator() {
    var qt = [
        "You only live once, but if you do it right, once is enough Mae West",
        "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. Maya Angelou",
        "And once the storm is over, you willnot remember how you made it through, how you managed to survive. You wont even be sure, whether the storm is really over. But one thing is certain. When you come out of the storm, you wont be the same person who walked in. That is what this storms all about. Haruki Murakami"
    ];

    var randomIndex = Math.floor(Math.random() * qt.length);

    window.document.getElementById("print").innerHTML = qt[randomIndex];
}

