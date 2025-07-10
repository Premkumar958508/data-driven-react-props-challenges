import React from 'react'

const ProgressBar = ({percentage}) => {
    return (
        <div>
          <div style={{
            width: '100px',
            backgroundColor: '#eee',
            borderRadius: '4px',
            overflow: 'hidden',
            height: '20px',
            marginBottom: '5px'
          }}>
            <div style={{
              width: `${percentage}%`,
              backgroundColor: '#4caf50',
              height: '100%'
            }}></div>
          </div>
          <div style={{ textAlign: 'center', fontSize: '14px' }}>
            {percentage}%
          </div>
        </div>
      );
}

export default ProgressBar