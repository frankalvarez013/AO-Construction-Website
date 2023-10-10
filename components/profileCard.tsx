import Image from 'next/image'
import stockFace from '../public/stockFace.png'
import vector from '../public/VectorP3.png'
const profileCard = () => {
  return (
    <div className="h-[447px] w-[310px] pb-[0px] border-2 border-slate-200">
      <div className="h-1/2 flex justify-center items-center">
        <Image
          src={vector}
          alt=""
          className="clip-path-url-['../public/VectorP3.png']"
        ></Image>
      </div>
      <div className="h-1/2 px-4 pt-4">
        <div className="m-auto mb-6 flex flex-grow justify-between flex-col h-3/5">
          <div className="font-medium text-xl">Miles Tales</div>
          <div className="text-base">Insert your title here</div>
          <div className="font-light text-grey px-1">
            There are many variations of passages of Lorem Ipsum available
          </div>
        </div>

        <div>links</div>
      </div>
    </div>
  )
}
export default profileCard
