import { useState } from 'react';

export default function CodePanel({ defaultExecutionCode, shouldBe }) {
    const [code, setCode] = useState("");

    const runCode = () => {
        try {
            const wrappedCode = `
                ${code}
                return (function() {
                    ${defaultExecutionCode}
                })();
            `;
            
            const result = new Function(wrappedCode)();
            console.log("Result:", result);
            console.log("Should be:", "Stop trying to cheat!"); //shouldBe

            if (result === shouldBe.trim()) {
                console.log("Solved!");
            } else {
                console.log("Not Solved!");
            }
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
