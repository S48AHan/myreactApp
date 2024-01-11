import React, { useState } from "react";
import User from "./User";

function Users() {
  ////First Part
  //   const [userName, setUserName] = useState("Saber Ahmed");
  //   const [userId, setUserId] = useState(104);
  //   return (
  //     <div>
  //       <User userName={userName} userId={userId} />
  //     </div>
  //   );

  ////Second Part

  const [user, setUser] = useState({
    userName: "Saber Ahmed",
    userId: 104,
  });

  return (
    <div>
      <User user={user} />
    </div>
  );
}

export default Users;
