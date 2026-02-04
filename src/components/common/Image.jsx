import React from 'react';

const Image = ({ src, alt, className, loading = "lazy", width, height, ...props }) => {
    return (
        <img
            src={src}
            alt={alt}
            className={className}
            loading={loading}
            width={width}
            height={height}
            style={{
                aspectRatio: width && height ? `${width} / ${height}` : 'auto',
                ...props.style
            }}
            {...props}
        />
    );
};

export default Image;
