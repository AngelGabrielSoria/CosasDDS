/* eslint-disable import/no-anonymous-default-export */
const URL = 'http://localhost:3001/ingresos';

async function getIngresos() {
    try {
        const res = await fetch(URL);
        if (!res.ok) {
            throw new Error('Error al obtener los ingresos');
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error al obtener los ingresos:', error);
        throw error;
    }
}

async function saveIngreso(ingreso) {
    try {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(ingreso)
        };
        const res = await fetch(URL, requestOptions);
        if (!res.ok) {
            throw new Error('Error al guardar el ingreso');
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error al guardar el ingreso:', error);
        throw error;
    }
}

export default { getIngresos, saveIngreso };