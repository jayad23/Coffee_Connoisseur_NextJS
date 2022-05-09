export const valueRefactor = (searchValue)=>{
    if(searchValue.length > 0){
        const valueArr = searchValue.split("");
        const spaceLessVal = valueArr.filter(letter => letter !== " ");
        const dotLessVals = spaceLessVal.filter(letter => letter !== ".");
        const finalValue = dotLessVals.join("");
        return {
            data: finalValue.toLowerCase(),
        }
    }else{
        return {
            data: "error"
        }
    }

}