export default function Anouncement(){
   
       
    return(
        <header className="bg-white">
  <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
    <a className="block text-teal-600" href="#">
      {/* <span className="sr-only">Home</span> */}
      <h1 className="scroll-m-20   pb-2 text-3xl font-semibold tracking-tight first:mt-0" >HEIZEN</h1>
    </a>

    <div className="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" className="hidden md:block">
      
      </nav>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
       <a
  className="inline-block rounded-sm border border-black bg-[#2A2A2A] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:ring-3 focus:outline-hidden"
  href="#"
>
 Book a Call Now 
</a>
        </div>

       
      </div>
    </div>
  </div>
</header>
    )
}
    
