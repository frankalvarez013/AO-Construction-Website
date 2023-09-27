const ContactUs = () => {
  return (
    <section className="h-full bg-orangeJ flex justify-center">
      <div className="flex flex-col p-20  gap-10 justify-center">
        <div className="font-bold text-3xl">Contact Us</div>
        <div className="w-full">
          <form action="" className="flex flex-wrap gap-10">
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
                className="px-5 py-1 border-white border-4"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
export default ContactUs
