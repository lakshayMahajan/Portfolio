import React from 'react';

function PageHeader({ title, subtitle }) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center", 
      justifyContent: "center", 
      textAlign: "center", 
    }}>
      <a style={{ fontSize: "2rem", color: "rgb(170, 166, 195)" }}>{title}</a>
      <a style={{ 
        fontSize: "6.5rem", 
        fontWeight: "bold", 
        marginTop: ".15rem", 
        color: "white", 
        marginBottom: "1rem",
      }}>
        {subtitle}
      </a>
    </div>
  );
}

export default PageHeader;