import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  AllProductsResponse,
  BrandResponse,
  CategoriesResponse,
  ColorResponse,
  DeleteProductRequest,
  MessageResponse,
  NewProductRequest,
  ProductResponse,
  SearchProductsRequest,
  SearchProductsResponse,
  SizeResponse,
  StyleResponse,
  UpdateProductRequest,
  UserResponse,
} from "../../types/api-types";
import { User } from "../../types/types";
import axios from "axios";
export const productAPI = createApi({
  reducerPath: "productApi",
  // / api / v1 / product / new
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/api/v1/product/`,
  }),
  tagTypes: ["product"],
  endpoints: (builder) => ({


    latestProducts: builder.query<AllProductsResponse, string>({
      query: () => "latest",
      // providesTags: ["product"],
      keepUnusedDataFor: 0,
    }),

    allProducts: builder.query<AllProductsResponse, string>({
      query: (id) => `admin-products?id=${id}`,
      providesTags: ["product"],
    }),

    categories: builder.query<CategoriesResponse, string>({
      query: () => `categories`,
      providesTags: ["product"],
    }),
    size: builder.query<SizeResponse, string>({
      query: () => `size`,
      providesTags: ["product"],
    }),
    color: builder.query<ColorResponse, string>({
      query: () => `color`,
      providesTags: ["product"],
    }),
    brand: builder.query<BrandResponse, string>({
      query: () => `brand`,
      providesTags: ["product"],
    }),
    style: builder.query<StyleResponse, string>({
      query: () => `style`,
      providesTags: ["product"],
    }),

    searchProducts: builder.query<
      SearchProductsResponse,
      SearchProductsRequest
    >({
      query: ({
        price,
        search,
        sort,
        category,
        page,
        color,
        brand,
        style,
        size,
      }) => {
        let base = `all?search=${search}&page=${page}`;

        if (price) base += `&price=${price}`;
        if (sort) base += `&sort=${sort}`;
        if (category) base += `&category=${category}`;
        if (color) base += `&color=${color}`;
        if (brand) base += `&brand=${brand}`;
        if (style) base += `&style=${style}`;
        if (size) base += `&size=${size}`;

        return base;
      },
      providesTags: ["product"],
    }),


    productDetails: builder.query<ProductResponse, string>({
      query: (id) => id,
      providesTags: ["product"],
    }),

    newProduct: builder.mutation<MessageResponse, NewProductRequest>({
      query: ({ formData, id }) => ({
        url: `new?id=${id}`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["product"],
    }),


    
    updateProduct: builder.mutation<MessageResponse, UpdateProductRequest>({
      query: ({ formData, userId, productId }) => ({
        url: `${productId}?id=${userId}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["product"],
    }),

    deleteProduct: builder.mutation<MessageResponse, DeleteProductRequest>({
      query: ({ userId, productId }) => ({
        url: `${productId}?id=${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),

  }),
});

export const {
  useLatestProductsQuery,
  useAllProductsQuery,
  useCategoriesQuery,
  useSizeQuery,
  useColorQuery,
  useBrandQuery,
  useStyleQuery,
  useSearchProductsQuery,
  useNewProductMutation,
  useProductDetailsQuery,
  useDeleteProductMutation,
  useUpdateProductMutation
} = productAPI;
