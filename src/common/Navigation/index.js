import { Switch, Route } from 'react-router-dom'
import { Container, List, StyledLink} from './styled';

const Navigation = ({ pages }) => (
    <>
        <Container>
            <List>
                {pages.map(page => (
                    <li key={page.path}>
                        <StyledLink to={page.path}>
                            {page.title}
                        </StyledLink>
                    </li>
                ))}
            </List>
        </Container>
        <Switch>
            {pages.map(page => (
                <Route path={page.path} key={page.path}>
                    {page.component}
                </Route>
            ))}
        </Switch>
    </>
);

export default Navigation;