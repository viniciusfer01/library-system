import { useCallback, useEffect, useState } from "react";

function App() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const newBookHandler = (book) => {
    book.preventDefault();
    setBooks((prevBooks) => {
      return [...prevBooks, book];
    });
  };

  const fetchBooksHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:3001/obras");

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await JSON.parse(await response.json());

      setBooks(data);
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchBooksHandler();
  }, [fetchBooksHandler]);

  let content = <p>Loading...</p>;
  if (error) {
    content = <p>{error}</p>;
  } else if (isLoading) {
    content = <p>Loading...</p>;
  } else if (books.length > 0) {
    content = (
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h2>{book.titulo}</h2>
            <button>Deletar</button>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <h1>Library System</h1>
      {content}
      <form onSubmit={newBookHandler}>
        <label htmlFor="titulo">Nome</label>
        <input name="titulo" id="titulo" type="text" />
      </form>
    </>
  );
}

export default App;
