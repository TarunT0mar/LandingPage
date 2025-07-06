import Image from "next/image"

export default function TeamIntro(){
    return(
           <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
  <div
    className=" TeamIntro-Container mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32"
  >
    <div className="max-w-prose text-center">
      <h1 className="TeamIntro-text text-4xl font-bold text-gray-900 sm:text-5xl">
       Meet the 
        <strong className="text-[#FF863D]"> Experts </strong> 
      </h1>

      <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
       Our diverse team of professionals brings decades of experience and expertise
      </p>

    
    </div>
<div className="Blog-Card-Container">
    <article className="Blog-Card overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
        <div className="Card-Image">
  <Image className="card-image"
  src="/ExpertsImage/Expert1.jpg"
  alt="none"
  width={100}
  height={100}
  />
  </div>

  <div className="bg-white p-4 sm:p-6">
  

    <a href="#">
      <h3 className="mt-0.5 text-lg text-gray-900">Sarah Chen
CEO & Founder</h3>
    </a>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
     Visionary leader with 15+ years in tech innovation
    </p>
  </div>
</article>
<article className="Blog-Card overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
        <div className="Card-Image">
  <Image className="card-image"
  src="/ExpertsImage/Expert2.jpg"
  alt="none"
  width={100}
  height={100}
  />
  </div>

  <div className="bg-white p-4 sm:p-6">
  

    <a href="#">
      <h3 className="mt-0.5 text-lg text-gray-900">Sarah Chen
CEO & Founder</h3>
    </a>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
     Visionary leader with 15+ years in tech innovation
    </p>
  </div>
</article>
<article className="Blog-Card overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
        <div className="Card-Image">
  <Image className="card-image"
  src="/ExpertsImage/Expert3.jpg"
  alt="none"
  width={100}
  height={100}
  />
  </div>

  <div className="bg-white p-4 sm:p-6">
  

    <a href="#">
      <h3 className="mt-0.5 text-lg text-gray-900">Sarah Chen
CEO & Founder</h3>
    </a>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
     Visionary leader with 15+ years in tech innovation
    </p>
  </div>
</article>
</div>
  </div>
</section>
    )
}