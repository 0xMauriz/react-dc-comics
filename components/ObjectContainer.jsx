import { useState } from 'react'

function ObjectContainer() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="d-flex h-15 w-100 justify-content-around align-items-center bg-primary Z-Index-First position-relative">
                <div className="w-80 d-flex justify-content-around">
                    <a className='align-self-center text-white fs-6' href=""><img className='Default-Imgize px-2' src="../img/buy-comics-digital-comics.png" alt="" />DIGITAL COMICS</a>
                    <a className='align-self-center text-white flex-nowrap fs-6' href=""><img className='Default-Imgize px-2' src="../img/buy-comics-merchandise.png" alt="" />DC MERCHANDISE</a>
                    <a className='align-self-center text-white flex-nowrap fs-6' href=""><img className='Default-Imgize px-2' src="../img/buy-comics-subscriptions.png" alt="" />SUBSCRIPTION</a>
                    <a className='align-self-center text-white fs-6' href=""><img className='Default-Imgize px-2' src="../img/buy-comics-shop-locator.png" alt="" />COMIC SHOP LOCATOR</a>
                    <a className='align-self-center text-white fs-6' href=""><img className='Default-Imgize px-2' src="../img/buy-dc-power-visa.svg" alt="" />DC POWER VISA</a>
                </div>
            </div>
        </>
    )
}

export default ObjectContainer