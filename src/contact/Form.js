import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          fields: {},
          errors: {}
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleValidation = this.handleValidation.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }
    
      handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Description
        if(!fields["description"]){
           formIsValid = false;
           errors["description"] = "Cannot be empty";
        }
   
        //Email
        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "Cannot be empty";
        }
  
        if(typeof fields["email"] !== "undefined"){
           let lastAtPos = fields["email"].lastIndexOf('@');
           let lastDotPos = fields["email"].lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email is not valid";
            }
       }  

       this.setState({errors: errors});
       return formIsValid;
   }
    
   contactSubmit(e){
        e.preventDefault();

        if(this.handleValidation()){
           alert("Form submitted");
        }else{
           alert("Form has errors.")
        }
  
    }
    
      handleSubmit(event) {
        alert('Thank you for your commission request! A response will be sent to: ' + this.state.fields["email"]);
        event.preventDefault();
      }

    render () {
        return (
        <div>
            <form className='inquiries-form' onSubmit={this.handleSubmit}>
                <label>
                <label>E-mail: 
                <br/>
                  <input type='text' name='email' required="true" placeholder="Email" sixe="30" value={this.state.fields["email"]} onChange={this.handleChange.bind(this, "email")} /></label>
                  <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                <br/>
                <label>Description of commission: 
                <br/>
                  <textarea name='description' required="true" placeholder="Describe your idea for the commission" size="500" onChange={this.handleChange.bind(this, "description")}/></label>
                  <span style={{color: "red"}}>{this.state.errors["description"]}</span>
                </label>
                <br/>
                <label>Size:
                  <br/>
                  <select>
                    <option value="small">Small: 100x100px</option>
                    <option selected value="medium">Medium: 300x300px</option>
                    <option value="medium large">Medium Large: 600x600px</option>
                    <option value="large">Large: 1000x1000px</option>
                  </select>
                </label>
                <br/>
                <label>
                  <input type='submit'></input>
                </label>
            </form>
        </div>
        )
        }

}

export default Form