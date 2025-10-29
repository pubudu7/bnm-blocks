import { Button } from '@wordpress/components';
import { useState } from '@wordpress/element';
import './image-select-control.css'; // optional for extra styling

const ImageSelectControl = ({ label, options, value, onChange }) => {
    return (
        <div className="bnm-image-select-control">
            {label && <p className="bnm-image-select-label components-base-control__label">{label}</p>}
            <div className="bnm-image-select-grid">
                {options.map((option) => {
                    const isSelected = value === option.value;
                    return (
                        <div
                            key={option.value}
                            className={`bnm-image-select-item ${
                                isSelected ? 'is-selected' : ''
                            }`}
                        >
                            <Button
                                onClick={() => onChange(option.value)}
                                className="bnm-image-select-button"
                                isPressed={isSelected}
                            >
                                <img
                                    src={option.image}
                                    alt={option.label}
                                    className="bnm-image-select-img"
                                />
                            </Button>
                            <span className="bnm-image-select-title">
                                {option.label}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};


export default ImageSelectControl;


// // Example usage inside block edit:
// const [layout, setLayout] = useState('layout1');

// <ImageSelectControl
//     label="Choose Layout"
//     value={layout}
//     onChange={setLayout}
//     options={[
//         { value: 'layout1', label: 'Layout 1', image: '/images/layout1.png' },
//         { value: 'layout2', label: 'Layout 2', image: '/images/layout2.png' },
//         { value: 'layout3', label: 'Layout 3', image: '/images/layout3.png' },
//     ]}
// />
