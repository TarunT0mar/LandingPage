import Image from 'next/image';
export default function ExplainSection(){
    return(
        <section className="Section overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
 <div className="Explain-container">
    <div className="Explain-details">
        <h1 className="scroll-m-20  text-[#FF863D] text-4xl font-extrabold tracking-tight text-balance">
      How it Works?
    </h1>
        <p className='scroll-m-20 text-2xl font-semibold tracking-tight'>A Lorem ipsum dolor sit amet consectetur. Lacus id turpis ut nulla dui proin nunc dui. Tellus blandit morbi.</p>
    </div>
    <div className="show-section">
       <div className='image-container'>
        <div className='Section-image'>
      <Image 
            src="/image1.png" 
            alt="Bottom Image"
           width={500}
            height={200}
            className='img-tag'
          />
        </div>
        <div className='image2'>
            <div className='Section-image2'>
                 <Image 
            src="/image2.png" 
            alt="Bottom Image"
           width={100}
            height={200}
            className='img-tag'
          />
            </div>
            <div className='Section-image3'>
                <Image 
            src="/image3.png" 
            alt="Bottom Image"
           width={500}
            height={200}
            className='img-tag'
          />
            </div>

           
        </div>
    
       </div>
       <div className='Detail-show-section'>
          <h1 className="scroll-m-20  text-[#FF863D] text-4xl font-extrabold tracking-tight text-balance">
      Step 1:
    </h1>
     <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      You describe what you need
    </h3>
     <p className="scroll-m-20 border-b pb-2 text-3x1 font-semibold tracking-tight first:mt-0">
      Lorem ipsum dolor sit amet consectetur. Lacus id turpis ut nulla dui proin nunc dui. Tellus blandit morbi.
    </p>
     <h1 className="scroll-m-20  text-[#797979] text-4xl font-extrabold tracking-tight text-balance">
      Step 2:
    </h1>
    <h3 className="scroll-m-20 border-b text-2xl text-[#797979] font-semibold tracking-tight">
    Ai drafts the base app 
    </h3>

    <h1 className="scroll-m-20  text-[#797979] text-4xl font-extrabold tracking-tight text-balance">
      Step 3:
    </h1>
    <h3 className="scroll-m-20 border-b text-2xl text-[#797979] font-semibold tracking-tight">
    10x engineers refine and customize 
    </h3>

    <h1 className="scroll-m-20  text-[#797979] text-4xl font-extrabold tracking-tight text-balance">
      Step 4:
    </h1>
    <h3 className="scroll-m-20 border-b text-2xl text-[#797979] font-semibold tracking-tight">
   you get your internal tool ready
    </h3>
       </div>
    </div>
 </div>


</section>
    )
}