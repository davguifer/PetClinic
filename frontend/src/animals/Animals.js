import React, { useState } from 'react';

export default function Animals() {
    const styles = {
        appContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            backgroundColor: '#b3e5fc' // Fondo celeste
        },
        container: {
            width: '500px',
            padding: '30px',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: 'white',
            borderRadius: '10px',
            textAlign: 'left',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
        },
        heading: {
            margin: '15px 0',
            fontSize: '24px'
        },
        button: {
            marginTop: '25px',
            padding: '12px 20px',
            backgroundColor: '#0288d1',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            outline: 'none',
            fontSize: '16px'
        },
        image: {
            width: '400px',
            height: '400px',
            borderRadius: '10px',
            marginBottom: '15px'
        },
        attributeText: {
            margin: '5px 0'
        }
    };

    const [razas] = useState([
        {
            raza: 'Labrador',
            imagen: '../../labrador.jpg',
            color: 'Yellow, Chocolate, Black',
            aniosVida: '10-12 years',
            peso: '25-36 kg',
            caracter: 'Friendly, outgoing, and high-spirited'
        },
        {
            raza: 'German Shepherd',
            imagen: '../../Germanshepherd.jpeg',
            color: 'Black, Tan, Sable',
            aniosVida: '9-13 years',
            peso: '30-40 kg',
            caracter: 'Intelligent, loyal, and protective'
        },
        {
            raza: 'Poodle',
            imagen: '../../poodle.jpeg',
            color: 'White, Black, Apricot',
            aniosVida: '12-15 years',
            peso: '20-32 kg',
            caracter: 'Intelligent, active, and alert'
        },
        {
            raza: 'Bulldog',
            imagen: '../../bulldog.jpg',
            color: 'Brindle, White, Fawn',
            aniosVida: '8-10 years',
            peso: '18-23 kg',
            caracter: 'Docile, willful, and friendly'
        },
        {
            raza: 'Beagle',
            imagen: '../../beagle.jpg',
            color: 'Tri-color, Red and White, Lemon and White',
            aniosVida: '12-15 years',
            peso: '9-11 kg',
            caracter: 'Curious, friendly, and energetic'
        },
        {
            raza: 'Chihuahua',
            imagen: '../../chihuahua.jpg',
            color: 'Fawn, Cream, Black',
            aniosVida: '12-20 years',
            peso: '1.5-3 kg',
            caracter: 'Lively, alert, and confident'
        }
    ]);

    const [indiceActual, setIndiceActual] = useState(0);

    const siguienteRaza = () => {
        setIndiceActual((indiceActual + 1) % razas.length);
    };

    const razaActual = razas[indiceActual];

    return (
        <div style={styles.appContainer}>
            <div style={styles.container}>
                <h2 style={styles.heading}>{razaActual.raza}</h2>
                <img src={razaActual.imagen} alt={razaActual.raza} style={styles.image} />
                <p style={styles.attributeText}>Color: {razaActual.color}</p>
                <p style={styles.attributeText}>Lifespan: {razaActual.aniosVida}</p>
                <p style={styles.attributeText}>Weight: {razaActual.peso}</p>
                <p style={styles.attributeText}>Temperament: {razaActual.caracter}</p>
            </div>
            <button style={styles.button} onClick={siguienteRaza}>
                Next breed
            </button>
        </div>
    );
}



