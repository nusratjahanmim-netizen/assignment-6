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
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
    {models.map((model) => (
        <div key={model.id} className=''>
            <div> 
               <img src={model.icon} alt={model.name} className='w-64 h-64 object-cover rounded-lg'/>
            </div>
        </div>
    ))}
</div>
</div>
 
    )

}
export default Models