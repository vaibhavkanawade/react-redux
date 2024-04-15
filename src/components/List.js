import React from 'react'
//using react create list using map
function List() {
    const fruits = ['mango', 'apple', 'chiku', 'gava'];


    const listFruits = fruits.map((fruit, index) => {
        return <li key={index}>{fruit}</li>
    })
    const vegetableList = [
        { name: "Apple" },
        { name: "Orange" },
        { name: "Banana" },
        { name: "Coconut" },
        { name: "Pineapple" },
    ];

    return (
        <div>
            <ul>
                {listFruits}

            </ul>

            <ul>
                {vegetableList.map((vegetable) => (
                    <li key={vegetable.name}>
                        {vegetable.name}
                    </li>
                ))}
            </ul>

        </div>

    )

}

export default List