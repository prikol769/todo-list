export const itemReducer = (state, { type, payload }) => {
  switch (type) {
    case "addItem": {
      return [
        {
          id: Date.now(),
          userId: payload.userId,
          title: payload.title,
          completed: payload.completed,
        },
        ...state,
      ];
    }
    case "deleteItem": {
      return state.filter((item) => item.id !== payload.id);
    }
    case "saveItem": {
      return state.map((item) =>
        item.id === payload.id ? { ...item, title: payload.title } : item
      );
    }
    case "toggleItem": {
      return state.map((item) =>
        item.id === payload.id ? { ...item, completed: !item.completed } : item
      );
    }
    default: {
      throw Error("Unknown Action: " + type);
    }
  }
};
