import { useRef } from "react";

const ChatForm = ({ChatHistory, setChatHistory, generateBotResponse}) => {
    const inputRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if(!userMessage) return;
        inputRef.current.value = "";

        //update chat history with the user's message
        setChatHistory((history) => [...history, {role: "user", text: userMessage}]);

        //delay 600ms before showing "Thinking..." and generating response
        setTimeout(() =>{
         //add a "Thinking.." placeholder for the bot's response
        setTimeout(() => setChatHistory((history) => [...history, {role: "model", text: "Thinking..."}]), 600);

        //call the function to generate the bot's response
        generateBotResponse([...ChatHistory,{role: "user", text: `Using the details provided above, please address this query: ${userMessage}`}]);
        }, 600);
    }
    return (
        <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
            <input ref={inputRef} type="text" placeholder="Message..." className="message-input" required/>
            <button className="material-symbols-rounded">
            keyboard_arrow_up
            </button>
        </form>
    )
}

export default ChatForm