import Image from 'next/image'
import Map from '../public/Map.png'
import Phone from '../public/phone.svg'
import Email from '../public/email.svg'
const LocationSection = () => {
  return (
    <section className="h-full w-full p-10 snap-start">
      <div className="flex flex-col gap-16">
        <div className="flex items-center justify-center" id="location-image">
          <Image alt="" src={Map} className="md:w-1/2"></Image>
        </div>
        <div className="flex flex-col sm:flex-row gap-14">
          <div className="basis-1/2 flex justify-center items-center">
            <div className="w-4/5 p-5 shadow-2xl" id="location-info">
              <div className="font-light mb-3">Company Address</div>
              <div className="font-medium text-2xl w-2/3">
                1234 East Palm Street, South Cityville, CA 90001, Southeast Los
                Angeles.
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-wrap basis-1/2 justify-center items-center gap-5">
            <div
              className="flex w-3/5 justify-start items-start gap-7"
              id="location-email"
            >
              <Image src={Email} alt=""></Image>
              <div className="flex flex-col gap-3">
                <h4 className="font-normal text-sm">Emails</h4>
                <div className="font-semibold text-base">
                  <h3>support@aoconstruction.com</h3>
                  <h3>hire@aoconstruction.com</h3>
                </div>
              </div>
            </div>
            <div
              className="flex w-3/5 justify-start items-center gap-7"
              id="location-phone"
            >
              <Image src={Phone} alt=""></Image>
              <div className=" flex flex-col gap-3">
                <h4 className="font-normal text-sm">Phones</h4>
                <div className="font-semibold text-base">
                  <h3>(323) 555-1234</h3>
                  <h3>(310) 555-5678</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
