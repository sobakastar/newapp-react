import PropTypes from 'prop-types';

import "./Mesage.styles.css";

export const Message = ({ author, text }) => {
  return (
    <div className="message">
      <span>{author}:</span>
      <span>{text}</span>
    </div>
  );
};

Message.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string,

}





// import React from "react";

// export class Message extends React.Component {
//   render() {
//     const { name, number, doSmth } = this.props;
//     return (
//       <h3 onClick={doSmth}>
//         I am a message: {name}, {number}
//       </h3>
//     );
//   }
// }
