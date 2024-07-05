import React, {ReactNode} from "react";

type CrossesProps = {
    crosses: ItemCross[]
    children?: ReactNode
}

type ItemCross = {
    id: number
    model: string
    size: string
};

export const SuperCrosses = ({crosses, children}: CrossesProps) => {
    return (
        <div>
            <ul>
                {crosses.map((c) => {
                    return (
                        <li key={c.id}>
                            <div>{c.size}</div>
                            <div>{c.model}</div>
                        </li>
                    )
                })}
            </ul>

            {/*сюда кладем отличия*/}
            {children}
            <hr/>

        </div>
    );
};