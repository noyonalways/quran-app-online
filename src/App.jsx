import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";

function App() {
  return (
    <div className="App font-inter dark:bg-slate-900">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
