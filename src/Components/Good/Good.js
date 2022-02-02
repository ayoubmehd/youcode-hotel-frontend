function Good(props) {

  console.log(props.data)


   
    return (
        <>

        
      <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
        <a href="" className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div className="relative pb-48 overflow-hidden">
          <img className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt=""/>
        </div>
        <div className="p-4">
          <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">{props.data.goodType}</span>
          <h2 className="mt-2 mb-2  font-bold">{props.data.title} </h2>
          <p className="text-sm">{props.data.description}</p>
          <div className="mt-3 flex items-center">
            <span className="font-bold text-xl">{ props.data.price.$numberDecimal}</span>&nbsp;<span className="text-sm font-semibold">€</span>
          </div>
        </div>
        <div className="p-4 border-t border-b text-xs text-gray-700">
          <span className="flex items-center mb-1">
            <i className="far fa-clock fa-fw mr-2 text-gray-900"></i>quantity : {props.data.quantity}
          </span>
             
        </div>
      </a>
  
  </div>
        </>
      );
}

export default Good;