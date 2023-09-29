'use client'
import QuestionCard from './QuestionCard'
import ReviewCard from './ReviewCard'

const FAQ = () => {
  return (
    <section id="services" className="h-full w-full bg-light-grey2">
      <div className="flex flex-col gap-28 p-24">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="flex flex-col gap-10 md:basis-1/3 items-start">
            <h2 className="font-semibold text-5xl">FAQ</h2>
            <p className="font-normal text-light-grey1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
              dignissim tristique tellus sed faucibus nullam. Tincidunt mauris
              ut quam sed mauris proin feugiat.{' '}
            </p>
            <button
              className="px-16 py-3 border-orangeJ text-orangeJ font-semibold border-4 hover:bg-orangeJ hover:text-black"
              onClick={() => {
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Get in Touch
            </button>
          </div>
          <div className="flex flex-col md:basis-2/3 gap-5 bg-white p-8">
            <QuestionCard></QuestionCard>
            <QuestionCard></QuestionCard>
            <QuestionCard></QuestionCard>
          </div>
        </div>
        <div className="flex flex-col gap-20 justify-center items-center">
          <h3 className="font-bold text-4xl flex-shrink-0 whitespace-nowrap">
            Client Testimonials
          </h3>
          <div className="flex gap-20 flex-wrap justify-center items-center">
            <ReviewCard></ReviewCard>
            <ReviewCard></ReviewCard>
            <ReviewCard></ReviewCard>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
