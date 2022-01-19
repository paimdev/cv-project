import React, { Components } from "react";

class GeneralInfo extends Components{
    render() {
        return (
            <div>
                <form>
                    <label htmlFor="nameInput">Name:</label>
                    <input type="text" id="nameInput"/>

                    <label htmlFor="emailInput">Email:</label>
                    <input type="text" id="emailInput"/>

                    <label htmlFor="phoneInput">Phone number:</label>
                    <input type="text" id="phoneInput"/>

                    <button type="submit">
                    Add information
                    </button>
                </form>
            </div>
        );
    }
}

export default GeneralInfo;