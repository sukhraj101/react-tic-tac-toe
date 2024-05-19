import { useState } from "react";

export default function Player ({name, symbol}) {

    const [isEditing, setIsEditing] = useState(false);
    const [inputVal, inputValUpdate] = useState(name);

    function handelEditCLick() {
        setIsEditing((editing) => !editing);
    }

    function handelOnCHange(event) {
        inputValUpdate(event.target.value);
    }

    let playerName = <span className="player-name">{inputVal}</span>;

    if(isEditing) {
        playerName = <input type="text" required value={inputVal} onChange={handelOnCHange} />;
    }

    return (
        <li>
            <span className="player">
              {playerName}              
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handelEditCLick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}