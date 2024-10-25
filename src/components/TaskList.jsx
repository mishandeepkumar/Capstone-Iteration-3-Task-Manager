// import React from 'react';
import PropTypes from 'prop-types';

const TaskList = ({ tasks }) => {
  return (
    <div>
      <h2>Your Tasks</h2>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TaskList;
