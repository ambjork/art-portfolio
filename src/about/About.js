import React from 'react';
import './About.scss'
import { Link } from "react-router-dom"


class About extends React.Component {
constructor(props) {
    super(props)
    this.state = {
    }

}


render() {
        return (
        <body>
        <section className='header-section'>
            <span></span>
        </section>

        <section className='main-section'>
            Here will be info about me.
            <Link to='http://localhost:3000/contact'>Contact me</Link>
        </section>


    </body>
        )
    }
}

export default About