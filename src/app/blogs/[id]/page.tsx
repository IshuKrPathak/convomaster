import React from "react";

type Props = {
  params: { id: string };
};
const PostPage = ({ params }: Props) => {
  const post = await onGetBlogPost(params.id);

  return <div>PostPage</div>;
};

export default PostPage;
