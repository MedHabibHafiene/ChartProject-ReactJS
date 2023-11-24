import React, { useEffect } from 'react';


export function Error() {
  useEffect(() => {
    document.title = 'Error 404 Page';
    return () => {
      document.title = 'Default Page Title';
    };
  }, []);
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        <h1 style={styles.message}>404</h1>
        
      </h1>
      <p style={styles.suggestion}>
        It seems like you're lost. Let's get you back on track!
      </p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  heading: {
    fontSize: "2em",
    color: "#ff4040",
    marginBottom: "20px",
  },
  message: {
    fontSize: "1.2em",
    color: "#666",
    marginBottom: "20px",
  },
  suggestion: {
    fontSize: "1em",
    color: "#333",
  },
};
