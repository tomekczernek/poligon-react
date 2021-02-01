function UsersFilters({filterValue, onFilterChange, onRemoveFilter}){
    return(
        <div>
        <input
          type="text"
          value={filterValue}
          onChange={onFilterChange}
        ></input>
        {filterValue && (
          <button onClick={onRemoveFilter}>Remove filter</button>
        )}
      </div>
    );
}

export default UsersFilters;