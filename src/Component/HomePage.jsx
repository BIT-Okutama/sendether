import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class HomePage extends Component {
  render() {
    return (
        <div className="formDiv">
            <form >
                <div className="form-field">
                    <input style={{width: "40%", height: "40%", marginTop:"10%"}} type="text" name="amount" id="amount" required pattern="^\d+(?:\.\d{1,2})?$" placeholder="Enter ether amount"/>
                </div>
                <button type="submit" className="landing-button">Submit</button>
            </form>
        </div>
    )
  }
}
export default HomePage;