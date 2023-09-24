import Card from './Card'

const relatedProjects = () => {
  return (
    <section className="flex flex-col items-center gap-12  min-h-screen">
      <div className="font-bold text-4xl sm:text-6.5xl lil:text-5xl pb-7 border-b-8 border-black">
        Related Projects
      </div>
      <div className="flex justify-around">
        <Card url="/Rectangle13.png"></Card>
        <Card url="/Rectangle13.png"></Card>
        <Card url="/Rectangle13.png"></Card>
        <Card url="/Rectangle13.png"></Card>
      </div>
    </section>
  )
}

export default relatedProjects
