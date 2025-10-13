import { useState, useEffect } from "react";
import "../style.css";

export const HomePagination = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const handleFetchProducts = async () => {
      setIsLoading(true);

      try {
        const response = await fetch("https://dummyjson.com/products", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data?.products);
        setProducts(data?.products);
      } catch (err: any) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    handleFetchProducts();
  }, []);

  const handlePagination = (selectedPage: number) => {
    if (selectedPage === 1) {
      return;
    }
    if (selectedPage > Math.floor(products.length / 10)) {
      return;
    }
    setPage(selectedPage);
  };

  return (
    <div>
      <div className="products">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          products.slice((page - 1) * 10, page * 10)?.map((product: any) => (
            <div key={product?.id} className="product">
              <img src={product?.thumbnail} alt={product?.title} className="" />
              <h5>{product?.title}</h5>
            </div>
          ))
        )}
      </div>

      <div className="products__pagination">
        <button
          className="pagination__btn"
          disabled={page === 1}
          onClick={() => handlePagination(page - 1)}
        >
          Prev
        </button>
        {[...new Array(Math.floor(products?.length / 10))].map((_, index) => (
          <button
            className={
              index + 1 === page
                ? "pagination__btn pagination__btn--active"
                : "pagination__btn"
            }
            key={index}
            onClick={() => setPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="pagination__btn"
          disabled={page === Math.floor(products.length / 10)}
          onClick={() => handlePagination(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
