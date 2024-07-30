/* eslint-disable react-hooks/rules-of-hooks */
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../features/counter/counterslice'


const Counter = () => {
    const counterValue = useSelector((state) => state.counter.value);
    const counterUpdate = useDispatch();

    return (
        <>
            <div>
                <h1>Count: {counterValue}</h1>
                <button onClick={() => counterUpdate(increment())}>Increment</button>
                <button onClick={() => counterUpdate(decrement())}>Decrement</button>
            </div>

        </>
    )
}

export default Counter