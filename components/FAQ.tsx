'use client'
import QuestionCard from './QuestionCard'
import ReviewCard from './ReviewCard'

const FAQ = () => {
  const FillQ = [
    {
      Question: 'How long does a typical construction project take?',
      Answer:
        'Our construction timelines vary depending on the scope and complexity of the project. We prioritize efficiency without compromising quality, aiming to deliver exceptional results within a reasonable timeframe. Detailed project timelines are discussed and agreed upon during the initial consultation to ensure transparency and meet your specific needs.',
    },
    {
      Question:
        'What types of construction projects does your company specialize in?',
      Answer:
        'We specialize in a wide range of construction projects, including residential, commercial, and industrial developments. Our expertise extends to new builds, renovations, and various construction services tailored to meet your specific needs.',
    },
    {
      Question:
        'How can I request a consultation or get started on my construction project with your company?',
      Answer:
        'Initiating your construction project with us is easy. Simply visit our Contact page, fill out the form, and our team will promptly reach out to schedule a consultation. We look forward to discussing your vision and bringing it to life.',
    },
  ]
  const FillClientTest = [
    {
      Stars: '⭐⭐⭐⭐⭐',
      Description:
        'Exceptional construction mastery! Their unwavering dedication to precision and safety has redefined industry standards. Highly recommended for an outstanding and stress-free construction journey!',
      Name: 'Alicia Rodriguez',
    },
    {
      Stars: '⭐⭐⭐⭐⭐',
      Description:
        'Transformative construction experience! From concept to completion, their commitment to quality and attention to detail set them apart. Trustworthy team for a seamless and remarkable construction project.',
      Name: 'Emily Nguyen',
    },
    {
      Stars: '⭐⭐⭐⭐⭐',
      Description:
        'Innovative construction solutions! Their professional expertise and meticulous approach ensure excellence in every phase of the project. Highly recommended for a superior and tailored construction experience!',
      Name: 'Jordan Foster',
    },
  ]
  return (
    <section id="services" className="pt-12 -mt-12 snap-start">
      <div className="flex h-full w-full bg-light-grey2 items-center justify-center p-12">
        <div className="flex flex-col gap-28 basis-5/6">
          <div className="flex flex-col md:flex-row gap-20">
            <div className="flex flex-col gap-10 md:basis-1/3 items-start">
              <h2 className="font-semibold text-5xl" id="faq-title">
                FAQ
              </h2>
              <p className="font-normal text-light-grey1" id="faq-desc">
                Discover essential insights into our construction practices and
                services through this FAQ guide. From project timelines to
                quality assurance, we've curated information to ensure a clear
                and informed journey for our clients. Uncover the details you
                need for a seamless construction experience.{' '}
              </p>
              <button
                className="px-16 py-3 border-orangeJ text-orangeJ font-semibold border-4 hover:bg-orangeJ hover:text-black"
                onClick={() => {
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
                id="faq-button"
              >
                Get in Touch
              </button>
            </div>
            <div
              className="flex flex-col md:basis-2/3 gap-5 bg-white p-8"
              id="faq-stack"
            >
              {FillQ.map((e, iter) => {
                console.log(e)
                return (
                  <QuestionCard
                    key={iter}
                    Question={e.Question}
                    Answer={e.Answer}
                  ></QuestionCard>
                )
              })}
            </div>
          </div>
          <div className="flex flex-col gap-20 justify-center items-center">
            <h3
              className="font-bold text-4xl flex-shrink-0 whitespace-nowrap"
              id="faq-client-title"
            >
              Client Testimonials
            </h3>
            <div
              className="flex gap-20 flex-wrap justify-center items-center"
              id="faq-client-cards"
            >
              {FillClientTest.map((e, iter) => {
                return (
                  <ReviewCard
                    key={iter}
                    Name={e.Name}
                    Description={e.Description}
                    Stars={e.Stars}
                  ></ReviewCard>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
