import React from 'react'

const AddDocumentNo = () => {
  return (
    <div>
      <div className='bg-body-tertiary m-2 main-Card min-height'>
        <h2>Generate Document Number</h2>

        <div className="dropdown-center">
            <label>Issuance Type:</label>
            <button className="btn btn-secondary dropdown-toggle m-3 btn-IssuanceType" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                --SELECT--
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" >--SELECT--</a></li>
                <li><a className="dropdown-item" >Administrative Order</a></li>
                <li><a className="dropdown-item" >Memorandum Circular</a></li>
                <li><a className="dropdown-item" >Office Circular</a></li>
                <li><a className="dropdown-item" >Officec Memorandum</a></li>
                <li><a className="dropdown-item" >Office Order</a></li>
                <li><a className="dropdown-item" >Resolution</a></li>
                <li><a className="dropdown-item" >CSC Issuance</a></li>
                <li><a className="dropdown-item" >OLA Opinion</a></li>
                <li><a className="dropdown-item" >MOA / MOU</a></li>
                <li><a className="dropdown-item" >Project Contract</a></li>
                <li><a className="dropdown-item" >Memorandum Order</a></li>
            </ul>
        </div>
        <button type="button" className="btn btn-primary">Generate</button>
        
      </div>
    </div>
  )
}

export default AddDocumentNo
