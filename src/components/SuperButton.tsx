import {ButtonHTMLAttributes, ReactNode} from "react";
import s from './SuperButton.module.css'

// type SuperButtonPropsType = {
//     onClick: () => void
//     color: string
//     children?: ReactNode
// };

type ColorsProps = {
    color1?: string
    color2?: string
    color3?: string
    color4?: string
    color5?: string
}


type SuperButtonPropsType = {
    backgroundColor?: string
} & ButtonHTMLAttributes<HTMLButtonElement> & Omit<ColorsProps, 'color4' | 'color5'>


export const SuperButton: React.FC<SuperButtonPropsType> = (props: SuperButtonPropsType) => {
    const {onClick, color, disabled, children, className, ...restProps} = props

    // const finalClassName = s.button
    //     + (disabled
    //         ? ' ' + s.disabled
    //         : color === 'red'
    //             ? ' ' + s.red
    //             : color === 'secondary'
    //                 ? ' ' + s.secondary
    //                 : ' ' + s.default)
    //     + (className ? ' ' + className : ' ')

    // const finalClassName = `
    // ${s.button}
    // ${color === 'red'? s.red : s.default}
    // ${disabled ? s.disabled : ''}
    // `

    const finalClassName = `
    ${s.button}
    ${color === 'red'? s.red : color === 'secondary' ? s.secondary : s.default}
    ${disabled ? s.disabled : ''}
    `


    return (
        // <button onClick={onClick} {...restProps}>{children}</button>
        <button onClick={onClick} className={finalClassName}>{children}</button>

    )
        ;


};