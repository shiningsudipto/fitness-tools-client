interface SectionTitleProps {
  title: string;
  subTitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subTitle }) => {
  return (
    <div className="text-center capitalize mb-8 mt-10">
      <h2 className="text-4xl font-bold mb-2 text-primaryColor">{title}</h2>
      {subTitle && (
        <h3 className="text-xl font-medium text-secondaryColor">{subTitle}</h3>
      )}
    </div>
  );
};

export default SectionTitle;
