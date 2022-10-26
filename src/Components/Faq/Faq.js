import React from "react";
import './Faq.css'
const Faq = () => {
  return (
    <div className="faq">
      <div className="faQ">
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-green-600 text-primary-content rounded-lg peer-checked:bg-green-600 rounded-lg border-l-4 peer-checked:text-secondary-content">
            Why Learning academy university is the best?
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-green-600 rounded-lg border-l-4 peer-checked:text-secondary-content shadows">
            <p>It is the largest public research university in Bangladesh</p>
          </div>
        </div>
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-green-600 text-primary-content rounded-lg peer-checked:bg-green-600 rounded-lg border-l-4 peer-checked:text-secondary-content">
            why should i study at Learning academy university
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-green-600 rounded-lg border-l-4 peer-checked:text-secondary-content shadows">
            <p>
              The Learning academy university is maybe the only educational institution in the world that is entirely
              related to the rise, birth, and progress of a nation. DU is glorious as an institution that nurtures all
              the cultural, social, and political traditions of the country.
            </p>
          </div>
        </div>
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-green-600 text-primary-content rounde rounded-lg peer-checked:bg-green-600 rounded-lg border-l-4 peer-checked:text-secondary-content">
            What are the minimum marks to get a chance in learning academy university a unit?
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-green-600 rounded-lg border-l-4 peer-checked:text-secondary-content shadows">
            <p>
              What are the minimum requirement to get a chance in learning academy university a unit? The candidate must
              have at least second class or second division with minimum 50 percent marks in all the examination (SSC,
              HSC, Dakhil, Alim, O level, A level).
            </p>
          </div>
        </div>
      </div>
      <div className="faQ">
      <div className="collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-green-600 text-primary-content rounde rounded-lg peer-checked:bg-green-600 rounded-lg border-l-4 peer-checked:text-secondary-content">
          How is Learning academy university ranked in the world?
        </div>
        <div className="collapse-content bg-green-600 text-primary-content peer-checked:bg-green-600 rounded-lg border-l-4 peer-checked:text-secondary-content shadows">
          <p>
            Learning academy university is one of the top public universities in Dhaka, Bangladesh. It is ranked
            #801-1000 in QS World University Rankings 2023.
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

export default Faq;
