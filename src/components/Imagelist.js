import react from'react'

const ImageList = (props) => {
    const images = props.images.map((image) => {
       return <img key={image.id} src={image.webformatURL} alt="image"/>
    })
    return (
        <div className="ui grid " >
            <div className="column ui centered grid" style={{width:'80%'}}>
            {images}
            </div>
        </div>
    )
}

export default ImageList

