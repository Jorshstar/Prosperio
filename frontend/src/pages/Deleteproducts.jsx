import { useParams, useNavigate } from 'react-router-dom';
import { useDeleteProductMutation } from '../slices/products/productApiSlice';

export default function DeleteProduct() {
  const { productId } = useParams();
  const navigate = useNavigate();

  // Use the deleteProduct mutation from productApiSlice
  const [deleteProduct, { isLoading }] = useDeleteProductMutation();

  const handleDelete = async () => {
    try {
      // Execute the deleteProduct mutation
      const response = await deleteProduct(productId);

      // Check if the deletion was successful
      if (deleteProduct.fulfilled.match(response)) {
        // If deletion is successful, navigate to a success page or back to the product list.
        navigate('/dashboard/products');
      } else {
        // Handle the error and display a message to the user if needed.
        console.error('Error deleting product:', response.error);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      // Handle the error and display a message to the user if needed.
    }
  };

  return (
    <div className="flex h-full w-full items-center justify-center text-4xl text-center font-bold">
      <div>
        <p>This product is being deleted permanently.</p>
        <p>Are you sure you want to delete it?</p>
        <div className="flex items-center justify-evenly mt-4">
          <button
            className="text-white bg-red-500 hover:bg-red-300 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            type="button"
            onClick={handleDelete}
            disabled={isLoading}
          >
            Delete
          </button>
          <button
            className="text-white bg-blue-500 hover:bg-blue-300 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            type="button"
            onClick={() => navigate('/dashboard/products')}
            disabled={isLoading}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}