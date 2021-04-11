import React from 'react';
import './Contact.scss'
import Form from './Form';


class Contact extends React.Component {
constructor(props) {
    super(props)
    this.state = {
    }

}


render() {
        return (
        <section className='content'>
            <h1>Contact</h1>

            <div>This is how you make contact with me.</div>
            <Form />
        </section>

        )
    }
}

export default Contact