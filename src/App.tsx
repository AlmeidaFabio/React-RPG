import { useEffect } from 'react';
import * as Style from './App.styles'
import { Character } from './components/Character';
import { useCharacter } from './hooks/useCharacter';

function App() {
  const char = useCharacter('Fabio');

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  },[])

  function handleKeyDown(e: KeyboardEvent) {
    switch(e.code) {
      case 'KeyA':
      case 'ArrowLeft':
        char.moveLeft();
      break;
      case 'KeyW':
      case 'ArrowUp':
        char.moveUp();
      break;
      case 'KeyD':
      case 'ArrowRight':
        char.moveRight();
      break;
      case 'KeyS':
      case 'ArrowDown':
        char.moveDown();
      break;
    }
  }

  return (
    <Style.Container>
      <Style.Map>
        <Character x={char.x} y={char.y} side={char.side} name={char.name}/>
      </Style.Map>
    </Style.Container>
  );
}

export default App;
