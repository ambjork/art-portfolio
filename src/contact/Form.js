import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: '', message: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        event.target.value !== this.state.email && this.setState({email: event.target.email})
        event.target.value !== this.state.message && this.setState({message: event.target.message})
      }
    
      handleSubmit(event) {
        alert('Thank you for your enquiry! A response will be sent to: ' + this.state.email + this.state.message);
        event.preventDefault();
      }

    render () {
        return (
        <div>
            <form className='inquiries-form' onSubmit={this.handleSubmit}>
                <label>
                <span>E-mail: <input type='text' name='email' value={this.state.email} onChange={this.handleChange} /></span>
                <span>Kind of art: <input type='drop-down' value={this.state.value} onChange={this.handleChange} /></span>
                <span>Message: <input type='text'name='message' /></span>
                </label>
                <span><input type='submit'></input></span>
            </form>
        </div>
        )
        }

}

export default Form