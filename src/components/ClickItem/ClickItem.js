import React from "react";
import "./ClickItem.css";

const ClickItem = props => (
	<div className="clickItem">
		<div className="img-container">
			<a onClick={() => props.selectCharacter(props.reploid)} 
				className={props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
			>
				<img alt={props.reploid} src={props.image} />
			</a>
		</div>
	</div>
);

export default ClickItem;
