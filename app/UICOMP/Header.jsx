export default function Header(){
    return(
        <header className="bg-[#FF863D] ">
  <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
    <h2 className="scroll-m-20 text-white   pb-2 text-3xl font-semibold tracking-tight first:mt-0">Transform your business</h2>

    <div className="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" className="hidden md:block">
       
      </nav>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
         {/* add button browcher button here */}


{/* Hover */}

<a
  className="group relative inline-block text-sm font-medium text-black focus:ring-3 focus:outline-hidden "
  href="#"
>
  <span
    className="absolute   inset-0 translate-x-0 translate-y-0 bg-black transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
  ></span>

  <span className="relative block border border-current bg-white px-8 py-3"> Download Brochure </span>
</a>
        
        </div>

      </div>
    </div>
  </div>
</header>
    )
}