// List of shows
let showsList = [
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA",
    },
    {
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA"
    },
    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA"
    },
    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA"
    }]
// grab all shows display
let mainEl = document.querySelector(".info");
// loop to create each shows
for(let i = 0; i < showsList.length; i++){
    // outer container
    let infoContainer = document.createElement('div');
    infoContainer.classList.add('info__container')
    mainEl.appendChild(infoContainer)
    // date
    let infoDate = document.createElement('p');
    infoDate.classList.add('info__tag')
    let infoDateContent = document.createElement('p');
    infoDateContent.classList.add('info__content')
    infoDateContent.classList.add('info__content--bold')
    // venue
    let infoVenue = document.createElement('p');
    infoVenue.classList.add('info__tag')
    let infoVenueContent = document.createElement('p');
    infoVenueContent.classList.add('info__content')
    // location
    let infoLocation = document.createElement('p');
    infoLocation.classList.add('info__tag')
    let infoLocationContent = document.createElement('p');
    infoLocationContent.classList.add('info__content')
    // buy tickets button
    let infoTicket = document.createElement('button');
    infoTicket.classList.add('info__ticket')
    infoTicket.classList.add('sub-header')

    // append new information into the container
    infoContainer.appendChild(infoDate)
    infoContainer.appendChild(infoDateContent)
    infoContainer.appendChild(infoVenue)
    infoContainer.appendChild(infoVenueContent)
    infoContainer.appendChild(infoLocation)
    infoContainer.appendChild(infoLocationContent)
    infoContainer.appendChild(infoTicket)
    // loop content
    infoDate.innerText = "DATE"
    infoDateContent.innerText = showsList[i].date
    infoVenue.innerText = "VENUE"
    infoVenueContent.innerText =showsList[i].venue
    infoLocation.innerText = "LOCATION"
    infoLocationContent.innerText = showsList[i].location
    infoTicket.innerText = "BUY TICKETS"
}

