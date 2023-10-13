import Image from 'next/image'

const ProjectPrevCard = ({ title, date, imageURL, description, id }) => {
  return (
    <div className="flex flex-col w-72 gap-5 hover:scale-95 ease-in-out duration-300">
      <Image
        loading="eager"
        alt=""
        src={imageURL}
        width={300}
        height={500}
      ></Image>
      <div className="flex flex-col justify-center gap-4 p-5 items-start border-black border h-64">
        <h4 className="text-xl font-medium"> {title} </h4>
        <h4 className="font-medium text-sm"> {date} </h4>
        <p className="font-light">{description}</p>
        <a
          href={`projects/?id=${id}`}
          className="border-black border px-6 py-1 hover:border-orangeJ hover:text-orangeJ mt-3"
        >
          Learn More
        </a>
      </div>
    </div>
  )
}

export default ProjectPrevCard
