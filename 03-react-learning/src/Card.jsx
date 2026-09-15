import { useRef } from "react";

function Card() {
  const reference = useRef(null);
  function goContact() {
    reference.current.scrollIntoView({
      behaviour: "smooth",
    });
  }
  return (
    <>
      <button onClick={goContact} className="m-2 btn btn-primary">
        Go to Contact
      </button>
      <button onClick={goContact} className="m-2 btn btn-primary">
        Go to About
      </button>
      <button onClick={goContact} className="m-2 btn btn-primary">
        Go to Home
      </button>
      <div className="m-4 p-2 fs-2 lh-2">
        <nav></nav>
        <h1>Heading-1</h1>
        <div className="Home" ref={reference}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
          deserunt perspiciatis tenetur fuga eum unde similique, aliquam laborum
          hic accusantium magni impedit nobis dicta dignissimos dolore. Ipsum
          mollitia eligendi facilis! Itaque ut ullam qui dicta repudiandae, enim
        </div>
        <h1>Heading-2</h1>

        <div className="About" ref={reference}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
          deserunt perspiciatis tenetur fuga eum unde similique, aliquam laborum
          hic accusantium magni impedit nobis dicta dignissimos dolore. Ipsum
          mollitia eligendi facilis! Itaque ut ullam qui dicta repudiandae, enim
        </div>
        <h1>Heading-3</h1>

        <div className="Contact" ref={reference}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
          deserunt perspiciatis tenetur fuga eum unde similique, aliquam laborum
          hic accusantium magni impedit nobis dicta dignissimos dolore. Ipsum
        </div>
      </div>
    </>
  );
}
export default Card;
