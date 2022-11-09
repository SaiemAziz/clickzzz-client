import React from 'react';

const ReviewRow = ({r, idx}) => {

    let date = new Date(r.time)

    let editUpdate = e => {
        e.preventDefault()
    }


    return (
        <>
            <tr>
                <th>{idx+1}</th>
                <td>{r.service_name}</td>
                <td>{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</td>
                <td>{date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</td>
                <td>{r.details.slice(0,50)}...</td>
                <td className="flex items-center">
                    <label htmlFor={`modal_${idx}`} className="btn btn-primary btn-outline btn-xs mr-4">Edit</label>
                    <div className="btn btn-error btn-circle btn-xs">X</div>
                </td>
            </tr>
            {/* modal div */}
                <input type="checkbox" id={`modal_${idx}`} className="modal-toggle" />
                <div className="modal">
                <form onSubmit={editUpdate} className="modal-box">
                    <textarea name="" id="" cols="50" rows="5" className="textarea textarea-primary" defaultValue={r.details}></textarea>
                    <div className="modal-action">
                        <label htmlFor={`modal_${idx}`} className="btn btn-success">Close</label>
                    </div>
                </form>
                </div>
        </>
    );
};

export default ReviewRow;