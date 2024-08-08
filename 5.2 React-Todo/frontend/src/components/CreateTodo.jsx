import { useState } from "react";

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div>
            <input 
                id="title" 
                type="text" 
                placeholder="title" 
                value={title} // Correctly bind value to state
                onChange={(e) => setTitle(e.target.value)} // Update state on change
            /> 
            <br />
            <input 
                id="description" 
                type="text" 
                placeholder="description" 
                value={description} // Correctly bind value to state
                onChange={(e) => setDescription(e.target.value)} // Update state on change
            /> 
            <br />
            <button onClick={async () => {
                try {
                    const response = await fetch("http://localhost:3000/todo", {
                        method: "POST",
                        body: JSON.stringify({
                            title: title,
                            description: description
                        }),
                        headers: {
                            "Content-type": "application/json"
                        }
                    });
                    // const text = await response.text();
                    if (response.ok) {
                        const json = await response.json();
                        alert("Todo added");
        
                        setTitle(""); // Reset title input
                        setDescription(""); // Reset description input
                        addTodo(json); // Update the list of todos
                    } else {
                        console.error("Failed to create todo");
                        alert("Failed to create todo");
                    }
                } catch (error) {
                    console.error("Error:", error);
                    alert("An error occurred while creating the todo");
                }
            }}> 
                Create Todo 
            </button>
        </div>
    );
}
