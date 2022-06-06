import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'John Smith', salary: 1000, increase: false, rise: false},
        {name: 'Marry Jany', salary: 1200, increase: true, rise: false},
        {name: 'Alex Shulha', salary: 2000, increase: true, rise: false},
        {name: 'John Sina', salary: 800, increase: false, rise: false}
      ],
      term: '',
      param: 'all'
    }
  }

  addEmployee = (employee) => {
    this.setState({
      data: this.state.data.concat({...employee, increase: false, rise: false})
    })}

  removeEmployee = (id) => {
    this.setState(state => ({data: state.data.filter((item, ind) => ind !== id)}))
  }

  onIncrease = (id, prop) => {
    this.setState(({data}) => {
      let newData = data.map((item, ind) => {
        return (ind === id) ? {...item, [prop]: !item[prop]}: item
      })
      return {
        data: newData
      }
    })
  }

  searchEmp = (items, term) => {
    if(term.length === 0) {
      return items
    }
    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term})
  }

  filtration = (items, param) => {
    switch(param) {
      case 'onRise':
        return items.filter(item => item.rise);
      case 'salaryMore': 
        return items.filter(item => item.salary > 1000)
      default:
        return items;
    }
  }

  onChangeParam = (param) => {
    this.setState({param})
  }

  handleSalaryChange = (id, salary) => {
    this.setState(({data}) => {
      let newData = data.map((item, ind) => {
        return (id === ind) ? {...item, salary} : item
      })
      return {
        data: newData
      }
    })
  }
  
  render() {
    const {data, term, param} = this.state;
    let employeesOnAaward = data.filter(item => item.increase).map(item => item.name);
    const visibleData = this.filtration(this.searchEmp(data, term), param);

    return (
      <div className="app">
          <AppInfo numberOfEmployees={data.length} quantityOnAward={employeesOnAaward.join(', ')} />
          <div className="search-panel">
              <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
              <AppFilter onChangeParam={this.onChangeParam} param={param}/>
          </div>
          
          <EmployeesList 
            data={visibleData} 
            onChangeData={this.removeEmployee} 
            onIncrease={this.onIncrease}
            salaryChange={this.handleSalaryChange}
          />
          <EmployeesAddForm onChangeData={this.addEmployee}/>
      </div>
    );
  }
}

export default App;
