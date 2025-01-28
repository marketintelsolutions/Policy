import React from 'react';

const Indemnity = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Email Indemnity</h1>

            <p>
                You hereby consent to the use of electronic communication (which includes but is not limited to written communication by email, SMS, WhatsApp, etc.). By this consent, you unequivocally agree that instructions transmitted by electronic communication be binding for all purposes, including for purposes of evidence. You irrevocably undertake and warrant that you shall not make any demand or claim or institute any action against PAC Asset Management Limited should you suffer any loss or liability as a result of your consent to the use of electronic communication. You agree to irrevocably indemnify and hold PAC Asset Management Limited harmless against all costs, claims, demands, actions, and proceedings that may be made or instituted against PAC Asset Management Limited; and all liabilities, losses, and damages which may be suffered by PAC Asset Management Limited in connection with, or arising as a result of your consent to electronic communication or PAC Asset Management’s reliance on electronic communication issued from your email account or other electronic communication account indicated herein or subsequently communicated to PAC Asset Management Limited by you or your nominated investment adviser or any other person you authorize to manage your account.
            </p>

            <p>
                You acknowledge that there are certain risks associated with conveying instructions via electronic means, including, but not limited to the risk of delay, non-receipt (due to technical malfunction, disruption, connectivity issues, etc. of your system or PAC Asset Management Limited’s system or any other reason), third-party interception/interference, data corruption, etc., and hereby fully waive, discharge and indemnify PAC Asset Management in respect of any loss or damages resulting from any of the risks identified above/from the use of electronic communication with respect to your account.
            </p>

            <p>
                You hereby authorize PAC Asset Management Limited to rely upon and act in accordance with any notice, demand or other communication which may from time to time be, or purport to be, given by email by you or on your behalf by any authorized persons, without inquiry on PAC Asset Management Limited’s part as to the authority or identity of the person making or purporting to make such notice or demand from your email account. PAC Asset Management Limited shall be entitled to treat such notice, demand, or other communication as fully authorized by and binding upon you and shall be entitled to take such steps in connection with or in reliance upon such communication as PAC Asset Management Limited may in good faith consider appropriate.
            </p>

            <div style={{ marginTop: '30px' }}>
                <label style={{ display: 'block', marginBottom: '10px' }}>
                    <strong>PREFERRED EMAIL ADDRESS:</strong>
                    <input
                        type="email"
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                        placeholder="Enter your preferred email address"
                    />
                </label>

                <label style={{ display: 'block', marginBottom: '10px' }}>
                    <strong>PREFERRED PHONE NUMBER:</strong>
                    <input
                        type="tel"
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                        placeholder="Enter your preferred phone number"
                    />
                </label>

                <label style={{ display: 'block', marginBottom: '10px' }}>
                    <strong>NAME OF ACCOUNT HOLDER:</strong>
                    <input
                        type="text"
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                        placeholder="Enter your name"
                    />
                </label>

                <label style={{ display: 'block', marginBottom: '10px' }}>
                    <strong>SIGNATURE & DATE:</strong>
                    <input
                        type="text"
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                        placeholder="Sign and date here"
                    />
                </label>
            </div>

            {/* <button
                style={{
                    display: 'block',
                    width: '100%',
                    padding: '10px',
                    backgroundColor: '#007BFF',
                    color: '#FFF',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginTop: '20px',
                }}
                onClick={() => alert('Form submitted!')}
            >
                Submit
            </button> */}
        </div>
    );
};

export default Indemnity;