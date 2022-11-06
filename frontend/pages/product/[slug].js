import { useRouter } from 'next/router'

const Slug = () => {
  const router = useRouter()
  const { slug } = router.query

  return <>

<section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
            <div className=" mx-auto flex flex-wrap">
                <div className='flex justify-center items-start md:w-1/2'  ><img alt="ecommerce" className="rounded"
                    src="https://www.bigbasket.com/media/uploads/p/l/40033819-2_6-fresho-apple-shimla.jpg"/></div>
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Apple</h1>
                    
                    <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha
                        taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage
                        brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle
                        pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                        <div className="flex items-center">
                            <span className="mr-3">Qunatity</span>
                            <div className="relative">
                                <select
                                    className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-500 text-base pl-3 pr-10">
                                    <option>250g</option>
                                    <option>500g</option>
                                    <option>1kg</option>
                                    <option>2kg </option>
                                </select>
                                <span
                                    className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4 mb-20">
                        <span className="title-font font-semibold text-gray-900 text-4xl ">₹40</span>

                        <div className='mb-20'>
                            <div className="flex space-x-5 mt-10 ">
                                <button
                                    className="flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded-full ">Buy Now</button>

                                <button
                                    className="flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded-full">Add
                                    To Cart</button>
                            </div>
                        </div>


                        <div className="flex space-x-10 mt-20">
                            <form className="border-black">
                                <div className="form-floating ">
                                    <input className=" rounded-md w-52 h-10 border-10 border-black p-4" type="text"
                                         placeholder="Enter Delivery Pincode" required/>
                                </div>
                            </form>
    
                            <button
                                className="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded-full">Check</button>
                        </div>
                        <hr/>
                        <div>
                            <div className="font-bold text-2xl">Description</div>
                            
                            <p>Apple Royal Gala Premium Imported 4 pc (Approx 750 g - 850 g)
                                Apple Royal Gala is a honey-sweet apple with hints of vanilla and a floral aroma. Its flesh is firm, dense with a soft texture and low acidity. The skin is thin, blushed with orange and red shades, and vertically striped or speckled in darker hues.
                                Royal Gala is one of the b</p>
                        </div>

                        <hr/>
                        <div className='space-y-4'>
                            <div className="font-bold text-2xl">Product Information</div>
                            
                            <p className="font-bold">Genral Information</p>
                            <div className="flex border-2 justify-center rounded-md ">
                                <div className="font-bold bg-slate-300 px-20 py-4 rounded-md w-1/2 text-center">Brand</div>
                                <div className="px-20 py-4 rounded-md w-1/2 text-center">Empire</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>



    </>
}

export default Slug