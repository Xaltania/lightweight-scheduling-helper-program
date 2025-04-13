'use client';
import {useState} from "react";

export default function Grid({rows, columns}) {
    const divs = [];
    const [isSelected, setIsSelected] = useState(Array(rows * columns).fill(false));

    function handleClick(index) {
        let newIsSelected = isSelected.slice();
        newIsSelected[index] = !newIsSelected[index];
        setIsSelected(newIsSelected);
    }

    for (let i = 0; i < rows * columns; i++) {
        divs.push(
            <div key = {i} className={"border border-indigo-600 w-10 h-10 " +
                (isSelected[i] ? "bg-blue-500" : "bg-white")}
            onClick={() => handleClick(i)}>
                {i}
            </div>
        );
    }

    columns = parseInt(columns);

    return (
        <>
            <div className={`grid grid-cols-${columns} w-fit`}>
                {divs}
            </div>
        </>
    );
}

