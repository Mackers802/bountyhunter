import React, {useState} from 'react'
import AddTarget from "./AddTarget"


export default function Bounty(props){
// const [bountys, setBountys] = useState([])
const {firstName, lastName, _id } = props
const [editToggle, setEditToggle] = useState(false)
    return(
        <div className="bountyContainer">
            <div className="bountyName">
                { !editToggle ?
                <>
                    <h1> ~ Target: {props.firstName} {props.lastName}</h1>
                        <div className="bountyWorth">
                            <ul>{props.firstName} {props.lastName} Worth: {props.bountyAmount} Clackers</ul>
                            {/* <ul>Dead or Alive: {props.living.toString()}</ul> */}
                        </div>
                        <div className="bountyActions">
                            <button 
                                onClick={() => props.deleteBounty(_id)}>Collect Bounty</button>
                            <button 
                                onClick={ () => setEditToggle(prevToggle => !prevToggle)}>Change Bounty Amount</button>
                        </div>
                </>
                : 
                <>
                <AddTarget 
                    firstName={firstName}
                    lastName={lastName}
                    _id={_id}
                    btnText="Submit Edit"
                    // editBounty={props.editBounty}
                    submit={props.editBounty}
                />
                <button
                    onClick={ () => setEditToggle(prevToggle => !prevToggle)}>Close</button>
                </>
                }
        </div>
    </div>
    )
}