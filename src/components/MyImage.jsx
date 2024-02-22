import React, { useState } from 'react'

const MyImage = ({ image = [{ url: "" }] }) => {
    const [mainImage, setMainImage] = useState(image[0]);
    return (
        <div className='container'>

            <div className='d-flex flex-row'>
                <div className='p-2'>

                    {
                        image.map((curEle, index) => {
                            return (
                                <div className='p-1' key={index}>
                                    <img 
                                        style={{objectFit: "contain"}}
                                        width={150} 
                                        src={curEle.url} 
                                        alt={curEle.filename} 
                                        key={index} 
                                        onClick={() => setMainImage(curEle)}/>

                                </div>
                            )
                        })

                    }
                </div>


                <div className='my-auto' >
                    <img src={mainImage.url} alt={mainImage.filename} width={"300rem"} />
                </div>
            </div>
        </div>
    )
}

export default MyImage
