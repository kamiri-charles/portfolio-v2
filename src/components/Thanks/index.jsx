import { useNavigate } from "react-router-dom";
import "./styles.scss";

const Thanks = () => {
	const nav = useNavigate();
	return (
		<div id="thanks">
			<div className="message">
				Email sent successfully. Thanks for visiting my portfolio page.
				<br />
				<br />
				<br />
				<br />
				<button className="back-to-home" onClick={() => nav("/")}>Home</button>
			</div>
		</div>
	);
};

export default Thanks;
