import React from 'react';
import './Contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faTumblr, faYoutube, faTwitch } from '@fortawesome/free-brands-svg-icons'


class Contact extends React.Component {
constructor(props) {
    super(props)
    this.state = {
    }

}


render() {
        return (
            <body>
        <section className='content'>
            <h1 className='contact-h1-name'>ANGELA ODÉN</h1>
           

            <div className='contact-presentation'>
                <p>Text about me. Text about me.Text about me.Text about me.Text about me.Text about me.Text about me. Text about me. Text about me. Text about me. Text about me. Text about me. Text about me. Text about me. Text about me. Text about me. Text about me. Text about me.Text about me.Text about me.</p>

                <h2 className='contact-h2-contact'>CONTACT</h2>
                <ul className='contact-list'>
                    <li><a href='mailto:angelaoden@hotmail.com' className='contact-link'>angelaoden@gmail.com</a></li>
                    <li><a href='https://www.deviantart.com/grazim' className='contact-link'>angiiieArt</a> on Instagram</li>
                    <li><a href='https://www.deviantart.com/grazim' className='contact-link'>angiiieArt</a> on Twitch</li>
                    <li><a href='https://www.deviantart.com/grazim' className='contact-link'>angiiieArt</a> on Tumblr</li>
                    <li><a href='https://www.deviantart.com/grazim' className='contact-link'>angiiieArt</a> on Youtube</li>
                    <li><a href='https://www.deviantart.com/grazim' className='contact-link'>angie.deviantart.com</a></li>
                    <li className='contact-logos'>
                        <a href='https://www.deviantart.com/grazim' className='contact-logos-child'><FontAwesomeIcon icon={faInstagram} /></a> 
                        <a href='https://www.deviantart.com/grazim' className='contact-logos-child'><FontAwesomeIcon icon={faTwitch} /></a>
                        <a href='https://www.deviantart.com/grazim' className='contact-logos-child'><FontAwesomeIcon icon={faTumblr} /></a>
                        <a href='https://www.deviantart.com/grazim' className='contact-logos-child'><FontAwesomeIcon icon={faYoutube} /></a>
                        <a href='https://www.deviantart.com/grazim' className='contact-logos-child'><FontAwesomeIcon icon={faTwitter} /></a>
                    </li>
                </ul>
                </div>
        </section>
            </body>

        )
    }
}

export default Contact