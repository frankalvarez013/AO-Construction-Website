import Image from 'next/image'
import Twitter from '../public/TP1.png'
import TikTok from '../public/TP2.png'
import LinkedIn from '../public/TP3.png'
import Email from '../public/TP4.png'

const profileCard = ({
  name,
  title,
  description,
  links,
  profilePic,
  number,
}) => {
  const stringNumber = `custom-mask [-webkit-mask-image:url(../public/Vector${
    number + 1
  }.svg)] [mask-image:url(../public/Vector${number + 1}.svg)]`
  const size = number
  return (
    <div className="h-[510px] w-[310px] pb-[0px] border-2 border-slate-200 hover:scale-105 ease-in-out duration-300">
      <div className="pt-4 h-1/2 flex justify-center items-center">
        <div
          className={stringNumber}
          style={{
            maskImage: `url(Vector${number + 1}.svg)`,
            WebkitMaskImage: `url(Vector${number + 1}.svg)`,
          }}
        >
          <img src={profilePic} alt="" className="" />
        </div>
      </div>
      <div className="h-1/2 px-4 pt-7 flex flex-col gap-3">
        <div className="mb-1 flex flex-col h-3/5">
          <div className="font-medium text-xl mb-2">{`${name}`}</div>
          <div className="text-sm mb-2">{`${title}`}</div>
          <div className="font-light text-grey px-1">{`${description}`}</div>
        </div>

        <div className="flex justify-center gap-2">
          <button>
            <Image src={Twitter} alt=""></Image>
          </button>
          <button>
            <Image src={TikTok} alt=""></Image>
          </button>{' '}
          <button>
            <Image src={LinkedIn} alt=""></Image>
          </button>{' '}
          <button>
            <Image src={Email} alt=""></Image>
          </button>
        </div>
      </div>
    </div>
  )
}
export default profileCard
