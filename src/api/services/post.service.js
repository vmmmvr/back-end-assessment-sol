

const getPostService = async () => {
    const posts = [
        {
          id: 1,
          author: "Rylee Paul",
          authorId: 9,
          likes: 960,
          popularity: 0.13,
          reads: 50361,
          tags: ["tech", "health"],
        },
        {
          id: 1,
          author: "Rylee Paul",
          authorId: 9,
          likes: 60,
          popularity: 0.1,
          reads: 50361,
          tags: ["tech"],
        },
        {
          id: 1,
          author: "Rylee Paul",
          authorId: 9,
          likes: 90,
          popularity: 0.3,
          reads: 50361,
          tags: ["tech", "anime"],
        },
      ];

      return {posts};
}

module.exports = {
    getPostService
}