import { useState } from "react";

export const UseToggle = (initialValue = 0) => {
    const [count,setCount] = useState(initialValue);

    const increase = () => {
        setCount(() => count + 1);
    }
    const decrease = () => {
        setCount(() => count - 1);
    }
    const reset = () => {
        setCount(0);
    }

       return [count,increase,decrease,reset];
    
}