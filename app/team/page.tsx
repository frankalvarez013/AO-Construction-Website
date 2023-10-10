import ProfileCard from '@/components/profileCard'
const teamPage = () => {
  return (
    <div className="min-h-auto flex flex-col gap-8 mt-20 items-center text-center px-[52px] py-[48px]">
      <div className="">
        <div className="text-xl font-medium cap">WHO WE ARE</div>
        <div className="font-semibold text-5xl">Meet our team</div>
        <div className="text-gray-500 text-lg">
          Just take a look - each member of the team is watching your every
          gesture <br /> and will hear your every whisper.
        </div>
      </div>
      <div className="flex flex-wrap justify-center px-20 gap-10">
        <ProfileCard></ProfileCard>
        <ProfileCard></ProfileCard>
        <ProfileCard></ProfileCard>
        <ProfileCard></ProfileCard>
        <ProfileCard></ProfileCard>
        <ProfileCard></ProfileCard>
        <ProfileCard></ProfileCard>
        <ProfileCard></ProfileCard>
      </div>
    </div>
  )
}
export default teamPage
