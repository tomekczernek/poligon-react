import { useState, useEffect } from "react";
import { UsersContainer, UsersFilters } from "../../components/Users";

import api from "../../api";
import { objectToArray } from "../../utils";

import './styles.css';

function Users() {
  const [filterUsers, setFilterUsers] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [filtersApplied, setFilterApplied] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [selectedUser, setSelectedUsers] = useState(null);

  useEffect(() => {
    api.get("/users").then((response) => {
      const users = objectToArray(response.data);
      setUsers(users);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const currentFilterUsers = users.filter(
      (elem) => elem.name.toLowerCase() === filterValue.toLowerCase()
    );
    setFilterUsers(currentFilterUsers);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterValue]);

  function handleInputFilterValue(event) {
    const nameValue = event.target.value;
    if (nameValue !== "") {
      setFilterValue(nameValue);
      setFilterApplied(true);
    } else {
      setFilterApplied(false);
    }
  }

  const handleRemoveFilter = () => {
    setFilterValue("");
    setFilterApplied(false);
  };

  const showIndicator = () => {
    // {isLoading ? <h4>Loading...</h4> : null}
    // {isLoading && <h4>Loading...</h4>}
    if (isLoading) {
      return <h4>Loading...</h4>;
    }
    return null;
  };

  const handleRemove = (event, id) => {
    console.log("id: ", id);
  };

  const handleSelectedUser = (user) => (event) =>{
      console.log(event.target.checked);
      console.log(user);
      setSelectedUsers(user);
  };

  const usersToRender = filtersApplied ? filterUsers : users;
  return (
    <div className="users">
      {showIndicator()}

      <UsersFilters
        filterValue={filterValue}
        onFilterChange={handleInputFilterValue}
        onRemoveFilter={handleRemoveFilter}
      />

      <UsersContainer
        filtersApplied={filtersApplied}
        users={usersToRender}
        onRemove={handleRemove}
        onChange={handleSelectedUser}
      />
    </div>
  );
}

export default Users;
