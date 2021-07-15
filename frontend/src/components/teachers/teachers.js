import React from 'react';
import './teachers.css';
import person1 from '../image/p1.jpg'
import person2 from '../image/p2.jpg'
import person3 from '../image/p3.jpg'
import person4 from '../image/p5.jpg'

function teachers() {
  return (   <div>
              <div className="row2">
      <div className='cards'>
      <div className="h1FC">Teachers</div>
      <div className='cards__container'>
              <div className='cards__wrapper'>
                  
              <div className="column0">
                  <div className="flip-card">
                      <div className="flip-card-inner">
                          <div className="flip-card-front">
                              <img src={person1} alt="Avatar" style={{ width: '200px', height: '200px' }} />
                              <h10 id="h10N">නාරද කරුණාතිලක</h10>
                          </div>
                          <div className="flip-card-back">
                              <h10 id="h10">Narada Karunathilaka</h10>

                              <p id="p1">Government School Teacher and Owner of the site</p>
                              <p>රජයේ පාසල් ගුරු</p>


                          </div>
                      </div>
                  </div>
                  </div>
          </div>
          </div>
          </div>
          </div>

    <div className="row1">
      <div className='cards'>
          
          <div className='cards__container'>
              <div className='cards__wrapper'>
              
              <div className="column1">
                  <div className="flip-card">
                      <div className="flip-card-inner">
                          <div className="flip-card-front">
                              <img src={person1} alt="Avatar" style={{ width: '200px', height: '200px' }} />
                              <h10 id="h10N">Jenny Smith</h10>

                          </div>
                          <div className="flip-card-back">
                              <h10 id="h10">Jenny Smith</h10>

                              <p>Architect</p>
                          </div>
                      </div>
                  </div>
                  </div>

                  <div className="column1">
                  <div className="flip-card">
                      <div className="flip-card-inner">
                          <div className="flip-card-front">
                              <img src={person2} alt="Avatar" style={{ width: '200px', height: '200px' }} />
                              <h10 id="h10N">John Woster</h10>

                          </div>
                          <div className="flip-card-back">
                              <h10 id="h10">John Woster</h10>

                              <p>Senior Software Engineer</p>
                          </div>
                      </div>
                  </div>

                  </div>
                  <div className="column1">
                  <div className="flip-card">
                      <div className="flip-card-inner">
                          <div className="flip-card-front">
                              <img src={person3} alt="Avatar" style={{ width: '200px', height: '200px' }} />
                              <h10 id="h10N">Paul Harrison</h10>
                          </div>
                          <div className="flip-card-back">
                              <h10 id="h10">Paul Harrison</h10>

                              <p>CEO at ABC company</p>
                          </div>
                      </div>
                  </div>
                  </div>
                  <div className="column1">
                  <div className="flip-card">
                      <div className="flip-card-inner">
                          <div className="flip-card-front">
                              <img src={person4} alt="Avatar" style={{ width: '200px', height: '200px' }} />
                              <h10 id="h10N">Mark Henry</h10>

                          </div>
                          <div className="flip-card-back">
                              <h10 id="h10">Mark Henry</h10>
                              <p>Lecturer Amarican University</p>
                          </div>
                      </div>
                  </div>
                  </div>


                  </div>
              </div>
          </div>
      </div>
      

      </div> 
  );
}


export default teachers;