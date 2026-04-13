import { use } from 'react'
const Models = ({modelPromise}) => {
    const models = use (modelPromise)
    console.log(models)
    return (
        
 <div>

    <div className='flex flex-col items-center mt-32'> 
    <h1 className='text-5xl font-extrabold'>Premium Digital Tools</h1>
 <p className='opacity-80 leading-tight pt-4'>Choose from our curated collection of premium digital products designed
to boost your productivity and creativity.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mx-auto px-4 lg:px-16 border-0 shadow-2xl rounded-2xl">
    {models.map((model) => (
        <div key={model.id} className='p-6 rounded-xl flex flex-col h-full text-left relative shadow-lg hover:shadow-2xl transition-shadow duration-300'>
      <div className=''>
              <div className='w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center'> 
               <img src={model.icon} alt={model.name} className='w-10 h-10 object-contain'/>
            </div>
            </div>
            <div className="absolute top-4 right-4">
  <span className="text-xs font-semibold px-4 py-2 rounded-full bg-indigo-100 text-indigo-600">
    {model.tag}
  </span>
</div>
          <div className='flex-grow'>
              <div>
                <h2 className='text-xl font-bold mt-4 '>{model.name}</h2>
                <p className='text-gray-600 mt-2 opacity-85'>{model.description}</p>
            </div>
            <div>
                <p className='text-2xl font-bold mt-4'>${model.price}/Mo</p>
            </div>
            <div>
                <ul className='text-left mt-4 space-y-2 opacity-85'>
                    {model.features.map((feature, index) => (
                        <li key={index} className='flex items-center'>
                            <svg className='w-5 h-5 text-green-500 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7'></path>
                            </svg>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
          </div>
            <div className='btn bg-gradient-to-r from-indigo-600 to-purple-600 hover:bg-blue-700 text-white py-2 px-4 rounded-2xl text-center font-bold mt-6 cursor-pointer w-full'>
                Buy Now
            </div>
        </div>
    ))}
</div>
</div>
 
    )

}
export default Models