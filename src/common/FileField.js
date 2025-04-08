import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";

import { Field, useFormState } from "react-final-form";
import { useDropzone } from "react-dropzone";

// Import styles
import * as s from "./FileUpload.module.scss";

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
  const [isFileInputFocused, setIsFileInputFocused] = useState(false);
  // const [fileNames, setFileNames] = useState([]);
  const [fileLabel, setFileLabel] = useState("Choose files");
  const [fileExists, setFileExists] = useState(false);
  const [fileIcon, setFileIcon] = useState("paperclip");
  const [errorMessage, setErrorMessage] = useState("");

  const error =
    stateApi.submitFailed && stateApi.hasValidationErrors ? true : false;

  const onDrop = useCallback(
    (files) => {
      if (files.length > 3) {
        setErrorMessage("You can only upload up to 3 files.");
        return;
      }
      setErrorMessage(""); // Clear any previous error message

      //console.log("Files dropped:", files); // Log the files array

      const fileData = files.map((file) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        return new Promise((resolve) => {
          reader.onloadend = () => {
            console.log("File read:", {
              Name: file.name,
              Content: reader.result,
              ContentType: file.type,
            }); // Log the file data
            resolve({
              Name: file.name,
              Content: reader.result,
              ContentType: file.type,
            });
          };
        });
      });

      Promise.all(fileData).then((fileDataArray) => {
        // setFileNames(files.map((file) => file.name));
        setFileLabel("Remove files");
        setFileExists(true);
        setFileIcon("trash");
        input.onChange(fileDataArray);
      });
    },
    [input]
  );

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop,
    noDrag: true,
    ...dropZoneProps,
    accept: ".jpeg, .jpg, .png, .pdf",
    multiple: true,
  });

  // const files = acceptedFiles.map((file) => (
  //   <span key={file.path}>
  //     {file.name} - {file.size} bytes
  //   </span>
  // ));

  const files = acceptedFiles.map((file, index) => (
    <span key={file.path}>
      {file.name} - {file.size} bytes
      {index < acceptedFiles.length - 1 && ", "}
    </span>
  ));

  const handleFocus = () => {
    setIsFileInputFocused(true);
  };

  const handleBlur = () => setIsFileInputFocused(false);

  return (
    <div className={`wmnds-fe-group ${error ? "wmnds-fe-group--error" : ""}`}>
      {error ? <span className="wmnds-fe-error-message">Required</span> : ""}
      {errorMessage && (
        <span className="wmnds-fe-error-message">{errorMessage}</span>
      )}
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
