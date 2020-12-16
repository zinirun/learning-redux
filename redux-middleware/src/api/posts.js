// Fake API

const sleep = (n) => new Promise((resolve, reject) => setTimeout(resolve, n));

// {id, title, body}

const posts = [
  {
    id: 1,
    title: "redux 미들웨어 배우기1",
    body: "redux 미들웨어를 만들어봐요1",
  },

  {
    id: 2,
    title: "redux 미들웨어 배우기2",
    body: "redux 미들웨어를 만들어봐요2",
  },

  {
    id: 3,
    title: "redux 미들웨어 배우기3",
    body: "redux 미들웨어를 만들어봐요3",
  },
];

export const getPosts = async () => {
  await sleep(500);
  return posts;
};

export const getPostById = async (id) => {
  await sleep(500);
  return posts.find((post) => post.id === id);
};
