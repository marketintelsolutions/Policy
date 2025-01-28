import React from 'react';

const PacamData = () => {
    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <iframe
                src="/dataProtection.pdf"
                width="100%"
                height="100%"
                title="Data Protection Policy"
                style={{ border: 'none' }}
            >
                This browser does not support PDFs. Please download the PDF to view it:
                <a href="/path/to/Data Protection Policy.pdf">Download PDF</a>
            </iframe>
        </div>

    );
};

export default PacamData;