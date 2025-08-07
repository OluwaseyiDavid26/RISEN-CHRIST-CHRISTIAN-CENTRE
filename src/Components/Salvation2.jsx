import CrossImg from "../assets//cross2.jpg";

import AckImg from "../assets/cross-img.jpg";
import BelieveImg from "../assets/hand-img.jpg";
import ConfessImg from "../assets/heart-img.jpg";

function Salvation2() {
  const steps = [
    {
      title: "Acknowledge",
      description: "That you need Jesus as your Savior",
      icon: AckImg,
    },
    {
      title: "Believe",
      description: "That Jesus died and rose again for you",
      icon: BelieveImg,
    },
    {
      title: "Confess",
      description: "With your mouth that Jesus is Lord",
      icon: ConfessImg,
    },
  ];

  return (
    <section className="px-4 py-12 text-center">
      {/* Cross Image Above */}
      <div className="mb-8 flex justify-center">
        <img
          src={CrossImg}
          alt="Cross"
          className="h-60w-60 relative top-[35px] left-[35px]"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-pink-100 p-40 rounded-lg shadow text-pink-700 flex flex-col items-center"
          >
            {/* Icon */}
            <div className="mb-4">
              <img src={step.icon} alt={step.title} className="h-35 w-35" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>

            {/* Description */}
            <p className="text-center text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Salvation2;
