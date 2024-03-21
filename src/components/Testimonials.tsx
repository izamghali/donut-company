import React from "react"

export default function Testimonials() {

    let tests = [
        {
          name: 'Michael Scott',
          job: 'Manager',
          address: 'USA',
          testi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus pariatur fugit quae aliquid. Tenetur error nihil optio magni blanditiis consequatur! '
        },
        {
          name: 'Tuco Salamanca',
          job: 'Sales',
          address: 'MEX',
          testi: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, unde.'
        },
        {
          name: 'Angela Sasono',
          job: 'Accountant',
          address: 'INA',
          testi: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi rerum saepe, sed velit est pariatur!'
        },
    ]

    return (
        <section className="lg:py-60 py-20 std-duration">
        
            <h2 className="text-center mb-20">What they say about our products</h2>

            <div className="flex gap-10 justify-center flex-wrap ">
                
              {
                tests.map((item, idx) => {
                  return <div className="relative" key={idx}>
                  
                    {/* card */}
                    <div className="card min-h-[19rem] w-80 bg-base-100 shadow-xl">

                      <div className="card-body">
                        <div className="relative">
                          <svg className="bi bi-quote w-14 absolute -top-12" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
                          </svg>
                        </div>
                        <p>{item.testi}</p>
                        <h3 className="card-title">
                          {item.name}
                        </h3>
                        <div className="card-actions justify-start">
                          <div className="badge badge-outline">{item.job}</div> 
                          <div className="badge badge-outline">@ {item.address}</div>
                        </div>
                      </div>
                      
                    </div>
                    
                  </div>
                })
              }

            </div>

        </section>
    )
};

