import img1 from "../../images/1.jpg"
import img2 from "../../images/b2.webp"
import img3 from "../../images/3.jpg"


const Building = () => {
    return (
        <div className="max-w-7xl mx-auto px-4">

            <div className="text-center pt-14">
                <h1 className="text-3xl font-bold uppercase">About building</h1>
                <p className="text-balance">Efficient building management ensures safe, <br /> sustainable, and comfortable environments through <br /> proactive  
                maintenance, energy management,<br/> and advanced technology integration.</p>
            </div>

            <section className="py-6">
                <div className="flex flex-col lg:flex-row-reverse gap-8">

                    <div className="lg:w-1/2">

                       <ul className="list-disc p-6 space-y-5 mt-4">

                        <li><span className="font-bold text-base">Architectural Excellence</span><br /> Our building features cutting-edge architecture that blends aesthetics with practicality.</li>

                        <li><span className="font-bold text-base">Advanced HVAC Systems </span><br />We utilize state-of-the-art systems for optimal climate control, ensuring a comfortable environment throughout the year.</li>

                        <li><span className="font-bold text-base">Intelligent Lighting </span><br /> The building is equipped with energy-efficient lighting solutions that not only save energy but also provide excellent illumination.</li>
                        <li><span className="font-bold text-base">Robust Security  </span><br /> We maintain 24/7 surveillance and secure access controls to ensure the safety of all occupants.</li>
                        <li><span className="font-bold text-base">Sustainable Practices </span><br /> The building is designed to maximize space efficiency, offering a variety of layouts to meet diverse needs, from open-plan offices to private meeting rooms.</li>

                        <li><span className="font-bold text-base">Responsive Maintenance </span><br /> Our proactive maintenance program ensures that all building systems function flawlessly, with regular inspections and timely repairs to minimize disruptions.</li>


                       </ul>

                    </div>

                    <div className="grid grid-cols-2 gap-6 lg:w-1/2">
                    <img alt="" className="w-full  rounded shadow-sm h-72 aspect-square" src="https://images.unsplash.com/photo-1542447139-dea0a6257cee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QXJjaGl0ZWN0dXJhbCUyMEV4Y2VsbGVuY2V8ZW58MHx8MHx8fDA%3D" />
                    <img alt="" className="w-full  rounded shadow-sm h-72 aspect-square" src={img1} />
                    <img alt="" className="w-full  rounded shadow-sm h-72 aspect-square" src={img2} />
                    <img alt="" className="w-full  rounded shadow-sm h-72 aspect-square" src={img3} />
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Building;