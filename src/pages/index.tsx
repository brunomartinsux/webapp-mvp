import firebase from '../../firebase/initFirebase';

import { Container } from '../styles/pages/Home';

firebase();

export default function Home() {
    return (
        <Container>
            <h1>Home</h1>
        </Container>
    );
}
