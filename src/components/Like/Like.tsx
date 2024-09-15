import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

interface Props {
  liked: boolean;
  onClick: () => void;
}

function Like({ liked, onClick }: Props) {
  const [status, setStatus] = useState(liked);
  const toggle = () => {
    setStatus(!status);
    onClick();
  };
  if (status) {
    return (
      <AiFillHeart
        color="red"
        onClick={() => {
          toggle();
        }}
      />
    );
  } else {
    return (
      <AiOutlineHeart
        color="black"
        onClick={() => {
          toggle();
        }}
      />
    );
  }
}

export default Like;
