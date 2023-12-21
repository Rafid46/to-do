import image1 from "../../assets/images/8609147_5836.png";
const Section = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div>
          <p className="text-4xl font-semibold text-blue-500">
            Unlock productivity with our specialized ToDo platform, <br />{" "}
            designed for the dynamic needs of students and programmers.
          </p>
        </div>
        <div>
          <img className="w-[500px]" src={image1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section;
