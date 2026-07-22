import { useState } from "react";

function SearchSection({ countries, onSelect }) {
  const [search, setSearch] = useState("");

  const suggestions = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase()),
  );

  const handleSearch = () => {
    const found = countries.find(
      (country) => country.name.toLowerCase() === search.toLowerCase(),
    );

    if (found) {
      onSelect(found);
      setSearch("");
    } else {
      alert("Country not found!");
    }
  };

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h1 className="display-5 fw-bold mb-3">
              Find Your Dream Destination
            </h1>

            <p className="lead text-secondary mb-5">
              Search countries to explore visa requirements, immigration
              information and travel guidance.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-lg rounded-4">
              <div className="card-body p-4 position-relative">
                <div className="row g-3 align-items-center">
                  <div className="col-md-9">
                    <input
                      type="text"
                      className="form-control form-control-lg rounded-pill"
                      placeholder="🔍 Search Country (e.g. Canada)"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleSearch();
                        }
                      }}
                    />

                    {search && (
                      <div
                        className="list-group position-absolute w-100 mt-2"
                        style={{
                          zIndex: 1000,
                          maxWidth: "94%",
                        }}
                      >
                        {suggestions.length > 0 ? (
                          suggestions.map((country) => (
                            <button
                              key={country.id}
                              className="list-group-item list-group-item-action"
                              onClick={() => {
                                onSelect(country);
                                setSearch("");
                              }}
                            >
                              {country.name}
                            </button>
                          ))
                        ) : (
                          <div className="list-group-item">
                            No country found
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="col-md-3 d-grid">
                    <button
                      className="btn btn-warning btn-lg rounded-pill fw-bold"
                      onClick={handleSearch}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchSection;
