import { TAX_VALUE } from "../configs/sauce-demo-config";

export function getCurrentYear(){
    const currentYear = new Date().getFullYear();
    return currentYear;
}

export function calculateTotalPrice(productPrice: number|number[]){
    let itemTotal = 0;
    let tax = 0;
    let total = 0;

    if(Array.isArray(productPrice)){
        itemTotal =  productPrice.reduce((acc,curr) => acc + curr,0)
    }
    else
        itemTotal = productPrice
    
    tax = itemTotal * TAX_VALUE; 
    total = itemTotal + tax;
    return {
        itemTotal: itemTotal.toFixed(2),
        tax: tax.toFixed(2),
        total:total.toFixed(2)
    }
}