import { myAxios } from "./helper";

//add item
export const addItem = (item)=>{
        return myAxios.post('/item/add',item)
        .then((response)=>response.data);
}