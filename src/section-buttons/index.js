import "./style.css";

const SectionButtons = (props) => (
    <div className="section__buttonsContainer">
        <button className="section__button" onClick={props.toggleReadyTasksHidden}>
            {props.readyTasksHidden ? "Pokaż ukończone" : "Ukryj ukończone"}
        </button>
        <button
            className="section__button"
            disabled={props.tasks.every(({ done }) => done)}
            onClick={props.setAllTasksReady}
        >
            Ukończ wszystkie
        </button>
    </div>
)

export default SectionButtons;