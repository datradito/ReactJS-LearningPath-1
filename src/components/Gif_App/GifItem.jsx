export default function GifItem({ gif }) {
    return (
        <>
            <div className='card'>
                <img src={gif.url}></img>
                <h4 className='capitalize'>{gif.title}</h4>
            </div>
        </>
    )
}