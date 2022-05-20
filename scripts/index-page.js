//////////////////////////////////////////////////////
userURL = "https://project-1-api.herokuapp.com/";
apiKey = "?api_key=ec0ca0db-c837-41b3-bbbb-75a43065e0c7";
/////////////////////////////////////////////////////////

// create Element with Class function
function createElwithCl(el, cl) {
  const newEl = document.createElement(el);
  newEl.classList.add(cl);
  return newEl;
}

// grab fan section
const fans = document.querySelector(".fans");

// container for comments
const commentContainer = createElwithCl("form", "fans__container");
fans.appendChild(commentContainer);

// input avatar
const fanAvatar = createElwithCl("div", "fans__container--avatar");
commentContainer.appendChild(fanAvatar);

// input comment section
const fanSection = createElwithCl("div", "fans__container--section");
commentContainer.appendChild(fanSection);
// input name(label)
const fanNameLabel = createElwithCl("label", "fans__container--label");
fanNameLabel.setAttribute("for", "name");
fanSection.appendChild(fanNameLabel);
fanNameLabel.innerText = "NAME";

// name
const fanName = createElwithCl("input", "fans__container--name");
fanName.type = "text";
fanName.name = "name";
fanName.placeholder = "Enter your name";
fanName.id = "name";
// fanNameLabel.for = "name";
fanSection.appendChild(fanName);

// input comment (label)
const fanCommentLabel = createElwithCl("label", "fans__container--label");
const fanComment = createElwithCl("textarea", "fans__container--comment");
fanSection.appendChild(fanCommentLabel);
fanCommentLabel.innerText = "COMMENT";
fanCommentLabel.setAttribute("for", "comment");

// comment
fanComment.type = "text";
fanComment.id = "comment";
fanComment.name = "comment";
fanComment.placeholder = "Add a new comment";
fanSection.appendChild(fanComment);

// submit button
const fanSubmit = createElwithCl("button", "fans__container--submit");
fanSubmit.classList.add("sub-header");
fanSubmit.innerText = "COMMENT";
fanSection.appendChild(fanSubmit);

// comment section
const savedContainer = createElwithCl("div", "fans__saved");
fans.appendChild(savedContainer);

// Show default comment function
function displayComments() {
  axios.get(userURL + "comments" + apiKey).then((response) => {
    response.data.sort((b, a) => {
      return a.timestamp - b.timestamp;
    });
    for (let i = 0; i < response.data.length; i++) {
      // display comments container
      const savedSection = createElwithCl("div", "fans__saved--section");
      savedContainer.appendChild(savedSection);

      // avatar
      const savedAvatar = createElwithCl("img", "fans__saved--avatar");
      savedSection.appendChild(savedAvatar);

      // right side section of comments
      const savedRightSide = createElwithCl("div", "fans__saved--content");
      savedSection.appendChild(savedRightSide);

      // name and date container
      const savedNAndD = createElwithCl("div", "fans__saved--info");
      savedRightSide.appendChild(savedNAndD);

      // name
      const savedName = createElwithCl("p", "fans__saved--name");
      savedName.classList.add("sub-header");
      savedNAndD.appendChild(savedName);
      savedName.innerText = response.data[i].name;

      // date
      const savedDate = createElwithCl("p", "fans__saved--date");
      savedNAndD.appendChild(savedDate);
      let time = new Date(response.data[i].timestamp);
      let year = time.getFullYear();
      let month = ("0" + (time.getUTCMonth() + 1)).slice(-2);
      let day = ("0" + time.getDate()).slice(-2);
      savedDate.innerText = `${year} / ${month} / ${day}`;

      // comment
      const savedComment = createElwithCl("p", "fans__saved--comment");
      savedRightSide.appendChild(savedComment);
      savedComment.innerText = response.data[i].comment;

      // like button

      const likedCommentContainer = createElwithCl("div", "fans__saved--liked");
      savedSection.appendChild(likedCommentContainer);

      // like count
      const likeCount = createElwithCl("p", "fans__saved--liked-count");
      likedCommentContainer.appendChild(likeCount);
      likeCount.innerText = response.data[i].likes;
      const likedComment = createElwithCl("img", "fans__saved--liked-button");
      likedComment.src = "./assets/icons/SVG/like-icon.png";
      likedComment.alt = "like icon";
      likedCommentContainer.appendChild(likedComment);
      likedComment.addEventListener("click", (e) => {
        e.preventDefault();
        axios
          .put(
            userURL + "comments/" + response.data[i].id + "/like" + apiKey,
            {}
          )
          .then((response) => {
            likeCount.innerText = response.data.likes;
          });
      });
    }
  });

  return displayComments;
}
// add class when comment error
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
    savedContainer.reset();
    axios
      .post(userURL + "comments" + apiKey, {
        name: e.target.name.value,
        comment: e.target.comment.value,
      })
      .then(() => {
        e.target.reset();
        displayComments();
      });

    // remove error if available
    errorName.classList.remove("fans__container--error");
    errorComment.classList.remove("fans__container--error");
  }
});
