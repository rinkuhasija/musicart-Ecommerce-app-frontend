import React, { useState } from "react";
import dataContext from "./dataContext";

const DataState = (props) => {

    const s1 = {
        keyword: "",
        resultsFromContext: []
    }

    const [dataState, setDataState] = useState(s1)

    return (
        <dataContext.Provider value={{ dataState, setDataState }} >
            {props.children}
        </dataContext.Provider >
    )
}


export default DataState;