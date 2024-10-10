import { useState } from 'react';

export default function CodePanel() {
    const [code, setCode] = useState("");

    const runCode = () => {
        try {
            const result = new Function(code)();
            console.log(result);  
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="codePanel">
            <textarea 
                placeholder="Enter JavaScript code here..." 
                value={code} 
                onChange={(e) => setCode(e.target.value)} 
            />
            <button onClick={runCode}>Run Code</button>
        </div>
    );
}
