
function BestSellingCard ({cards}) {
    return (
        <div class="plantCard">
        <div class="thumbnail">
            <img src={cards.img} alt=""/>
        </div>
        <div class="info">
            <h3>{cards.name}</h3>
            <p>{cards.decs}</p>
            <span class="price">{cards.price}</span>
            <a href="" class="button">Buy now</a>
        </div>
    </div>
    )
}

export default BestSellingCard