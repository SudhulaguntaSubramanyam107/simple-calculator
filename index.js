let tutionFeeElement=document.getElementById("tutionFee")
let libraryFeeElement=document.getElementById("libraryFee") 
let examinationFeeElement=document.getElementById("examinationFee") 
let totalAmountElement=document.getElementById("totalAmount")
let discountAmountPercent=document.getElementById("discountPercent") 
let discountAmount=document.getElementById("discountAmount")
function totalAmount() {
    let tutionFeeValue=parseInt(tutionFeeElement.value) 
    let libraryFeeValue=parseInt(libraryFeeElement.value)
    let examinationFeeValue=parseInt(examinationFeeElement.value) 
    let fullAmount=(tutionFeeValue+libraryFeeValue+examinationFeeValue) 
    totalAmountElement.textContent="Your Total College Fee is "+fullAmount 
    let discountPercentage=parseInt(discountAmountPercent.value)
    let discountPercentValue=(fullAmount*discountPercentage/parseInt(100)) 
    let totalValue=(fullAmount-discountPercentValue)
    discountAmount.textContent="If you are applied the discount value of "+discountPercentage+" Your Fee is "+totalValue
    
    
  
    
}
