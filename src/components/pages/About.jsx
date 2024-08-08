import Heading from "../Heading";

const About = () => {
  return (
    <section className="py-40 bg-greenColor text-white">
      <div className="container">
        <Heading title="about component" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-7">
          <div className="col-span-1">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="col-span-1">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
