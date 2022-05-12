comments = [
  {
    name: "Connor Walton",
    time: 02 / 17 / 2021,
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    time: 01 / 09 / 2021,
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    time: 12 / 20 / 2020,
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];
// grab fan section
let fans = document.querySelector(".fans");
// loop for every comments
let commentContainer = document.createElement("form");
commentContainer.classList.add("fans__container");
fans.appendChild(commentContainer);
// input name
let fanNameLabel = document.createElement("label");
fanNameLabel.classList.add("fans__container--label");
commentContainer.appendChild(fanNameLabel);
fanNameLabel.innerText = "NAME";
let fanName = document.createElement("input");
fanName.classList.add("fans__container--name");
fanName.setAttribute("type", "text");
fanName.setAttribute("name", "name");
fanName.setAttribute("placeholder", "Enter your name");
fanNameLabel.appendChild(fanName);
// input comment
let fanCommentLabel = document.createElement("label");
fanCommentLabel.classList.add("fans__container--label");
let fanComment = document.createElement("input");
commentContainer.appendChild(fanCommentLabel);
fanCommentLabel.innerText = "COMMENT";
fanComment.classList.add("fans__container--comment");
fanComment.setAttribute("type", "text");
fanComment.setAttribute("name", "comment");
fanComment.setAttribute("placeholder", "Add a new comment");
fanCommentLabel.appendChild(fanComment);
// submit button
let fanSubmit = document.createElement("button");
fanSubmit.classList.add("fans__container--submit");
fanSubmit.innerText = "COMMENT";
commentContainer.appendChild(fanSubmit);

commentContainer.addEventListener("submit", (e) => {
  e.preventDefault();
//   for (let i = 0; i < comments.length; i++) {
//     let savedComment = document.createElement('div')
//     savedComment.classList.add("fans__saved")
//     fans.appendChild(savedComment)
//     let savedName = document.createElement('p')
//     savedName.classList.add("fan__")
//   }
// });
