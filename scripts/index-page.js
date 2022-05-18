//////////////////////////////////////////////////////
userURL = "https://project-1-api.herokuapp.com/";
apiKey = "?api_key=ec0ca0db-c837-41b3-bbbb-75a43065e0c7";
/////////////////////////////////////////////////////////

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
fanName.setAttribute("placeholder", "  Enter your name");
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
fanComment.setAttribute("placeholder", " Add a new comment");
fanSection.appendChild(fanComment);
// submit button
const fanSubmit = document.createElement("button");
fanSubmit.classList.add("fans__container--submit");
fanSubmit.classList.add("sub-header");

fanSubmit.innerText = "COMMENT";
fanSection.appendChild(fanSubmit);

// comment section

const savedContainer = document.createElement("div");
savedContainer.classList.add("fans__saved");
fans.appendChild(savedContainer);
// Show default comment function
function displayComments() {
  axios.get(userURL + "comments" + apiKey).then((response) => {
    for (let i = response.data.length - 1; i >= 0; i--) {
      // display comments container
      const savedSection = document.createElement("div");
      savedSection.classList.add("fans__saved--section");
      savedContainer.appendChild(savedSection);

      // avatar
      const savedAvatar = document.createElement("img");
      savedAvatar.classList.add("fans__saved--avatar");
      savedSection.appendChild(savedAvatar);

      // right side section of comments
      const savedRightSide = document.createElement("div");
      savedRightSide.classList.add("fans__saved--content");
      savedSection.appendChild(savedRightSide);

      // name and date container
      const savedNAndD = document.createElement("div");
      savedNAndD.classList.add("fans__saved--info");
      savedRightSide.appendChild(savedNAndD);

      // name
      const savedName = document.createElement("p");
      savedName.classList.add("fans__saved--name");
      savedName.classList.add("sub-header");
      savedNAndD.appendChild(savedName);
      savedName.innerText = response.data[i].name;

      // date

      const savedDate = document.createElement("p");
      savedDate.classList.add("fans__saved--date");
      savedNAndD.appendChild(savedDate);
      let time = new Date(response.data[i].timestamp);
      let year = time.getFullYear();
      let month = ("0" + (time.getUTCMonth() + 1)).slice(-2);
      let day = ("0" + time.getDate()).slice(-2);
      savedDate.innerText = `${year} / ${month} / ${day}`;

      // comment
      const savedComment = document.createElement("p");
      savedComment.classList.add("fans__saved--comment");
      savedRightSide.appendChild(savedComment);
      savedComment.innerText = response.data[i].comment;
    }
  });
  return displayComments;
}
const errorName = document.querySelector(".fans__container--name");
const errorComment = document.querySelector(".fans__container--comment");
// Show default comment
displayComments();

// submit event
commentContainer.addEventListener("submit", (e) => {
  e.preventDefault();

  // error state
  if (e.target.name.value.length < 3 || e.target.comment.value.length < 1) {
    errorName.classList.add("fans__container--error");
    errorComment.classList.add("fans__container--error");
  } else {
    // display new comment function
    savedContainer.innerHTML = "";
    console.log(e);
    axios
      .post(userURL + "comments" + apiKey, {
        name: e.target.name.value,
        comment: e.target.comment.value,
      })
      .then((response) => {
        e.target.reset();
        displayComments();
      });

    // remove error if available
    errorName.classList.remove("fans__container--error");
    errorComment.classList.remove("fans__container--error");
  }
});
