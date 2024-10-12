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
            console.log("Should be:", shouldBe); 

            // Normalize values for comparison
            const normalizeValue = (value) => {
                if (typeof value === 'string') {
                    return value.trim(); // Trim strings
                } else if (value instanceof Object) {
                    return JSON.stringify(value); // Convert objects to strings
                }
                return value; // Return numbers and booleans as is
            };

            const normalizedResult = normalizeValue(result);
            const normalizedShouldBe = normalizeValue(shouldBe);

            if (normalizedResult === normalizedShouldBe) {
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
