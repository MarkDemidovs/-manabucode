import CodePanel from "./codePanel";
import InfoPanel from "./infoPanel";
import ResultPanel from "./resultPanel";

export default function C1() {
	return (
		<>
			<div className="testPanels">
				<InfoPanel title={"idk"}/>
				<CodePanel/>
				<ResultPanel/>
			</div>
		</>
	)
}
