export const SkillCard = ({ key, title, bgColor, image }: { key: number, title: string; bgColor: string, image: string }) => {

    return (
        <div key={key} className={"rounded-lg p-4 shadow-bl-custom w-[200px] h-[250px] flex flex-col hover:opacity-50"} style={{ backgroundColor: bgColor }}>
            <h3 className="font-bold text-[28px] text-center">{title}</h3>
            <div className="flex justify-center my-auto">
                <img src={image} alt={title} className="mt-4" width="100px"/>
            </div>
        </div>
    );
};
