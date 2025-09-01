import BlogCard from "../components/BlogCard";
import { BlogData } from "../assets/mockdata";

export default function Blogs() {
  function renderCards() {
    let numberOfCards = 6;
    let cardsArray = [];

    for (let i = 0; i < numberOfCards; i++) {
      cardsArray.push(
        <BlogCard
          key={i}
          imgUrl={BlogData[i].imgUrl}
          title={BlogData[i].title}
          description={BlogData[i].description}
          date={BlogData[i].date}
        />
      );
    }

    return cardsArray;
  }

  return (
    <>
      <div className="header">
        <h3>Blogs</h3>
      </div>
      {renderCards()}
    </>
  );
}
