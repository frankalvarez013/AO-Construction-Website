'use client'

import { useState } from 'react'

const ContactUs = () => {
  const [submitt, onSubmitt] = useState(false)
  async function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    formData.append('access_key', '7b3d8ab8-c5f2-448e-8693-aace83eb4f7f')

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(object),
    })
    const result = await response.json()
    onSubmitt(true)
    if (result.success) {
      console.log(result)
    }
  }
  return (
    <section id="contact" className="h-full bg-orangeJ flex justify-center">
      <div className="flex flex-col p-20 gap-10 justify-center">
        <div className="font-bold text-3xl">Contact Us</div>
        <div className="">
          <form
            action=""
            className="flex flex-wrap gap-10"
            onSubmit={handleSubmit}
          >
            <label htmlFor="name" className="flex grow ">
              <textarea
                id="name"
                name="name"
                className="w-full h-20 p-3"
                placeholder="Name"
              />
            </label>
            <label htmlFor="email" className="flex grow">
              <textarea
                id="email"
                name="email"
                className="w-full h-20 p-3"
                placeholder="Email"
              />
            </label>
            <label htmlFor="message" className="flex basis-full">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                className="w-full p-3"
              />
            </label>
            <div className="basis-full">
              <input
                type="submit"
                value="Send Message"
                className="px-5 py-1 border-white border-4 hover:bg-white"
              />
            </div>
          </form>
        </div>
        {submitt ? (
          <p className="font-normal text-light-grey1 max-w-[900px]">
            Your message has been successfully received. We appreciate your
            interest in AO Construction. Our team is reviewing your inquiry, and
            we will get back to you as soon as possible.
          </p>
        ) : (
          <p className="font-normal text-light-grey1 hidden">
            Your message has been successfully received. We appreciate your
            interest in AO Construction. Our team is reviewing your inquiry, and
            we will get back to you as soon as possible.
          </p>
        )}
      </div>
    </section>
  )
}
export default ContactUs
