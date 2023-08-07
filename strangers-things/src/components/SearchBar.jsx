
const SearchBar = ({onChange}) => {
    return (
      <div className="Search">
        <span className="SearchSpan">
          <FaSearch />
        </span>
        <input
          className="SearchInput"
          type="text"
          onChange={onChange}
        />
      </div>
    );
    }
  export default SearchBar