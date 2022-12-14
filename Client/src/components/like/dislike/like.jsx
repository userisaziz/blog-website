import React from "react";
import { useState, useReducer } from "react";
import "./like.css";
const Like = () => {
  const initialState = {
    likes: 100,
    dislikes: 5,
  };

  const appReducer = (state, action) => {
    switch (action.type) {
      case "HANDLE_LIKE":
        return {
          ...state,
          likes: state.likes + action.payload,
        };
      case "HANDLE_DISLIKE":
        return {
          ...state,
          dislikes: state.dislikes + action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(appReducer, initialState);
  const { likes, dislikes } = state;
  const [status, setStatus] = useState(null);

  const handleClickLike = () => {
    if (status === "like") {
      setStatus(null);
      dispatch({
        type: "HANDLE_LIKE",
        payload: -1,
      });
    } else {
      setStatus("like");
      if (status === "dislike") {
        dispatch({
          type: "HANDLE_DISLIKE",
          payload: -1,
        });
      }
      dispatch({
        type: "HANDLE_LIKE",
        payload: 1,
      });
    }
  };

  const handleClickDislike = () => {
    if (status === "dislike") {
      setStatus(null);
      dispatch({
        type: "HANDLE_DISLIKE",
        payload: -1,
      });
    } else {
      setStatus("dislike");
      if (status === "like") {
        dispatch({
          type: "HANDLE_LIKE",
          payload: -1,
        });
      }
      dispatch({
        type: "HANDLE_DISLIKE",
        payload: 1,
      });
    }
  };

  return (
    <div className="container">
      <button
        className={status === "like" ? "btn active" : "btn"}
        onClick={handleClickLike}
      >
        <i class="fas fa-heart">
          <span className="liked">{likes}</span>
        </i>
      </button>

      <button
        className={status === "dislike" ? "btn active" : "btn"}
        onClick={handleClickDislike}
      >
        <i class="fas fa-thumbs-up">
          <span className="liked">{dislikes}</span>
        </i>
      </button>
    </div>
  );
};

export default Like;
