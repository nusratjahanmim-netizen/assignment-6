// import bannerImg from 'public/banner.png'
const Banner = () => {
    return ( 
        <div className="hero">
         <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-6xl mx-auto px-10 mt-20 lg:px-20 gap-4">
        <div className="banner-left w-full lg:w-1/2 gap-3 flex flex-col overflow-hidden">
 <div className="banner-text  flex flex-col gap-2.5 pr-6">
       <div className="glow-btn">  
        <p className="inline-flex items-center px-4 py-2 rounded-4xl bg-indigo-100">
            <span className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 border-2 border-indigo-300 shadow-[4px_4px_10px_rgba(99,102,241,0.9),8px_8px_20px_rgba(139,92,246,0.7)]"></span>
            <span className=" ml-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">New: AI-Powered Tools Available</span>
            </p>
          </div>
    <div className="ban-heading">  
              <h1 className="font-extrabold text-4xl lg:text-5xl whitespace-nowrap">Supercharge Your</h1>
            <h1 className="font-extrabold text-4xl lg:text-5xl whitespace-nowrap">Digital Workflow</h1>
            <p className="text-slate-500 font-light pt-4 ">Access premium AI tools, design assets, templates, and productivity <br/>
software—all in one place. Start creating faster today. <br/>
 Explore Products
</p>
</div>
<div className="buttons flex gap-6">
    <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:bg-gradient-to-r hover:from-indigo-900 hover:to-purple-900 text-white font-bold py-2 px-4 rounded-full border-0">
    Explore Products
</button>
<button className="bg-white text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text py-2 px-4 rounded-full border border-indigo-600 flex items-center gap-2.5 transition duration-300  hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white hover:bg-clip-border"> <span><img src="/Play.png" alt="" srcset="" /></span>
    Watch Demo
</button>
</div>
 </div>

        </div>
        
        <div className="banner-right w-full lg:w-1/2 h-auto pl-0 lg:pl-10">
            <img src="/banner.png" />
        </div>
        </div> 
        
        </div>
    );
};

export default Banner;