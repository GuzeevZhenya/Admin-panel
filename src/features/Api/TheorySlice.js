import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const mealDbApiKey = "1"; // Free API key for TheMealDB

export const recipeSlice = createApi({
  reducerPath: "recipeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.themealdb.com/api/json/v1/",
  }),
  endpoints: (builder) => ({
    // Получение списка случайных рецептов
    getRandomRecipes: builder.query({
      query: () => `${mealDbApiKey}/random.php`,
      transformResponse: (response) => response.meals, // Преобразуем данные в массив рецептов
      providesTags: ["Recipe"],
    }),

    // Получение рецепта по ID
    getRecipeById: builder.query({
      query: (id) => `${mealDbApiKey}/lookup.php?i=${id}`,
      transformResponse: (response) => response.meals?.[0], // Возвращаем первый рецепт из массива
      providesTags: ["Recipe"],
    }),

    // Поиск рецептов по категории
    getRecipesByCategory: builder.query({
      query: (category) => `${mealDbApiKey}/filter.php?c=${category}`,
      transformResponse: (response) => response.meals, // Преобразуем данные в массив рецептов
      providesTags: ["Recipe"],
    }),
  }),
});

// Экспорт хуков
export const {
  useGetRandomRecipesQuery,
  useGetRecipeByIdQuery,
  useGetRecipesByCategoryQuery,
} = recipeSlice;
