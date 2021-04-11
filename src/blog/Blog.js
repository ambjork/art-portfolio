import React from 'react';
import './Blog.scss'


class Blog extends React.Component {
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
            This is my blog!
        </section>


    </body>
        )
    }
}

export default Blog