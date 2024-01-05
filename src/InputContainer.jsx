// @flow strict

import * as React from 'react';

function InputContainer({handleChangeFile, file}) {
  
  return (
    <div className="input-container">
      <input
        type="file"
        accept=".jpg,.jpeg,.png,.gif,.webp,.pdf,.docs"
        onChange={handleChangeFile}
        className="input-field"
      />
      {
        file ?
          <div className="file-info">
            <p>
              {file.name}
            </p>
            <p>
              <span>Type:</span> {file.type}
            </p>
          </div>
          :
          <div>
            <p className='choose-title'>Choose or drag and drop a file to upload</p>
            <p className='accept-title'>
              Accepted file types: .jpg, .jpeg, .png, .gif, .webp, .pdf, .docs
            </p>
          </div>
      }
    </div>
  );
};

export default InputContainer;