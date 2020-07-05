import React from 'react';



const Contact = () =>{

  const click = ()=>{
    alert("database not connected!!");
  }
  return(
    <>
    <div className="my-5">
    <h1 className="text-center">Contact Us</h1>
    </div>
    <div className="container contact_div">
    <div className="row">
    <div className="col-md-6 col-10 mx-auto">
    <form>
    <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Full Name</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Name"/>
  </div><br/>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div><br/>
  <div class="form-group">
    <label for="exampleFormControlInput1">Phone Number</label>
    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter Phone Number"/>
  </div><br/>
  
  
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Enter Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div><br/>
  <button type="submit" class="btn btn-primary mb-2" onClick={click}>Submit</button>

</form>
</form>

    </div>

    </div>

    </div>

    </>

  );
};

export default Contact;
