import CodePanel from "./codePanel";
import InfoPanel from "./infoPanel";
import Nav from "../Nav";

export default function C4() {
	return (
		<>
        <Nav/>
			<div className="testPanels">
				<InfoPanel title={"Challenge 4: Find the Largest Number in an Array"} description={
                    "Create a function that takes an array of numbers as an argument and returns the largest number in the array. Include a function findLargestNumber(arr) {}" 
                    } difficulty={"4/5"}/>
				<CodePanel defaultExecutionCode={'return findLargestNumber([4, 1, 8, 3, 9])'} shouldBe={9} />


			</div>
		</>
	)
}
