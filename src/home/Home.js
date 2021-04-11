import React from 'react';
import './Home.scss'


class Home extends React.Component {
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
            <img id='home-bg-img' src='https://wallpapercave.com/wp/wp3869308.jpg' alt='home page background'/>
        </section>


    </body>
        )
    }
}

export default Home