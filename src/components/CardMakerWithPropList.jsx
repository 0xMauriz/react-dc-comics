import { useState } from 'react'
import comics from "../assets/scripts/comics.js"
import CardMakerWithProp from './CardMakerWithProp.jsx'

function CardMakerWithPropList() {


    return (
        <>
            {comics.map((comic) => (
                <CardMakerWithProp key={comic.id}
                    thumb={comic.thumb}
                    title={comic.title}
                />
            ))}
        </>
    )
}

export default CardMakerWithPropList