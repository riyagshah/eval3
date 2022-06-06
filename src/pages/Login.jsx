// eslint-disable-next-line
import React, { useState, useContext } from "react";
// eslint-disable-next-line
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const [loginCreds, setLoginCreds] = useState({});
  const { login } = useContext(AuthContext);
    const hanldeChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };
    const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };
 
  return (
    <form 
    onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "auto",
              maxWidth: "200px",
              gap: "10px",
            }}
    >
    <div>
      <input data-cy="login-email"    name="email"
          type="email"
          placeholder="Enter Email"
          onChange={hanldeChange}
 />
      <input data-cy="login-password"      name="password"
          type="password"
          placeholder="Enter Password..."
          onChange={hanldeChange} />
      <button data-cy="login-submit"  type="submit">Login</button>
    </div>
    </form>
  );
};

export default Login;




//   return (
//     <div>
//       Login
//       <form
//         onSubmit={handleSubmit}
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           margin: "auto",
//           maxWidth: "200px",
//           gap: "10px",
//         }}
//       >
//         <input
//           name="email"
//           type="email"
//           placeholder="Enter Email"
//           onChange={hanldeChange}
//         />
// //         <input
//           name="password"
//           type="password"
//           placeholder="Enter Password..."
//           onChange={hanldeChange}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;