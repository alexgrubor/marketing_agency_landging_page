interface BigTextInlineProps {
  text: string;
  textColor: string;
  textSize?: string
}
const BigTextInline = ({ text, textColor, textSize }: BigTextInlineProps) => {
  return (
    <span className={`text-4xl sm:text-5xl md:text-[8rem] ${textColor} ${textSize}`}>
      {text}
    </span>
  );
};
export default BigTextInline;
