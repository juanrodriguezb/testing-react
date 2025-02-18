import { useState } from "react";
import Output from "./Output";

const Greeting = () => {

    const [changedText, setChangedText] = useState(false);

    const handleChange = () => {
        setChangedText(prevText => !prevText)
    }

    return (
        <div>
            <h2>Hello World!</h2>
            {!changedText && <Output>It's good to see you!</Output>}
            {changedText && <Output>Changed!</Output>}
            <button onClick={handleChange}>Change Text</button>
        </div>
    )
}

export default Greeting;