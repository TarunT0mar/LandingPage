import Image from 'next/image';
export default function Hero(){
    return(
        <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
  <div
    className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32"
  >
    <div className="hero-text max-w-prose text-left">
      <h1 className="text-4xl  text-gray-900 sm:text-5xl">
        Automate RevOps with custom 
        <strong className="text-[#F77908]"> AI Agents </strong>
        Built for CROs
      </h1>

      <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
    Manage your entire revenue growth stack with one layer of intelligent automation: campaign management, onboarding, reporting, and CRM integration, done by agents that think like your best operator.
      </p>

      <div className="mt-4 flex gap-4 sm:mt-6">
        <a
          className="inline-block rounded border border-black bg-[#272727] px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
          href="#"
        >
          Book a Call Now
        </a>

       
      </div>
    </div>
 <div className=" image-container relative w-[700px] h-[550px] ">
    <Image 
        src="/img1.png" 
        alt="Top Image"
         width={470}
        height={150}
       
        className="img1 bottom-0 absolute  left-0 rounded-lg shadow-md z-11"
      />

      <Image 
        src="/img2.png" 
        alt="Bottom Image"
       width={500}
        height={200}
        className="absolute bottom-60 right-0 rounded-lg shadow-lg z-10"
      />
      </div>
  </div>
</section>
    )
}