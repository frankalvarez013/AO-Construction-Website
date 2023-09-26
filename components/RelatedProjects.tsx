import Card from './Card'

const relatedProjects = () => {
  return (
    <section className="flex flex-col items-center gap-12 p-16">
      <div className="font-bold text-4xl sm:text-6.5xl lil:text-5xl pb-7 border-b-8 border-black">
        Related Projects
      </div>
      <div className="flex justify-around w-full">
        <Card url="/Rectangle13.png"></Card>
        <Card url="/Rectangle13.png"></Card>
        <Card url="/Rectangle13.png"></Card>
        <Card url="/Rectangle13.png"></Card>
      </div>
      <button className="border-black border-4 px-16 py-3">VIEW ALL</button>
    </section>
  )
}

export default relatedProjects
