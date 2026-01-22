import comics from "../assets/scripts/comics";


export default function Cards() {

    return (
        <>
            {comics.map((comic, index) => (
                <div className=" h-50 d-flex flex-wrap Card-Width">
                    <div className="h-90 w-60 d-flex align-items-center">
                        <img key={index} className="Comics-Imgsize" src={comic.thumb} alt="" />
                    </div>
                    <div className="h-10 w-60 d-flex flex-wrap fs-6"><p>{comic.title}</p></div>
                </div>
            ))}
        </>
    )
}