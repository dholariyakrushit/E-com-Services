import { Toaster } from "react-hot-toast";

import Router from "./routes/Router";
import "./assets/main.scss";

const App: React.FC = () => {
  return (
    <>
      <Toaster />
      <Router />
    </>
  );
};

export default App;
