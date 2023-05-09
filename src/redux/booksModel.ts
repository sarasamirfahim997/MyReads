type images = {
  smallThumbnail: string;
  thumbnail: string;
};
export type shelf = string;

export interface Book {
  id: string;
  authors: string[];
  title: string;
  description: string;
  imageLinks: images;
  shelf: shelf;
  subtitle: string;
}

export interface updatedBookType {
  book: Book;
  shelf: shelf;
}

export interface responseInterface {
  currentlyReading: shelf;
  read: shelf;
  wantToRead: shelf;
  book: updatedBookType;
}

export interface BooksState {
  loading: boolean;
  data: Book[];
  searchResults: Book[];
}
export const SHELVES = [
  {
    title: "Currently Reading",
    id: "currentlyReading",
  },
  {
    title: "Want To Read",
    id: "wantToRead",
  },
  {
    title: "Read",
    id: "read",
  },
];
