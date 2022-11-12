import s from "./Form.module.css";
import {ChangeEvent, useState} from "react";

export const Form = () => {
    const [input, setInput] = useState("")
    const [error, setError] = useState<string | null>("")

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setError("")
        setInput(e.currentTarget.value)
    }

    const sendValue = () => {
        if (input.trim() !== "") {
            console.log(input)
            setInput("")
        } else {
            setError("Введите ваш номер")
        }
    }

    const onFocus = () => {
        setError("")
    }

    return (
        <div className={s.generalForm}>
            <div className={s.form}>
                <div className={s.inputNumber}>
                    <input
                        className={s.inputNumberPlaceholder }
                        placeholder="Ваш номер..."
                        value={input}
                        onChange={onChangeInput}
                        onFocus={onFocus}
                    />
                </div>
                <button className={s.inputSend} onClick={sendValue}>
                    <div className={s.inputSendPlaceholder}>ЗАКАЗАТЬ</div>
                </button>
                <div className={s.error}>{error ? error : ""}</div>
            </div>

        </div>
    )
}