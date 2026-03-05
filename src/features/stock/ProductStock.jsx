import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import products from "../../data/products.json";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useMemo } from "react";
import { usePagination } from "../../hooks/usePagination";
import TablePagination from "../../components/TablePagination";

const ProductStock = () => {
  const stockData = useMemo(
    () =>
      products.categories.flatMap((cat) =>
        cat.products.map((product) => ({ ...product, category: cat.name })),
      ),
    [],
  );

  const { pageData, startIndex, nextPage, prevPage, endOfPage, totalItems } =
    usePagination(stockData, 7);

  return (
    <main id="stock" className="dashboard-main">
      <div className="flex flex-col md:flex-row gap-2 justify-between items-center mb-6">
        <h1 className="page-head">Product Stock</h1>
        <input
          type="search"
          name="stock-search"
          id="stock-search"
          placeholder="Search product name"
          className="px-4 py-2 bg-input rounded-full w-full max-w-[20rem] focus:outline-2 focus:outline-primary"
        />
      </div>
      {/* table area */}
      <div className="overflow-x-auto bg-card rounded-xl border border-border">
        <table className="w-full text-left text-text">
          <thead className="bg-table-head text-xs uppercase font-medium text-text">
            <tr>
              <th scope="col" className="px-6 py-4">
                Image
              </th>
              <th scope="col" className="px-6 py-4">
                Product Name
              </th>
              <th scope="col" className="px-6 py-4">
                Category
              </th>
              <th scope="col" className="px-6 py-4">
                Price
              </th>
              <th scope="col" className="px-6 py-4">
                Piece
              </th>
              <th scope="col" className="px-6 py-4">
                Available Color
              </th>
              <th scope="col" className="px-6 py-4">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-table-border">
            {pageData.map((product) => (
              <tr
                key={product.id}
                className="bg-alt hover:bg-table-hover transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-alt">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </td>
                <td className="px-6 py-4 font-medium text-text">
                  {product.name}
                </td>
                <td className="px-6 py-4">{product.category}</td>
                <td className="px-6 py-4">${product.price}</td>
                <td className="px-6 py-4">{product.stock}</td>
                <td className="px-6 py-4">
                  <div className="flex -space-x-2">
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-6 h-6 rounded-full border-2 border-card"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button className="p-2 rounded-lg bg-alt hover:bg-border text-text transition-colors">
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                    <button className="p-2 rounded-lg bg-alt hover:bg-danger/20 text-text hover:text-danger transition-colors">
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <TablePagination
        startIndex={startIndex}
        endOfPage={endOfPage}
        totalItems={totalItems}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </main>
  );
};

export default ProductStock;
