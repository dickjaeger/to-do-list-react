import { Button, ButtonsContainer } from "./styled";

const SectionButtons = (props) => {
    if (props.tasks.length === 0) {
        return;
    }

    return (
        <ButtonsContainer>
            <Button onClick={props.toggleReadyTasksHidden}>
                {props.readyTasksHidden ? "Pokaż ukończone" : "Ukryj ukończone"}
            </Button>
            <Button
                disabled={props.tasks.every(({ done }) => done)}
                onClick={props.setAllTasksReady}
            >
                Ukończ wszystkie
            </Button>
        </ButtonsContainer>
    )
}

export default SectionButtons;