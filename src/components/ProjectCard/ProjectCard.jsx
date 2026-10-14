import { Link } from "react-router-dom";
import "./ProjectCard.css";

export default function ProjectCard({ to, image, alt = "", tag, title, position, children }) {
  return (
    <Link to={to} className="card">
      {image ? (
        <img src={image} alt={alt} loading="lazy" style={{ objectPosition: position }} />
      ) : (
        <span className="card__icons" aria-hidden="true">
          {children}
        </span>
      )}
      <span className="card__tag mono">{tag}</span>
      <h2 className="card__title">{title}</h2>
    </Link>
  );
}
