import { useState } from 'react'

function ObjectContainer() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="d-flex h-15 w-100 justify-content-around align-items-center bg-primary">
                <div className="w-65 d-flex justify-content-around"><a href=""></a>
                    <a className='align-self-center text-white' href=""><img src="../img/buy-comics-digital-comics.png" alt="" />DIGITAL COMICS</a>
                    <a className='align-self-center text-white' href=""><img src="../img/buy-comics-digital-comics.png" alt="" />DC MERCHANDISE</a>
                    <a className='align-self-center text-white' href=""><img src="../img/buy-comics-digital-comics.png" alt="" />SUBSCRIPTION</a>
                    <a className='align-self-center text-white' href=""><img src="../img/buy-comics-digital-comics.png" alt="" />COMIC SHOP LOCATOR</a>
                    <a className='align-self-center text-white' href=""><img src="../img/buy-comics-digital-comics.png" alt="" />DC POWER VISA</a>
                </div>
            </div>
        </>
    )
}

export default ObjectContainer