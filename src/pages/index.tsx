import Button from '../../components/atoms/buttons/button';
import { Container } from '../styles/pages/Home';

export default function Home() {
    return (
        <Container>
            <Button type="primary">Prymary</Button>
            <Button type="primary disabled">Prymary</Button>
            <Button type="outline">Prymary</Button>
            <Button type="outline disabled">Prymary</Button>
        </Container>
    );
}
