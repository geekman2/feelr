import React, { Component } from "react";

class FeelingBasic extends Component{
	render(){
		const basicFeelings = {
				'up': ['happy', 'powerful', 'excited'],
				'down': ['angry', 'stressed', 'sad', 'anxious'],
				'idk': ['confused', 'surprised']
			}

		const options = basicFeelings.down.map((feeling) => {
			return(
					<button>{feeling}</button>
			)
		});

		return (
			<ul>
				{options}
			</ul>
		);
	}
}

export default FeelingBasic;