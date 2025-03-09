import { BooksCardProps } from "../../interfaces/BooksCard";
import BookSingleCard from "./BookSingleCard";

const BooksCard: React.FC<BooksCardProps> = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
      {books.map((item) => (
        <BookSingleCard key={item._id} book={item} />
      ))}
    </div>
  );
};

export default BooksCard;
