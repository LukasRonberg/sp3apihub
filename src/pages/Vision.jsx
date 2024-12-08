import { useState,useEffect } from "react";
import vision from '../assets/vision.txt'


function Vision() {
    const [content, setContent] = useState("");

  useEffect(() => {
    // Fetch the content of the text file
    fetch(vision)
      .then((response) => response.text())
      .then((data) => setContent(data));
  }, []);
    return (  
        <>
        <h1>Vision for the Project</h1>
        <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
        {content}
      </pre>
        </>
    );
}

export default Vision;