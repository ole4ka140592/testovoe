import s from "./Form.module.css";
import {ChangeEvent, useState} from "react";
import {sendNumberTC, setStatusAC} from "../store/appReducer";
import {useAppDispatch, useAppSelector} from "../store/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons/faCheck";

export const Form = () => {
    const [input, setInput] = useState("")
    const [error, setError] = useState<string | null>("")
    const status = useAppSelector(state=> state.app.status)
    const dispatch = useAppDispatch()

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setError("")
        setInput(e.currentTarget.value)
    }
    const sendValue = () => {
        if (input.trim() !== "" && input.length> 0) {
            dispatch(sendNumberTC(+input))
            setInput("")
        } else {
            setError("Введите ваш номер")
        }
    }
    const onFocus = () => {
        setError("")
        dispatch(setStatusAC(""))
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
                        type={"number"}
                    />
                </div>
                <button className={s.inputSend} onClick={sendValue}>
                    <div className={s.inputSendPlaceholder}>ЗАКАЗАТЬ<FontAwesomeIcon icon={faCheck} /></div>
                </button>
                <div className={s.error}>{error ? error : ""}</div>
                <div className={s.status}>{status}</div>
            </div>
        </div>
    )
}