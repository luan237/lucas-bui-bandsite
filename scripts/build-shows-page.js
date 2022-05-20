//////////////////////////////////////////////////////
userURL = "https://project-1-api.herokuapp.com/";
apiKey = "?api_key=ec0ca0db-c837-41b3-bbbb-75a43065e0c7";
/////////////////////////////////////////////////////////

const tableHead = ["DATE", "VENUE", "LOCATION"];
// grab all shows display
const mainEl = document.querySelector(".info");
// mobile container
const infoMobile = document.createElement("div");
infoMobile.classList.add("info__wrap");
mainEl.appendChild(infoMobile);

// create table

const infoTable = document.createElement("table");
infoTable.classList.add("info__table");
mainEl.appendChild(infoTable);
const infoTableRow = document.createElement("tr");
infoTableRow.classList.add("info__table--row");
infoTable.appendChild(infoTableRow);

// table header loop
for (let j = 0; j < tableHead.length; j++) {
  const infoTableHead = document.createElement("th");
  infoTableHead.classList.add("info__table--head");
  infoTableHead.innerText = tableHead[j];
  infoTableRow.appendChild(infoTableHead);
}
axios
  .get(userURL + "showdates" + apiKey)
  .then((response) => {
    // loop to create each shows
    for (let i = 0; i < response.data.length; i++) {
      // outer container
      const infoContainer = document.createElement("div");
      infoContainer.classList.add("info__container");
      infoMobile.appendChild(infoContainer);
      // date
      const infoDate = document.createElement("p");
      infoDate.classList.add("info__tag");
      const infoDateContent = document.createElement("p");
      infoDateContent.classList.add("info__content");
      infoDateContent.classList.add("info__content--bold");
      // venue
      const infoVenue = document.createElement("p");
      infoVenue.classList.add("info__tag");
      const infoVenueContent = document.createElement("p");
      infoVenueContent.classList.add("info__content");
      // location
      const infoLocation = document.createElement("p");
      infoLocation.classList.add("info__tag");
      const infoLocationContent = document.createElement("p");
      infoLocationContent.classList.add("info__content");
      // buy tickets button
      const infoTicket = document.createElement("button");
      infoTicket.classList.add("info__ticket");
      infoTicket.classList.add("sub-header");

      // append new information into the container
      infoContainer.appendChild(infoDate);
      infoContainer.appendChild(infoDateContent);
      infoContainer.appendChild(infoVenue);
      infoContainer.appendChild(infoVenueContent);
      infoContainer.appendChild(infoLocation);
      infoContainer.appendChild(infoLocationContent);
      infoContainer.appendChild(infoTicket);
      // loop content
      infoDate.innerText = "DATE";
      let date = new Date(Number(response.data[i].date));
      infoDateContent.innerText = date.toLocaleDateString();
      infoVenue.innerText = "VENUE";
      infoVenueContent.innerText = response.data[i].place;
      infoLocation.innerText = "LOCATION";
      infoLocationContent.innerText = response.data[i].location;
      infoTicket.innerText = "BUY TICKETS";

      // // // // // // // // // // // // // // // // // // // // // // // // //
      //                TABLE PART              //
      // table header
      const infoTableRow = document.createElement("tr");
      infoTableRow.classList.add("info__table--row");
      infoTableRow.classList.add("info__container");

      // table content
      const infoTableDate = document.createElement("td");
      infoTableDate.classList.add("info__table--content");
      infoTableDate.classList.add("info__content--bold");
      const infoTableVenue = document.createElement("td");
      infoTableVenue.classList.add("info__table--content");
      const infoTableLocation = document.createElement("td");
      infoTableLocation.classList.add("info__table--content");
      const infoTicketTable = document.createElement("button");
      infoTicketTable.classList.add("info__ticket");
      infoTicketTable.classList.add("sub-header");

      // append child
      infoTable.appendChild(infoTableRow);
      infoTableRow.appendChild(infoTableDate);
      infoTableRow.appendChild(infoTableVenue);
      infoTableRow.appendChild(infoTableLocation);
      infoTableRow.appendChild(infoTicketTable);

      // table content
      infoTableDate.innerText = date.toLocaleDateString();
      infoTableVenue.innerText = response.data[i].place;
      infoTableLocation.innerText = response.data[i].location;
      infoTicketTable.innerText = "BUY TICKETS";
    }
  })
  .catch((error) => {
    console.log(error);
  });
// toggle selected state for each ticket
const infoContainerSelected = document.querySelectorAll(".info__container");
infoContainerSelected.forEach((container) => {
  container.addEventListener("click", () => {
    if (container.classList.contains("info__container--selected")) {
      container.classList.remove("info__container--selected");
    } else {
      container.classList.add("info__container--selected");
    }
  });
});
