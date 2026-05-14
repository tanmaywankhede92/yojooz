import { useEffect } from "react";

const PolicyModal = ({ isOpen, title, sections, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 px-4 py-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="policy-modal-title"
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-xl text-[#6a645f] transition hover:bg-[#f5f1eb] hover:text-[#28b10f]"
        >
          ×
        </button>

        <h2
          id="policy-modal-title"
          className="mb-6 pr-10 text-2xl font-semibold text-[#2d2a26] md:text-3xl"
        >
          {title}
        </h2>

        <div className="space-y-8 text-sm leading-7 text-[#5f5954] md:text-[15px]">
          {sections.map((section, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-lg font-semibold text-[#2d2a26]">
                {section.heading}
              </h3>

              {section.points?.length > 0 && (
                <ul className="list-disc space-y-2 pl-5">
                  {section.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}

              {section.subPoints?.length > 0 && (
                <ul className="list-disc space-y-2 pl-10 text-[#6a645f]">
                  {section.subPoints.map((subPoint, i) => (
                    <li key={i}>{subPoint}</li>
                  ))}
                </ul>
              )}

              {section.extraPoints?.length > 0 && (
                <ul className="list-disc space-y-2 pl-5">
                  {section.extraPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PolicyModal;
