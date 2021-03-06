import { Component } from "react";
import "./app-info.css";

class AppInfo extends Component {
    render() {
        const {numberOfEmployees, quantityOnAward} = this.props 
        return (
            <div className="app-info">
                <h1>Учет сотрудников в компании N</h1>
                <h2>Общее число сотрудников: {numberOfEmployees} </h2>
                <h2>Премию получат: {quantityOnAward} </h2>
            </div>
        )
    }
}

export default AppInfo;