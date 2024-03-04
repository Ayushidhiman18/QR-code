import React from 'react';
import './DialogBox.css';

function DialogBox() {
    return (
        <div className="box">
            <h2>Product Serial No.</h2>
            <form>
                <label htmlFor="psn">Enter the product serial no.:</label>
                <input type="text" id="psn" name="psn" required />
                </form>
            <p>Input Serial Number to know more about the product</p>
            <button>Submit</button>
        </div>
    );
}

export default DialogBox;