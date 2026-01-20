import comics from "../assets/scripts/comics";


export default function Cards() {

    return (
        <>
            <div className="h-40">
                <div className="h-80">
                    <img className="Default-Imgsize" src={comics[0].thumb} alt="" />
                </div>

            </div>
        </>
    )
}