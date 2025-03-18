const ImageContainer = ({ image, name }) => {

  return (
    <section className="h-[300px] md:h-[500px] mt-2">
        <img
        alt={name}
        src={image}
        className="w-full h-full object-cover rounded-lg shadow-lg" 
        />
    </section>
  )
}
export default ImageContainer