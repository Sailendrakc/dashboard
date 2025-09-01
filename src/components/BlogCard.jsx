export default function BlogCard({ imgUrl, title, description, date }) {
  return (
    <div className="blog-card">
      <img src={imgUrl} alt="Blog Image" className="blog-image" />
      <div className="blog-title">
        <h3>{title}</h3>
      </div>
      <div className="blog-description">
        <p>{description}</p>
      </div>
      <div className="blog-date">
        <p>{date}</p>
      </div>
    </div>
  );
}
