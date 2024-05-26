import { createSlice } from "@reduxjs/toolkit";
import { discoverList } from "../../components/Discover/constants";
import { sortString } from "../../helper";

const initialState = {
  isShowModalHistoryBid: false,
  arrayCards: [...discoverList],
  productDetails: null,
  arrayCardsFilteredByTitle: null,
  bidProductsList: [],
};

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setBidProductsList: (state, action) => {
      state.bidProductsList = [...state.bidProductsList, action.payload];
    },
    setProductDetails: (state, action) => {
      state.productDetails = action.payload;
      state.arrayCardsFilteredByTitle = state.arrayCards
        .filter((item) => item.title === action.payload.title)
        .slice(0, 5);
    },
    setIsShowModalHistoryBid: (state) => {
      state.isShowModalHistoryBid = !state.isShowModalHistoryBid;
    },

    setFilterByPrice: (state) => {
      state.arrayCards = state.arrayCards.sort((a, b) => a.price - b.price);
    },

    setFilterByCollections: (state) => {
      state.arrayCards = state.arrayCards.sort((a, b) =>
        sortString(a.title, b.title)
      );
    },

    setFilterById: (state) => {
      state.arrayCards = state.arrayCards.sort((a, b) =>
        sortString(a.id, b.id)
      );
    },

    setAllProducts: (state) => {
      state.arrayCards = discoverList;
    },
  },
});

export const {
  setFilterByPrice,
  setFilterByCollections,
  setAllProducts,
  setProductDetails,
  setFilterById,
  setBidProductsList,
  setIsShowModalHistoryBid,
} = ProductsSlice.actions;

export default ProductsSlice.reducer;
