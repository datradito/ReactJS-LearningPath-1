import React from "react";
import { Fragment } from "react";
import PropTypes  from 'prop-types'


const text =  "Welcome to my First App in React";

const person = {
    name: "Paloma",
    age: "21",
    f_color: "purple"
}

const sumar = (a,b) => {
    return a + b;
}

export const FirstApp = ({title , subtitle }) => {


    return(
       <Fragment>
           <header className="haeder">
                <div className="container-nav">

                    <nav className="nav">
                        <ul className="nav-list">
                            <li className="nav-list-item">Home</li>
                            <li className="nav-list-item">About me</li>
                            <li className="nav-list-item">Projects</li>
                        </ul>
                    </nav>

                </div>
                <div className="title" data-testid="test-title">
                    <h1>{title}</h1>
                    
                </div>
                <p>{subtitle}</p>
           </header>
            
           {/*  <h2>Hello World</h2>
            <p>This is my first app in react</p>

            <div class="container">

                <h3>Person</h3>
                <ul>
                    <li>{person.name}</li>
                    <li>{person.age}</li>
                    <li>{person.f_color}</li>
                </ul>

 
                <h3>Person</h3>
                <ul>
                    <li>{ JSON.stringify(person)}</li>
                   
                </ul>
            </div>

            <div>
                <p>La suma da como resultado: <span>{sumar(20,40)}</span> </p>
            </div> 

            <footer>
                <h6>By Paloma Herrera</h6>
            </footer>
        */}
       </Fragment>
    )
}



FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}


FirstApp.defaultProps = {
    title: 'Hola, soy Paloma',
    subtitle:'Mi primera app react'

}