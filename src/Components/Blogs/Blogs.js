import React from "react";
import './Blog.css'
const Blogs = () => {
  return (
    <div className="faq">
      <div className="faQ">
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-green-600 text-primary-content rounded-lg peer-checked:bg-green-600 rounded-lg border-l-4 peer-checked:text-secondary-content">
          what is cors ?
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-green-600 rounded-lg border-l-4 peer-checked:text-secondary-content shadows">
            <p>CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API</p>
          </div>
        </div>
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-green-600 text-primary-content rounded-lg peer-checked:bg-green-600 border-l-4 peer-checked:text-secondary-content">
          Why are you using firebase? What other options do you have to implement authentication?
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-green-600 rounded-lg border-l-4 peer-checked:text-secondary-content shadows ">
            <p>
            Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together  Firebase can be used when you do not want to spend a lot of time developing your own backend. It can be used for rapid development. <br />
            and the other options is <br /> 
            Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication
            </p>
          </div>
        </div>
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-green-600 text-primary-content rounde rounded-lg peer-checked:bg-green-600 rounded-lg border-l-4 peer-checked:text-secondary-content">
          How does the private route work?
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-green-600 rounded-lg border-l-4 peer-checked:text-secondary-content shadows">
            <p>
            The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)
            </p>
          </div>
        </div>
      </div>
      <div className="faQ">
      <div className="collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-green-600 text-primary-content rounde rounded-lg peer-checked:bg-green-600 rounded-lg border-l-4 peer-checked:text-secondary-content">
        What is Node? How does Node work?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-green-600 rounded-lg border-l-4 peer-checked:text-secondary-content shadows">
          <p>
          Node.js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node.js wastes no time or resources on waiting for I/O requests to return
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-green-600 text-primary-content  -md peer-checked:bg-green-600 rounded-lg border-l-4 peer-checked:text-white">
          How many hostels are there in Learning academy university?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-green-600 rounded-lg border-l-4 peer-checked:text-secondary-content shadows">
          <p>
            In 1969, the new name of Dhaka Hall was given as a tribute to Dr. Md. Shahidullah. Altogether Learning
            academy university now has 23 halls and hostels..
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Blogs;
