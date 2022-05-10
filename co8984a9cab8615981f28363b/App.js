import React from "react"
import ReactDOM from "react-dom"
import Footer from "./first/Footer"
import About from "./About"
import Info from "./Info"
import Interests from "./Interests"

export default function App() {
    return (
        <div className="Main">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))