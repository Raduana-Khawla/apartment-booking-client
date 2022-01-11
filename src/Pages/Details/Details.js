import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";

const Details = () => {
  const [service, setService] = useState({});
  const { user } = useAuth();
  const { serviceId } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.email = user?.email;
    data.status = "pending";
    fetch("https://afternoon-wave-99627.herokuapp.com/addOrders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        alert("Ordered Successfully!");
      });
    console.log(data);
  };

  useEffect(() => {
    fetch(
      `https://afternoon-wave-99627.herokuapp.com/singleService/${serviceId}`
    )
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceId]);

  return (
    <>
      <h1>Property Details</h1>
      <div className="bg my-3 p-5">
        <div className="details-container my-3 background">
          <div className="row container">
            <div className="col-md-6">
              <div className="card property1 rounded w-75 h-75 p-3 m-5">
                <img className="w-100 h-50" src={service.imageURL} alt="" />
                <h3>{service?.name}</h3>
                <p>{service?.description}</p>
                <h1>Price: ${service?.price}</h1>
              </div>
            </div>
            <div className="col-md-6 my-5">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("name")}
                  placeholder="Name"
                  defaultValue={service?.name}
                  className="p-2 m-2 w-100 input-field"
                />
                <input
                  {...register("description")}
                  defaultValue={service?.description}
                  placeholder="Description"
                  className="p-2 m-2 w-100 input-field"
                />
                <input
                  {...register("image")}
                  placeholder="Image Link"
                  defaultValue={service?.imageURL}
                  className="p-2 m-2 w-100 input-field"
                />
                <input
                  {...register("price")}
                  placeholder="Price"
                  defaultValue={service?.price}
                  type="number"
                  className="p-2 m-2 w-100 input-field"
                />
                <select {...register("model")} className="p-2 m-2 w-100">
                  <option value="premium">premium</option>
                  <option value="classic">classic</option>
                  <option value="business">business</option>
                </select>
                <br />
                {errors.exampleRequired && <span>This field is required</span>}
                <input
                  type="submit"
                  value="Order now"
                  className="btn btn-info w-50"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
