import { useState } from "react"

const ChatInput = () => {
    const [textArea, setTextArea] = useState()
    return (
        <div className="chat-input">
            <div>
                <textarea value={textArea} onChange={(e) => setTextArea(e.target.value)} />
            <button className="secondary-button">Submit</button>
            </div>
        </div>
    )
}

export default ChatInput