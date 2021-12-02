
import axios from 'axios';
import * as actions from '../constants/productsConstants';

const backendUrl = 'http://localhost:2000';

export const getProducts = () => async (dispatch) => {

    try {
        console.log("Enter getProducts in axios ");
        const { data } = await axios.get(`${backendUrl}/newProduct/getProducts`);
        console.log("Response in Product Actions ");
        console.log(data);
        dispatch({ type: actions.GET_PRODUCT_SUCCESS, payload: data });
      

    } catch (error) {
        console.log("Error while getProducts");
        dispatch({ type: actions.GET_PRODUCT_FAILURE, payload: error.response });
    }
};

export const getProductDetails = (_id) => async (dispatch)=>{
    try {
        console.log("Enter ProductDetails in axios ");
        const { data } = await axios.get(`${backendUrl}/newProduct/${_id}`);
        console.log("Response in Product Actions ");
        console.log(data);
        dispatch({ type: actions.GET_PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        console.log("Error while getProductDetails");
        dispatch({ type: actions.GET_PRODUCT_DETAILS_FAILURE, payload: error.response });
    }
}

export const addProductDetails = (productData) => async (dispatch)=>{
    try {
       
        //const { data } = await axios.post(`${backendUrl}/newProduct/add`, productData);
        const Product = await axios({
            method: "POST",
            url: `${backendUrl}/newProduct/add`,
            data: { productData },
          });
       
        dispatch({ type: actions.ADD_PRODUCT_SUCCESS, payload: Product.data });
    } catch (error) {
        console.log("Error while addProduct");
        dispatch({ type: actions.ADD_PRODUCT_FAILURE, payload: error});
    }
}

export const getProductsofbusiness = () => async (dispatch) => {

    try {
        console.log("Enter getProducts in axios ");
        const products = await axios.get(`${backendUrl}/newProduct/business/getProductsofbusiness`);
        console.log("Response in Product Actions ");
        console.log(products);
       return dispatch({ type: actions.GET_PRODUCTS_OF_BUSINESS_SUCCESS, payload: products.data });
      

    } catch (error) {
        console.log("Error while getProducts");
        return dispatch({ type: actions.GET_PRODUCTS_OF_BUSINESS_FAILURE, payload: error.response });
    }
};

export const deleteProductsofbusiness = (productIDs) => async (dispatch) => {

    try {
        console.log(productIDs);
        var payloaddata = {
            product_id_list:productIDs
        };
        console.log("Enter deleteProducts in axios ");
        const products = await axios({
            method: "DELETE",
            url: `${backendUrl}/newProduct/business/deleteProductsofbusiness`,
            data: payloaddata,
          });
        console.log("Response in Product Actions ");
        console.log(products);
       return dispatch({ type: actions.GET_PRODUCTS_OF_BUSINESS_SUCCESS, payload: products.data });
      

    } catch (error) {
        console.log("Error while getProducts");
        return dispatch({ type: actions.GET_PRODUCTS_OF_BUSINESS_FAILURE, payload: error.response });
    }
};

export const updateProduct = (productData,id) => async (dispatch) => {
    try {
      const Product = await axios({
        method: "PUT",
        url: `http://localhost:2000/newProduct/update/${id}`,
        data:{ productUpdatedata:productData},
      });
  
      return dispatch({ type: actions.UPDATE_PRODUCT_SUCCESS, payload: Product.data });
    } catch (error) {
      return dispatch({ type: actions.UPDATE_PRODUCT_FAILURE, payload: error });
    }
  };



