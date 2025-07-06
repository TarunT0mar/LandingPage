
import Image from 'next/image';


export default function DetailSection(){
    return(
        <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="w-[100%] grid grid-cols-1  md:grid-cols-2 md:items-center ">
      <div className="Detailes w-[500px]">
        <div className="max-w-lg md:max-w-none">
         <h1 className="text-5xl  text-gray-900 sm:text-7xl">
       What you
       <br></br>
       can <strong className="text-[#F77908]"> Build? </strong>
    
      </h1>
<div className='Details-text'>
          <p className="mt-4 text-gray-700">
            Intelligent workflows designed to 
automate and scale your revenue operations.
          </p>
          <a
  className="inline-block rounded-sm border border-black bg-[#2A2A2A] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:ring-3 focus:outline-hidden"
  href="#"
>
 Book a Call Now 
</a>
          </div>
        </div>
      </div>

      <div className="BlogCard-holder w-[700px]"> 
       {/* blog card here */}
        <article className="BlogCard overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
         <Image 
                src="/DetailsImage/Dimg1.png" 
                alt="Bottom Image"
               width={500}
                height={200}
                
              />
      
        <div className="bg-white p-4 sm:p-6">
          <time dateTime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>
      
          <a href="#">
            <h3 className="mt-0.5 text-lg text-gray-900">Campaign Optimization Agent</h3>
          </a>
      
          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          Auto-optimizes cross-channel campaigns (email, LinkedIn, ads) Custom campaign tools beyond Mailchimp
          </p>
        </div>
      </article>

        <article className="BlogCard overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
         <Image className='DetailsImage'
                src="/DetailsImage/Dimg2.png" 
                alt="Bottom Image"
               width={500}
                height={200}
                
              />
      
        <div className="bg-white p-4 sm:p-6">
          <time dateTime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>
      
          <a href="#">
            <h3 className="mt-0.5 text-lg text-gray-900">Pipeline Forecasting Agent</h3>
          </a>
      
          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
            pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
            mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
            dignissimos. Molestias explicabo corporis voluptatem?
          </p>
        </div>
      </article>

        <article className="BlogCard overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
         <Image 
                src="/DetailsImage/Dimg3.png" 
                alt="Bottom Image"
               width={500}
                height={200}
                
              />
      
        <div className="bg-white p-4 sm:p-6">
          <time dateTime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>
      
          <a href="#">
            <h3 className="mt-0.5 text-lg text-gray-900">How to position your furniture for positivity</h3>
          </a>
      
          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
            pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
            mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
            dignissimos. Molestias explicabo corporis voluptatem?
          </p>
        </div>
      </article>

        <article className="BlogCard overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
         <Image className='DetailsImage'
                src="/DetailsImage/Dimg4.png" 
                alt="Bottom Image"
               width={500}
                height={200}
                
              />
      
        <div className="bg-white p-4 sm:p-6">
          <time dateTime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>
      
          <a href="#">
            <h3 className="mt-0.5 text-lg text-gray-900">How to position your furniture for positivity</h3>
          </a>
      
          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
            pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
            mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
            dignissimos. Molestias explicabo corporis voluptatem?
          </p>
        </div>
      </article>

        <article className="BlogCard overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
         <Image 
                src="/DetailsImage/Dimg5.png" 
                alt="Bottom Image"
               width={500}
                height={200}
                
              />
      
        <div className="bg-white p-4 sm:p-6">
          <time dateTime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>
      
          <a href="#">
            <h3 className="mt-0.5 text-lg text-gray-900">How to position your furniture for positivity</h3>
          </a>
      
          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
            pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
            mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
            dignissimos. Molestias explicabo corporis voluptatem?
          </p>
        </div>
      </article>

        <article className="BlogCard overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
         <Image  className='DetailsImage'
                src="/DetailsImage/Dimg6.png" 
                alt="Bottom Image"
               width={500}
                height={200}
                
              />
      
        <div className="bg-white p-4 sm:p-6">
          <time dateTime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>
      
          <a href="#">
            <h3 className="mt-0.5 text-lg text-gray-900">How to position your furniture for positivity</h3>
          </a>
      
          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
            pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
            mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
            dignissimos. Molestias explicabo corporis voluptatem?
          </p>
        </div>
      </article>

 


  
  


     
      </div>
    </div>
  </div>
</section>
    )
}