import CodePanel from "./codePanel";
import InfoPanel from "./infoPanel";

export default function C2() {
	return (
		<>
			<div className="testPanels">
				<InfoPanel title={"Challenge 2: Sum of All Numbers in an Array"} description={
                    "Create a function that takes an array of numbers and returns the sum of all the numbers in the array. Start with this function: function sumArray(arr) {}  Check the Developer Console to see if you solved it!" 
                    } difficulty={"2/5"}/>
				<CodePanel defaultExecutionCode={'return sumArray([1,2,3,4])'} shouldBe={10} />


			</div>
		</>
	)
}
