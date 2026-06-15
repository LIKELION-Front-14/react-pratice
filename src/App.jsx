import MainPage from "./components/MainPage";
import { AppProvider } from "./store/AppContext";

function App() {
  return (
    <div>
      <AppProvider>
        <MainPage />
      </AppProvider>
    </div>
  );
}

export default App;