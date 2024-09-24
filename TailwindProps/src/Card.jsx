import React from "react";

// const Card = (props)=>{
//     return (
//         <div className=" w-72 flex flex-col rounded-xl glass  min-h-72 mt-5 pt-3 ">
//         <div>
//           <img
//             src="https://media4.giphy.com/media/1gbqIc1fK8QgR3bHL7/giphy.gif?cid=790b7611a2f696d51a46ce892e420e77735707466a4abd3b&rid=giphy.gif&ct=g"
//             alt="test"
//             width="300"
//             height="300"
//             className="rounded-t-xl w-full"
//           />
//         </div>
//         <div className="flex flex-col py-3 px-3 pb-7 -mt-4 bg-black rounded-b-xl ">
//           <div className="flex justify-between">
//             <h3 className="font-RubikBold ">Bored ape nft accidental {props.about.name}</h3>
//             <h3 className="font-bold font-RubikBold">Price</h3>
//           </div>
//           <div className="flex  justify-between font-mono">
//             <p>#{props.number}</p>
//             <p>{props.price}</p>
//           </div>
//         </div>
//       </div>
//     )
// }


const Card = ({price,number = "1000",about})=>{ // default value if number not passed   
    return (
        <div className=" w-72 flex flex-col rounded-xl glass  min-h-72 mt-5 pt-3 ">
        <div>
          <img
            src="https://media4.giphy.com/media/1gbqIc1fK8QgR3bHL7/giphy.gif?cid=790b7611a2f696d51a46ce892e420e77735707466a4abd3b&rid=giphy.gif&ct=g"
            alt="test"
            width="300"
            height="300"
            className="rounded-t-xl w-full"
          />
        </div>
        <div className="flex flex-col py-3 px-3 pb-7 -mt-4 bg-black rounded-b-xl ">
          <div className="flex justify-between">
            <h3 className="font-RubikBold ">Bored ape nft accidental {about.name}</h3>
            <h3 className="font-bold font-RubikBold">Price</h3>
          </div>
          <div className="flex  justify-between font-mono">
            <p>#{number}</p>
            <p>{price}</p>
          </div>
        </div>
      </div>
    )
}

export default Card;