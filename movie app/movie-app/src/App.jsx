//to quickly set up the App.jsx
//go to plugins (ctrl+alt+s) -> market place -> search for 'react' snippets
//download 'modern reacr snippets' by anurag kanwar
//go back to app.jsx
//type rafce

//IN JS<, SEMICOLONS ARE NOT NECESSARY BUT ADDING THEM IS A GOOD PRACTICE AS IT REDUCES CONFUSION

//like said before, we are using appwrite for theis project
//make sure to import all things used like the useState
import React, {useState, useEffect} from 'react'
//make sure to import any components created
import Search from "./components/Search.jsx";
//importing useState from react
//ctrl + c to stop it from running

//api keys - dont put it in the main file where it can be easily seen
//create a file called '.env.local' in the project folder, on the same level (NOT IN) the src folder 
//follow a similair variable naming convention when storing the key
//then restart the terminal for it to recognize it

//using the api to get a list of the most popular movies
const API_BASE_URL = "https://api.themoviedb.org/3";

//getting acess to the api key
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

//have to define api options
const API_OPTIONS = {
    //get request
    method: 'GET',
    //accepting data in json format
    headers: {
        accept: 'application/json',
        //need to autnethicate the api key
        authorization: `Bearer ${API_KEY}`
    }
}
const App = () => {
    //creating a state for a search term (searching for a movie)
    const [searchTerm, setSearchTerm] = useState('');
    //ONLY MUTATE THE VALUES OF THE VARIABLES USING THE SETTER FUNCTIONS ABOVE


    //display any erros on the webpage
    const [errorMessage, setErrorMessage] = useState(null)
    //declaring a function that will allow us to fetch the movies
    const fetchMovies = async() =>
    {
        try{
            //creating the endpoint - where the data will be retrieved from
            const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`
            //gettting the response
            const response = await fetch(endpoint, API_OPTIONS)
            //fetch is a built js function that allows u to make http requests like get and post
            //check if the http request was sucessful
            //if it is not fine, throw a error
            if(!response.ok){
                throw new Error("Failed to fetch movies")
            }
            //otherwise, just get the data in the json format
            const data = await response.json();
        }
        catch(error){
            console.log('error fetching movies')
            //setting the error message if we catch any error messages
            setErrorMessage('Error fetching movies. Please try again later')
        }
    }
    ////using the useEffect hook to fetch the movies
    //make sure that it only loads at the start, by making sure it only runs at the start
    //to do so, passing in an empty dependency array
    useEffect(() => {
        //we want to load the movies as soon as we come inside the website
        //so, call the fetchMovies method
        fetchMovies();


    }, [])
    return (
        //starting top down from the header
        //adding a span tag and give it a classname - this corresponds to some css styling attributes in index.css
        <main>
            <div className = "pattern" />
            <div className = "wrapper">
                <header>
                    <img src = "./hero.png" alt = "hero-banner" />
                    <h1>Find <span className = "text-gradient">Movies </span>You'll Enjoy Without the Hassle </h1>
                    {/* rendering in the search component*/}
                    {/*we are passing in state fields as props*/}
                    {/*props are inputs we pass into a component, like parameter we pass into a function*/}
                    {/* as a user searches for something, we can pass that search term into search */}
                    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                </header>
                {/*creating a section for all the movies display*/}
                <section className = "movies">
                    <h2>All movies </h2>
                    {/*if there is an error messages, render a paragraph tag and display that error message*/}
                    {errorMessage && <p className = "text-red-500">{errorMessage}</p>}
                </section>
            </div>
        </main>
    )
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjM1ZGM5MDdlOGVjODMxOGFiOWM3ODVjOWFjNzM1MCIsIm5iZiI6MTczODAzMzg0Ny40NTcsInN1YiI6IjY3OTg0YWI3OWEzMGE4NWIyNzI0MmE2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VdzX7TDQq4s4Di5ivnlOELgXigjaLgcgNcQXUwMDPAM'
}
export default App
