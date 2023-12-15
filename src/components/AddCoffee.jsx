//import React from 'react';

const AddCoffee = () => {
    const handleAddCoffee= (event) =>{
        event.preventDefault();
        const name= event.target.name.value;
        const quantity= event.target.quantity.value;
        const supplier= event.target.supplier.value;
        const taste= event.target.taste.value;
        const category= event.target.category.value;
        const details= event.target.details.value;
        const photo= event.target.photo.value;

        console.log(name,quantity,supplier,taste,category,details,photo);
        const newCoffee= {name,quantity,supplier,taste,category,details,photo};
        console.log(newCoffee);

        fetch('http://localhost:5000/coffee', {

            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res=> res.json() )
        .then(data =>{
            console.log(data)
        } )

    }

    return (
        <div className="p-24 bg-[#F4F3F0]" >
            <h2 className="text-3xl font-extrabold" >Add a Coffee</h2>

      <form onSubmit={handleAddCoffee} >
    {/* form name and quantity row */}
       <div className="md:flex">

     <div className="form-control md:w-1/2 "  >
        <label className="label">
       <span className="label-text" > Coffee Name </span>
        </label>
       
       <label className="input-group" >
         {/* <span>Name</span> */}
         <input type="text" placeholder="Coffee Name" name="name" className="input input-bordered w-full " />
       </label>

     </div>

     <div className="form-control md:w-1/2 ml-4"  >
        <label className="label">
       <span className="label-text" > Avaliable Quantity </span>
        </label>
       
       <label className="input-group" >
         {/* <span>Name</span> */}
         <input type="text" placeholder="Quantity" name='quantity' className="input input-bordered w-full " />
       </label>

     </div>

       </div>

       {/* form supplier and test row */}
       <div className="md:flex">

     <div className="form-control md:w-1/2 "  >
        <label className="label">
       <span className="label-text" > Supplier Name </span>
        </label>
       
       <label className="input-group" >
         {/* <span>Name</span> */}
         <input type="text" placeholder="Supplier" name="supplier" className="input input-bordered w-full " />
       </label>

     </div>

     <div className="form-control md:w-1/2 ml-4"  >
        <label className="label">
       <span className="label-text" > Taste </span>
        </label>
       
       <label className="input-group" >
         {/* <span>Name</span> */}
         <input type="text" placeholder="Taste" name='taste' className="input input-bordered w-full " />
       </label>

     </div>

       </div>

       {/* form category and details row */}
       <div className="md:flex">

     <div className="form-control md:w-1/2 "  >
        <label className="label">
       <span className="label-text" >Category </span>
        </label> 
       
       <label className="input-group" >
         {/* <span>Name</span> */}
         <input type="text" placeholder="Category" name="category" className="input input-bordered w-full " />
       </label>

     </div>

     <div className="form-control md:w-1/2 ml-4"  >
        <label className="label">
       <span className="label-text" >Details </span>
        </label>
       
       <label className="input-group" >
         {/* <span>Name</span> */}
         <input type="text" placeholder="Details" name='details' className="input input-bordered w-full " />
       </label>

     </div>

       </div>


       {/* form photo row */}
       <div className="md:flex">

     <div className="form-control md:w-full "  >
        <label className="label">
       <span className="label-text" > Photo Url </span>
        </label>
       
       <label className="input-group" >
         {/* <span>Name</span> */}
         <input type="text" placeholder="Photo Url" name="photo" className="input input-bordered w-full " />
       </label>

     </div>

   

       </div>

       <input type="submit" value="Add Coffee" className="btn btn-block mt-4 bg-indigo-600 " />

      </form>


        </div>
    );
};

export default AddCoffee;