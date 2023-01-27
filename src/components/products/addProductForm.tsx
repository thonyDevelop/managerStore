import { ChangeEvent, FormEvent, useState } from "react";
import { IBaseProduct } from "../../interface/IGeneralInterface";

interface IProps {
  onAddProduct: (product: IBaseProduct) => void;
}

const initProduct: IBaseProduct = {
  description: "",
  price: 0,
  store: 0,
};

const AddProductForm = (props: IProps) => {
  const [formValue, setFormValue] = useState(initProduct);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onAddProduct(formValue);
    setFormValue(initProduct);
  };

  return (
    <div>
      <h1>Add Products</h1>
      <form onSubmit={onFormSubmit}>
        <div>
          <label>Description</label>
          <input
            type="text"
            placeholder="Please enter description"
            name="description"
            value={formValue.description}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            placeholder="Please enter price"
            name="price"
            value={formValue.price}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label>Store</label>
          <input
            type="number"
            placeholder="Please enter store"
            name="store"
            value={formValue.store}
            onChange={onInputChange}
          />
        </div>
        <div>
          <button>Add new product</button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
