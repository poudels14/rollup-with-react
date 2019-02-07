import React from 'react';
import ReactDOM from 'react-dom';

class TestComponent extends React.Component {
  render() {
    return (
      <div>
        <span>This is test component</span>
      </div>
    );
  };
};

ReactDOM.render(<TestComponent />, document.getElementById("react"))