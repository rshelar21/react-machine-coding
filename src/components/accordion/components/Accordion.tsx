import { useState } from "react";

const accordionList = [
  {
    id: "accordion-1",
    title: "First Title",
    desc: "Desc 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nesciunt repellat, deserunt sapiente consequuntur dignissimos facere molestiae repellendus. Culpa quod voluptatum nihil, suscipit aspernatur molestiae minus! Dignissimos enim quo sit!",
  },
  {
    id: "accordion-2",
    title: "Second Title",
    desc: "Desc 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nesciunt repellat, deserunt sapiente consequuntur dignissimos facere molestiae repellendus. Culpa quod voluptatum nihil, suscipit aspernatur molestiae minus! Dignissimos enim quo sit!",
  },
  {
    id: "accordion-3",
    title: "Third Title",
    desc: "Desc 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nesciunt repellat, deserunt sapiente consequuntur dignissimos facere molestiae repellendus. Culpa quod voluptatum nihil, suscipit aspernatur molestiae minus! Dignissimos enim quo sit!",
  },
];

export const Accordion = () => {
  const [activeAccordion, setActiveAccordion] = useState<{
    [x: string]: boolean;
  }>({});

  const handleToggleAccordion = (id: string) => {
    setActiveAccordion((prev) => {
      return {
        [id]: !prev[id],
      };
    });
  };

  return (
    <div className="accordion">
      {accordionList?.map((accordion) => (
        <div className="accordion__container">
          <div
            className="accordion__header"
            onClick={() => handleToggleAccordion(accordion.id)}
          >
            <h3>{accordion?.title}</h3>

            <button
              aria-expanded={activeAccordion[accordion.id]}
              aria-label={
                activeAccordion[accordion.id]
                  ? "close-accordion"
                  : "expand-accordion"
              }
              className="accordion__button"
            >
              {activeAccordion[accordion.id] ? "🔼" : "🔽"}
            </button>
          </div>
          {activeAccordion[accordion.id] && (
            <div className="accordion__body">
              <p>{accordion?.desc}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
