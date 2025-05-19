import ThreadList from "../components/ThreadList";

export default {
  component: ThreadList,
  title: "ThreadList",
  tags: ["autodocs"],
};

const mockThreads = [
  {
    id: "thread-1",
    title: "Thread Pertama",
    body: "Ini adalah thread pertama",
    category: "General",
    createdAt: "2021-06-21T07:00:00.000Z",
    ownerId: "users-1",
    upVotesBy: [],
    downVotesBy: [],
    totalComments: 0,
    user: {
      avatar:
        "https://ui-avatars.com/api/?name=Dimas Saputra&background=random",
      email: "dimas@dicoding.com",
      id: "user-mQhLzINW_w5TxxYf",
      name: "Dimas Saputra",
    },
  },
  {
    id: "thread-2",
    title: "Thread Kedua",
    body: "Ini adalah thread kedua",
    category: "General",
    createdAt: "2021-06-21T07:00:00.000Z",
    ownerId: "users-2",
    upVotesBy: [],
    downVotesBy: [],
    totalComments: 0,
    user: {
      avatar: "https://ui-avatars.com/api/?name=Dicoding&background=random",
      email: "admin@dicoding.com",
      id: "user-aROWej8yYA1sOfHN",
      name: "Dicoding",
    },
  },
];

export const Default = {
  args: {
    threads: mockThreads,
  },
};
