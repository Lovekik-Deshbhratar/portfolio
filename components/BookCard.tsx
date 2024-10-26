interface Props {
  title: string;
  author: string;
  description: string;
}

const BookCard = ({ title, author, description }: Props) => {
  return (
    <div className="flex flex-col bg-white items-center justify-center h-full text-center text-gray-700 mt-8 mb-8 shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-sm font-medium text-gray-500">by {author}</p>
      <p className="mt-4 text-sm">{description}</p>
    </div>
  );
};

export default BookCard;
