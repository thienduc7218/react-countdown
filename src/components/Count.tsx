import { useEffect, useState } from "react"

export const Count = () => {
    const [second, setSecond] = useState<number>(10)
    const [isCounting, setIsCounting] = useState<boolean>(false)
    console.log("🚀 ~ Count ~ second:", second)
    console.log("🚀 ~ Count ~ isCounting:", isCounting)

    useEffect(() => {
        if (isCounting && second > 0) {
            const interval = setInterval(() => {
                setSecond(prev => prev - 1)
            }, 1000)
            return () => clearInterval(interval)
        }
        if (isCounting && second === 0) {
            setIsCounting(false)
        }
    }, [isCounting, second])

    const handleClick = () => {
        setIsCounting(!isCounting)
    }

    return (
        <div className="card">
            {second > 0 && isCounting ? (
                <span className="countdown">{second}</span>
            ) : (
                <button onClick={handleClick} disabled={isCounting}>
                    Start Countdown
                </button>
            )}
        </div>
    )
}