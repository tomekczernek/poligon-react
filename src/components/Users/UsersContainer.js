import PropTypes from 'prop-types';

import UserRow from './UserRow';

function UsersContainer({filtersApplied, users, onRemove, onChange}){
    // const {filtersApplied, users, onRemove} = props; - starszy zapis
    const results = users.length;

    return(
        <div className="UsersContainer">
            {filtersApplied && !results && <p>No result.</p>}
            {filtersApplied && results > 0 && <p>{results} Result found.</p>}

            {users.map((elem) => (
                <UserRow key={elem.id} user={elem} onRemove={onRemove} onChange={onChange} />
            ))}
        </div>
    );
}

UsersContainer.propTypes = {
    filtersApplied: PropTypes.bool.isRequired,
    users: PropTypes.array.isRequired,
    onRemove: PropTypes.func
};

export default UsersContainer;