import { useAppContext } from "../store/AppContext";
import "./MainPage.css";

function MainPage() {
  const { state, dispatch } = useAppContext();

  const text =
    state.language === "ko"
      ? "안녕하세요"
      : "Hello";

  return (
    <>
      <div
        className={`container ${
          state.darkMode ? "dark" : "light"
        }`}
      >
        <h1>{text}</h1>

        <button
          onClick={() =>
            dispatch({ type: "TOGGLE_DARK_MODE" })
          } style={{backgroundColor:"silver"}}
        >
          다크모드 변경
        </button>

        <div>
            <button
                onClick={() =>
                dispatch({
                type: "SET_LANGUAGE",
                payload: "ko",
              })
                } style={{backgroundColor:"pink"}}
            >
            한국어
          </button>

          <button
                onClick={() =>
                dispatch({
                type: "SET_LANGUAGE",
                payload: "en",
                })
                } style={{backgroundColor:"blue"}}
            >
            English(영어)
          </button>
        </div>
    </div>


      <p className="status">
        현재 {state.language === "ko" ? "한국어" : "영어"}와{" "}
        {state.darkMode
          ? "다크모드 on"
          : "다크모드 off"}
      </p>
    </>
  );
}

export default MainPage;