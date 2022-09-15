import "./style.css";

const Section = (props) => (
    <section className="section">
        <div className="section__header">
          <h2>
            {props.title}
          </h2>
          {props.extraContent}
        </div>
        {props.body}
      </section>
);

export default Section;