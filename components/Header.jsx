import { useState } from 'react'

function Header() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="d-flex h-15 w-100 justify-content-around align-items-center">
                <div className="w-30 d-flex justify-content-end"><img src="../img/dc-logo.png" alt="" /></div>
                <div className="w-65 d-flex justify-content-around"><a href=""></a>
                    <a href="" className='fs-7'>CHARACTERS</a>
                    <a href="">COMICS</a>
                    <a href="">MOVIES</a>
                    <a href="">TV</a>
                    <a href="">GAMES</a>
                    <a href="">COLLECTIBLES</a>
                    <a href="">VIDEOS</a>
                    <a href="">FANS</a>
                    <a href="">NEWS</a>
                    <a href="">SHOP</a>
                </div>
            </div>
        </>
    )
}

export default Header