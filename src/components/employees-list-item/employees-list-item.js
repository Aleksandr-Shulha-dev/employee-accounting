import { Component } from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            salary: this.props.salary
        }
    }

    handleSalaryChange = (e) => {
        const salary = parseInt(e.target.value)
        this.setState({salary})
        this.props.salaryChange(salary);
    }

    render() {
        const {name, increase, rise, onRemoveItem, onIncrease, onRise} = this.props;

        let classList = "list-group-item d-flex justify-content-between";
        if(rise) {
            classList += " like"
        }

        return (
            <li className={increase ? classList + " increase": classList}>
                <span className="list-group-item-label"
                        onClick={onRise}>
                    {name}
                </span>
                <input 
                    type="text" 
                    className="list-group-item-input" 
                    value={this.state.salary + "$"}
                    onChange={this.handleSalaryChange}
                />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        onClick={onIncrease}
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>
                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onRemoveItem}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;