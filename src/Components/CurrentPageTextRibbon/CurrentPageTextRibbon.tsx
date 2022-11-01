type TypeCurrentPageTextRibbonProps = {
  text: string;
};

export default function CurrentPageTextRibbon({
  text,
}: TypeCurrentPageTextRibbonProps): JSX.Element {
  return (
    <>
      <div>
        <span>{text}</span>
      </div>
    </>
  );
}
