import { useState } from "react";
import { add } from "../../todoReducer";
import { useDispatch } from "react-redux";

function ToDoForm() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <form>
        <input
          value={value}
          onInput={(e) => {
            setValue(e.target.value);
          }}
          type="text"
          className="form-control"
        />
        <button
          type="submit"
          onClick={() => {
            dispatch(add(value));
          }}
          className="float-end mt-2 btn btn-success"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default ToDoForm;
