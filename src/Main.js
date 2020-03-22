import React, { Component } from "react";
import {
	Route,
	NavLink,
	HashRouter
} from "react-router-dom";
import UpDown from "./UpDown"
import FeelingBasic from "./FeelingBasic"
import FeelingDetail from "./FeelingDetail"
import Stats from "./Stats"
import "./index.css"

class Main extends Component {
	render() {
		return (
			<HashRouter>
				<div className="container">
					<div className="header">
						<button><NavLink to="/updown">UpDown</NavLink></button>
						<button><NavLink to="/feelingbasic">Feeling Basic</NavLink></button>
						<button><NavLink to="/feelingdetail">Feeling Detail</NavLink></button>
					</div>
					<div className="content">
						<Route path="/updown" component={UpDown}/>
						<Route path="/feelingbasic" component={FeelingBasic}/>
						<Route path="/feelingdetail" component={FeelingDetail}/>
						<Route path="/stats" component={Stats}/>
					</div>
					<div className="footer">
						<button>Finish</button>
					</div>
				</div>
			</HashRouter>

		)
	}
}

export default Main;