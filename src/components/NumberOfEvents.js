// src/components/NumberOfEvents.js

import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE }) => {
    const [numEvents, setNumEvents] = useState("32");

    const handleInputChanged = (event) => {
        const value = event.target.value;
        setNumEvents(value);
        setCurrentNOE(value);
    }

    return (
        <div id="number-of-events">
            <label htmlFor="number-of-events-input">Number of Events: </label>
            <input
                type="text"
                id="number-of-events-input"
                className="number-of-events-input"
                value={numEvents}
                onChange={handleInputChanged}
            />
        </div>
    );

};

export default NumberOfEvents;