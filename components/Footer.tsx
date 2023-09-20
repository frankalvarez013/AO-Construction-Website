const Footer = () => {
  return (
    <footer className="h-auto md:h-56 md:p-14 bg-dark-grey1 text-slate-100">
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="text-center md:text-left">
          <div>AO Construction</div>
          <div>symbol email</div>
          <div>symbol phone</div>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="text-center md:text-left md:ml-16">
            Services
            <div>
              <h4> ? </h4>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h4>Support</h4>
            <div>
              <h4>Pricing</h4>
              <h4>Documentation</h4>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h4>Company</h4>
            <div>
              <h4>About</h4>
              <h4>Blog</h4>
              <h4>Projects</h4>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
