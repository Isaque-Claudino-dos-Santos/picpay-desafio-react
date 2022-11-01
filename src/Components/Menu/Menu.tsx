type TypeMenuProps = {
  childs?: JSX.Element[];
};

export default function Menu({ childs = [] }: TypeMenuProps): JSX.Element {
  function renderChilds(e: JSX.Element, index: number): JSX.Element {
    return <li key={index}>{e}</li>;
  }

  return (
    <>
      <nav>{childs.map(renderChilds)}</nav>
    </>
  );
}
