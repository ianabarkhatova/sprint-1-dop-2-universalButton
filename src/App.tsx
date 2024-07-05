import './App.css';
import {SuperCrosses} from "./components/SuperCrosses";
import {SuperButton} from "./components/SuperButton";
import {Modal} from "./components/modal/Modal";


function App() {
    const crosses = [
        {id: 1, model: 'ADIDAS', size: 'XXX'},
        {id: 2, model: 'ABIBAS', size: 'YYY'},
        {id: 3, model: 'PUMA', size: 'ZZZ'}
    ]

    return (
        <div>
            {/*<SuperButton onClick={() => {}} color={'red'} className={s.redForSuperButton}>RED BUTTON</SuperButton>*/}
            {/*<SuperButton onClick={() => {}} color={'red'} className={s.blueForSuperButton}>BLUE BUTTON</SuperButton>*/}

            {/*<SuperButton onClick={() => {}} color={'red'}>RED BUTTON</SuperButton>*/}
            {/*<SuperButton onClick={() => {}} color={'secondary'}>SECONDARY BUTTON</SuperButton>*/}
            {/*<SuperButton onClick={() => {}}>DEFAULT BUTTON</SuperButton>*/}
            {/*<SuperButton onClick={() => {}} disabled>DISABLED BUTTON</SuperButton>*/}
            {/*<SuperCrosses crosses={crosses}>*/}
            {/*    <SuperButton onClick={() => {}} color={'secondary'}>SECONDARY BUTTON</SuperButton>*/}
            {/*    <SuperButton onClick={() => {}}>DEFAULT BUTTON</SuperButton>*/}
            {/*    <SuperButton onClick={() => {}} disabled>DISABLED BUTTON</SuperButton>*/}
            {/*    <div>TEXT TEXT TEXT</div>*/}
            {/*    <div>TEXT TEXT TEXT</div>*/}
            {/*    <div>TEXT TEXT TEXT</div>*/}
            {/*    <div>TEXT TEXT TEXT</div>*/}
            {/*    <div>TEXT TEXT TEXT</div>*/}
            {/*    <div>TEXT TEXT TEXT</div>*/}
            {/*    <div>TEXT TEXT TEXT</div>*/}
            {/*    <div>TEXT TEXT TEXT</div>*/}
            {/*</SuperCrosses>*/}

            {/*<SuperCrosses crosses={crosses}>*/}
            {/*    <div>TEXT TEXT TEXT</div>*/}
            {/*    <div>TEXT TEXT TEXT</div>*/}
            {/*    <SuperButton onClick={() => {}} disabled>DISABLED BUTTON</SuperButton>*/}
            {/*</SuperCrosses>*/}

            {/*<SuperCrosses crosses={crosses}>*/}
            {/*    <SuperButton onClick={() => {}} color={'secondary'}>SECONDARY BUTTON</SuperButton>*/}
            {/*    <SuperButton onClick={() => {}}>DEFAULT BUTTON</SuperButton>*/}
            {/*    <SuperButton onClick={() => {}} disabled>DISABLED BUTTON</SuperButton>*/}
            {/*    <SuperButton onClick={() => {}} color={'secondary'}>SECONDARY BUTTON</SuperButton>*/}
            {/*    <SuperButton onClick={() => {}}>DEFAULT BUTTON</SuperButton>*/}
            {/*    <SuperButton onClick={() => {}} disabled>DISABLED BUTTON</SuperButton>*/}
            {/*    <div>TEXT TEXT TEXT</div>*/}
            {/*    <div>TEXT TEXT TEXT</div>*/}
            {/*    <div>TEXT TEXT TEXT</div>*/}
            {/*    <div>TEXT TEXT TEXT</div>*/}
            {/*    <div>TEXT TEXT TEXT</div>*/}
            {/*    <div>TEXT TEXT TEXT</div>*/}
            {/*</SuperCrosses>*/}

            <Modal>
                <input type="email"/>
                <input type="password"/>
                <button>Send</button>
            </Modal>

            <Modal>
                <h1>Confidencial information</h1>
                <input type="email"/>
                <input type="password"/>
                <input type="password"/>
                <div>
                    <input type="checkbox"/>
                    <span>I agree</span>
                </div>
                <button>Send</button>
            </Modal>


        </div>
    );
}


export default App;
