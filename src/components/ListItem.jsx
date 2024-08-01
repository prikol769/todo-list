import { useState } from "react";

const ListItem = ({ item, handleCheck, handleDelete, handleSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(item.title);

  const saveHandler = () => {
    handleSave(item.id, editedTitle);
    setIsEditing(false);
  };

  return (
    <div className="list-item">
      <input
        className="checkbox"
        type="checkbox"
        checked={item.completed}
        onChange={() => handleCheck(item.id)}
      />
      {isEditing ? (
        <>
          <input
            className="edit-input"
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <button className="save-btn" onClick={saveHandler}>
            Save
          </button>
        </>
      ) : (
        <>
          <p
            style={{ textDecoration: item.completed ? "line-through" : "none" }}
          >
            {item.title}
          </p>
          <div>
            <button className="edit-btn" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button
              className="delete-btn"
              onClick={() => handleDelete(item.id)}
              disabled={!item.completed}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
