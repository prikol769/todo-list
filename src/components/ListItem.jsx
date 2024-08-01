import { useState } from "react";

const ListItem = ({ item, handleCheck, handleDelete, handleSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(item.title);

  const saveHandler = () => {
    handleSave(item.id, editedTitle);
    setIsEditing(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
      }}
    >
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => handleCheck(item.id)}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <button onClick={saveHandler}>Save</button>
        </>
      ) : (
        <>
          <p
            style={{ textDecoration: item.completed ? "line-through" : "none" }}
          >
            {item.title}
          </p>
          <div>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button
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
