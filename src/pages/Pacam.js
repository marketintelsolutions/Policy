import React from 'react'
import { Link } from 'react-router-dom'
import Indemnity from './Indemnity'
import TermsAndConditions from './TermsAndConditions'

const Pacam = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center', fontSize: '40px', fontWeight: '600' }}>DATA PROTECTION</h1>
            <div style={{ textAlign: 'center', fontSize: '20px', fontWeight: '400', marginBottom: '40px', textDecoration: 'underline' }}>

                <Link to={'/data-protection'}> Click here to view our Data Protection Policy </Link>
            </div>

            <Indemnity />
            <TermsAndConditions />
        </div>
    )
}

export default Pacam