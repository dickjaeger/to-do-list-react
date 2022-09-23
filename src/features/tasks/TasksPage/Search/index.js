import { useHistory, useLocation } from "react-router-dom";
import { Container } from "./styled";
import { Input } from "../../../../common/styled";

const Search = () => {
    const location = useLocation();
    const history = useHistory();
    const query = new URLSearchParams(location.search).get("szukaj");

    const onInputChange = ({ target }) => {
        const searchParams = new URLSearchParams(location.search);

        if (target.value.trim() === "") {
            searchParams.delete("szukaj");
        } else {
            searchParams.set("szukaj", target.value.trim());
        };

        history.push(`${location.pathname}?${searchParams.toString()}`);
    };

    return (
        <Container>
            <Input
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            />
        </Container>
    );
};

export default Search;