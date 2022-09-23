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
    </>
);

export default Navigation;