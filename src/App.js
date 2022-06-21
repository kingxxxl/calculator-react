import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import './App.css'
import Answer from "./components/Answer";
import {useState} from "react";

function App() {
    const navList = ['Home', "About", "Contact us"]
    const [valueOne, setValueOne] = useState(0);
    const [valueTwo, setValueTwo] = useState(0);
    const [answer, setAnswer] = useState(0);
    const operations = ['+', "-", "X", '/']

    function onChange1(e) {
        setValueOne(e.target.value);
    }

    function onChange2(e) {
        setValueTwo(e.target.value);
    }

    console.log(valueOne)
    console.log(valueTwo)
    console.log(answer)
    return (
        <>
            <Navbar projectName={"Calculator"} navList={navList}/>
            <div className="container">

                <div className='row d-inline'>
                    <div id="input" className=' d-flex '>
                        <input onChange={onChange1} type="text" className="form-control m-2" value={valueOne}
                               placeholder="0"/>
                        <input onChange={onChange2} type="text" className="form-control m-2" value={valueTwo}
                               placeholder="0"/>
                    </div>
                    <div className='col'>
                        <div className='row m-5'>
                            <div className="col-3">
                                <button id='op-button' type="button" onClick={() => setAnswer((+valueOne + +valueTwo))}
                                        className="btn btn-secondary btn-block">+
                                </button>
                            </div>
                            <div className="col-3">
                                <button id='op-button' type="button" onClick={() => setAnswer((valueOne - valueTwo))}
                                        className="btn btn-secondary btn-block">-
                                </button>
                            </div>
                            <div className="col-3">
                                <button id='op-button' type="button" onClick={() => setAnswer(valueOne * valueTwo)}
                                        className="btn btn-secondary btn-block">x
                                </button>
                            </div>
                            <div className="col-3">
                                <button id='op-button' type="button" onClick={() => setAnswer(valueOne / valueTwo)}
                                        className="btn btn-secondary btn-block">/
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <Answer answer={answer}/>
                    </div>
                </div>
            </div>
        </>

    );
}

export default App;
