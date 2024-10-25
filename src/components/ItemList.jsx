import PropTypes from 'prop-types';

const ItemList = ({ items, toggleComplete, deleteTask }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
          <span>{item.name} (Priority: {item.priority})</span>
          <button onClick={() => toggleComplete(item.id)}>
            {item.completed ? 'Undo' : 'Complete'}
          </button>
          <button onClick={() => deleteTask(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

// PropTypes validation
ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default ItemList;
