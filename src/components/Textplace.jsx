import React, { useState } from "react";

function Textplace(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }
    function submitN(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }


    return (
        <div>
            <form>
                <input name="title" onChange={handleChange}
                    value={note.title} placeholder="put here title " />
                <textarea name="content" onChange={handleChange}
                    value={note.content} placeholder="put here description" rows="3" />
                <button onClick={submitN}>Add</button>

            </form>
        </div>
    );
}

export default Textplace;
