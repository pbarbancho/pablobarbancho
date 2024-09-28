import React from "react";

export const ExperienceCard = ({ jobTitle, companyName, description }: { jobTitle: string; companyName: string; description: React.ReactNode }) => {
    return (
      <div className="rounded-lg p-8 bg-card shadow-bl-custom w-[550px] flex flex-col">
        <h3 className="font-bold text-[28px]">{jobTitle}</h3>
        <h4 className="font-light">{companyName}</h4>
        <div className="my-8 flex flex-col gap-4">{description}</div>
      </div>
    );
  };
  