import CurrentPageTextRibbon from '../../Components/CurrentPageTextRibbon';
import Menu from '../../Components/Menu';
import Title from '../../Components/Title';

export default function Home(): JSX.Element {
  return (
    <>
      <header>
        <CurrentPageTextRibbon text="Home" />
        <Title text="PayFriends" />
        <Menu />
      </header>
    </>
  );
}
