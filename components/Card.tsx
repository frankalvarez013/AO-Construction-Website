import Image from 'next/image'

const Card = ({ url }) => {
  return (
    <div className="flex flex-col w-1/5  h-1/4">
      <Image alt="" src={url} width={200} height={500}></Image>
      <div className="flex flex-col justify-around border-black p-1">
        <h4> Service Title </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod
          bibendum adipiscing et orci, fermentum.
        </p>
        <button>Learn More</button>
      </div>
    </div>
  )
}

export default Card
