import Nav from "./Nav";
import Panel from "./Panel";

export default function App() {
  return ( <>
    <Nav />

    <div id="pageLand">
      <h5 className="smallTitle">Welcome to</h5>
      <h3 className="bigTitle">ManabuCode</h3>

      <h3 className="bigTitle" id="newTitle">Newest Challenges</h3>
    
      <div id="cWindow">
        <div id="row1C">
			<Panel title={'Challenge 1'} link={"C1"} difficulty={"1/5"} description={"Write a function that takes a string as input and returns the string reversed."}/>
			<Panel title={'Challenge 2'}  link={"C2"} difficulty={"2/5"} description={"Create a function that takes an array of numbers and returns the sum of all the numbers in the array."}/>
			<Panel title={'Challenge 3'} link={"C3"} difficulty={"3/5"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus tellus vitae ipsum ultrices, id facilisis urna ultrices. Pellentesque vehicula dignissim magna vitae rutrum. "}/>

		</div>

        <div id="row2C">
			<Panel title={'Challenge 4'} link={"C4"} difficulty={"4/5"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus tellus vitae ipsum ultrices, id facilisis urna ultrices. Pellentesque vehicula dignissim magna vitae rutrum. "}/>
			<Panel title={'Challenge 5'} link={"C5"} difficulty={"5/5"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus tellus vitae ipsum ultrices, id facilisis urna ultrices. Pellentesque vehicula dignissim magna vitae rutrum. "}/>
			<Panel title={'Submit Challange'} difficulty={""} description={"Click here to submit a custom challange."}/>

		</div>

      </div>
    </div>
    </>
  )
}
