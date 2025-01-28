//to quickly set up the App.jsx
//go to plugins (ctrl+alt+s) -> market place -> search for 'react' snippets
//download 'modern reacr snippets' by anurag kanwar
//go back to app.jsx
//type rafce

//like said before, we are using appwrite for theis project
//make sure to import all things used like the useState
import React, {useState} from 'react'
//make sure to import any components created
import Search from "./components/Search.jsx";
//importing useState from react
//ctrl + c to stop it from running

//api keys - dont put it in the main file where it can be easily seen
//create '.env.local' file in the src folder
//follow a similair variable naming convention when storing the key
//then restart the terminal for it to recognize it

//using the api to get a list of the most popular movies
const API_BASE_URL = "https://api.themoviedb.org/3/";

//getting acess to the api key
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

//have to define api options
const API_OPTIONS = {
    //get request
    method: 'GET',
    //accepting data in json format
    header: {
        accept: 'application/json',
        //need to autnethicate the api key 
    }
}
const App = () => {
    //creating a state for a search term (searching for a movie)
    const [searchTerm, setSearchTerm] = useState('');
    //ONLY MUTATE THE VALUES OF THE VARIABLES USING THE SETTER FUNCTIONS ABOVE


    ////using the useEffect hook to fetch the movies
    //make sure that it only loads at the start, by making sure it only runs at the start
    //to do so, passing in an empty dependency array
    useEffect(() => {

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
                </header>
                {/* rendering in the search component*/}
                {/*we are passing in state fields as props*/}
                {/*props are inputs we pass into a component, like parameter we pass into a function*/}
                {/* as a user searches for something, we can pass that search term into search */}
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                <h1>{searchTerm}</h1>
            </div>
        </main>
    )
}
export default App
