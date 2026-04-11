const Section = () => {
    return ( 
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-10 flex flex-row justify-around items-center mt-11">
            <div className="">
                <h1 className="font-extrabold text-4xl lg:text-6xl">50 K+</h1>
                <p className="text-xl lg:text-2xl pt-3 opacity-80">Active User</p>
            </div>
            <div className="text-center lg:border-l border-white lg:pl-35">
                <h1 className="font-extrabold text-4xl lg:text-6xl">200+</h1>
                <p className="text-xl lg:text-2xl pt-3 opacity-80 ">Premium Tools</p>
            </div>
            <div className="text-center lg:border-l border-white lg:pl-35">
                <h1 className="font-extrabold text-4xl lg:text-6xl">4.9</h1>
                <p className="text-xl lg:text-2xl pt-3 opacity-80">Rating</p>
            </div>
            
        </div>
            
    )}
    export default Section;