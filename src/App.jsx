import { RegForm } from "./components/Login-form";
import { IconCam } from "./components/icons";

function App() {
  return (
    <>
      <div className="h-screen flex justify-center items-center ">
        <div>
          <RegForm />
          <div className="-z-10 absolute bottom-0 left-0">
            <IconCam
              style={{ opacity: 0.2, transform: "translate(-30%, 40%)" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
