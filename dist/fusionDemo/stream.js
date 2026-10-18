Object.defineProperty(exports, "__esModule", { value: true });
exports.getStream = void 0;

exports.getStream = async function ({ link, type, signal, providerContext, isDownload }) {
  return [
    {
      server: "Main HLS Server",
      link: link,
      type: "m3u8",
      quality: "1080"
    }
  ];
};
