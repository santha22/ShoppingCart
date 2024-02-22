const filterReducer = (state, action) => {
    switch (action.type) {

        case "LOAD_FILTER_PRODUCTS":

            let priceArr = action.payload.map((curElem) => curElem.price);
            // console.log("pricearr", priceArr);

            let maxPrice = priceArr.reduce((initialVal, curVal) => 
                    Math.max(initialVal, curVal), 0
            );
            // console.log("maxVale", maxPrice);
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters: {...state.filters, maxPrice, price: maxPrice}
                
            }

        case "SET_GRIDVIEW":
            return {
                ...state,
                grid_view: true, 
            }

        case "GET_SORT_VALUE":
            // let userSortValue = document.getElementById("sort");
            // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
            // console.log(sort_value);
            return {
                ...state,
                sorting_value: action.payload 
            }

        case "SORTING_PRODUCTS":
            let newSortData;
            
            const { filter_products, sorting_value } = state;
            let tempSortProduct = [...filter_products];
            
            const sortingProducts = (a, b) => {
                if(sorting_value === "lowest"){
                        return a.price - b.price
      
                }

                if(sorting_value === "highest"){
                    return b.price - a.price
                    
                }

                if(sorting_value === "a-z"){
                    return a.name.localeCompare(b.name);
                }

                if(sorting_value === "z-a"){
                    return  b.name.localeCompare(a.name);
                }
            }
            
            newSortData = tempSortProduct.sort(sortingProducts);

            return {
                ...state,
                filter_products: newSortData,
            }

        case "UPDATE_FILTERS_VALUE":
            const {name, value} = action.payload;

            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                }
            }

        case "FILTER_PRODUCTS":
            let { all_products } = state;
            let tempFilterProduct = [...all_products];
            // let newArr;
            // const { text, category, price } = state.filters;
            const { text, category, price } = state.filters;
       
            if(price === 0) {
                tempFilterProduct = tempFilterProduct.filter((curElem) =>
                    curElem.price === price 
                );
            } else {
                tempFilterProduct = tempFilterProduct.filter((curElem) =>
                    curElem.price <= price 
                );
            }
            // if (price) {
            //     tempFilterProduct = tempFilterProduct.filter((curElem) => 
            //         curElem.price === price
            //     );

            // }  else{
            //     tempFilterProduct = tempFilterProduct.filter((curElem) =>
            //         curElem.price <= price 
            //     );
            // }

            if(text) {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.name.toLowerCase().includes(text);
                })
            }


            if(category !== "all") {
                // console.log("yes", category);
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                   return curElem.category === category;
                })
            }
            // if(category) {
            //     if(category == "all"){
            //         newArr = tempFilterProduct
            //     } else{
            //          tempFilterProduct = tempFilterProduct.filter((curElem) => {
            //             return curElem.category === category;
            //         })
            //     }
                
            // }
            // console.log("category", tempFilterProduct);

           
            
           
            // console.log("NEWARRAU",newArr);

            return {
                ...state,
                filter_products: tempFilterProduct
            }

        // case "CLEAR_FILTERS":
        //     return {
        //         ...state,
        //         filters: {
        //             ...state.filters,
        //             text: "",
        //             category: "all",
        //             maxPrice: 0,
        //             price: state.filters.maxPrice,
        //             minPrice: state.filters.maxPrice
        //         }
        //     }

        default: return state
    }
}

export default filterReducer;