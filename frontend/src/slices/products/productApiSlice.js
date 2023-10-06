import { apiSlice } from '../apiSlice';
const PRODUCTS_URL = '/api/products';

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `${PRODUCTS_URL}`,
      // Define other options like `transformResponse` here if needed.
    }),
    getProductById: builder.query({
      query: (productId) => `${PRODUCTS_URL}/${productId}`,
    }),
    createProduct: builder.mutation({
      query: (newProductData) => ({
        url: `${PRODUCTS_URL}`,
        method: 'POST',
        body: newProductData,
      }),
    }),
    updateProduct: builder.mutation({
      query: ({ productId, updatedProductData }) => ({
        url: `${PRODUCTS_URL}/${productId}`,
        method: 'PUT',
        body: updatedProductData,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApiSlice;