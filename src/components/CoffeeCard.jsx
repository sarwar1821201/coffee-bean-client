//import React from 'react';

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({coffee}) => {
    const {_id,name,quantity,supplier,taste,category,details,photo} =coffee;

    const handleDeleteButton= (_id)=> {
        console.log('dilam delete kore', _id )
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
          
            console.log('delete confirm')
           
            fetch(`http://localhost:5000/coffee/${_id}`, {
              method: 'DELETE'
            }  )
            .then(  res=> res.json() )
            .then(data=> {
              console.log(data)
              if(data.deletedCount >0 ){
                   Swal.fire({
              title: "Deleted!",
              text: "Your Coffee has been deleted.",
              icon: "success"
            });
              }
            })

          }
        });
    }

    return (
        
      <div className="card card-side bg-base-100 shadow-xl">
      <figure><img  src={photo} alt="Album"/></figure>
      <div className="flex justify-between border border-4 w-full pr-4">
        
        <div>
        <h2 className="card-title">Name: {name} </h2>
        <p>{quantity}</p>
        <p>{supplier}</p>
        <p>{taste}</p>
        </div>

        <div className="card-actions justify-end">
        <div className="join join-vertical space-y-4 ">
  <button className="btn join-item">View</button>
  <Link to={`updateCoffee/${_id}`} >
  <button className="btn join-item">Edit</button>
  </Link>
  <button onClick={()=> handleDeleteButton(_id) }  className="btn bg-orange-500 join-item">X</button>
</div>
        </div>
      </div>
    </div>
        
    );
};

export default CoffeeCard;