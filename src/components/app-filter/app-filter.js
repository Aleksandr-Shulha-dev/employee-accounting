import "./app-filter.css";

const AppFilter = ({onChangeParam, param}) => {
    const btnData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'onRise', label: 'На повышение'},
        {name: 'salaryMore', label: 'З/П больше 1000$'},
    ];
    const btns = btnData.map(({name, label}) => {
        const active = param === name;
        const clazz = active ? 'btn-light': 'btn-outline-light'

        return (
            <button type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => onChangeParam(name)}>
                    {label}
            </button>
        )
    })
    return (
        <div className="btn-group">
            {btns}
        </div>
    )
}

export default AppFilter;