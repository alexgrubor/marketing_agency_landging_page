interface BigTextInlineProps {
  text: string;
  textColor: string;
}
const BigTextInline = ({ text, textColor }: BigTextInlineProps) => {
  return (
    <span className={`text-4xl sm:text-5xl md:text-[8rem] ${textColor}`}>
      {text}
    </span>
  );
};
export default BigTextInline;
