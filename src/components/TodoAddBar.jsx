import Button from "./Button";
import Input from "./Input";

function TodoAddBar({ value, inputRef, onChange, onAdd }) {
  return (
    <div>
      <Input
        value={value}
        inputRef={inputRef}
        onChange={onChange}
        onAdd={onAdd}
        placeholder="할 일을 입력하세요."
      />
      <Button text="추가" onAdd={onAdd} />
    </div>
  );
}

export default TodoAddBar;
