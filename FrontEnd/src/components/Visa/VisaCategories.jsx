import "./VisaCategories.css";
import visaCategories from "../../data/visaCategories";

function VisaCategories() {
  return (
    <section className="visa-categories py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Visa Categories</h2>
          <p className="text-muted">
            Choose the visa type that matches your travel purpose.
          </p>
        </div>

        <div className="row g-4">
          {visaCategories.map((item) => {
            const Icon = item.icon;

            return (
              <div className="col-md-6 col-lg-4" key={item.id}>
                <div className="category-card h-100">
                  <div className="icon-box">
                    <Icon />
                  </div>

                  <h4>{item.title}</h4>

                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default VisaCategories;
