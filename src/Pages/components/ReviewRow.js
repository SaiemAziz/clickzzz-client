import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/Auth';

const ReviewRow = ({r, idx, deleteClicked, updateClicked}) => {

    let {user} = useContext(AuthContext)
    let date = new Date(r.time)

    let editUpdate = e => {
        e.preventDefault()
        let text = e.target.newText.value
        updateClicked(r._id, text)
        r.details = text;
    }

    

    return (
        <>
            {/* every row  */}
            <tr className='hover'>
                <th>{idx+1}</th>
                <td>{r.service_name}</td>
                <td>{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</td>
                <td>{date.getHours() % 12 !== 0 ? date.getHours() % 12 : 12}:{date.getMinutes()} {date.getHours > 11 ? 'PM' : 'AM'}</td>
                <td>{r?.details?.length > 30 ?
                    `${r?.details?.slice(0,30)}...` :
                    r?.details?.slice(0,30) 
                    }</td>
                <td className="flex items-center">
                    <label htmlFor={`modal_${idx}`} className="btn btn-primary btn-outline btn-xs mr-2">Edit</label>
                    <div className="btn btn-error btn-xs" onClick={()=>deleteClicked(r._id)} >x</div>
                </td>
            </tr>

            {/* modal div */}
                <input type="checkbox" id={`modal_${idx}`} className="modal-toggle" />
                <div className="modal">
                <form onSubmit={editUpdate} className="modal-box">
                    <textarea name="newText" id="" rows="5" className="textarea textarea-primary w-full" defaultValue={r.details}></textarea>
                    <div className="modal-action flex justify-between">
                        <input className='btn btn-primary btn-outline' type="submit" value="Update" />
                        <label htmlFor={`modal_${idx}`} className="btn btn-success">Close</label>
                    </div>
                </form>
                </div>
        </>
    );
};

export default ReviewRow;