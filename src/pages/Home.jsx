import { styled } from 'styled-components';

const MainTitle = styled.h1`
    text-align: center;
`;

function Home() {
    return (  
    <div>
      <h1>Welcome to the Event App</h1>
      <p>Discover, connect, and plan events with ease!</p>
    </div>
    );
}

export default Home;