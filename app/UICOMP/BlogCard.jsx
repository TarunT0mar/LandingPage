import Image from 'next/image';

export default function BlogCard(){
    return(
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
    )
}