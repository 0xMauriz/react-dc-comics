
export default function CardMakerWithProp(props) {

    const { key, thumb, title } = props;

    return (
        <>
            <div className=" h-45 d-flex flex-wrap Card-Width">
                <div className="h-90 w-50 d-flex align-items-center">
                    <img key={key} className="Comics-Imgsize" src={thumb} alt="" />
                </div>
                <div className="h-10 w-60 d-flex flex-wrap fs-6"><p>{title}</p></div>
            </div>
        </>
    )
}