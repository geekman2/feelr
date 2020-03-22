import React, { Component } from "react";

class FeelingDetail extends Component{
	render(){
		return(
			<div>
				<h2>Angry</h2>
				<form>
					<input placeholder="Specific Emotion"></input>
					<input placeholder="Micro Emotion"></input>
					<textarea placeholder="Notes"></textarea>
				</form>
			</div>
		);
	}
}

export default FeelingDetail;