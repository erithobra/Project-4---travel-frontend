# Project-3
## Travel Journal


[Link to Travel Journal frontend](http://ebtraveleb.surge.sh/)


[Link to Travel Journal frontend GitHub repository](https://github.com/erithobra/travel-frontend)

[Link to Travel Journal backend GitHub repository](https://github.com/erithobra/travel-backend)

---
#### Motivation:
Learning to create a full-stack web application that allows users to create a travel journal where they can record their adventures and see pictures from the trips they've taken.

---
#### Objective Level 1 (MVP) (complete):
- [x] allow user to create trips
- [x] allow user to create journal entries for trips
- [x] make trips and entries editable


#### Objective Level 2 (partially complete):
* [x] allow for multiple users
* [x] allow users to display photos
* [ ] create table for visited attractions/activities
* [ ] create table for restaurants
* [ ] allow users to track expenses


#### Objective Level 3 (incomplete):
* [ ] pull information from Google maps
* [ ] user authentication


---
#### Wireframes and ERD

 * ERD

    ![ER diagram](https://i.imgur.com/BhI4Kkv.png)

 * User Page wireframe

    ![user page](https://i.imgur.com/f40FpBV.png)

 * Trip Page wireframe

    ![trip page](https://i.imgur.com/GMsItQa.png)

---

#### Technology used:
* HTML, CSS, JavaScript
* React
* Node, Express
* Axios
* GitHub - used for revision control
* Heroku - used for backend deployment.
* Surge - used for frontend deployment.

---

#### Main features:
 * Add/Edit Users
 * Add/Edit Trips
 * Add/Edit Journal Entries
 * Add Photos

---

#### Code snippet:
This identifies the date of a journal entry and then searches for a corresponding date in the photo table. If a photo with that date is found, that photo is set as the background for the preview window of that journal entry. If a photo is not found, a default image is set as the background.
```
{foundTrip.Days.map(day => {
// looking at the date of each day in the Days table and
// finding a photo from the same date in the Photos table
    let dayIdNumber = day.id;
    let dayIndexNumber = foundTrip.Days.findIndex(elem => elem["id"] === dayIdNumber)
    let dayIndexNumberDate = foundTrip.Days[dayIndexNumber].date
    let photoIndexNumber
    let dayPreviewPhoto
    if((foundTrip.Photos.findIndex(elem => elem["date"] === dayIndexNumberDate)) === -1){
        dayPreviewPhoto = "https://i.imgur.com/9yVWjB8.jpg"
    } else {
        photoIndexNumber = foundTrip.Photos.findIndex(elem => elem["date"] === dayIndexNumberDate)
        dayPreviewPhoto = foundTrip.Photos[photoIndexNumber].photo
    }
```
---

#### Room for improvement:
1. Add more features like expense tracking and trip information (flight plans, reservations, etc).
2. Allow multiple users to be on the same trip.
3. Incorporate information from Google maps based on user inputs.
