import React from "react";
import PostContainer from "../containers/PostContainer";

export default function PostPage({ match }) {
  const { id } = match.params;
  const postId = parseInt(id);

  return (
    <div>
      <PostContainer postId={postId} />
    </div>
  );
}
