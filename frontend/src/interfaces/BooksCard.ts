import { BooksProps } from "./models/books";

interface BooksCardProps {
  books: BooksProps[];
}

interface BookSingleCardProps {
  book: BooksProps;
}

interface BookModalProps {
  onClose: () => void;
  book: BooksProps;
}

export type { BookSingleCardProps, BooksCardProps, BookModalProps };
