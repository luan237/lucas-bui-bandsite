comments = [
  {
    name: "Connor Walton",
    time: "02 / 17 / 2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. const us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    time: "01 / 09 / 2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    time: "12 / 20 / 2020",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

// grab fan section
const fans = document.querySelector(".fans");
// loop for every comments
const commentContainer = document.createElement("form");
commentContainer.classList.add("fans__container");
fans.appendChild(commentContainer);

// input avatar
const fanAvatar = document.createElement("div");
fanAvatar.classList.add("fans__container--avatar");
// fanAvatar.setAttribute("src", "./assets/images/Mohan-muruge.jpg");
commentContainer.appendChild(fanAvatar);

// input comment section
const fanSection = document.createElement("div");
fanSection.classList.add("fans__container--section");
commentContainer.appendChild(fanSection);
// input name
const fanNameLabel = document.createElement("label");
fanNameLabel.classList.add("fans__container--label");
fanSection.appendChild(fanNameLabel);
fanNameLabel.innerText = "NAME";
const fanName = document.createElement("input");
fanName.classList.add("fans__container--name");
fanName.setAttribute("type", "text");
fanName.setAttribute("name", "name");
fanName.setAttribute("placeholder", "Enter your name");
fanSection.appendChild(fanName);
// input comment
const fanCommentLabel = document.createElement("label");
fanCommentLabel.classList.add("fans__container--label");
const fanComment = document.createElement("textarea");
fanSection.appendChild(fanCommentLabel);
fanCommentLabel.innerText = "COMMENT";
fanComment.classList.add("fans__container--comment");
fanComment.setAttribute("type", "text");
fanComment.setAttribute("name", "comment");
fanComment.setAttribute("placeholder", "Add a new comment");
fanComment.setAttribute("rows", "1");
fanSection.appendChild(fanComment);
// submit button
const fanSubmit = document.createElement("button");
fanSubmit.classList.add("fans__container--submit");
fanSubmit.classList.add("sub-header");

fanSubmit.innerText = "COMMENT";
fanSection.appendChild(fanSubmit);

// comment section

const savedSection = document.createElement("div");
savedSection.classList.add("fans__saved--section");
fans.appendChild(savedSection);

// Show default comment function
function displayComments() {
  for (let i = 0; i < comments.length; i++) {
    // display comments container
    const savedContainer = document.createElement("div");
    savedContainer.classList.add("fans__saved");
    savedSection.appendChild(savedContainer);

    // avatar
    const savedAvatar = document.createElement("img");
    savedAvatar.classList.add("fans__saved--avatar");
    savedContainer.appendChild(savedAvatar);

    // right side section of comments
    const savedRightSide = document.createElement("div");
    savedRightSide.classList.add("fans__saved--content");
    savedContainer.appendChild(savedRightSide);

    // name and date container
    const savedNAndD = document.createElement("div");
    savedNAndD.classList.add("fans__saved--info");
    savedRightSide.appendChild(savedNAndD);

    // name
    const savedName = document.createElement("p");
    savedName.classList.add("fans__saved--name");
    savedName.classList.add("sub-header");
    savedNAndD.appendChild(savedName);
    savedName.innerText = comments[i].name;

    // date

    const savedDate = document.createElement("p");
    savedDate.classList.add("fans__saved--date");
    savedNAndD.appendChild(savedDate);
    savedDate.innerText = comments[i].time;

    // comment
    const savedComment = document.createElement("p");
    savedComment.classList.add("fans__saved--comment");
    savedRightSide.appendChild(savedComment);
    savedComment.innerText = comments[i].comment;
  }
  return displayComments;
}
const errorName = document.querySelector(".fans__container--name");
const errorComment = document.querySelector(".fans__container--comment");
// Show default comment
displayComments();
commentContainer.addEventListener("submit", (e) => {
  e.preventDefault();
  if (e.target.name.value.length < 3 || e.target.comment.value.length < 1) {
    errorName.classList.add("fans__container--error");
    errorComment.classList.add("fans__container--error");
  } else {
    savedSection.innerHTML = "";
    console.log(e);
    let newDate = new Date();
    let newDay = ("0" + newDate.getDate()).slice(-2);
    let newMonth = ("0" + newDate.getMonth()).slice(-2);
    let newYear = newDate.getFullYear();
    let newComment = {
      name: e.target.name.value,
      comment: e.target.comment.value,
      time: newMonth + " / " + newDay + " / " + newYear,
    };
    comments.unshift(newComment);
    e.target.reset();
    displayComments();
    errorName.classList.remove("fans__container--error");
    errorComment.classList.remove("fans__container--error");
  }
});
