import Image from "next/image"

export default function Review(){
    return(
        <section className="Review-Section bg-white lg:grid lg:h-screen ">
  <div className="Review-container  mx-auto  max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
    <div className="Review-containers  ">
      <h1 className="text-4xl font-bold text-center text-gray-900 sm:text-5xl">
        What Our 
        <strong className="text-[#FF863D]"> Clients Say  </strong>
       
      </h1>

      <p className="mt-4  TeamIntro-text text-center text-pretty text-gray-700 sm:text-lg/relaxed">
       Don't just take our word for it - hear from our satisfied clients
      </p>

      <div className="comment-card mt-4 flex justify-center gap-4 sm:mt-6">
       <a href="#" className="Review-card block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6">
  <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
    
   

    <div className="mt-4 sm:mt-0">
      <h3 className="text-lg border-b  font-medium text-pretty text-gray-900">
       30% 
       Sales Growth Achieved
      </h3>

      <p className="mt-1 text-sm text-gray-700">By John Doe</p>

      <p className="mt-4   text-sm text-pretty text-gray-700">
     With Heizen support and strategy, we
achieved 25% sales growth and streamlined processes. 
      </p>
    </div>
    <div className="sm:order-last sm:shrink-0">
      <Image
       className="size-16 rounded-full object-cover sm:size-[72px]"
       src="/ReviewImage/ReviewImg1.jpg"
       width={100}
       height={100}
       alt="none"
      />
    </div>
  </div>

  <dl className="mt-6 flex gap-4 lg:gap-6">
    <div>
      <dt className="text-sm font-medium text-gray-700">Published on</dt>

      <dd className="text-xs text-gray-700">31/06/2025</dd>
    </div>

    <div>
      <dt className="text-sm font-medium text-gray-700">Reading time</dt>

      <dd className="text-xs text-gray-700">12 minutes</dd>
    </div>
  </dl>
</a>

<a href="#" className="Review-card block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6">
  <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
    
   

    <div className="mt-4 sm:mt-0">
      <h3 className="text-lg border-b  font-medium text-pretty text-gray-900">
       30% 
       Sales Growth Achieved
      </h3>

      <p className="mt-1 text-sm text-gray-700">By John Doe</p>

      <p className="mt-4   text-sm text-pretty text-gray-700">
     With Heizen support and strategy, we
achieved 25% sales growth and streamlined processes. 
      </p>
    </div>
    <div className="sm:order-last sm:shrink-0">
      <Image
       className="size-16 rounded-full object-cover sm:size-[72px]"
       src="/ReviewImage/ReviewImg2.jpg"
       width={100}
       height={100}
       alt="none"
      />
    </div>
  </div>

  <dl className="mt-6 flex gap-4 lg:gap-6">
    <div>
      <dt className="text-sm font-medium text-gray-700">Published on</dt>

      <dd className="text-xs text-gray-700">31/06/2025</dd>
    </div>

    <div>
      <dt className="text-sm font-medium text-gray-700">Reading time</dt>

      <dd className="text-xs text-gray-700">12 minutes</dd>
    </div>
  </dl>
</a>
  
   <a href="#" className="Review-card block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6">
  <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
    
   

    <div className="mt-4 sm:mt-0">
      <h3 className="text-lg border-b  font-medium text-pretty text-gray-900">
       30% 
       Sales Growth Achieved
      </h3>

      <p className="mt-1 text-sm text-gray-700">By John Doe</p>

      <p className="mt-4   text-sm text-pretty text-gray-700">
     With Heizen support and strategy, we
achieved 25% sales growth and streamlined processes. 
      </p>
    </div>
    <div className="sm:order-last sm:shrink-0">
      <Image
       className="size-16 rounded-full object-cover sm:size-[72px]"
       src="/ReviewImage/ReviewImg3.jpg"
       width={100}
       height={100}
       alt="none"
      />
    </div>
  </div>

  <dl className="mt-6 flex gap-4 lg:gap-6">
    <div>
      <dt className="text-sm font-medium text-gray-700">Published on</dt>

      <dd className="text-xs text-gray-700">31/06/2025</dd>
    </div>

    <div>
      <dt className="text-sm font-medium text-gray-700">Reading time</dt>

      <dd className="text-xs text-gray-700">12 minutes</dd>
    </div>
  </dl>
</a>
      </div>
    </div>
  </div>
</section>
    )
}