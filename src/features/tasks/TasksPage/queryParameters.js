import { useHistory, useLocation } from "react-router-dom";
import searchQueryParamName from "./searchQueryParamName";

export const useQueryParameter = (searchQueryParamName) => {
    const location = useLocation();

    return new URLSearchParams(location.search).get(searchQueryParamName);
};

export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const history = useHistory();
    const searchParams = new URLSearchParams(location.search);

    const replaceQueryParameter = ({ key, value }) => {
        if (!value) {
            searchParams.delete(searchQueryParamName);
        } else {
            searchParams.set(key, value);
        };

        history.push(`${location.pathname}?${searchParams.toString()}`);
    };

    return replaceQueryParameter;
};