import React from "react";

interface SubmitButtonProps {
    disabled: boolean;
    onClick: () => void;
}

const SubmitButton = ({ disabled, onClick }: SubmitButtonProps) => {
    return (
        <div className="submit-button-container">
            <button onClick={onClick} disabled={disabled}>
                Submit
            </button>
        </div>
    );
};

export default SubmitButton;