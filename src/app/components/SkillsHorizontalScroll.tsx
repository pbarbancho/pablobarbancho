export const SkillHorizontalScroll = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-x-auto flex no-scrollbar">
      <div className="flex flex-nowrap gap-12 mx-32 mb-8">{children}</div>
    </div>
  );
};
