import Search from "./Search";

function Header({search, onSearch}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search search={search} onSearch={onSearch}/>
    </header>
  );
}

export default Header;
