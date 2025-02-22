import React,{useState} from 'react'
import Square from './Square';

const Board=()=>{

    const [state,setState]=useState(Array(9).fill(null))
    const [isTurn,setIsTurn]=useState(true);

    const handleClick=  (index)=>{
        const copystate=[...state];
        copystate[index]=isTurn?"X":"0";
        setState(copystate);
        setIsTurn(!isTurn);
    
    }

    return(
        <div className='board-container'>
            <div className="board-row">
                <Square onClick={()=>handleClick(0)} values={state[0]}/>
                <Square onClick={()=>handleClick(1)} values={state[1]}/>
                <Square onClick={()=>handleClick(2)} values={state[2]}/>

            </div>
            <div className="board-row">
                <Square onClick={()=>handleClick(3)} values={state[3]}/>
                <Square onClick={()=>handleClick(4)} values={state[4]}/>
                <Square onClick={()=>handleClick(5)} values={state[5]}/>
            </div>
            <div className="board-row">
                <Square onClick={()=>handleClick(6)} values={state[6]}/>
                <Square onClick={()=>handleClick(7)} values={state[7]}/>
                <Square onClick={()=>handleClick(8)} values={state[8]}/>

            </div>

        </div>
    );

};

export default Board;
