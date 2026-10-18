Object.defineProperty(exports, "__esModule", { value: true });
exports.getMeta = void 0;

exports.getMeta = async function ({ link, providerContext }) {
  return {
    title: link.includes("tears-of-steel") ? "Tears of Steel" : "Big Buck Bunny",
    synopsis: "Custom provider test stream running from your GitHub repository.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/800px-Big_buck_bunny_poster_big.jpg",
    imdbId: "",
    type: "movie",
    linkList: [
      {
        title: "Full Movie (1080p)",
        episodesLink: "",
        directLinks: [
          {
            title: "Play Stream",
            link: link,
            type: "movie"
          }
        ],
        quality: "1080"
      }
    ]
  };
};
