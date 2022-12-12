import React from "react";

const Card = ({ item }) => {
    return (
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-2 mx-5">
                    {item.map((Val) => {
                        return (

                            <div className="col g-3">
                                <div className="card bg-light shadow text-center" key={Val.id}>
                                    <img src={Val.image} alt={Val.title} className="card-img-top" />
                                    <div className="card-body">
                                        <div className="card-title fs-4">

                                            {Val.first_name + " " + Val.last_name}<br />
                                            {Val.email} <br />
                                            {Val.gender} <br />
                                            {Val.country} <br />

                                        </div>
                                        <div className="card-text">{Val.desc}</div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Card;