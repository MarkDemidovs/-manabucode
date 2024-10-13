import CodePanel from "./codePanel";
import InfoPanel from "./infoPanel";
import Nav from "../Nav";

export default function C5() {
	return (
		<>
        <Nav/>
			<div className="testPanels">
				<InfoPanel title={"Challenge 5: FizzBuzz (Single Line Output)"} description={'Write a function that takes a number as an argument and returns a single string. The string should contain numbers from 1 to the given number. For multiples of 3, include "Fizz" instead of the number. For multiples of 5, include "Buzz." For multiples of both 3 and 5, include "FizzBuzz." Each entry should be separated by a space. Include a function fizzBuzzSingleLine(n)'} difficulty={"5/5"}/>
				<CodePanel defaultExecutionCode={'return fizzBuzzSingleLine(15)'} shouldBe={"1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz"} />


			</div>
		</>
	)
}
