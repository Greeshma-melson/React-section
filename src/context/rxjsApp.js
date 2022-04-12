import { Link } from "react-router-dom";
import Leftside from "./Leftside";
import Rightside from "./Rightside";

export default function RxjsApp() {
    return (
        <div className="container">
            <div><Link to="/home">home</Link></div>
            <div className="row">
            <div className="col-6" id="left-side"><Leftside /></div>
            <div className="col-6" id="left-side"><Rightside /></div>
            </div>
        </div>
    );
}