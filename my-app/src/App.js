import React from 'react'
import Header from './website/Header.jsx'
import Slider from './website/Slider.jsx'
import Footer from './website/Footer.jsx'
import Movie from './Movies/Movie.jsx'
class App extends React.Component{


    render(){

        return <div>
                    <h1>App Component</h1>
                    <Movie/>

                </div>
    }
}
export default App