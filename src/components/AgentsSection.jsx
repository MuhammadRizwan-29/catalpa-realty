import { agents } from "./../assets/assets";

export default function AgentsSection() {
  return (
    <section className="py-[50px] sm:py-[100px]">
      <div className="max-w-6xl mx-auto relative z-10 px-4 xl:px-0">
        <div className="font-yanone uppercase text-[#46237a] flex flex-col gap-6 max-w-2xl">
          <hr className="w-14 border-2 border-[#46237a]" />
          <h3 className="text-3xl">Top Notch Office Staff And Agents</h3>
          <p className="text-xl">
            We Would Highly Recommend Proin Gravida Nibh Vel Velit Auctor
            Aliquet. Aenean Sollicitudin, Lorem Quis Bibendum Auctor.
          </p>
          <p className="text-[#414042] font-works-sans normal-case">
            We Would Highly Recommend Proin Gravida Nibh Vel Velit Auctor
            Aliquet. Aenean Sollicitudin, Lorem Quis Bibendum Auctor.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 my-10">
          {agents.map((agent, index) => {
            return (
              <div key={index}>
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full object-cover"
                />
                <div className="flex flex-col items-start gap-3 my-8 pl-5">
                  <p className="font-yanone uppercase text-xl text-[#46237a]">
                    {agent.designation}
                  </p>
                  <h3 className="font-yanone uppercase text-4xl text-[#46237a]">
                    {agent.name}
                  </h3>
                  <p className="font-works-sans">{agent.content}</p>
                  <div className="flex items-center justify-start gap-2">
                    <img
                      src={agent.telephone.icon}
                      alt={`Contact number of ${agent.name}`}
                      className="w-4 h-4"
                    />
                    <a
                      href={`tel:${agent.telephone.number}`}
                      className="hover:text-[#46237a] transition-all duration-200"
                    >
                      {agent.telephone.number}
                    </a>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <img
                      src={agent.email.icon}
                      alt={`Email of ${agent.name}`}
                      className="w-4 h-4"
                    />
                    <a
                      href={`mailto:${agent.email.mail}`}
                      className="hover:text-[#46237a] transition-all duration-200"
                    >
                      {agent.email.mail}
                    </a>
                  </div>
                  <button className="my-4 px-6 py-2 text-white font-works-sans rounded-md border-1 border-[#46237a] bg-[#46237a] hover:bg-transparent hover:text-[#46237a] transition-all duration-200 cursor-pointer">
                    {agent.button.content}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
