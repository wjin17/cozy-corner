const MusicPlayer = () => {
  return (
    <div className="absolute bottom-24 left-6 md:left-10 lg:right-10 lg:bottom-10 lg:left-auto">
      <iframe
        sandbox="allow-scripts allow-same-origin"
        className="rounded-lg"
        src="https://open.spotify.com/embed/playlist/648aMBdljFZGgLLiTolk5H?utm_source=generator"
        width="100%"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
};

export default MusicPlayer;
