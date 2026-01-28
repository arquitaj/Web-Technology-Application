import React from 'react';

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

const SearchDoc = () => {
  return (
    <div>
        <div className="dropdown-center">
            <label>Issuance Type:</label>
            <button className="btn btn-secondary dropdown-toggle m-3 btn-IssuanceType" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                --SELECT--
            </button>
            <ul className="dropdown-menu">
                {items.map(item => <li key={item}><a className="dropdown-item">{item}</a></li>)}
            </ul>
        </div>

        <form className="row g-3">
            <div className="col-md-4 d-inline-flex text-center">
                <label htmlFor="inputInsuanceNo" className="form-label">Insuance No.</label>
                <input type="number" className="form-control" id="inputInsuanceNo" />
            </div>
            <div className="col-md-4 d-inline-flex text-center">
                <label htmlFor="inputSeries" className="form-label">Series</label>
                <input type="text" className="form-control" id="inputSeries" />
            </div>
            <div className="col-md-6 d-inline-flex text-center">
                <label htmlFor="inputSubject" className="form-label">Subject</label>
                <input type="text" className="form-control" id="inputSubject" />
            </div>
            <div className="col-md-6 d-inline-flex text-center">
                <label htmlFor="inputSubject" className="form-label">Subject</label>
                <input type="date" id="date" name="date" />
            </div>
            <div className="col-md-6 d-inline-flex text-center">
                <label htmlFor="inputKeyWords" className="form-label">Key Words</label>
                <input type="text" className="form-control" id="inputKeyWords" />
            </div>
            <button type="button" className="btn btn-primary">Search</button>
        </form>
    </div>
  );
}

export default SearchDoc;   