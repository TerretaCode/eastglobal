import React from 'react';

const Image = ({ src, alt, className, loading = "lazy", ...props }) => {
    return (
        <img
            src={src}
            alt={alt}
            className={className}
            loading={loading}
            {...props}
        />
    );
};

export default Image;
