export default function Button(props) {
  // props = { color: "red", text: "삭제" } 형태로 전달됨
  return (
    <button style={{ backgroundColor: props.color, color: "white" }}>
      {props.text}
    </button>
  );
}
