import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";

import { Field, useFormState } from "react-final-form";
import { useDropzone } from "react-dropzone";

// Import styles
import s from "./FileUpload.module.scss";

const FileField = ({ name, validation, ...props }) => {
  return (
    <>
      <Field
        name={name}
        validate={validation}
        {...props}
        component={FileFieldInput}
      />
      <Field
        name={name}
        subscribe={{ touched: true, error: true }}
        render={({ meta: { touched, error } }) =>
          touched && error ? "" : null
        }
      />
    </>
  );
};

function FileFieldInput({ input, dropZoneProps, ...props }) {
  const stateApi = useFormState();
  const [isFileInputFocused, setIsFileInputFocused] = useState(false); // This is used to emulate the input focus class on the label
  const [fileName, setFileName] = useState("no file selected"); // Used to change the name of the input/label button to the users file name
  const [fileLabel, setFileLabel] = useState("Choose file");
  const [fileExists, setFileExists] = useState(false);
  const [fileIcon, setFileIcon] = useState("paperclip");

  // check if there's a validation issue
  const error =
    stateApi.submitFailed && stateApi.hasValidationErrors ? true : false;

  const onDrop = useCallback(
    (files) => {
      if (files) {
        const file = document.querySelector("input[type=file]").files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file); // Read file as dataURL
        reader.onloadend = function () {
          const fileData = [
            {
              Name: files[0].name,
              Content: reader.result,
              ContentType: files[0].type,
            },
          ];
          setFileName(files[0].name); // Set file name that the user has chosen (this will display in our label)
          setFileLabel("Remove file");
          setFileExists(true);
          setFileIcon("trash");
          input.onChange(fileData);
        };
      }
    },
    [input]
  );

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop,
    noDrag: true,
    ...dropZoneProps,
    accept: ".jpeg, .jpg, .png, .pdf",
  });

  const files = acceptedFiles.map((file) => (
    <span key={file.path}>
      {fileName} - {file.size} bytes
    </span>
  ));

  // HandleFocus (when user joins input)
  const handleFocus = () => {
    setIsFileInputFocused(true); // Set input to focus
  };

  // Handleblur (when user leaves input), set input to unfocus
  const handleBlur = () => setIsFileInputFocused(false);

  return (
    <div className={`wmnds-fe-group ${error ? "wmnds-fe-group--error" : ""}`}>
      {error ? <span className="wmnds-fe-error-message">Required</span> : ""}
      <div {...getRootProps()} className="wmnds-fe-file-upload">
        <input
          type="file"
          name="fileUploader"
          id="fileUploader"
          className={`wmnds-fe-file-upload__input ${
            fileExists ? "wmnds-fe-file-upload__input--file-selected " : "No"
          }`}
          onBlur={handleBlur}
          onFocus={handleFocus}
          {...getInputProps()}
        />
        <label
          {...props}
          className={`wmnds-btn wmnds-btn--primary wmnds-fe-file-upload__label ${
            isFileInputFocused ? s.fileUploadLabelFocused : ""
          }`}
        >
          {fileLabel}
          <svg className="wmnds-btn__icon wmnds-btn__icon--right">
            <use
              xlinkHref={`#wmnds-general-${fileIcon}`}
              href={`#wmnds-general-${fileIcon}`}
            ></use>
          </svg>
        </label>
        <span>{files}</span>
      </div>
    </div>
  );
}

FileField.propTypes = {
  name: PropTypes.string.isRequired,
  validation: PropTypes.func,
};

FileFieldInput.propTypes = {
  input: PropTypes.any,
  dropZoneProps: PropTypes.func,
};

export default FileField;
