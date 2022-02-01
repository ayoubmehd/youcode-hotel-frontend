import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Good from '../Components/Good/Good'
import AppButton from "../Components/AppButton";
import Modal from "../Components/Modal/Modal";
function Goods() {

    const [toggle, setToggle] = useState(false)
    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3006/api/v1/goods`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    // console.log(APIData)

    return (
        <>
        <div className="antialiased bg-gray-200 text-gray-900 font-sans p-6">
           <div class="container mx-auto">
           <div className="flex justify-between mb-3">
                <h1 className="text-2xl font-bold">Goods</h1>
                <AppButton>
                    <span onClick={() => setToggle(!toggle)}>
                        New Good
                    </span>
                </AppButton>
            </div>
            <div class="flex flex-wrap -mx-4">
                {/* <Good/>
                <Good/>
                <Good/>
                <Good/> */}

                
                {
                APIData?.data?.map((good, index) =>
                <Good  />
                 )
                }


                <Modal toggle={[toggle, setToggle]}/>

            </div>
           </div>
        </div>
       
        </>
      );
}

export default Goods;