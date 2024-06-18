/* eslint-disable import/no-anonymous-default-export */
const URL = 'http://localhost:3001/reservas';

async function getReservas() {
    try {
        const res = await fetch(URL);
        if (!res.ok) {
            throw new Error('Error al obtener las reservas');
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error al obtener las reservas:', error);
        throw error;
    }
}

async function saveReserva(reserva) {
    try {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reserva)
        };
        const res = await fetch(URL, requestOptions);
        if (!res.ok) {
            throw new Error('Error al guardar la reserva');
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error al guardar la reserva:', error);
        throw error;
    }
}

export default { getReservas, saveReserva };
