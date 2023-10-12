import Image from 'next/image'

const Card = ({ url }) => {
  return (
    <div className="flex flex-col w-72 gap-5 hover:scale-95 ease-in-out duration-300">
      <Image loading="eager" alt="" src={url} width={300} height={500}></Image>
      <div className="flex flex-col justify-around p-5 items-start border-black border h-64">
        <h4> Service Title </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod
          bibendum adipiscing et orci, fermentum.
        </p>
        <button className="border-black border px-6 py-1 hover:border-orangeJ hover:text-orangeJ">
          Learn More
        </button>
      </div>
    </div>
  )
}

export default Card
