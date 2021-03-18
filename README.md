# Project-3
## Movie App


[Link to Movie App](couchslothmovies.surge.sh)


[Link to git repository](https://github.com/ackottsi/React_Project_Three)

---
#### Motivation:
Learning to create an app using React that allows people to see details of movies and search for movies they may be interested in.

---
#### Objective Level 1 (MVP) (complete):
- [x] create a pre-defined list of movies for api pull
- [x] pull api info for each movie and create list view
- [x] create routes and links to display separate views for each movie
- [x] minimal styling (no images)

#### Objective Level 2 (partially complete):
* [ ] ratings/likes functionality
* [ ] comments functionality
* [x] user login
* [x] improved styling (colored backgrounds, text, and different font styles)

#### Objective Level 3 (partially complete):
* [x] movie search functionality
* [ ] multiple users with login required
* [x] improved styling (movie "cards", improved layout, animations)
* [x] utilize React hooks

---
#### Wireframe

##### Page Layout and Website Flow

 * basic structure

    ![basic structure](https://i.imgur.com/LpKhx6S.png)

 * bronze level wireframe

    ![bronze level wireframe](https://i.imgur.com/Laf9ECm.png)

 * silver level wireframe

    ![silver level wireframe](https://i.imgur.com/6p5wT5g.png)

 * header wireframe

    ![header wireframe](https://i.imgur.com/jrYMvuy.png)

 * footer wireframe

    ![footer wireframe](https://i.imgur.com/5NUlAMe.png)


---

#### Technology used:
* HTML, CSS, JavaScript
* React
* github - used for revision control
* Surge - used for deployment.

---

#### Main features:
 * List of features
 * display list of items
 * links and routes to detailed item views
 * search functionality

---

#### Code snippet:
This allows for multiple searches to be performed per website visit:
```
//component did Update handles all subsequent searches after initial search
componentDidUpdate= async (prevProps)=>{

  if(this.props.location.state.title!==prevProps.location.state.title){

    const movieSearch = this.props.location.state.title
    const movieData1 = await axios.get(`https://www.omdbapi.com/?apikey=38e29c7e&s=${movieSearch}`);
    const resultsString=movieData1.data.Response;

    if(resultsString==="False"){

      this.setState ({
      searchTerm: movieSearch,
      movieData: movieData1.data.Search,
      apiDataLoaded: true,
      searchResponse:false
      })
    }

    else {this.setState ({
      searchTerm: movieSearch,
      movieData: movieData1.data.Search,
      apiDataLoaded: true,
      searchResponse:true
    })};  
  }
}
```
---

#### Room for improvement:
1. Add CRUD functionality to improve watch list / watched list.
2. Add CRUD functionality for multiple users.
3. Add comments section and voting/like feature.
