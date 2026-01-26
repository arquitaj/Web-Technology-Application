import React from 'react'

// Declaring array for Type of documents
 const items = [
    '--SELECT--',
    'Administrative Order',
    'Memorandum Circular',
    'Office Circular',
    'Office Memorandum',
    'Office Order',
    'Resolution',
    'CSC Issuance',
    'OLA Opinion',
    'MOA / MOU',
    'Project Contract',
    'Memorandum Order'
  ]; 
  
const AddDocumentNo = () => {
  return (
    <div>
      <div>
        <h2>Generate Document Number</h2>

        <div className="dropdown-center">
            <label>Issuance Type:</label>
            <button className="btn btn-secondary dropdown-toggle m-3 btn-IssuanceType" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                --SELECT--
            </button>
            <ul className="dropdown-menu">
                {/* Applying array items to the dropdown menu */}
                {items.map(item => <li key={item}><a className="dropdown-item" >{item}</a></li>)}
            </ul>
        </div>
        <button type="button" className="btn btn-primary">Generate</button>
        
      </div>
    </div>
  )
}

export default AddDocumentNo
