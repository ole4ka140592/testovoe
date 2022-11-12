import s from "./Form1.module.css";

export const Form1 = () => {
    return (
        <div>
            <div className={s.enter}>
                <input placeholder='Ваш номер...' className={s.inputNumber}/>
                <input className={s.enterNumber}/>

            </div>

        </div>
    )
}