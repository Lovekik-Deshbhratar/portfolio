interface Props {
  title: string;
  artist: string;
  genre: string;
}

const MusicCard = ({ title, artist, genre }: Props) => {
  return (
    <div className="flex flex-col bg-white items-center justify-center h-full text-center text-gray-700 mt-8 mb-8 shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-sm font-medium text-gray-500">by {artist}</p>
      <p className="mt-4 text-sm">{genre}</p>
    </div>
  );
};

export default MusicCard;
