import { IProduct } from "../../interface/IGeneralInterface";

interface IProps {
  products: Array<IProduct>;
  onEdit: (product: IProduct) => void;
  onDelete: (product: IProduct) => void;
}
const ProductTable = (props: IProps) => {
  return (
    <div>
      <h1>View products</h1>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Price</th>
            <th>Store</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.products.length > 0 ? (
            props.products.map((product: IProduct) => (
              <tr key={product.id}>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.store}</td>
                <td>
                  <button
                    onClick={() => {
                      console.log("edit");
                    }}
                  >
                    edit
                  </button>
                  <button
                    onClick={() => {
                      console.log("delete");
                    }}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>no products</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
