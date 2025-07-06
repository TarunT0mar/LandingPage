import Image from 'next/image';
export default function Advertisement(){
   

return(
    <div className=" Advertisement-container grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
 
     <h2 className="text-4xl  text-gray-900 sm:text-3xl" >Trusted by Fast Moving Startups and enterprises</h2>
  
 <div>
       <Image 
        src="/companyLogo/microsoft.png" 
        alt="microsoft logo"
        width={100}
        height={150}
      />

            <Image 
        src="/companyLogo/slack.png" 
        alt="microsoft logo"
         width={100}
        height={150}
      />
              <Image 
        src="/companyLogo/meta.png" 
        alt="microsoft logo"
         width={100}
        height={150}
      />
              <Image 
        src="/companyLogo/Google.png" 
        alt="microsoft logo"
         width={100}
        height={150}
      />
              <Image 
        src="/companyLogo/intuit.png" 
        alt="microsoft logo"
         width={100}
        height={150}
      />
              <Image 
        src="/companyLogo/clickup.png" 
        alt="microsoft logo"
         width={100}
        height={150}
      />
  </div>
</div>
)
}