function ImageGallery({item}){
    return (
        <div className="card">
            <img src={item.largeImageURL}/>
            <div class="card__desc">
                <h2>Title</h2>
            </div>
        </div>
    )
}
export default ImageGallery;