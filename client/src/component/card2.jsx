
import React from 'react'

const card2 = () => {

    let mdata = {
        title:"tue",
        temp:"33",
        day:"sunny"
    }
  return (
    <>
    <div className="lg:card ssm:card-normal bg-base-100 w-96 shadow-xl p-2  rounded-xl">
  <div className="card-body flex flex-col justify-center items-center p-2">
    <p className="mb-2 text-xl">{mdata.title}</p>
    <h2 className="card-title mb-2 text-xl font-semi-bold">{mdata.temp}</h2>
    <div className="card-actions justify-center">
     <p className text-xl>{mdata.day}</p>
    </div>
  </div>
</div>
    </>
  )
}

export default card2
