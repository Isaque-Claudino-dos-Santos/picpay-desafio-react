type typeTitleProps = {
  text: string;
};

export default function Title({ text }: typeTitleProps): JSX.Element {
  return (
    <>
      <div>
        <h1>{text}</h1>
      </div>
    </>
  );
}
