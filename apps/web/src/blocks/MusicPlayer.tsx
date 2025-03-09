const MusicPlayer = () => {
  return (
    <div className="absolute right-10 bottom-10">
      <iframe
        sandbox="allow-scripts allow-same-origin"
        className="rounded-lg"
        src="https://open.spotify.com/embed/playlist/648aMBdljFZGgLLiTolk5H?utm_source=generator"
        width="100%"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      >
      </iframe>
    </div>
  );
};

export default MusicPlayer;
