import React from 'react';

const Card = () => {
  return (
    <div className="col-md-3">
        <div className="card">
            <img className="card-img-top" src="http://placehold.it/500x325" alt="Card cap img"></img>
            <div className="card-body">
                <h5 className="card-title text-center">Card title</h5>
                <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quia dicta molestias. 
                </p>
                <div className="d-flex justify-content-center">
                <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>
    </div>    
    
  );
};

export default Card;