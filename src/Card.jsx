import React from "react";
export default function Card({ item: props }) {
  return (
    <section className="card-container">
      <img className="card__img" src={`/image/${props.img}`} />
      <div className="card__info">
        <div className="card__location">
          <img src="/image/pointer.png" />
          <span>{props.country}</span>
          <a href={props.mapUrl}>View on Google Maps</a>
        </div>
        <h3 className="card__title">{props.title}</h3>
        <span className="card__date">{props.date}</span>
        <p className="card__description">{props.description}</p>
      </div>
    </section>
  );
}
