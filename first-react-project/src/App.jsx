import { useState } from 'react'
import {useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//we can create numerous other react components
//can accpept a prop here
const Card = ({ title }) =>{
    //defining our first state
    //everything that starts with the word hook is referred to as a hook
    //there are many different hooks, like useState
    //first parameter is the variable name
    //second parameter is the setter function we can use to update the state
    //example names
    //format: first paramete - variable name
    //second parameter - [Has]+ variableName
    //in the paranthesis of useState, you can provide the default/initial value of the hasLiked variable
    //make sure to be cogniscent of where you are creating state, and make sure that it is relevant to that component
    //since the hasLiked state will be different for each movie, we are declaring it in the Card component
    const [hasLiked, setHasLiked] = useState(false)
    //useEffect
    //lets say we want to log a message when a user likes a movie
    //first declare a callback function called the effect, and within it put the code u want executed
    //we want to make sure that useEffect only runs when something changes
    //to do so, use the dependency array
    //this is the second parameter
    //whatever variable u pass here, react will see if it has changed
    //it will only be called if it has been changed
     useEffect(() => {
         console.log(`${title} movie has beeen liked: ${hasLiked}`)
    }, [hasLiked])
    //it is normal for an effect to run twice
    //when in development mode, react runs set up and cleanup one extra time before the actual setup
    //verifies that the effect function has been implmeneted correctly
    //when u deploy the application to prod, itll only run the expected amount of times

    //like states, we can have many useEffects
    //we can have it so that an useEffect only appears when it is first mounted - when it first appears
    //furthermore, make sure you create a dependence array and leave it blank
    /*
    useEffect(() => {
        console.log("CARD RENDERED")
    }, []) */




    //lets say we want to track the activity of the user for some kind of algorithm that we might want to develop within the movie app
    //want to track the number of clicks to each one of these cards to be able to reccomend similair movies
    //need to create a new state
    //tracking the counts
    //we also need an onclick function for this as well
    //when the card is clicked, increase the count by 1
    const[count, setCount] = useState(0)

    //furthermore, we will be implementing a button that allows us to like a movie
    //when the button has been clicked ('onClick'), set the setHasLiked to !hasLiked
    //this allows us to toggle between true/false for hasLiked, basically unliking and liking the movie
    //make the text of the button dynamic
    //if the user has  liked it, make it say 'Liked',
    //if the suer has NOT liked it, make it say 'Like'
    //do this using the ternary operator
    //when you reload the page, all the values will be reset; they are not persistent

    //for the onclick below:
    //simply increasing the count

    //can make it so that we only render the count if it exists (not 0) using conditional rendering
    return ( <div className="card" onClick = {() => setCount(count + 1)}>
        <h2>{title} - {count || null}</h2>

        <button onClick= {()=> setHasLiked(!hasLiked)}>
            {hasLiked ? '❤️': '🤍'}
        </button>
    </div>)
}
//can use an arrow component to define it
//we can use the card component within the original App component

//sometimes we want to pass data from one component to another to display something specific
//dont want to create multiple similair components for every little change
//we can do that using props
//in react props (properties), are ways to pass data from one componenet to another
//typically do it from a parent component to a child component
//think of props as arguments u pass to a function
//lets say each card has a property (prop) of title
//a prop can be a string, number, or boolean, or object
//we need to also think about unliking something
//how can we figure out if something is liked and then flip it if it is
const App = () => {
    return (
        //using class names
    <div className = "card-container">
    <Card title = 'Star Wars' rating = {5} isCool = {true}/>
    <Card title = 'Avatar'/>
    <Card title = 'Lion King'/>
    </div>
    //can style react using in different ways - inline styles, css, tailwind css, bootstrap, material ui, ant ui, sass, css in js, css modules
    //heading over to index.css
    )
}


//The State
//State is like a react component's brain
//it holds info abt the components that can change over time
//for example, in this code for example, if u want to check if someone has liked a movie or not, you need to track state over time
//react's rendering process relies on state and props to decide when and how to re-render the components
//lets create a state the allows them to interact with each card and allow them to like or dislike the movie

//hooks
//hooks are special functions in react that let u tap into special features in react like state mangement
//many different types of hookes
//useState for handling state
//useEffect for handling efffects like data fetching
//useContext for sharing data across functions
//useCallback for optimizing callback functions


//the useEffect hook
//useEffect helps u do things like fetching data from the server, and doing cleanup once the component is removed from the screen
//

//conditional rendering
//conditional rendering helps u show different ui on the screen depending on the criteria






export default App
