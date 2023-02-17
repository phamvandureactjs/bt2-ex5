
import {useEffect, useState } from 'react';
import Time from './Time';
function App() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setInterval(() => {
          setIsLoading(!isLoading);
        }, 5000);
      }, []);
    return (
        <div>
            {isLoading && <Time />}
        </div>
    );
}

export default App;
