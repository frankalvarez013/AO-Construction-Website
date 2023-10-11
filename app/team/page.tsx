import ProfileCard from '@/components/profileCard'
const teamPage = () => {
  const myArray = []
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
        {[
          {
            name: 'Miles Tales',
            title: 'CEO',
            description:
              'There are many variations of passages of Lorem Ipsum available',
            profilePic: 'stockFace1.png',
          },
          {
            name: 'Jack Moore',
            title: 'CFO',
            description:
              'There are many variations of passages of Lorem Ipsum available',
            profilePic: 'stockFace2.png',
          },
          {
            name: 'Shannon Morales',
            title: 'Sales Manager',
            description:
              'There are many variations of passages of Lorem Ipsum available',
            profilePic: 'stockFace3.png',
          },
        ].map((item, index) => (
          <ProfileCard
            key={index}
            name={item.name}
            title={item.title}
            description={item.description}
            links={item.name}
            profilePic={item.profilePic}
            number={index}
          ></ProfileCard>
        ))}
      </div>
    </div>
  )
}
export default teamPage
