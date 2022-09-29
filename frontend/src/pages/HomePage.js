import CategoryCardComponent from "../components/CategoryCardComponent";
import ProductCarouselComponent from "../components/ProductCarouselComponent";
import { Container, Row } from "react-bootstrap";

const HomePage = () => {
  const categories = [
    "Tablets",
    "Monitors",
    "Games",
    "Printers",
    "Softwares",
    "Cameras",
    "Books",
    "Videoos",
  ];
  return (
    <>
      <ProductCarouselComponent />
      <Container>
        <Row xs={1} md={2} className="g-4 mt-5">
          {categories.map((category, idx) => (
            <CategoryCardComponent key={idx} category={category} idx={idx} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
