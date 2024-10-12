import CodePanel from "./codePanel";
import InfoPanel from "./infoPanel";
import ResultPanel from "./resultPanel";

export default function C1() {
	return (
		<>
			<div className="testPanels">
				<InfoPanel title={"Challenge 1: Reverse a String"} description={
                    "Write a function that takes a string as input and returns the string reversed.  start by making a function called reverseString(str). It needs to return a string." 
                    } difficulty={"1/5"}/>
				<CodePanel defaultExecutionCode={'return reverseString("Helo");'} shouldBe={"olleH"} />


				<ResultPanel/>
			</div>
		</>
	)
}
