import React from "react";
import Proptypes from "prop-types";

// console.log(Proptypes);

function User(props) {
  console.log(props.user);
  return (
    <>
      {/* <div>{props.userName}</div>
      <div>{props.userId}</div> */}
      <h1>{props.user.userName}</h1>
      <h1>{props.user.userId}</h1>
    </>
  );
}

User.propTypes = {
  //key:value
  //   userName: Proptypes.string,
  //   userId: Proptypes.number,

  //object
  user: Proptypes.shape({
    userName: Proptypes.string,
    userId: Proptypes.number,
  }),
};

// User.defaultProps = {
//   userName: "default name",
//   userId: 0,
// };

export default User;
