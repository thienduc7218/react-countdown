import { useEffect, useState } from "react"

export const Count = () => {
    const [count, setCount] = useState<number>(10)
    const [isCounting, setIsCounting] = useState<boolean>(false)

    useEffect(() => {
        if (isCounting && count > 0) {
            const counting = setInterval(() => {
                setCount(prev => prev - 1)
            }, 1000)
            return () => clearInterval(counting)
        }
        if (isCounting && count === 0) {
            setIsCounting(false)
        }
    })

    const handleClick = () => {
        setIsCounting(!isCounting)
        setCount(10)
    }

    return (
        <div className="card">
            {(isCounting && count > 0) ? (
                <h1>{count}</h1>
            ) : (
                <button onClick={handleClick}>
                    Start Countdown
                </button>
            )}
        </div>
    )

}