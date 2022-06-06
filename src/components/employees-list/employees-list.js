import { Component } from "react";
import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

class EmployeesList extends Component {
    render() {
        const {data, onChangeData, onIncrease, salaryChange} = this.props
        return (
            <ul className="app-list list-group">
                {
                    data.map( (employee, ind) => (
                        <EmployeesListItem {...employee} 
                        key={ind} 
                        onRemoveItem={() => onChangeData(ind)} 
                        onIncrease={() => onIncrease(ind, "increase")}
                        onRise={() => onIncrease(ind, "rise")}
                        salaryChange={(salary) => salaryChange(ind, salary)}
                        />
                    ))
                }
            </ul>
        )
    }
}

export default EmployeesList;