import React from "react";
import Button from '@chakra-ui/react';
import { useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { DELETE_POST } from "../utils/mutations";

const DeletePostButton = () => {

  const { username: userParam, postId: postIdParam } = useParams();

  // const [postId, setPostId] = useState({ _id: ''});

  const [deletePost, { error }] = useMutation(DELETE_POST);

  const handleDelete = async (event) => {
    try {
      const { data } = await deletePost({
        variables: {userParam, postIdParam}
      });
      console.log(data);
    } catch (event) {
      console.error(event);
    }
  };

  return(
    <Button onClick={handleDelete}>Delete</Button>
  );
};

export default DeletePostButton;