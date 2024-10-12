import CodePanel from "./codePanel";
import InfoPanel from "./infoPanel";

export default function C1() {
	return (
		<>
			<div className="testPanels">
				<InfoPanel title={"Challenge 1: Reverse a String"} description={
                    "Write a function that takes a string as input and returns the string reversed.  start by making a function called reverseString(str). It needs to return a string.  Check the Developer Console to see if you solved it!" 
                    } difficulty={"1/5"}/>
				<CodePanel defaultExecutionCode={'return reverseString("Hello");'} shouldBe={"olleH"} />


			</div>
		</>
	)
}
