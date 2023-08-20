import React, {useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import MessageBoard from "./components/MessageBoard";


const AppLayout = () => {
  const [userName, setUserName] = useState();


  return (
  <>
     <MessageBoard />
  </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
