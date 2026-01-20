import comics from "../assets/scripts/comics";


export default function Cards() {

    return (
        <>
            {comics.map((comic, index) => (
                <div className="h-45 d-flex flex-wrap">
                    <div className="h-80 Card-Width">
                        <img key={index} className="Comics-Imgsize" src={comic.thumb} alt="" />
                    </div>
                    <div className="h-20 w-50 d-flex"><p>{comic.title}</p></div>
                </div>
            ))}
        </>
    )
}