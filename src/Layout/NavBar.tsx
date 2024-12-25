import BurgerMenu from "../assets/Icons/BurgerMenu";

const NavBar = () => {
  return (
    <nav className="flex items-center px-6 py-2 font-semibold text-2xl font-Amiri -text--Amber shadow-lg">
      {/*Add the menu here: make absolute and hidden then add CSS animation to show it when clicking the menu icon*/}
      <BurgerMenu size={32} color="#ff8c42" className="" />
      <a href="" rel="noopener" className="flex items-center">
        <img
          src="src\assets\لوغو مطبخ رمضان.png"
          alt="شعار صفحة مطبخ رمضان"
          className="w-16 inline-block"
        />
        <p>مطبخ رمضان</p>
      </a>
    </nav>
  );
};

export default NavBar;
