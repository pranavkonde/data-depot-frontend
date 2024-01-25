import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Dashboard, LandingPage, LoginLayout, UploadNew } from "./Pages";
import { FileView } from "./Pages/LoginPanel";
import AuthGaurd from "./Utils/Services/AuthGaurd";
import { DisclaimerBar } from "./Containers";

function App() {
  return (
    <div className="App">
      {/* <DisclaimerBar/> */}
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<LandingPage />}></Route>
        <Route
          path="/dashboard"
          element={
            <AuthGaurd redirectTo="/">
              <LoginLayout />
            </AuthGaurd>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="upload-new" element={<UploadNew />} />
          <Route path="view-file/:id" element={<FileView />} />
        
        </Route>
      </Routes>
    </div>
  );
}

export default App;
