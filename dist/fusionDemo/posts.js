Object.defineProperty(exports, "__esModule", { value: true });
exports.getSearchPosts = exports.getPosts = void 0;

const sampleCatalog = [
  {
    title: "Big Buck Bunny (Open Movie)",
    link: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/800px-Big_buck_bunny_poster_big.jpg"
  },
  {
    title: "Tears of Steel (Sci-Fi Short)",
    link: "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Tears_of_Steel_poster.jpg/800px-Tears_of_Steel_poster.jpg"
  }
];

exports.getPosts = async function ({ filter, page, providerValue, signal, providerContext }) {
  if (page > 1) return [];
  return sampleCatalog;
};

exports.getSearchPosts = async function ({ searchQuery, page, providerValue, signal, providerContext }) {
  if (page > 1) return [];
  return sampleCatalog.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
};
