import { useState, useReducer } from "react";
import ListItem from "./ListItem";
import { initialState } from "../data/data";
import { itemReducer } from "../reducers/ItemReducer";

const ListItems = () => {
  const [items, dispatch] = useReducer(itemReducer, initialState);
  const [newItemText, setNewItemText] = useState("");

  const addItemHandler = () => {
    dispatch({
      type: "addItem",
      payload: { userId: 1, title: newItemText, completed: false },
    });
    setNewItemText("");
  };

  return (
    <div className="list-items-wrapper">
      <div className="input-container">
        <input
          className="add-input"
          type="text"
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
          placeholder="Add task"
        />
        <button onClick={addItemHandler}>Add</button>
      </div>
      {items.length === 0 ? (
        <p>There are no items in the list.</p>
      ) : (
        items.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            handleCheck={(id) =>
              dispatch({ type: "toggleItem", payload: { id } })
            }
            handleDelete={(id) =>
              dispatch({ type: "deleteItem", payload: { id } })
            }
            handleSave={(id, title) =>
              dispatch({ type: "saveItem", payload: { id, title } })
            }
          />
        ))
      )}
      {}
    </div>
  );
};

export default ListItems;
