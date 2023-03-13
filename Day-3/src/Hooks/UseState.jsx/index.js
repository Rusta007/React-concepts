const MessageList = () => {
    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
  
    return (
      <div>
        <input
          type="text"
          value={message}
          placeholder="Enter a message"
          onChange={e => {
            setMessage(e.target.value);
          }}
        />
        <input
          type="button"
          value="Add"
          onClick={e => {
            setMessageList([
              ...messageList,
              {
                // Use the current size as ID (needed to iterate the list later)
                id: messageList.length + 1,
                message: message
              }
            ]);
            setMessage(""); // Clear the text box
          }}
        />
        <ul>
          {messageList.map(m => (
            <li key={m.id}>{m.message}</li>
          ))}
        </ul>
      </div>
    );
  };