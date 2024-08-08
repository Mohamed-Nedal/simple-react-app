import avatar from "../../assets/avataaars.svg";
import Heading from "../Heading";

const Home = () => {
  return (
    <main className="py-20 bg-greenColor text-white">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-8">
          <img src={avatar} alt="Avatar" width={250} className="max-w-full" />

          <div className="text-center">
            <Heading title="start framework" />

            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
