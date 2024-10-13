import CodePanel from "./codePanel";
import InfoPanel from "./infoPanel";
import Nav from "../Nav";

export default function C3() {
	return (
		<>
        <Nav/>
			<div className="testPanels">
				<InfoPanel title={"Challenge 3: Palindrome Checker"} description={
                    "Write a function that takes a string as an argument and checks if it is a palindrome (a word, phrase, or sequence that reads the same backward as forward, ignoring spaces, punctuation, and capitalization). Include a function isPalindrome(str) {}. Check in the Developer Console for your results!" 
                    } difficulty={"3/5"}/>
				<CodePanel defaultExecutionCode={'return isPalindrome("Racecar")'} shouldBe={true} />


			</div>
		</>
	)
}
