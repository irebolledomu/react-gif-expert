import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Breaking Bad']);

    const onAddCategory = ( newCategory ) => {
        if(categories.includes(newCategory)) return; 
        //Evalua si newCategory existe en el arreglo useState([...])
        setCategories([ newCategory, ...categories ]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                //onNewCategory={ (value) => onAddCategory(value) }
                onNewCategory={onAddCategory} />

            {
                categories.map( (category) => (
                    <GifGrid 
                        key={category} 
                        category={category}/>
                    ))
            }
        </>
    )
}
