import Card from "./Card";
import React from 'react';
import ReactDOM from 'react-dom';

function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Pets" img="card1.png" text="We are a dog daycare and boarding facility for all sizes, breeds, and ages of dogs. We offer every dog in our care a safe, fun, clean, and healthy environment to play and socialize in. We have large indoor and outdoor play areas that allow our four-legged guests to have a full day of play from morning to night. We provide a comfortable, low-stress home away from home for your four-legged loved ones!" />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Day Care" img="card2.png" text="Helping Hands provides childcare and early education programs for children 6 months to 6 years old. At Helping Hands, your child will build a strong educational and social foundation with all the fun of childhood mixed in! Our childcare and early education programs focus on school readiness, social, emotional and intellectual development, literacy, problem solving, and what every child needs -- love and care!" />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Elderly Care" img="card3.png" text="The later years of life can be especially challenging, but Helping Hands is here to help. At Helping Hands, we listen to the needs of our clients in order to understand their limitations and discuss potential solutions. We work with our clients to customize options that will help them lead the lives they want." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
