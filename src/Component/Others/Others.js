import React from 'react';
const Others = () => {
    return (
        <div className="text-center container p-5">
           <h2 className="mb-5">Who We Are?</h2>
           <div className="row">
               <div className="col-md-6">
                    <img style={{width:'100%'}}  src='http://wordpressboss.com/opb/vtravel-demo/assets/images/about.png'alt="" />
               </div>
               <div className="col-md-6">
                   <h3>We Are Travel Experts</h3>
                   <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.
                    </p>
                    <button className="btn btn-success">Learn More</button>
               </div>
           </div>
        </div>
    );
};

export default Others;