import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//we can create numerous other react components
//can accpept a prop here
const Card = ({ title }) =>{
    //defining our first state
    //everything that starts with the word hook is referred to as a hook
    //there are many different hooks
    //first parameter is the variable name
    //second parameter is the setter function we can use to update the state
    //example names
    //format: first paramete - variable name
    //second parameter - [Has]+ variableName
    //in the paranthesis of useState, you can provide the default/initial value of that state
    //make sure to be cogniscent of where you are creating state, and make sure that it is relevant to that component
    //since the hasLiked state will be different for each movie, we are declaring it in the Card component
    const [hasLiked, setHasLiked] = useState(false)
    //furthermore, we will be implementing a button that allows us to like a movie
    //when the button has been clicked ('onClick'), set the setHasLiked variable to true
    //make the text of the button dynamic
    //if the user has  liked it, make it say 'Liked',
    //if the suer has NOT liked it, make it say 'Like'
    //do this using the ternary operator

    return ( <div className="card">
        <h2>{title}</h2>

        <button onClick= {()=> setHasLiked(true)}>
            {hasLiked ? 'Liked': 'Like'}
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





export default App
